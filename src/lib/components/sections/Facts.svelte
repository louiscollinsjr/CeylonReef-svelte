<script lang="ts">
  import { sriLankaFacts } from '$lib/data/facts';
  import { onMount } from 'svelte';

  let currentIndex = 0;
  let interval: ReturnType<typeof setInterval>;

  onMount(() => {
    interval = setInterval(() => {
      currentIndex = (currentIndex + 1) % sriLankaFacts.length;
    }, 4000);

    return () => clearInterval(interval);
  });
</script>

<section class="py-20 bg-primary-600">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
        Why Sri Lanka?
      </h2>
      <p class="text-primary-100 text-lg max-w-2xl mx-auto">
        The Pearl of the Indian Ocean awaits with wonders at every turn
      </p>
    </div>

    <div class="hidden md:grid grid-cols-2 lg:grid-cols-4 gap-6">
      {#each sriLankaFacts.slice(0, 4) as fact}
        <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-6 text-center hover:bg-white/20 transition-colors">
          <div class="text-4xl mb-4">{fact.icon}</div>
          <p class="text-white font-medium">{fact.fact}</p>
        </div>
      {/each}
    </div>

    <div class="md:hidden">
      <div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center min-h-[160px] flex flex-col items-center justify-center">
        <div class="text-5xl mb-4">{sriLankaFacts[currentIndex].icon}</div>
        <p class="text-white font-medium text-lg">{sriLankaFacts[currentIndex].fact}</p>
      </div>
      <div class="flex justify-center gap-2 mt-6">
        {#each sriLankaFacts as _, i}
          <button
            class="w-2 h-2 rounded-full transition-colors {i === currentIndex ? 'bg-white' : 'bg-white/30'}"
            on:click={() => currentIndex = i}
            aria-label="Go to fact {i + 1}"
          ></button>
        {/each}
      </div>
    </div>
  </div>
</section>
