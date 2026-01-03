<script lang="ts">
	import { tours, categoryLabels } from '$lib/data/tours';
	import TourCard from '$lib/components/TourCard.svelte';

	let selectedCategory = $state('all');

	const categories = ['all', 'cultural', 'wildlife', 'honeymoon', 'adventure'];

	const filteredTours = $derived(
		selectedCategory === 'all' 
			? tours 
			: tours.filter(tour => tour.category === selectedCategory)
	);
</script>

<svelte:head>
	<title>Our Tours | Ceylon Reef Tours</title>
	<meta name="description" content="Explore our handcrafted Sri Lanka tours - from cultural circuits to wildlife adventures and romantic honeymoons." />
</svelte:head>

<section class="pt-32 pb-20 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-[3.3rem] font-bold text-gray-900 mb-4">
			Explore Our Tours
		</h1>
		<p class="text-gray-600 text-lg max-w-2xl mx-auto -mt-3">
			Discover Sri Lanka's wonders with our carefully crafted itineraries
		</p>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
		<div class="flex flex-wrap justify-center gap-3 mb-12 ">
			{#each categories as category}
				<button
					class="px-5 py-2 rounded-full font-medium transition-all duration-200 {selectedCategory === category 
						? 'bg-primary-600 text-white shadow-lg' 
						: 'bg-white text-neutral-600 hover:bg-neutral-100 shadow'}"
					onclick={() => selectedCategory = category}
				>
					{category === 'all' ? 'All Tours' : categoryLabels[category]}
				</button>
			{/each}
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			{#each filteredTours as tour (tour.id)}
				<TourCard {tour} />
			{/each}
		</div>

		{#if filteredTours.length === 0}
			<div class="text-center py-12">
				<p class="text-neutral-500 text-lg">No tours found in this category.</p>
			</div>
		{/if}
	</div>
</section>
