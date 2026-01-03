<script lang="ts">
  import { tours } from '$lib/data/tours';
  import TourCard from '../TourCard.svelte';
  import Button from '../Button.svelte';
</script>

<section class="py-20 bg-white">
  <div class="max-w-6xl mx-auto px-4 sm:px-8 md:px-4">
    <div class="text-center space-y-3 mb-12">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight">
        Explore our tours
      </h2>
      <p class="text-gray-600 text-xl leading-relaxed max-w-2xl mx-auto">
        Culture, coastlines, and wildlife—handpicked routes with trusted local guides.
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-3 gap-12">
      {#each tours as tour}
        <TourCard {tour} />
      {/each}
    </div>

    <div class="text-center mt-12">
      <Button href="/tours" variant="primary" size="lg" className="!rounded-full shadow-md">
        View all tours
      </Button>
    </div>
  </div>
</section>
