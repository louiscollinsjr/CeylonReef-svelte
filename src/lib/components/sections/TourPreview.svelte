<script lang="ts">
  import { onMount } from 'svelte';
  import EmblaCarousel from 'embla-carousel';
  import type { EmblaCarouselType } from 'embla-carousel';
  import { tours } from '$lib/data/tours';
  import Button from '../Button.svelte';
  import TourCard from '../TourCard.svelte';

  let viewport: HTMLElement;
  let embla: EmblaCarouselType | null = null;

  const emblaOptions = {
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  } as const;

  onMount(() => {
    if (viewport) {
      embla = EmblaCarousel(viewport, emblaOptions);
    }
    return () => embla?.destroy();
  });
</script>

<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4">
    <div class="text-center space-y-3 mb-8 sm:mb-12">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight">
        Explore our tours
      </h2>
      <p class="text-gray-600 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto">
        Culture, coastlines, and wildlife—handpicked routes with trusted local guides.
      </p>
    </div>

    <!-- Mobile: Embla with flat cards -->
    <div class="relative -mx-4 sm:hidden">
      <div class="overflow-hidden" bind:this={viewport}>
        <div class="flex gap-2.5 px-3 pb-6">
          {#each tours as tour}
            <article class="relative flex flex-col bg-transparent rounded-2xl overflow-hidden basis-[52vw] shrink-0 snap-start">
              <div class="w-full aspect-square overflow-hidden rounded-2xl">
                <img
                  src={tour.heroImage || tour.images?.[0]?.url || '/preview%20images/AdobeStock_428450204_Preview.jpeg'}
                  alt={tour.title}
                  class="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
              <div class="pt-3 space-y-1 text-left">
                <h3 class="text-sm font-semibold text-gray-900 leading-snug line-clamp-2">{tour.shortTitle}</h3>
                <p class="text-[11px] text-gray-600 leading-snug line-clamp-2">{tour.shortDescription}</p>
                <div class="text-[11px] text-gray-500">{tour.duration.days} days / {tour.duration.nights} nights</div>
              </div>
            </article>
          {/each}
        </div>
      </div>
    </div>

    <!-- Tablet/Desktop: grid with TourCard -->
    <div class="hidden sm:grid grid-cols-3 gap-4">
      {#each tours as tour}
        <TourCard {tour} />
      {/each}
    </div>

    <div class="text-center mt-10 sm:mt-12">
      <Button href="/tours" variant="primary" size="lg" className="!rounded-full shadow-md">
        View all tours
      </Button>
    </div>
  </div>
</section>
