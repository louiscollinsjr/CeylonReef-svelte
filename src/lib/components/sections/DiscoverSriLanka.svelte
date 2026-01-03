<script lang="ts">
  import Button from '../Button.svelte';
</script>

<section class="relative overflow-hidden bg-white">
  <div class="absolute inset-0 pointer-events-none">
    <div class="h-32 w-32 bg-primary-200/30 rounded-full blur-3xl absolute -left-10 top-10"></div>
    <div class="h-40 w-40 bg-primary-300/25 rounded-full blur-3xl absolute right-4 bottom-4"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-4 pt-24 pb-16 md:pt-28 md:pb-20 grid md:grid-cols-[1.1fr_1fr] items-center gap-12 md:gap-48 text-center">
    <div class="space-y-6">
      <!-- <p class="inline-flex items-center gap-0 text-xs font-semibold text-black bg-green-5000 rounded-full px-0 py-0">
        Curated island journeys
      </p> -->
      <div class="space-y-6">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-semibold text-gray-900 leading-[0.9] tracking-tight">
          Discover the Soul
          <span class="block leading-[0.9] -mt-3">of Sri Lanka</span>
        </h1>
        <p class="text-lg text-gray-600 max-w-xl leading-relaxed">
          Handpicked cultural immersions, coastal escapes, and wild safaris guided by locals who know every hidden corner.
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        <Button href="/tours" variant="primary" size="sm" className="!rounded-full !px-6 !py-3 shadow-md">
          Browse tours
        </Button>
      </div>
    </div>

    <div class="relative">
      <div class="relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden shadow-2xl bg-gray-100">
        <img
          src="https://images.unsplash.com/photo-1505761671935-60b3a7427bad?auto=format&fit=crop&w=1400&q=80"
          alt="Traditional dancers performing in Sri Lanka"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="absolute -right-4 -bottom-6 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
        <div class="h-10 w-10 rounded-full bg-gradient-to-br from-primary-500 to-primary-700"></div>
        <div>
          <p class="text-sm font-semibold text-gray-900">Hosted experiences</p>
          <p class="text-xs text-gray-500">Trusted local experts</p>
        </div>
      </div>
    </div>
  </div>
</section>
