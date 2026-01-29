<script lang="ts">
  export let title: string = 'Dashboard';
</script>

<header class="sticky top-0 z-40 flex h-14 items-center justify-between border-b bg-background/80 px-4 backdrop-blur supports-backdrop-filter:bg-background/60">
  <div class="text-sm font-semibold text-foreground">{title}</div>
  <div class="flex items-center gap-3">
    <div class="hidden md:block">
      <input
        class="w-56 rounded-md border border-input bg-background px-3 py-1.5 text-sm text-foreground shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring/50"
        placeholder="Search..."
        type="search"
      />
    </div>
    <div class="h-8 w-8 rounded-full bg-primary text-primary-foreground text-xs font-semibold grid place-items-center">CR</div>
  </div>
</header>
