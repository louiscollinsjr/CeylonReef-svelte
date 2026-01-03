<script lang="ts">
  type Experience = {
    title: string;
    description: string;
    image: string;
    link: string;
  };

  const experiences: Experience[] = [
    {
      title: 'Sunrise at Sigiriya',
      description: 'Climb the ancient rock fortress before dawn and watch the jungle wake beneath you.',
      image: '/preview%20images/AdobeStock_322535378_Preview.jpeg',
      link: '/tours/9-day-cultural-circuit'
    },
    {
      title: 'Tea Trails by Train',
      description: 'Ride the hill-country rails to Ella with endless emerald tea gardens all around.',
      image: '/preview%20images/AdobeStock_218725059_Preview.jpeg',
      link: '/tours/11-day-round-tour'
    },
    {
      title: 'Whales off Mirissa',
      description: 'Set out at first light to spot blue whales and playful dolphins in the deep blue.',
      image: '/preview%20images/AdobeStock_252635546_Preview.jpeg',
      link: '/tours/9-day-wildlife-tour'
    },
    {
      title: 'Leopards of Yala',
      description: 'Safari through Yala’s wild heart for elusive leopards, elephants, and birdlife.',
      image: '/preview%20images/AdobeStock_186145375_Preview.jpeg',
      link: '/tours/9-day-wildlife-tour'
    },
    {
      title: 'Galle Fort at Golden Hour',
      description: 'Stroll the ramparts at sunset, with lighthouse views and Dutch-era charm.',
      image: '/preview%20images/AdobeStock_202776698_Preview.jpeg',
      link: '/tours/11-day-round-tour'
    },
    {
      title: 'Waterfall Picnic in Ella',
      description: 'Hike to hidden falls for a cool dip and a slow lunch among misty peaks.',
      image: '/preview%20images/AdobeStock_191117435_Preview.jpeg',
      link: '/tours/11-day-round-tour'
    },
    {
      title: 'Lagoon Cruise at Bentota',
      description: 'Drift through mangroves as kingfishers dart and the river meets the sea.',
      image: '/preview%20images/AdobeStock_1409646510_Preview.jpeg',
      link: '/tours/5-day-honeymoon'
    },
    {
      title: 'Temple Drums in Kandy',
      description: 'Feel the pulse of Kandyan culture at the Temple of the Tooth evening ritual.',
      image: '/preview%20images/AdobeStock_101331081_Preview.jpeg',
      link: '/tours/9-day-cultural-circuit'
    }
  ];

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
         <span class="block leading-[0.9] -mt-1">you’ll always remember.</span>
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
              Learn more
              <span aria-hidden="true">→</span>
            </a>
          </div>
        </article>
      {/each}
    </div>
  </div>
</section>
