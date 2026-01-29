<script lang="ts">
  export let label: string | null = null;
  export let placeholder = '';
  export let value: string | number | undefined = undefined;
  export let type = 'text';
  export let disabled = false;
  export let required = false;
  export let name: string | undefined = undefined;
</script>

<label class="flex flex-col gap-1 text-sm text-gray-700">
  {#if label}
    <span class="font-medium text-gray-800">{label}</span>
  {/if}
  <input
    class="w-full rounded-lg border border-gray-200 bg-white px-3 py-2 text-sm text-gray-900 shadow-sm focus:border-gray-300 focus:outline-none focus:ring-2 focus:ring-gray-300 disabled:cursor-not-allowed disabled:bg-gray-50"
    placeholder={placeholder}
    type={type}
    bind:value
    {disabled}
    {required}
    {name}
  />
</label>
