<script lang="ts">
  import Button from '../Button.svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center overflow-hidden rounded-3xl md:rounded-5xl">
  <div class="absolute inset-4 md:inset-4 rounded-3xl md:rounded-5xl overflow-hidden max-h-[80vh]">
    <div class="absolute inset-0 bg-[url('/AdobeStock_209618941.jpeg')] bg-cover">
      <div class="absolute inset-0 bg-black/20"></div>
    </div>
  </div>
  
  <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-12 text-center pt-32">
    <div class="animate-fade-in">
      <!-- <span class="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-white/90 text-sm font-medium mb-6">
        Authentic Sri Lankan Experiences
      </span>
       -->
      <h1 class="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal text-white mb-4 leading-none">
        <span class="block -mb-8">Discover the Real</span>
        <span class="text-white">Sri Lanka</span>
      </h1>
      
      <p class="text-xl sm:text-xl text-white/90 max-w-3xl mx-auto mb-12 leading-relaxed font-normal">
        Handcrafted journeys beyond the guidebook. Experience ancient temples, 
        pristine beaches, and incredible wildlife with local guides.
      </p>
      
      <div class="flex flex-col sm:flex-row gap-4 justify-center">
        <Button href="/tours" variant="primary" size="lg" className="!rounded-full bg-[#181918] text-white hover:bg-gray-100 shadow-xl hover:shadow-2xl !px-6 !py-3">
          Explore Now
        </Button>
       
      </div>
    </div>
    
    <div class="mt-16 animate-float">
      <a href="#trust-signals" class="inline-flex flex-col items-center text-white/60 hover:text-white transition-colors">
        <span class="text-sm mb-2">Scroll to explore</span>
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 14l-7 7m0 0l-7-7m7 7V3" />
        </svg>
      </a>
    </div>
  </div>
  
  </section>
