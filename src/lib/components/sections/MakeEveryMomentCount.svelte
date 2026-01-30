<script lang="ts">
  import { tours } from '$lib/data/tours';

  export let limit = 3;
  export let randomize = true;

  function shuffleArray<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  $: featuredTours = (randomize ? shuffleArray(tours) : [...tours]).slice(0, limit);
</script>

<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4 text-center space-y-6">
    <div class="space-y-10">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-4xl mx-auto">
        Experience Sri Lanka,
         <span class="block leading-[0.9] -mt-2">thoughtfully.</span>
      </h2>
      <p class="text-[1.4rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Curated journeys with trusted locals—customize your route, add days, or weave in extra locations to fit how you travel.
      </p>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8 pt-12">
      {#each featuredTours as tour}
        <article class="relative flex flex-col bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100">
          <div class="relative aspect-[4/5] w-full overflow-hidden">
            <div class="absolute top-3 left-3 bg-white/55 text-[0.7rem] font-semibold text-gray-900 px-3 py-1 rounded-full shadow-sm flex items-center gap-2 backdrop-blur">
              <span>📍</span>
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
</section>
