<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
  import { Badge } from '$lib/components/ui/badge';
  import { categoryLabels, type Tour, type TourCategory, type TourStatus, updateTour } from '$lib/data/tours';
  import { showToast } from '$lib/stores/toast';
  import { goto } from '$app/navigation';

  let { data } = $props<{ data: { tour: Tour } }>();
  const tour = $derived(data.tour);
  const tourId = $derived(data.tour.id);
  const tourSlug = $derived(data.tour.slug);

  type TourForm = Omit<Tour, 'id'>;

  // All $state initialized with static defaults — no reactive refs
  let formData = $state<TourForm>({
    slug: '',
    title: '',
    shortTitle: '',
    category: 'cultural',
    categories: [],
    description: '',
    shortDescription: '',
    price: 0,
    currency: 'USD',
    duration: { days: 0, nights: 0 },
    bestFor: [],
    difficulty: 'easy',
    highlights: [],
    inclusions: [],
    exclusions: [],
    heroImage: '',
    galleryImages: [],
    status: 'draft',
    tags: [],
    itinerary: [],
    images: [],
    reviews: []
  });

  let categoryValue = $state<string>('');
  let statusValue = $state<string>('');
  let difficultyValue = $state<string>('');
  let currencyValue = $state<string>('');
  let seeded = $state(false);

  // Seed form + select state from server data
  $effect(() => {
    const t = tour;
    formData = { ...t };
    categoryValue = t.category;
    statusValue = t.status;
    difficultyValue = t.difficulty;
    currencyValue = t.currency;
    seeded = true;
  });

  // Sync select changes back into formData (only after initial seed)
  $effect(() => {
    if (!seeded) return;
    formData.category = categoryValue as TourCategory;
    formData.status = statusValue as TourStatus;
    formData.difficulty = difficultyValue as Tour['difficulty'];
    formData.currency = currencyValue;
  });

  let saving = $state(false);

  function addDay() {
    const nextDay = formData.itinerary.length + 1;
    formData.itinerary = [...formData.itinerary, {
      day: nextDay,
      title: '',
      timeframe: '',
      description: '',
      location: '',
      images: []
    }];
  }

  function removeDay(index: number) {
    formData.itinerary = formData.itinerary
      .filter((_, i) => i !== index)
      .map((d, i) => ({ ...d, day: i + 1 }));
  }

  function moveDayUp(index: number) {
    if (index === 0) return;
    const arr = [...formData.itinerary];
    [arr[index - 1], arr[index]] = [arr[index], arr[index - 1]];
    formData.itinerary = arr.map((d, i) => ({ ...d, day: i + 1 }));
  }

  function moveDayDown(index: number) {
    if (index >= formData.itinerary.length - 1) return;
    const arr = [...formData.itinerary];
    [arr[index], arr[index + 1]] = [arr[index + 1], arr[index]];
    formData.itinerary = arr.map((d, i) => ({ ...d, day: i + 1 }));
  }

  let newDayImageUrls = $state<Record<number, string>>({});

  function addDayImage(index: number) {
    const url = (newDayImageUrls[index] ?? '').trim();
    if (!url) return;
    const day = formData.itinerary[index];
    day.images = [...(day.images ?? []), url];
    formData.itinerary = [...formData.itinerary];
    newDayImageUrls[index] = '';
  }

  function removeDayImage(dayIndex: number, imgIndex: number) {
    const day = formData.itinerary[dayIndex];
    day.images = (day.images ?? []).filter((_, i) => i !== imgIndex);
    formData.itinerary = [...formData.itinerary];
  }

  function handleSave() {
    saving = true;
    updateTour(tourId, { ...formData, updatedAt: new Date().toISOString().slice(0, 10) });
    saving = false;
    showToast('Tour updated', 'success');
    goto(`/admin/tours/${tourSlug}`);
  }

  function handleCancel() {
    goto(`/admin/tours/${tourSlug}`);
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-muted-foreground">Edit Tour</p>
      <h1 class="text-xl font-semibold text-foreground">{tour.title}</h1>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" onclick={handleCancel}>Cancel</Button>
      <Button onclick={handleSave} disabled={saving}>{saving ? 'Saving…' : 'Save changes'}</Button>
    </div>
  </div>

  <Card>
    <CardHeader>
      <CardTitle>Basics</CardTitle>
      <CardDescription>Core tour details</CardDescription>
    </CardHeader>
    <CardContent class="grid gap-4 md:grid-cols-2">
      <div class="space-y-2">
        <Label for="title">Title</Label>
        <Input id="title" bind:value={formData.title} />
      </div>
      <div class="space-y-2">
        <Label for="shortTitle">Short title</Label>
        <Input id="shortTitle" bind:value={formData.shortTitle} />
      </div>
      <div class="space-y-2">
        <Label>Category</Label>
        <Select type="single" bind:value={categoryValue}>
          <SelectTrigger class="w-full justify-between">
            <span class="text-sm">{categoryLabels[formData.category]}</span>
          </SelectTrigger>
          <SelectContent>
            {#each Object.entries(categoryLabels) as [value, label]}
              <SelectItem value={value}>{label}</SelectItem>
            {/each}
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label>Status</Label>
        <Select type="single" bind:value={statusValue}>
          <SelectTrigger class="w-full justify-between">
            <span class="text-sm capitalize">{formData.status}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="draft">Draft</SelectItem>
            <SelectItem value="published">Published</SelectItem>
            <SelectItem value="archived">Archived</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label>Difficulty</Label>
        <Select type="single" bind:value={difficultyValue}>
          <SelectTrigger class="w-full justify-between">
            <span class="text-sm capitalize">{formData.difficulty}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="easy">Easy</SelectItem>
            <SelectItem value="moderate">Moderate</SelectItem>
            <SelectItem value="challenging">Challenging</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label>Price</Label>
        <Input type="number" bind:value={formData.price} />
      </div>
      <div class="space-y-2">
        <Label>Currency</Label>
        <Select type="single" bind:value={currencyValue}>
          <SelectTrigger class="w-full justify-between">
            <span class="text-sm uppercase">{formData.currency}</span>
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="USD">USD</SelectItem>
            <SelectItem value="EUR">EUR</SelectItem>
            <SelectItem value="GBP">GBP</SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div class="space-y-2">
        <Label>Duration (days)</Label>
        <Input type="number" bind:value={formData.duration.days} />
      </div>
      <div class="space-y-2">
        <Label>Duration (nights)</Label>
        <Input type="number" bind:value={formData.duration.nights} />
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Descriptions</CardTitle>
      <CardDescription>Update listings copy</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      <div class="space-y-2">
        <Label>Short description</Label>
        <Input bind:value={formData.shortDescription} />
      </div>
      <div class="space-y-2">
        <Label>Full description</Label>
        <Textarea bind:value={formData.description} rows={4} />
      </div>
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Highlights</CardTitle>
      <CardDescription>Quick tags</CardDescription>
    </CardHeader>
    <CardContent class="flex flex-wrap gap-2">
      {#if formData.highlights.length === 0}
        <p class="text-sm text-muted-foreground">No highlights listed.</p>
      {:else}
        {#each formData.highlights as highlight}
          <Badge variant="secondary">{highlight}</Badge>
        {/each}
      {/if}
    </CardContent>
  </Card>

  <Card>
    <CardHeader>
      <CardTitle>Itinerary</CardTitle>
      <CardDescription>Day-by-day plan with location, details, and images</CardDescription>
    </CardHeader>
    <CardContent class="space-y-4">
      {#if formData.itinerary.length === 0}
        <p class="text-sm text-muted-foreground">No days added yet.</p>
      {:else}
        {#each formData.itinerary as day, index}
          <div class="rounded-lg border p-4 space-y-3">
            <div class="flex items-center justify-between">
              <h4 class="text-sm font-semibold text-foreground">Day {day.day}</h4>
              <div class="flex gap-1">
                <Button variant="ghost" size="sm" onclick={() => moveDayUp(index)} disabled={index === 0}>↑</Button>
                <Button variant="ghost" size="sm" onclick={() => moveDayDown(index)} disabled={index === formData.itinerary.length - 1}>↓</Button>
                <Button variant="ghost" size="sm" class="text-destructive" onclick={() => removeDay(index)}>×</Button>
              </div>
            </div>
            <div class="grid gap-3 md:grid-cols-2">
              <div class="space-y-1">
                <Label>Title</Label>
                <Input bind:value={day.title} placeholder="e.g., Arrival | BIA to Negombo" />
              </div>
              <div class="space-y-1">
                <Label>Location</Label>
                <Input bind:value={day.location} placeholder="e.g., Negombo" />
              </div>
            </div>
            <div class="space-y-1">
              <Label>Timeframe</Label>
              <Input bind:value={day.timeframe} placeholder="e.g., Morning – Evening" />
            </div>
            <div class="space-y-1">
              <Label>Description</Label>
              <Textarea bind:value={day.description} rows={2} placeholder="What happens on this day..." />
            </div>
            <div class="space-y-2">
              <Label>Images</Label>
              <div class="flex gap-2">
                <Input
                  bind:value={newDayImageUrls[index]}
                  placeholder="Image URL"
                  onkeydown={(e) => { if (e.key === 'Enter') { e.preventDefault(); addDayImage(index); } }}
                />
                <Button variant="outline" onclick={() => addDayImage(index)}>Add</Button>
              </div>
              {#if (day.images ?? []).length > 0}
                <div class="flex flex-wrap gap-2 mt-1">
                  {#each day.images ?? [] as img, imgIdx}
                    <div class="relative group">
                      <img src={img} alt="Day {day.day}" class="h-16 w-24 rounded object-cover border" />
                      <button
                        type="button"
                        class="absolute -top-1 -right-1 bg-destructive text-destructive-foreground rounded-full w-5 h-5 text-xs flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity"
                        onclick={() => removeDayImage(index, imgIdx)}
                      >×</button>
                    </div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
        {/each}
      {/if}
      <Button variant="outline" onclick={addDay} class="w-full">+ Add Day</Button>
    </CardContent>
  </Card>

</div>
