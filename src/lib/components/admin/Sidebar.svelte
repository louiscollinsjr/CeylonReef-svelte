<script lang="ts">
  import { Button } from '$lib/components/ui/button';
  import { Separator } from '$lib/components/ui/separator';
  import { page } from '$app/stores';

  const navLinks = [
    { href: '/admin', label: 'Overview' },
    { href: '/admin/tours', label: 'Tours' },
    { href: '/admin/testimonials', label: 'Testimonials' },
    { href: '/admin/faqs', label: 'FAQs' }
  ];

  function isActive(href: string) {
    if (href === '/admin') {
      return $page.url.pathname === href;
    }
    return $page.url.pathname.startsWith(href);
  }
</script>

<aside class="hidden md:flex w-64 shrink-0 flex-col border-r bg-sidebar text-sidebar-foreground">
  <div class="px-6 py-5 border-b border-sidebar-border">
    <div class="text-lg font-semibold">Ceylon Reef Admin</div>
    <div class="text-xs text-muted-foreground">Dashboard</div>
  </div>
  <nav class="flex-1 px-3 py-4 flex flex-col gap-1">
    {#each navLinks as link}
      <a
        href={link.href}
        class="flex items-center gap-2 rounded-md px-3 py-2 text-sm font-medium hover:bg-sidebar-accent hover:text-sidebar-accent-foreground {isActive(link.href) ? 'bg-sidebar-accent text-sidebar-accent-foreground' : ''}"
      >
        {link.label}
      </a>
    {/each}
  </nav>
  <Separator />
  <div class="px-4 py-4">
    <Button class="w-full" variant="secondary" href="/admin/tours">Manage Tours</Button>
  </div>
</aside>
