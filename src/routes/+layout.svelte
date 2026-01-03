<script lang="ts">
	import '../app.css';
	import Navigation from '$lib/components/Navigation.svelte';
	import Footer from '$lib/components/Footer.svelte';
	import WhatsAppButton from '$lib/components/WhatsAppButton.svelte';

	let { children } = $props();
</script>

<svelte:head>
	<title>Ceylon Reef Tours | Discover the Real Sri Lanka</title>
	<meta name="description" content="Handcrafted journeys through Sri Lanka's most breathtaking destinations. Experience ancient temples, pristine beaches, and incredible wildlife with local guides." />
	<link rel="preconnect" href="https://fonts.googleapis.com" />
	<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="" />
	<link href="https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;500;600;700&family=Archivo:wght@400;500;600;700&display=swap" rel="stylesheet" />
</svelte:head>

<Navigation />
<main>
	{@render children()}
</main>
<Footer />
<WhatsAppButton />
