<script lang="ts">
  import { testimonials } from '$lib/data/testimonials';
  import TestimonialCard from '../TestimonialCard.svelte';
</script>

<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-4xl font-bold text-neutral-900 mb-4">
        What Travelers Say
      </h2>
      <p class="text-neutral-600 text-lg max-w-2xl mx-auto">
        Hear from adventurers who discovered Sri Lanka with us
      </p>
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each testimonials.slice(0, 3) as testimonial}
        <TestimonialCard {testimonial} />
      {/each}
    </div>
  </div>
</section>
