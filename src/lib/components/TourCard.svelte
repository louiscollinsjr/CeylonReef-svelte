<script lang="ts">
  import type { Tour } from '$lib/data/tours';
  import { categoryLabels, categoryColors } from '$lib/data/tours';
  import Button from './Button.svelte';

  export let tour: Tour;
</script>

<article class="card group">
  <div class="relative overflow-hidden aspect-[4/3]">
    <div class="absolute inset-0 bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
      <span class="text-white/30 text-6xl">📷</span>
    </div>
    <div class="absolute top-4 left-4">
      <span class="px-3 py-1 rounded-full text-sm font-medium {categoryColors[tour.category]}">
        {categoryLabels[tour.category]}
      </span>
    </div>
    <div class="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300"></div>
  </div>
  
  <div class="p-6">
    <div class="flex items-center gap-2 text-sm text-neutral-500 mb-2">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{tour.duration.nights} Nights / {tour.duration.days} Days</span>
    </div>
    
    <h3 class="text-xl font-semibold text-neutral-900 mb-2 group-hover:text-primary-600 transition-colors">
      {tour.shortTitle}
    </h3>
    
    <p class="text-neutral-600 text-sm mb-4 line-clamp-2">
      {tour.shortDescription}
    </p>
    
    <div class="flex items-center justify-between">
      <div>
        <span class="text-sm text-neutral-500">From</span>
        <p class="text-xl font-bold text-primary-600">${tour.price.toLocaleString()}</p>
      </div>
      <Button href="/tours/{tour.slug}" variant="outline" size="sm">
        Learn More
      </Button>
    </div>
  </div>
</article>
