<script lang="ts">
  import { Button } from '$lib/components/ui/button';

  export let label: string = 'Upload images';
  export let note: string = 'Drag and drop files here or click to browse. (Stub — wire to backend later)';
</script>

<div class="rounded-xl border-2 border-dashed border-muted/50 bg-muted/30 px-4 py-6 text-center text-foreground shadow-sm">
  <div class="text-sm font-semibold">{label}</div>
  <div class="mt-1 text-xs text-muted-foreground">{note}</div>
  <Button variant="secondary" class="mt-4 inline-flex items-center gap-2" type="button">
    <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4" />
    </svg>
    <span>Select files</span>
  </Button>
</div>
