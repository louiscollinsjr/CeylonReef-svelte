<script lang="ts">
  type Variant = 'primary' | 'secondary' | 'outline' | 'ghost';
  type Size = 'sm' | 'md' | 'lg';

  export let variant: Variant = 'primary';
  export let size: Size = 'md';
  export let href: string | undefined = undefined;
  export let disabled: boolean = false;
  export let fullWidth: boolean = false;
  export let className: string = '';

  const baseClasses = 'inline-flex items-center justify-center font-medium rounded-xl transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2';
  
  const variantClasses: Record<Variant, string> = {
    primary: 'bg-black text-white hover:bg-gray-800 focus:ring-black shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    secondary: 'bg-accent-400 text-white hover:bg-accent-500 focus:ring-accent-400 shadow-md hover:shadow-lg transform hover:-translate-y-0.5',
    outline: 'border-2 border-primary-600 text-primary-600 hover:bg-primary-600 hover:text-white focus:ring-primary-500 transform hover:-translate-y-0.5',
    ghost: 'text-primary-600 hover:bg-primary-50 focus:ring-primary-500'
  };

  const sizeClasses: Record<Size, string> = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg'
  };

  $: classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${fullWidth ? 'w-full' : ''} ${disabled ? 'opacity-50 cursor-not-allowed' : ''} ${className}`;
</script>

{#if href}
  <a {href} class={classes} class:pointer-events-none={disabled}>
    <slot />
  </a>
{:else}
  <button class={classes} {disabled} on:click>
    <slot />
  </button>
{/if}
