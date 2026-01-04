<script lang="ts">
	import { categoryLabels, categoryColors } from '$lib/data/tours';
	import { getTestimonialsByTour } from '$lib/data/testimonials';
	import Button from '$lib/components/Button.svelte';
	import TestimonialCard from '$lib/components/TestimonialCard.svelte';

	let { data } = $props();
	
	const tour = $derived(data.tour);
	const testimonials = $derived(getTestimonialsByTour(data.tour.id));

</script>

<svelte:head>
	<title>{tour.title} | Ceylon Reef Tours</title>
	<meta name="description" content={tour.shortDescription} />
</svelte:head>

<section class="py-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid lg:grid-cols-[1.1fr_0.9fr] gap-10 items-start">
			<div class="grid grid-cols-2 gap-1 rounded-sm overflow-hidden">
				{#each (tour.galleryImages?.length ? tour.galleryImages.slice(0, 4) : Array(4).fill(tour.heroImage || '/preview%20images/AdobeStock_428450204_Preview.jpeg')) as image, idx}
					<div class="overflow-hidden rounded-lg aspect-[4/3] bg-gray-100">
						<img src={image} alt={`Gallery image ${idx + 1} for ${tour.title}`} class="h-full w-full object-cover" loading="lazy" />
					</div>
				{/each}
			</div>

			<div class="space-y-6 text-center">
				
				<!-- <div class="inline-flex px-3 py-1 rounded-full text-sm font-medium text-gray-700 bg-gray-100">
					{categoryLabels[tour.category]}
				</div> -->

				<div class="text-sm text-gray-500 flex items-center gap-2 justify-center">
					<a href="/tours" class="hover:text-gray-800 transition-colors">Tours</a>
					<span>/</span>
					<span class="text-gray-800">{tour.shortTitle}</span>
				</div>

				<div class="space-y-7 text-center max-w-md mx-auto">
					<h1 class="text-4xl md:text-4xl font-semibold text-gray-900 leading-tight">
						{tour.shortTitle}
					</h1>
					<p class="text-gray-600 text-[15px] leading-relaxed max-w-md">
						{tour.shortDescription}
					</p>
				</div>

				<div class="flex flex-wrap gap-6 text-gray-800 justify-center">
					<div class="flex items-center gap-2 text-sm">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>{tour.duration.nights} Nights / {tour.duration.days} Days</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
						</svg>
						<span class="capitalize">{tour.difficulty}</span>
					</div>
					<div class="flex items-center gap-2 text-sm">
						<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
							<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
						</svg>
						<span>From ${tour.price.toLocaleString()}</span>
					</div>
				</div>

				<div class="flex flex-col sm:flex-row gap-3 justify-center">
					<Button href="/contact?tour={tour.slug}" variant="primary" size="md" className="!rounded-full">
						Inquire Now
					</Button>
					<a 
						href="https://wa.me/94777300852?text=Hi, I'm interested in the {encodeURIComponent(tour.title)} tour."
						target="_blank"
						rel="noopener noreferrer"
						class="inline-flex items-center justify-center px-6 py-3 rounded-full border border-gray-300 text-gray-900 text-sm font-semibold hover:bg-gray-50 transition-colors"
					>
						Chat on WhatsApp
					</a>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-3 gap-12">
			<div class="lg:col-span-2">
				<h2 class="text-2xl font-bold text-neutral-900 mb-4">Overview</h2>
				<p class="text-neutral-600 leading-relaxed mb-8">
					{tour.description}
				</p>

				<h3 class="text-xl font-semibold text-neutral-900 mb-4">Best For</h3>
				<div class="flex flex-wrap gap-2 mb-8">
					{#each tour.bestFor as tag}
						<span class="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
							{tag}
						</span>
					{/each}
				</div>

				<h3 class="text-xl font-semibold text-neutral-900 mb-4">Highlights</h3>
				<div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-10">
					{#each tour.highlights as highlight}
						<div class="flex items-start gap-3">
							<svg class="w-5 h-5 text-primary-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-neutral-700">{highlight}</span>
						</div>
					{/each}
				</div>

				<h3 class="text-xl font-semibold text-neutral-900 mb-6">Day-by-Day Itinerary</h3>
				<div class="space-y-6">
					{#each tour.itinerary as day}
						<div class="flex items-start gap-8 pb-6  last:border-0">
							<div class="w-24 h-24 rounded-2xl bg-neutral-100 flex items-center justify-center text-neutral-500 font-semibold text-sm flex-shrink-0">
								Day {day.day}
							</div>
							<div class="space-y-1 pt-1">
								<h4 class="font-normal text-black leading-snug text-sm">Day {day.day} – {day.title}</h4>
								<p class="text-neutral-600 leading-relaxed text-sm md:text-sm line-clamp-3 max-w-lg">
									{day.description} 
								</p>
								<!-- {#if day.timeframe}
									<p class="text-xs text-neutral-500">{day.timeframe}</p>
								{/if} -->
							</div>
						</div>
					{/each}
				</div>
			</div>

			<div class="lg:col-span-1">
				<div class="sticky top-28 bg-white rounded-2xl p-6 shadow-2xl">
					<div class="text-center mb-6">
						<span class="text-sm text-neutral-500">Starting from</span>
						<p class="text-4xl font-bold text-primary-600">${tour.price.toLocaleString()}</p>
						<span class="text-sm text-neutral-500">per person</span>
					</div>
					
					<Button href="/contact?tour={tour.slug}" variant="primary" fullWidth size="lg">
						Inquire Now
					</Button>
					
					<div class="mt-4">
						<a 
							href="https://wa.me/94777300852?text=Hi, I'm interested in the {encodeURIComponent(tour.title)} tour."
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center justify-center gap-2 w-full py-3 bg-green-500 hover:bg-green-600 text-white rounded-lg font-medium transition-colors"
						>
							<svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
								<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
							</svg>
							Chat on WhatsApp
						</a>
					</div>
					
					<p class="text-center text-sm text-neutral-500 mt-4">
						Free cancellation up to 7 days before
					</p>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-white ">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 border-t border-neutral-100 pt-12 ">
		<div class="grid grid-cols-1 md:grid-cols-2 gap-8 ">
			<div class="bg-gray-50 rounded-2xl p-8">
				<h3 class="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
					What's Included
				</h3>
				<ul class="space-y-3">
					{#each tour.inclusions as item}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-gray-400 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
							<span class="text-neutral-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>

			<div class="bg-red-0 rounded-2xl p-8">
				<h3 class="text-xl font-semibold text-neutral-900 mb-6 flex items-center gap-2">
					
					What's Not Included
				</h3>
				<ul class="space-y-3">
					{#each tour.exclusions as item}
						<li class="flex items-start gap-3">
							<svg class="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
							</svg>
							<span class="text-neutral-700">{item}</span>
						</li>
					{/each}
				</ul>
			</div>
		</div>
	</div>
</section>

<!-- {#if testimonials.length > 0}
	<section class="py-16 bg-neutral-50">
		<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
			<h2 class="text-2xl font-bold text-neutral-900 mb-8">What Travelers Say</h2>
			<div class="grid grid-cols-1 md:grid-cols-2 gap-8">
				{#each testimonials as testimonial}
					<TestimonialCard {testimonial} />
				{/each}
			</div>
		</div>
	</section>
{/if} -->

<section class="py-16 bg-gradient-to-br from-primary-600 to-primary-800">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-white mb-4">
			Ready to Experience {tour.shortTitle}?
		</h2>
		<p class="text-primary-100 text-lg mb-8">
			Let us help you plan your perfect Sri Lankan adventure
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/contact?tour={tour.slug}" variant="secondary" size="lg">
				Inquire Now
			</Button>
			<a href="/tours" class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg border-2 border-white text-white hover:bg-white hover:text-primary-600 transition-all duration-200">
				View Other Tours
			</a>
		</div>
	</div>
</section>
