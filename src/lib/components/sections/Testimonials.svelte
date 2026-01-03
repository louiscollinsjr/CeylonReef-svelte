<script lang="ts">
  import { testimonials } from '$lib/data/testimonials';
  import TestimonialCard from '../TestimonialCard.svelte';
</script>

<section class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="text-center mb-12">
      <h2 class="text-3xl md:text-[3.3rem] font-bold text-neutral-900 mb-4">
        What Travelers Say
          <span class="block leading-[0.9] sm:text-3xl md:text-[1.3rem] -mt-3"> Hear from adventurers who discovered Sri Lanka with us</span>
      </h2>
     
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {#each testimonials.slice(0, 3) as testimonial}
        <TestimonialCard {testimonial} />
      {/each}
    </div>
  </div>
</section>
