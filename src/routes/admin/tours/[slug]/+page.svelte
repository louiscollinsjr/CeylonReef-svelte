<script lang="ts">
  import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '$lib/components/ui/card';
  import { Button } from '$lib/components/ui/button';
  import { Badge } from '$lib/components/ui/badge';
  import { Tabs, TabsList, TabsTrigger, TabsContent } from '$lib/components/ui/tabs';
  import UploadDropzone from '$lib/components/admin/ui/UploadDropzone.svelte';
  import { getTourImages, getTourReviews } from '$lib/data/tours';
  import type { PageData } from './$types';

  let { data } = $props<{ data: PageData }>();
  let activeTab = $state('overview');

  const tour = $derived(data.tour);
  const images = $derived(getTourImages(tour.slug));
  const reviews = $derived(getTourReviews(tour.slug));
</script>

<div class="flex flex-col gap-6">
  <div class="flex items-center justify-between">
    <div>
      <p class="text-sm text-muted-foreground">Tour</p>
      <h1 class="text-xl font-semibold text-foreground">{tour.title}</h1>
    </div>
    <div class="flex gap-2">
      <Button variant="outline" size="sm">Duplicate</Button>
      <Button size="sm">Edit</Button>
    </div>
  </div>

  <Tabs bind:value={activeTab}>
    <TabsList class="grid w-full grid-cols-4">
      <TabsTrigger value="overview">Overview</TabsTrigger>
      <TabsTrigger value="itinerary">Itinerary</TabsTrigger>
      <TabsTrigger value="images">Images</TabsTrigger>
      <TabsTrigger value="reviews">Reviews</TabsTrigger>
    </TabsList>

    <TabsContent value="overview" class="mt-4 space-y-4">
      <div class="grid gap-4 md:grid-cols-3">
        <Card>
          <CardContent class="pt-4">
            <div class="text-sm text-muted-foreground">Category</div>
            <div class="mt-1 font-semibold text-foreground capitalize">{tour.category}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-4">
            <div class="text-sm text-muted-foreground">Price</div>
            <div class="mt-1 font-semibold text-foreground">{tour.currency} {tour.price}</div>
          </CardContent>
        </Card>
        <Card>
          <CardContent class="pt-4">
            <div class="text-sm text-muted-foreground">Status</div>
            <div class="mt-2">
              <Badge variant="outline" class="capitalize">{tour.status}</Badge>
            </div>
          </CardContent>
        </Card>
      </div>
      <Card>
        <CardHeader>
          <CardTitle>Description</CardTitle>
        </CardHeader>
        <CardContent>
          <p class="text-sm text-foreground">{tour.description}</p>
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="itinerary" class="mt-4">
      <Card>
        <CardContent class="divide-y">
          {#each tour.itinerary as day}
            <div class="py-4">
              <div class="flex items-center justify-between gap-4">
                <div class="font-semibold text-foreground">Day {day.day}: {day.title}</div>
                <div class="text-xs text-muted-foreground">{day.timeframe}</div>
              </div>
              <p class="mt-2 text-sm text-muted-foreground">{day.description}</p>
            </div>
          {/each}
        </CardContent>
      </Card>
    </TabsContent>

    <TabsContent value="images" class="mt-4">
      <div class="grid gap-4 md:grid-cols-3">
        <div class="md:col-span-2 grid gap-3 sm:grid-cols-2">
          {#each images as img}
            <Card>
              <CardContent class="p-3 space-y-2">
                <div class="h-32 w-full overflow-hidden rounded-lg bg-muted">
                  <img src={img.url} alt={img.alt ?? 'Tour image'} class="h-full w-full object-cover" />
                </div>
                <div class="text-sm font-medium text-foreground">{img.alt ?? 'Untitled image'}</div>
                <div class="flex flex-wrap gap-2">
                  {#each img.tags as tag}
                    <Badge variant="secondary">{tag}</Badge>
                  {/each}
                  {#if img.day}
                    <Badge variant="outline">Day {img.day}</Badge>
                  {/if}
                  {#if img.location}
                    <Badge variant="outline">{img.location}</Badge>
                  {/if}
                </div>
              </CardContent>
            </Card>
          {/each}
        </div>
        <UploadDropzone label="Upload images" />
      </div>
    </TabsContent>

    <TabsContent value="reviews" class="mt-4">
      <Card>
        <CardHeader class="flex flex-row items-center justify-between">
          <div>
            <CardTitle>Reviews</CardTitle>
            <CardDescription>Linked testimonials for this tour.</CardDescription>
          </div>
          <Button size="sm">Add review</Button>
        </CardHeader>
        <CardContent>
          {#if reviews.length === 0}
            <p class="text-sm text-muted-foreground">No reviews yet.</p>
          {:else}
            <div class="divide-y">
              {#each reviews as review}
                <div class="py-3">
                  <div class="flex items-center justify-between">
                    <div class="font-semibold text-foreground">{review.name}</div>
                    {#if review.rating}
                      <div class="text-xs text-muted-foreground">{review.rating} / 5</div>
                    {/if}
                  </div>
                  {#if review.role}<div class="text-xs text-muted-foreground">{review.role}</div>{/if}
                  <p class="mt-2 text-sm text-foreground">“{review.quote}”</p>
                </div>
              {/each}
            </div>
          {/if}
        </CardContent>
      </Card>
    </TabsContent>
  </Tabs>
</div>
