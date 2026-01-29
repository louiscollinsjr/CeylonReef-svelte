<script lang="ts">
  import type { Tour } from '$lib/data/tours';
  import { tours } from '$lib/data/tours';

  type Experience = {
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const fallbackImage = '/preview%20images/AdobeStock_428450204_Preview.jpeg';

  const experienceFromTour = (tour: Tour): Experience => ({
    title: tour.shortTitle,
    description: tour.highlights?.[0] ?? tour.shortDescription,
    image: tour.heroImage || tour.images?.[0]?.url || fallbackImage,
    link: `/tours/${tour.slug}`
  });

  const experiences: Experience[] = tours.map(experienceFromTour);

  export let limit = 6;
  export let randomize = true;

  function shuffleArray<T>(arr: T[]): T[] {
    const copy = [...arr];
    for (let i = copy.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [copy[i], copy[j]] = [copy[j], copy[i]];
    }
    return copy;
  }

  $: displayed = (randomize ? shuffleArray(experiences) : experiences).slice(0, limit);
</script>

<section class="py-0 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4 text-center space-y-12">
    <div class="space-y-6">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-3xl mx-auto">
        One-of-a-kind experiences 
         <span class="block leading-[0.9] -mt-2">you’ll always remember.</span>
      </h2>
      <!-- <p class="text-[1.2rem] sm:text-[1.3rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Six handpicked moments drawn from our multi-day tours—refresh for a new mix each time.
      </p> -->
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-20 pt-12 pl-12">
      {#each displayed as item}
        <article class="flex gap-8 items-center text-left">
          <div class="w-28 h-28 sm:w-32 sm:h-32 md:w-24 md:h-24 overflow-hidden rounded-xl flex-shrink-0 bg-gray-100 shadow-xl">
            <img src={item.image} alt={item.title} class="h-full w-full object-cover" loading="lazy" />
          </div>
          <div class="space-y-2 max-w-xs">
            <h3 class="text-sm font-semibold text-gray-900 leading-tight">{item.title}</h3>
            <p class="text-xs text-gray-600 leading-relaxed">{item.description}</p>
            <a href={item.link} class="inline-flex items-center gap-2 text-sm font-semibold text-gray-800 hover:text-black transition-colors">
              <!-- <span aria-hidden="true" class="bg-green-500 rounded-full pl-0.5 w-3.5 h-3.5 flex items-center justify-center text-white text-sm">+</span> -->
              Customize tour
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
