<script lang="ts">
  import { Card, CardContent, CardHeader, CardTitle, CardDescription } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Input } from '$lib/components/ui/input';
  import { Label } from '$lib/components/ui/label';
  import { Textarea } from '$lib/components/ui/textarea';
  import { Badge } from '$lib/components/ui/badge';
  import { Select, SelectContent, SelectItem, SelectTrigger } from '$lib/components/ui/select';
  import { addTour, type TourCategory, type TourStatus, type TourDay } from '$lib/data/tours';
  import { categoryLabels } from '$lib/data/tours';
  import { goto } from '$app/navigation';

  type TourForm = {
    title: string;
    shortTitle: string;
    category: TourCategory;
    description: string;
    shortDescription: string;
    price: number;
    currency: string;
    duration: { nights: number; days: number };
    bestFor: string[];
    difficulty: 'easy' | 'moderate' | 'challenging';
    highlights: string[];
    inclusions: string[];
    exclusions: string[];
    heroImage: string;
    galleryImages: string[];
    status: TourStatus;
    tags: string[];
    itinerary: TourDay[];
  };

  let formData = $state<TourForm>({
    title: '',
    shortTitle: '',
    category: 'cultural',
    description: '',
    shortDescription: '',
    price: 0,
    currency: 'USD',
    duration: { nights: 0, days: 0 },
    bestFor: [],
    difficulty: 'easy',
    highlights: [],
    inclusions: [],
    exclusions: [],
    heroImage: '',
    galleryImages: [],
    status: 'draft',
    tags: [],
    itinerary: []
  });

  // bits-ui Select single mode uses string value
  let categoryValue = $state<string>(formData.category);
  let statusValue = $state<string>(formData.status);
  let difficultyValue = $state<string>(formData.difficulty);
  let currencyValue = $state<string>(formData.currency);

  $effect(() => {
    formData.category = categoryValue as TourCategory;
    formData.status = statusValue as TourStatus;
    formData.difficulty = (difficultyValue as TourForm['difficulty']) ?? 'easy';
    formData.currency = currencyValue ?? 'USD';
  });

  let newHighlight = $state('');
  let newBestFor = $state('');
  let newTag = $state('');
  let newInclusion = $state('');
  let newExclusion = $state('');

  function addHighlight() {
    if (newHighlight.trim()) {
      formData.highlights = [...(formData.highlights || []), newHighlight.trim()];
      newHighlight = '';
    }
  }

  function removeHighlight(index: number) {
    formData.highlights = formData.highlights?.filter((_, i) => i !== index) || [];
  }

  function addBestFor() {
    if (newBestFor.trim()) {
      formData.bestFor = [...(formData.bestFor || []), newBestFor.trim()];
      newBestFor = '';
    }
  }

  function removeBestFor(index: number) {
    formData.bestFor = formData.bestFor?.filter((_, i) => i !== index) || [];
  }

  function addTag() {
    if (newTag.trim()) {
      formData.tags = [...(formData.tags || []), newTag.trim()];
      newTag = '';
    }
  }

  function removeTag(index: number) {
    formData.tags = formData.tags?.filter((_, i) => i !== index) || [];
  }

  function addInclusion() {
    if (newInclusion.trim()) {
      formData.inclusions = [...(formData.inclusions || []), newInclusion.trim()];
      newInclusion = '';
    }
  }

  function removeInclusion(index: number) {
    formData.inclusions = formData.inclusions?.filter((_, i) => i !== index) || [];
  }

  function addExclusion() {
    if (newExclusion.trim()) {
      formData.exclusions = [...(formData.exclusions || []), newExclusion.trim()];
      newExclusion = '';
    }
  }

  function removeExclusion(index: number) {
    formData.exclusions = formData.exclusions?.filter((_, i) => i !== index) || [];
  }

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

  function generateSlug(title: string) {
    return title
      .toLowerCase()
      .replace(/[^a-z0-9 -]/g, '')
      .replace(/\s+/g, '-')
      .replace(/-+/g, '-')
      .trim();
  }

  function handleSubmit() {
    const tourData = {
      ...formData,
      slug: generateSlug(formData.title || 'new-tour'),
      categories: formData.category ? [formData.category] : []
    };

    const newTour = addTour(tourData);
    if (newTour) {
      goto(`/admin/tours/${newTour.slug}`);
    }
  }

  function handleCancel() {
    goto('/admin/tours');
  }
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-xl font-semibold text-foreground">Create Tour</h1>
      <p class="text-sm text-muted-foreground">Add a new tour to your catalog.</p>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" onclick={handleCancel}>Cancel</Button>
      <Button onclick={handleSubmit}>Create Tour</Button>
    </div>
  </div>

  <div class="grid gap-6 md:grid-cols-2">
    <!-- Basic Information -->
    <Card>
      <CardHeader>
        <CardTitle>Basic Information</CardTitle>
        <CardDescription>Core tour details</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label for="title">Title</Label>
          <Input
            id="title"
            bind:value={formData.title}
            placeholder="e.g., Ancient Wonders Escape | 7 Days / 6 Nights"
          />
        </div>
        
        <div class="space-y-2">
          <Label for="shortTitle">Short Title</Label>
          <Input
            id="shortTitle"
            bind:value={formData.shortTitle}
            placeholder="e.g., Ancient Wonders Escape"
          />
        </div>

        <div class="space-y-2">
          <Label for="category">Category</Label>
          <Select type="single" bind:value={categoryValue}>
            <SelectTrigger class="w-full justify-between">
              <span class="text-sm">
                {categoryLabels[formData.category] ?? 'Select category'}
              </span>
            </SelectTrigger>
            <SelectContent>
              {#each Object.entries(categoryLabels) as [value, label]}
                <SelectItem value={value}>{label}</SelectItem>
              {/each}
            </SelectContent>
          </Select>
        </div>

        <div class="space-y-2">
          <Label for="status">Status</Label>
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
          <Label for="difficulty">Difficulty</Label>
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
      </CardContent>
    </Card>

    <!-- Pricing & Duration -->
    <Card>
      <CardHeader>
        <CardTitle>Pricing & Duration</CardTitle>
        <CardDescription>Tour pricing and length</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="price">Price</Label>
            <Input
              id="price"
              type="number"
              bind:value={formData.price}
              placeholder="0"
            />
          </div>
          <div class="space-y-2">
            <Label for="currency">Currency</Label>
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
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="space-y-2">
            <Label for="days">Days</Label>
            <Input
              id="days"
              type="number"
              bind:value={formData.duration.days}
              placeholder="0"
            />
          </div>
          <div class="space-y-2">
            <Label for="nights">Nights</Label>
            <Input
              id="nights"
              type="number"
              bind:value={formData.duration.nights}
              placeholder="0"
            />
          </div>
        </div>
      </CardContent>
    </Card>

    <!-- Descriptions -->
    <Card class="md:col-span-2">
      <CardHeader>
        <CardTitle>Descriptions</CardTitle>
        <CardDescription>Tour descriptions for display</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="space-y-2">
          <Label for="shortDescription">Short Description</Label>
          <Input
            id="shortDescription"
            bind:value={formData.shortDescription}
            placeholder="Brief description for listings"
          />
        </div>

        <div class="space-y-2">
          <Label for="description">Full Description</Label>
          <Textarea
            id="description"
            bind:value={formData.description}
            placeholder="Detailed tour description"
            rows={4}
          />
        </div>
      </CardContent>
    </Card>

    <!-- Lists -->
    <Card>
      <CardHeader>
        <CardTitle>Highlights</CardTitle>
        <CardDescription>Key tour highlights</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input
            bind:value={newHighlight}
            placeholder="Add highlight"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addHighlight();
              }
            }}
          />
          <Button onclick={addHighlight}>Add</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each formData.highlights || [] as highlight, index}
            <Badge variant="secondary" class="cursor-pointer" onclick={() => removeHighlight(index)}>
              {highlight} ×
            </Badge>
          {/each}
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Best For</CardTitle>
        <CardDescription>Who this tour is perfect for</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input
            bind:value={newBestFor}
            placeholder="Add target audience"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addBestFor();
              }
            }}
          />
          <Button onclick={addBestFor}>Add</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each formData.bestFor || [] as item, index}
            <Badge variant="secondary" class="cursor-pointer" onclick={() => removeBestFor(index)}>
              {item} ×
            </Badge>
          {/each}
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Tags</CardTitle>
        <CardDescription>Tour tags for search and filtering</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input
            bind:value={newTag}
            placeholder="Add tag"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addTag();
              }
            }}
          />
          <Button onclick={addTag}>Add</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each formData.tags || [] as tag, index}
            <Badge variant="secondary" class="cursor-pointer" onclick={() => removeTag(index)}>
              {tag} ×
            </Badge>
          {/each}
        </div>
      </CardContent>
    </Card>

    <!-- Itinerary -->
    <Card class="md:col-span-2">
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

    <!-- Inclusions & Exclusions -->
    <Card>
      <CardHeader>
        <CardTitle>Inclusions</CardTitle>
        <CardDescription>What's included in the tour</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input
            bind:value={newInclusion}
            placeholder="Add inclusion"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addInclusion();
              }
            }}
          />
          <Button onclick={addInclusion}>Add</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each formData.inclusions || [] as inclusion, index}
            <Badge variant="secondary" class="cursor-pointer" onclick={() => removeInclusion(index)}>
              {inclusion} ×
            </Badge>
          {/each}
        </div>
      </CardContent>
    </Card>

    <Card>
      <CardHeader>
        <CardTitle>Exclusions</CardTitle>
        <CardDescription>What's not included in the tour</CardDescription>
      </CardHeader>
      <CardContent class="space-y-4">
        <div class="flex gap-2">
          <Input
            bind:value={newExclusion}
            placeholder="Add exclusion"
            onkeydown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                addExclusion();
              }
            }}
          />
          <Button onclick={addExclusion}>Add</Button>
        </div>
        <div class="flex flex-wrap gap-2">
          {#each formData.exclusions || [] as exclusion, index}
            <Badge variant="secondary" class="cursor-pointer" onclick={() => removeExclusion(index)}>
              {exclusion} ×
            </Badge>
          {/each}
        </div>
      </CardContent>
    </Card>
  </div>
</div>
