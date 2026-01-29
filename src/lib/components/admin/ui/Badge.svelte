<script lang="ts">
  export let tone: 'gray' | 'green' | 'blue' | 'amber' | 'pink' = 'gray';
  const tones: Record<typeof tone, string> = {
    gray: 'bg-gray-100 text-gray-800',
    green: 'bg-green-100 text-green-800',
    blue: 'bg-blue-100 text-blue-800',
    amber: 'bg-amber-100 text-amber-800',
    pink: 'bg-pink-100 text-pink-800'
  };
</script>

<span class={`inline-flex items-center gap-1 rounded-full px-2 py-1 text-xs font-medium ${tones[tone]}`}>
  <slot />
</span>
