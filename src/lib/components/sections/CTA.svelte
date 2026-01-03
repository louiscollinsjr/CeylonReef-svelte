<script lang="ts">
  import Button from '../Button.svelte';
</script>

<section class="py-20 bg-gradient-to-br from-primary-600 to-primary-800">
  <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
    <h2 class="text-3xl md:text-4xl font-bold text-white mb-4">
      Ready to Start Your Adventure?
    </h2>
    <p class="text-primary-100 text-lg mb-10 max-w-2xl mx-auto">
      Let us craft the perfect Sri Lankan journey for you. Get in touch and we'll help plan your dream trip.
    </p>
    
    <div class="flex flex-col sm:flex-row gap-4 justify-center">
      <Button href="/tours" variant="secondary" size="lg">
        Explore Tours
      </Button>
      <a href="/contact" class="inline-flex items-center justify-center px-8 py-4 text-lg font-medium rounded-lg bg-white text-primary-600 hover:bg-neutral-100 transition-all duration-200 shadow-lg">
        Get in Touch
      </a>
    </div>
  </div>
</section>
