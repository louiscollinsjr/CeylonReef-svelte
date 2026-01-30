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
  <div class="max-w-6xl mx-auto px-0 sm:px-8 md:px-4 text-center space-y-6">
    <div class="space-y-6">
      <h2 class="text-4xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight tracking-tight max-w-[80%] sm:max-w-3xl mx-auto">
        One-of-a-kind experiences you’ll always remember.
      </h2>
      <!-- <p class="text-[1.2rem] sm:text-[1.3rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Six handpicked moments drawn from our multi-day tours—refresh for a new mix each time.
      </p> -->
    </div>

    <div class="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-12 pt-10 px-4 sm:px-6 md:px-0 md:pt-12 md:pl-12">
      {#each displayed as item}
        <article class="flex flex-col md:flex-row gap-4 md:gap-6 items-start md:items-center text-left">
          <div class="w-full md:w-24 h-36 sm:h-40 md:h-24 sm:w-32 overflow-hidden rounded-xl bg-gray-100 shadow-xl">
            <img src={item.image} alt={item.title} class="h-full w-full object-cover" loading="lazy" />
          </div>
          <div class="space-y-0 max-w-xs">
            <h3 class="text-sm font-semibold text-gray-900 leading-snug">{item.title}</h3>
            <p class="text-[11px] sm:text-xs text-gray-600 leading-snug">{item.description}</p>
            <a href={item.link} class="inline-flex items-center gap-1.5 text-xs sm:font-semibold text-gray-800 hover:text-black transition-colors">
              Customize tour
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="#000000" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.13,104.13,0,0,0,128,24Zm40,112H136v32a8,8,0,0,1-16,0V136H88a8,8,0,0,1,0-16h32V88a8,8,0,0,1,16,0v32h32a8,8,0,0,1,0,16Z"></path></svg>
              
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
