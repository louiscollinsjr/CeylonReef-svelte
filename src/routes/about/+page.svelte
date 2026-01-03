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

<section class="pt-32 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
			About Ceylon Reef Tours
		</h1>
		<p class="text-primary-100 text-lg max-w-2xl mx-auto">
			Your trusted partner for authentic Sri Lankan adventures
		</p>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
			<div>
				<h2 class="text-3xl font-bold text-neutral-900 mb-6">Our Story</h2>
				<div class="space-y-4 text-neutral-600 leading-relaxed">
					<p>
						Ceylon Reef Tours was born from a simple belief: that the best way to experience Sri Lanka 
						is through the eyes of those who call it home. Founded by a family with deep roots in 
						Sri Lankan hospitality, we've spent over 15 years sharing our island's wonders with 
						travelers from around the world.
					</p>
					<p>
						What started as a small family operation has grown into a trusted tour company, but our 
						values remain unchanged. We believe in small groups, personalized attention, and creating 
						moments that transform a vacation into a life-changing experience.
					</p>
					<p>
						Every guide in our team is a local expert, passionate about sharing the hidden gems, 
						local cuisines, and untold stories that make Sri Lanka truly special. We don't just 
						show you the sights—we help you feel the soul of our island.
					</p>
				</div>
			</div>
			
			<div class="relative">
				<div class="aspect-[4/3] rounded-2xl bg-gradient-to-br from-primary-400 to-primary-600 flex items-center justify-center">
					<span class="text-white/30 text-8xl">📷</span>
				</div>
				<div class="absolute -bottom-6 -left-6 bg-accent-400 text-white p-6 rounded-2xl shadow-xl">
					<p class="text-3xl font-bold">15+</p>
					<p class="text-sm">Years of Excellence</p>
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
