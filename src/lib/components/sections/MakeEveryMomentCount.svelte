<script lang="ts">
  import { onMount } from 'svelte';
  import EmblaCarousel from 'embla-carousel';
  import { tours } from '$lib/data/tours';

  export let limit = 3;
  export let randomize = true;

  let viewport: HTMLElement;
  let embla: EmblaCarousel | null = null;

  const emblaOptions = {
    align: 'start',
    containScroll: 'trimSnaps',
    dragFree: true
  } as const;

  function shuffleArray<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  $: featuredTours = (randomize ? shuffleArray(tours) : [...tours]).slice(0, limit);

  onMount(() => {
    embla = EmblaCarousel(viewport, emblaOptions);
    return () => embla?.destroy();
  });
</script>

<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4 text-center space-y-6">
    <div class="space-y-10">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
        Experience Sri Lanka,
         <span class="block leading-[0.9] -mt-2">thoughtfully.</span>
      </h2>
      <p class="text-[1.2rem] sm:text-[1.4rem] text-gray-500 max-w-72 sm:max-w-2xl mx-auto sm:leading-relaxed">
        Curated journeys with trusted locals—customize your route, add days, or weave in extra locations to fit how you travel.
      </p>
    </div>
    <div class="pt-12">
      <div class="relative -mx-4 sm:mx-0">
        <div class="overflow-hidden" bind:this={viewport}>
          <div class="flex gap-4 px-4 pb-4 sm:grid sm:grid-cols-2 md:grid-cols-3 sm:gap-6 md:gap-8 sm:px-0 sm:pb-0">
            {#each featuredTours as tour}
              <article class="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 basis-[80vw] sm:basis-1/2 md:basis-1/3 shrink-0 snap-start">
                <div class="relative aspect-4/5 max-h-[380px] w-full overflow-hidden">
                  <div class="absolute top-3 left-3 bg-white/55 text-[0.7rem] font-semibold text-gray-900 px-3 py-1 rounded-full shadow-sm flex items-center gap-2 backdrop-blur">
                    <!-- <span>📍</span> -->
                    <span class="leading-none">{tour.shortTitle}</span>
                  </div>
                  <img
                    src={tour.heroImage || '/preview%20images/AdobeStock_428450204_Preview.jpeg'}
                    alt={tour.title}
                    class="h-full w-full object-cover"
                    loading="lazy"
                  />
                </div>
                <div class="p-4">
                  <p class="text-xs text-gray-600 leading-snug line-clamp-2">
                    {tour.shortDescription}
                  </p>
                </div>
              </article>
            {/each}
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
