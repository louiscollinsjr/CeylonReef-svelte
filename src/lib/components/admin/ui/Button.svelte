<script lang="ts">
  export let variant: 'primary' | 'ghost' | 'outline' | 'soft' = 'primary';
  export let size: 'sm' | 'md' | 'lg' = 'md';
  export let href: string | null = null;
  export let type: 'button' | 'submit' | 'reset' = 'button';
  export let disabled = false;

  const base = 'inline-flex items-center justify-center gap-2 font-medium rounded-lg transition-all focus:outline-none focus:ring-2 focus:ring-offset-2';

  const variants: Record<typeof variant, string> = {
    primary: 'bg-black text-white hover:bg-gray-900 focus:ring-gray-300',
    ghost: 'text-gray-700 hover:bg-gray-100 focus:ring-gray-200',
    outline: 'border border-gray-200 text-gray-900 hover:bg-gray-50 focus:ring-gray-200',
    soft: 'bg-gray-100 text-gray-900 hover:bg-gray-200 focus:ring-gray-200'
  };

  const sizes: Record<typeof size, string> = {
    sm: 'px-3 py-1.5 text-sm',
    md: 'px-4 py-2 text-sm',
    lg: 'px-5 py-2.5 text-base'
  };

  const classes = `${base} ${variants[variant]} ${sizes[size]} ${disabled ? 'opacity-70 cursor-not-allowed' : ''}`;
</script>

{#if href}
  <a class={classes} href={href} aria-disabled={disabled}>
    <slot />
  </a>
{:else}
  <button class={classes} type={type} disabled={disabled}>
    <slot />
  </button>
{/if}
