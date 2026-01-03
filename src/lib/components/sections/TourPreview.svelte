<script lang="ts">
  import { tours } from '$lib/data/tours';
  import TourCard from '../TourCard.svelte';
  import Button from '../Button.svelte';
</script>

<section class="py-20 bg-neutral-50">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        Explore Our Tours
      </h2>
      <p class="text-neutral-600 text-lg max-w-2xl mx-auto">
        From cultural heritage to wildlife adventures, find the perfect journey for you
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
      {#each tours as tour}
        <TourCard {tour} />
      {/each}
    </div>

    <div class="text-center">
      <Button href="/tours" variant="primary" size="lg">
        View All Tours
      </Button>
    </div>
  </div>
</section>
