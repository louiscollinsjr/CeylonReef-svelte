<script lang="ts">
  import { page } from '$app/stores';
  import { onMount } from 'svelte';

  let mobileMenuOpen = false;
  let isScrolled = false;

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/tours', label: 'Tours' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' }
  ];

  function toggleMobileMenu() {
    mobileMenuOpen = !mobileMenuOpen;
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
    document.body.style.overflow = '';
  }

  onMount(() => {
    const handleScroll = () => {
      isScrolled = window.scrollY > 10;
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  });
</script>

<header class="sticky top-0 left-0 right-0 z-50 transition-all duration-300 bg-white backdrop-blur">
  <nav class="max-w-7xl mx-auto px-4 md:px-10 py-1 md:py-4 {isScrolled ? 'border-b border-gray-100' : ''} transition-all duration-300">
    <div class="flex items-center justify-between h-16 md:h-16">
      <a href="/" class="flex items-center gap-2" on:click={closeMobileMenu}>
        <img
          src="/Ceylon-Reef-Tour-Logo%203.png"
          alt="Ceylon Reef Tours"
          class="h-16 sm:h-24 w-auto"
          loading="lazy"
        />
      </a>

      <div class="hidden md:flex items-center gap-8 ml-auto">
        {#each navLinks as link}
          <a 
            href={link.href} 
            class="text-gray-700 hover:text-gray-900 transition-colors font-normal text-xs {$page.url.pathname === link.href ? 'text-gray-900' : ''}"
          >
            {link.label}
          </a>
        {/each}
        <a
          href="/tours"
          class="px-3 py-2 rounded-full bg-black text-white text-xs font-semibold hover:bg-gray-800 transition-colors"
        >
          Browse tours
        </a>
      </div>
      <button 
        class="md:hidden p-2 text-gray-700 hover:text-gray-900"
        on:click={toggleMobileMenu}
        aria-label="Toggle menu"
      >
        {#if mobileMenuOpen}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        {:else}
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        {/if}
      </button>
    </div>

  </nav>
</header>

{#if mobileMenuOpen}
  <div class="md:hidden fixed inset-0 z-60 bg-[#f5f5f7] overflow-y-auto">
    <div class="flex flex-col min-h-screen px-6 pt-6 pb-10">
      <div class="flex items-center justify-between h-14">
        <a href="/" class="font-semibold text-lg text-gray-900" on:click={closeMobileMenu}>
          Ceylon Reef Tours
        </a>
        <button
          class="p-2 text-gray-700 hover:text-gray-900"
          on:click={closeMobileMenu}
          aria-label="Close menu"
        >
          <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>
      <div class="flex-1 flex flex-col gap-3 pt-12">
        {#each navLinks as link}
          <a
            href={link.href}
            class="text-3xl font-semibold text-gray-900 {$page.url.pathname === link.href ? 'text-gray-600' : 'hover:text-gray-600'} transition-colors py-2"
            on:click={closeMobileMenu}
          >
            {link.label}
          </a>
        {/each}
      </div>
      <div class="flex flex-col gap-4 pt-8">
        <a
          href="/tours"
          class="inline-flex w-full items-center justify-center px-6 py-3.5 rounded-full bg-black text-white text-sm font-semibold hover:bg-gray-800 transition-colors"
          on:click={closeMobileMenu}
        >
          Browse tours
        </a>
      </div>
    </div>
  </div>
{/if}
