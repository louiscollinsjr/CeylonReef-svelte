<script lang="ts">
  const pillars = [
    {
      icon: '🧭',
      title: 'Local Guides',
      description: 'Sri Lankan guides who live in these regions and know every hidden gem'
    },
    {
      icon: '👥',
      title: 'Small Groups',
      description: 'Maximum 8 people per tour for a personalized experience'
    },
    {
      icon: '✨',
      title: 'Bespoke Itineraries',
      description: 'Customize every journey to match your interests and pace'
    },
    {
      icon: '🏠',
      title: 'Family Heritage',
      description: 'Three generations of hospitality and local knowledge'
    }
  ];
</script>

<section id="trust-signals" class="py-20 bg-white">
  <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
      {#each pillars as pillar}
        <div class="text-center p-6 rounded-2xl hover:bg-neutral-50 transition-colors">
          <div class="text-4xl mb-4">{pillar.icon}</div>
          <h3 class="text-lg font-semibold text-neutral-900 mb-2">{pillar.title}</h3>
          <p class="text-neutral-600 text-sm">{pillar.description}</p>
        </div>
      {/each}
    </div>
  </div>
</section>
