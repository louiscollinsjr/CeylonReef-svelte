<script lang="ts">
  import Button from '../Button.svelte';
</script>

<section class="relative min-h-screen flex items-center justify-center bg-white">
  
  <!-- Two Column Grid Content -->
  <div class="relative z-10 max-w-7xl mx-auto px-8 md:px-12 w-full">
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
      <!-- Left Column - Image -->
      <div class="order-2 lg:order-1">
        <div class="relative">
          <!-- <img 
            src="/sigiriya-rock.jpg" 
            alt="Sigiriya Rock - Ancient Sri Lankan Heritage" 
            class="w-full h-auto rounded-2xl shadow-2xl object-cover"
            on:error={(e) => {
              (e.target as HTMLImageElement).src = 'https://images.unsplash.com/photo-1595768396436-75c0636a7a96?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80';
            }}
          /> -->
        </div>
      </div>
      
      <!-- Right Column - Text Content -->
      <div class="order-1 lg:order-2 text-gray-900">
        <div class="space-y-6">
          <h1 class="text-4xl sm:text-5xl md:text-6xl font-normal font-playfair-display" style="line-height: 1.1;">
            Adventures That Touch the Soul
          </h1>
          
          <div class="space-y-4 text-sm leading-relaxed text-gray-500 font-archivo">
            <p>
              Embark on a journey with Ceylon Reef Tours, where every experience is shaped with care, intention, and heart. We don't simply take you around Sri Lanka—we invite you to feel it, to connect with it, and to fall in love with it as deeply as we have.
            </p>
            
            <p>
              This island is more than a destination to us. It has shaped who we are. In its ancient temples, prayers still echo through time. In its wild landscapes, nature moves freely and unapologetically. In the misty tea highlands, stories linger in every breeze. And in its people, you'll find a warmth and generosity that stays with you long after your journey ends. These are not sights on a checklist—they are part of our everyday life.
            </p>
            
            <p>
              And we want to share them with you.
            </p>
            
            <p>
              We believe the most meaningful travel happens when you're guided by people who truly belong to the place they're showing you. Our guides don't recite rehearsed facts—they share lived experiences. They slow down where moments matter. They take you beyond the obvious, into hidden corners known only to those who have walked these paths for a lifetime. With us, you're not following an itinerary—you're traveling alongside locals who care deeply about how Sri Lanka is experienced.
            </p>
            
            <p class="italic">
              Sri Lanka has a quiet way of touching the soul—if you let it.
              Let us show you how.
            </p>
          </div>
          
          <div class="pt-6">
            <Button href="/tours" variant="primary" size="lg" className="!rounded-full bg-red-500 text-white hover:bg-gray-800 shadow-xl hover:shadow-2xl !px-8 !py-3 text-sm font-medium">
              Begin Your Journey
            </Button>
          </div>
        </div>
      </div>
    </div>
  </div>
  
</section>
