<script lang="ts">
  export let padding: 'sm' | 'md' | 'lg' = 'md';
  export let className = '';
  const pad = {
    sm: 'p-3',
    md: 'p-4',
    lg: 'p-6'
  }[padding];
</script>

<div class={`rounded-xl border border-gray-100 bg-white shadow-sm ${pad} ${className}`}>
  <slot />
</div>
