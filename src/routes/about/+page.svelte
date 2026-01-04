<script lang="ts">
	import Button from '$lib/components/Button.svelte';

	const values = [
		{
			icon: '🌿',
			title: 'Sustainable Tourism',
			description: 'We prioritize eco-friendly practices and support local communities in every tour we operate.'
		},
		{
			icon: '🤝',
			title: 'Authentic Experiences',
			description: 'Go beyond tourist spots to discover the real Sri Lanka through local eyes and genuine connections.'
		},
		{
			icon: '⭐',
			title: 'Excellence in Service',
			description: 'From your first inquiry to your final farewell, we ensure every detail exceeds expectations.'
		},
		{
			icon: '❤️',
			title: 'Passion for Sri Lanka',
			description: 'Our love for this island shines through in every itinerary we craft and story we share.'
		}
	];

	const stats = [
		{ value: '500+', label: 'Happy Travelers' },
		{ value: '15+', label: 'Years Experience' },
		{ value: '50+', label: 'Destinations' },
		{ value: '4.9', label: 'Average Rating' }
	];
</script>

<svelte:head>
	<title>About Us | Ceylon Reef Tours</title>
	<meta name="description" content="Learn about Ceylon Reef Tours - your trusted partner for authentic Sri Lankan travel experiences since 2008." />
</svelte:head>

<section class="relative overflow-hidden bg-white pt-28 pb-16">
	<div class="absolute inset-0 pointer-events-none">
		<div class="h-32 w-32 bg-primary-200/30 rounded-full blur-3xl absolute -left-12 top-10"></div>
		<div class="h-52 w-52 bg-neutral-200/45 rounded-full blur-3xl absolute left-1/2 top-[60%] -translate-x-1/2 -translate-y-1/2"></div>
	</div>
	<div class="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-4 text-center">
		<h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-[0.95] tracking-tight mb-4">
			About Ceylon Reef Tours
		</h1>
		<p class="text-gray-600 text-lg max-w-2xl mx-auto leading-relaxed">
			Handcrafted journeys across Sri Lanka with hosts who know every hidden corner.
		</p>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-[1.05fr_0.95fr] gap-12 items-center">
			<div class="space-y-6">
				<h2 class="text-3xl font-semibold text-gray-900 leading-tight">Adventures That Touch the Soul</h2>
				<div class="space-y-4 text-gray-600 leading-relaxed text-[15px]">
					<p>
						Embark on a journey with Ceylon Reef Tours, where every experience is shaped with care, intention, and heart. We don't simply take you around Sri Lanka—we invite you to feel it, to connect with it, and to fall in love with it as deeply as we have.
					</p>
					<p>
						This island is more than a destination to us. It has shaped who we are. In its ancient temples, prayers still echo through time. In its wild landscapes, nature moves freely and unapologetically. In the misty tea highlands, stories linger in every breeze. And in its people, you'll find a warmth and generosity that stays with you long after your journey ends.
					</p>
					<p>
						We believe the most meaningful travel happens when you're guided by people who truly belong to the place they're showing you. Our guides don't recite rehearsed facts—they share lived experiences. They slow down where moments matter. They take you beyond the obvious, into hidden corners known only to those who have walked these paths for a lifetime.
					</p>
					<p class="italic text-gray-700">
						Sri Lanka has a quiet way of touching the soul—if you let it. Let us show you how.
					</p>
				</div>
			</div>
			
			<div class="relative">
				<div class="aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden shadow-2xl bg-gray-100">
					<img
						src="/preview%20images/AdobeStock_428450204_Preview.jpeg"
						alt="Sri Lanka moments"
						class="h-full w-full object-cover"
						loading="lazy"
					/>
				</div>
				<div class="absolute -right-4 -bottom-6 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
					<div>
						<p class="text-sm font-semibold text-gray-900">Hosts from here</p>
						<p class="text-xs text-gray-500">Locals guiding every step</p>
					</div>
				</div>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-neutral-50">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-2 md:grid-cols-4 gap-8">
			{#each stats as stat}
				<div class="text-center">
					<p class="text-4xl md:text-5xl font-bold text-primary-600 mb-2">{stat.value}</p>
					<p class="text-neutral-600">{stat.label}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-neutral-900 mb-4">Our Values</h2>
			<p class="text-neutral-600 text-lg max-w-2xl mx-auto">
				The principles that guide everything we do
			</p>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
			{#each values as value}
				<div class="text-center p-6 rounded-2xl hover:bg-neutral-50 transition-colors">
					<div class="text-4xl mb-4">{value.icon}</div>
					<h3 class="text-lg font-semibold text-neutral-900 mb-2">{value.title}</h3>
					<p class="text-neutral-600 text-sm">{value.description}</p>
				</div>
			{/each}
		</div>
	</div>
</section>

<section class="py-16 bg-primary-600">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="text-center mb-12">
			<h2 class="text-3xl font-bold text-white mb-4">Why Choose Us?</h2>
		</div>

		<div class="grid grid-cols-1 md:grid-cols-3 gap-8">
			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
				<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-white mb-2">Local Expertise</h3>
				<p class="text-primary-100">Our guides are born and raised in Sri Lanka, offering insights no guidebook can provide.</p>
			</div>

			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
				<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-white mb-2">Best Value</h3>
				<p class="text-primary-100">Premium experiences at fair prices, with no hidden costs or surprise fees.</p>
			</div>

			<div class="bg-white/10 backdrop-blur-sm rounded-2xl p-8 text-center">
				<div class="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
					<svg class="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
						<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
					</svg>
				</div>
				<h3 class="text-xl font-semibold text-white mb-2">Safe & Reliable</h3>
				<p class="text-primary-100">Licensed, insured, and committed to your safety and comfort throughout your journey.</p>
			</div>
		</div>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h2 class="text-3xl font-bold text-neutral-900 mb-4">
			Ready to Explore Sri Lanka?
		</h2>
		<p class="text-neutral-600 text-lg mb-8">
			Let us help you create memories that will last a lifetime
		</p>
		<div class="flex flex-col sm:flex-row gap-4 justify-center">
			<Button href="/tours" variant="primary" size="lg">
				Browse Tours
			</Button>
			<Button href="/contact" variant="outline" size="lg">
				Get in Touch
			</Button>
		</div>
	</div>
</section>
