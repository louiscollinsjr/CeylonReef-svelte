<script lang="ts">
  import { toasts, dismissToast } from '$lib/stores/toast';
</script>

{#if $toasts.length > 0}
  <div class="fixed bottom-4 right-4 z-50 flex flex-col gap-2">
    {#each $toasts as t (t.id)}
      <button
        type="button"
        onclick={() => dismissToast(t.id)}
        class={`rounded-md px-4 py-3 shadow-lg border text-sm bg-background cursor-pointer transition-opacity hover:opacity-80 ${
          t.tone === 'success'
            ? 'border-green-200 text-green-900'
            : t.tone === 'error'
              ? 'border-red-200 text-red-900'
              : 'border-border text-foreground'
        }`}
      >
        {t.message}
      </button>
    {/each}
  </div>
{/if}
