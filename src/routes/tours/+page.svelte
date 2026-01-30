<script lang="ts">
	import { tours, categoryLabels } from '$lib/data/tours';
	import TourCard from '$lib/components/TourCard.svelte';

	let selectedCategory = $state('all');

	const categories = ['all', 'cultural', 'wildlife', 'honeymoon', 'adventure'];
	const categoryIcons: Record<string, string> = {
		all: '/filter_icons/All_Tours.svg',
		cultural: '/filter_icons/cutural.svg',
		wildlife: '/filter_icons/wildlife.svg',
		honeymoon: '/filter_icons/honeymoon.svg',
		adventure: '/filter_icons/adventure.svg'
	};

	const filteredTours = $derived(
		selectedCategory === 'all'
			? tours
			: tours.filter(tour => tour.category === selectedCategory || tour.categories?.includes(selectedCategory as any))
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
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="flex gap-3 overflow-x-auto px-1 sm:px-0 sm:grid sm:grid-cols-3 md:grid-cols-5 sm:gap-4 mb-12 justify-items-center max-w-2xl mx-auto border-b pb-6">
			{#each categories as category}
				<button
					class={`group w-full max-w-[140px] flex flex-col items-center gap-2 rounded-2xl border-none transition-all duration-200 p-3 ${
						selectedCategory === category
							? 'border-gray-800'
							: 'bg-white'
					}`}
					onclick={() => selectedCategory = category}
				>
					<div class={`w-16 h-16 rounded-2xl flex items-center justify-center overflow-hidden transition-transform duration-150 ${
						selectedCategory === category ? 'ring-2 ring-orange-500 scale-[1.02]' : 'group-hover:scale-105'
					}`}>
						<img src={categoryIcons[category]} alt={category} class="w-12 h-12 object-contain" />
					</div>
					<span class={`text-xs font-normal ${
						selectedCategory === category ? 'text-orange-500' : 'text-gray-600 group-hover:text-gray-800'
					}`}>
						{category === 'all' ? 'All Tours' : categoryLabels[category]}
					</span>
				</button>
			{/each}
		</div>

		<div class="grid grid-cols-2 md:grid-cols-3 gap-4">
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
