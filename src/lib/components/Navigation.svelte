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
  }

  function closeMobileMenu() {
    mobileMenuOpen = false;
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
  <nav class="max-w-7xl mx-auto px-6 md:px-10 py-4 {isScrolled ? 'border-b border-gray-100' : ''} transition-all duration-300">
    <div class="flex items-center justify-between h-14 md:h-16">
      <a href="/" class="flex items-center gap-2" on:click={closeMobileMenu}>
        <!-- <div class="w-10 h-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700 flex items-center justify-center">
          <span class="text-white font-bold text-lg">CR</span>
        </div> -->
        <span class="font-semibold text-lg text-gray-900 hidden sm:block">Ceylon Reef Tours</span>
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

    {#if mobileMenuOpen}
      <div class="md:hidden py-4 bg-white/95 backdrop-blur-sm border-t border-gray-100">
        <div class="flex flex-col gap-4">
          {#each navLinks as link}
            <a 
              href={link.href} 
              class="text-gray-800 hover:text-primary-600 transition-colors font-semibold py-2 {$page.url.pathname === link.href ? 'text-primary-600' : ''}"
              on:click={closeMobileMenu}
            >
              {link.label}
            </a>
          {/each}
        </div>
      </div>
    {/if}
  </nav>
</header>
