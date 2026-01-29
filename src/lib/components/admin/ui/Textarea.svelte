<script lang="ts">
  export let label: string | null = null;
  export let placeholder = '';
  export let value: string | undefined = undefined;
  export let disabled = false;
  export let required = false;
  export let name: string | undefined = undefined;
  export let rows = 4;
</script>

<label class="flex flex-col gap-1 text-sm text-gray-700">
  {#if label}
    <span class="font-medium text-gray-800">{label}</span>
  {/if}
  <textarea
    class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
    placeholder={placeholder}
    bind:value
    {disabled}
    {required}
    {name}
    rows={rows}
  ></textarea>
</label>
