<script lang="ts">
  import Sidebar from '$lib/components/admin/Sidebar.svelte';
  import Topbar from '$lib/components/admin/ui/Topbar.svelte';
  import Toast from '$lib/components/admin/Toast.svelte';

  let { children } = $props();
</script>

<div class="flex min-h-screen bg-background text-foreground">
  <Sidebar />
  <div class="flex-1 flex flex-col">
    <Topbar title="Admin Dashboard" />
    <main class="flex-1 p-4 md:p-6">
      {@render children()}
    </main>
  </div>
</div>

<Toast />
