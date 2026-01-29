<script lang="ts">
  export let tabs: { id: string; label: string }[] = [];
  export let active: string;
  export let onChange: (id: string) => void = () => {};

  const handleSelect = (id: string) => {
    active = id;
    onChange(id);
  };
</script>

<div class="flex items-center gap-2 border-b border-gray-100">
  {#each tabs as tab}
    <button
      class={`px-3 py-2 text-sm font-medium rounded-t-lg transition-colors ${
        active === tab.id
          ? 'text-gray-900 border-b-2 border-gray-900'
          : 'text-gray-500 hover:text-gray-800'
      }`}
      on:click={() => handleSelect(tab.id)}
      type="button"
    >
      {tab.label}
    </button>
  {/each}
</div>
