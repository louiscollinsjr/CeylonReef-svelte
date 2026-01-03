<script lang="ts">
	import { page } from '$app/stores';
	import { tours } from '$lib/data/tours';
	import Button from '$lib/components/Button.svelte';

	let formData = $state({
		name: '',
		email: '',
		phone: '',
		tour: $page.url.searchParams.get('tour') || '',
		message: '',
		consent: false
	});

	let formStatus = $state<'idle' | 'submitting' | 'success' | 'error'>('idle');

	async function handleSubmit(e: Event) {
		e.preventDefault();
		formStatus = 'submitting';
		
		await new Promise(resolve => setTimeout(resolve, 1000));
		formStatus = 'success';
	}
</script>

<svelte:head>
	<title>Contact Us | Ceylon Reef Tours</title>
	<meta name="description" content="Get in touch with Ceylon Reef Tours. Let us help plan your perfect Sri Lankan adventure." />
</svelte:head>

<section class="pt-32 pb-20 bg-gradient-to-br from-primary-600 to-primary-800">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
		<h1 class="text-4xl md:text-5xl font-bold text-white mb-4">
			Let's Plan Your Adventure
		</h1>
		<p class="text-primary-100 text-lg max-w-2xl mx-auto">
			Get in touch and we'll help craft your perfect Sri Lankan journey
		</p>
	</div>
</section>

<section class="py-16 bg-white">
	<div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
		<div class="grid grid-cols-1 lg:grid-cols-2 gap-12">
			<div>
				{#if formStatus === 'success'}
					<div class="bg-green-50 border border-green-200 rounded-2xl p-8 text-center">
						<div class="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
							<svg class="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
								<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13l4 4L19 7" />
							</svg>
						</div>
						<h3 class="text-xl font-semibold text-neutral-900 mb-2">Thank You!</h3>
						<p class="text-neutral-600">We've received your inquiry and will be in touch within 24 hours.</p>
					</div>
				{:else}
					<form onsubmit={handleSubmit} class="space-y-6">
						<div>
							<label for="name" class="block text-sm font-medium text-neutral-700 mb-2">
								Full Name <span class="text-red-500">*</span>
							</label>
							<input
								type="text"
								id="name"
								bind:value={formData.name}
								required
								class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="Your full name"
							/>
						</div>

						<div>
							<label for="email" class="block text-sm font-medium text-neutral-700 mb-2">
								Email Address <span class="text-red-500">*</span>
							</label>
							<input
								type="email"
								id="email"
								bind:value={formData.email}
								required
								class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="your@email.com"
							/>
						</div>

						<div>
							<label for="phone" class="block text-sm font-medium text-neutral-700 mb-2">
								Phone Number <span class="text-red-500">*</span>
							</label>
							<input
								type="tel"
								id="phone"
								bind:value={formData.phone}
								required
								class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
								placeholder="+1 234 567 8900"
							/>
						</div>

						<div>
							<label for="tour" class="block text-sm font-medium text-neutral-700 mb-2">
								Tour of Interest
							</label>
							<select
								id="tour"
								bind:value={formData.tour}
								class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors"
							>
								<option value="">Select a tour (optional)</option>
								{#each tours as tour}
									<option value={tour.slug}>{tour.title}</option>
								{/each}
							</select>
						</div>

						<div>
							<label for="message" class="block text-sm font-medium text-neutral-700 mb-2">
								Message
							</label>
							<textarea
								id="message"
								bind:value={formData.message}
								rows="4"
								class="w-full px-4 py-3 border border-neutral-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-none"
								placeholder="Tell us about your travel plans, preferences, or any questions..."
							></textarea>
						</div>

						<div class="flex items-start gap-3">
							<input
								type="checkbox"
								id="consent"
								bind:checked={formData.consent}
								required
								class="mt-1 w-4 h-4 text-primary-600 border-neutral-300 rounded focus:ring-primary-500"
							/>
							<label for="consent" class="text-sm text-neutral-600">
								I agree to be contacted regarding my inquiry <span class="text-red-500">*</span>
							</label>
						</div>

						<Button 
							variant="primary" 
							size="lg" 
							fullWidth 
							disabled={formStatus === 'submitting'}
						>
							{formStatus === 'submitting' ? 'Sending...' : 'Send Inquiry'}
						</Button>
					</form>
				{/if}
			</div>

			<div class="space-y-8">
				<div class="bg-neutral-50 rounded-2xl p-8">
					<h3 class="text-xl font-semibold text-neutral-900 mb-6">Other Ways to Reach Us</h3>
					
					<div class="space-y-6">
						<a 
							href="https://wa.me/94777300852?text=Hello, I'm interested in your tours."
							target="_blank"
							rel="noopener noreferrer"
							class="flex items-center gap-4 p-4 bg-green-50 rounded-xl hover:bg-green-100 transition-colors"
						>
							<div class="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
									<path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
								</svg>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Chat on WhatsApp</p>
								<p class="text-sm text-neutral-600">Quick response, usually within minutes</p>
							</div>
						</a>

						<div class="flex items-center gap-4 p-4">
							<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
								</svg>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Call Us</p>
								<a href="tel:+94777300852" class="text-primary-600 hover:underline">+94 777 300 852</a>
							</div>
						</div>

						<div class="flex items-center gap-4 p-4">
							<div class="w-12 h-12 bg-primary-100 rounded-full flex items-center justify-center">
								<svg class="w-6 h-6 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
									<path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
								</svg>
							</div>
							<div>
								<p class="font-semibold text-neutral-900">Email Us</p>
								<a href="mailto:hello@ceylonreeftours.com" class="text-primary-600 hover:underline">hello@ceylonreeftours.com</a>
							</div>
						</div>
					</div>
				</div>

				<div class="bg-neutral-50 rounded-2xl p-8">
					<h3 class="text-xl font-semibold text-neutral-900 mb-4">Office Hours</h3>
					<div class="space-y-2 text-neutral-600">
						<div class="flex justify-between">
							<span>Monday - Friday</span>
							<span class="font-medium text-neutral-900">9:00 AM - 5:00 PM</span>
						</div>
						<div class="flex justify-between">
							<span>Saturday</span>
							<span class="font-medium text-neutral-900">9:00 AM - 1:00 PM</span>
						</div>
						<div class="flex justify-between">
							<span>Sunday</span>
							<span class="font-medium text-neutral-900">Closed</span>
						</div>
					</div>
					<p class="text-sm text-neutral-500 mt-4">
						All times are in Sri Lanka Standard Time (GMT+5:30)
					</p>
				</div>
			</div>
		</div>
	</div>
</section>
