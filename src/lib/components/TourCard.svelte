<script lang="ts">
  import type { Tour } from '$lib/data/tours';
  import { categoryLabels, categoryColors } from '$lib/data/tours';
  import Button from './Button.svelte';

  export let tour: Tour;
</script>

<article class="group flex flex-col bg-white rounded-2xl overflow-hidden">
  <div class="relative overflow-hidden aspect-[4/3]">
    <img
      src={tour.heroImage || '/preview%20images/AdobeStock_428450204_Preview.jpeg'}
      alt={tour.shortTitle}
      class="h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.02] rounded-2xl"
      loading="lazy"
    />
    <div class="absolute top-3 left-3">
      <span class="px-3 py-1 rounded-full text-xs font-normal bg-white/85 text-gray-900 shadow-sm backdrop-blur">
        {categoryLabels[tour.category]}
      </span>
    </div>
  </div>
  
  <div class="p-3 pt-5 space-y-2">
    <div class="flex items-center gap-2 text-xs text-gray-500">
      <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
      <span>{tour.duration.nights} nights / {tour.duration.days} days</span>
    </div>
    
    <h3 class="text-lg font-semibold text-gray-900 leading-tight">{tour.shortTitle}</h3>
    
    <p class="text-sm text-gray-600 leading-relaxed line-clamp-2">
      {tour.shortDescription}
    </p>
    
    <div class="flex items-center justify-between pt-1">
      <div>
        <span class="text-xs text-gray-500">From</span>
        <p class="text-lg font-bold text-gray-900">${tour.price.toLocaleString()}</p>
      </div>
      <Button href={`/tours/${tour.slug}`} variant="ghost" size="sm">
        View tour
      </Button>
    </div>
  </div>
</article>
