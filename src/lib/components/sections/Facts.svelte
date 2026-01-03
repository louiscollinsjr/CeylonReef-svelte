<script lang="ts">
  import { onMount } from 'svelte';

  const facts = [
    { title: 'A biodiversity hotspot', fact: 'Thousands of endemic species across rainforests, reefs, and highlands.' },
    { title: 'Whales and elephants', fact: 'One of the few places where blue whales and wild elephants share the same coastline.' },
    { title: '8 UNESCO World Heritage Sites', fact: 'Ancient cities, sacred temples, and living history.' },
    { title: 'The Pearl of the Indian Ocean', fact: 'A name earned through centuries of beauty and trade.' },
    { title: 'Wild elephant stronghold', fact: 'Among Asia’s largest remaining wild elephant populations.' },
    { title: '2,500+ years of history', fact: 'Civilizations, faiths, and stories layered across the island.' }
  ];

  let displayedFacts = facts.slice(0, 2);
  let interval: ReturnType<typeof setInterval>;

  function pickTwoFacts() {
    const shuffled = [...facts].sort(() => Math.random() - 0.5);
    return shuffled.slice(0, 2);
  }

  onMount(() => {
    displayedFacts = pickTwoFacts();
    interval = setInterval(() => {
      displayedFacts = pickTwoFacts();
    }, 32000);

    return () => clearInterval(interval);
  });
</script>

<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4 space-y-12 bg-gray-00 py-24 rounded-3xl">
    <div class="text-center space-y-4 max-w-3xl mx-auto">
      <h2 class="text-3xl sm:text-4xl md:text-[5rem] font-semibold text-gray-900 leading-tight">
        Be our guest.
          <span class="block leading-[0.9] sm:text-3xl md:text-[3.3rem] -mt-4">The island of wonders.</span>
      </h2>
       <p class="text-[1.4rem] text-gray-500 max-w-2xl mx-auto leading-relaxed">
        Ceylon Reef Tours is the easiest way to experience Sri Lanka beyond the guidebook.
      </p>

      <div class="flex justify-center pt-4">
        <img
          src="/images/Generated%20Image%20January%2003,%202026%20-%207_00PM2.png"
          alt="Travel portraits"
          class="object-cover"
          loading="lazy"
        />
      </div>
    </div>

    <div class="space-y-8 max-w-xl mx-auto">
      {#each displayedFacts as fact, idx}
        <div class="text-center space-y-1">
          <p class="text-gray-900 font-bold leading-snug text-2xl sm:text-4xl">{fact.title}</p>
          <p class="text-gray-600 text-sm sm:text-base leading-relaxed max-w-md mx-auto">{fact.fact}</p>
        </div>
        {#if idx === 0}
          <div class="border-t border-gray-200"></div>
        {/if}
      {/each}
    </div>
  </div>
</section>
