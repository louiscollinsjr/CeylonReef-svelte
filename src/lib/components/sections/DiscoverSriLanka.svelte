<script lang="ts">
  import { onMount } from 'svelte';
  import lottie from 'lottie-web';
  import Button from '../Button.svelte';

  let birdsContainer: HTMLDivElement;

  onMount(() => {
    let anim: ReturnType<typeof lottie.loadAnimation> | undefined;

    const load = async () => {
      if (!birdsContainer) return;
      const res = await fetch('/Birds.json');
      if (!res.ok) return;
      const data = await res.json();
      anim = lottie.loadAnimation({
        container: birdsContainer,
        renderer: 'svg',
        loop: true,
        autoplay: true,
        animationData: data
      });
      anim.setSpeed(0.8);
    };

    load();
    return () => anim?.destroy();
  });
</script>

<section
  class="relative overflow-hidden bg-white min-h-[102vh] sm:min-h-[102dvh] md:min-h-0"
>
  <!-- Mountain background — phone & tablet only -->
  <div
    class="absolute inset-0 pointer-events-none md:hidden bg-no-repeat bg-bottom bg-size-[100%_auto]"
    style:background-image="url('/images/hero-backgrounds/Updated-AdobeStock_753773319_Preview.png')"
    aria-hidden="true"
  ></div>

  <!-- Birds animation — phone & tablet only, anchored above mountains -->
  <div class="absolute inset-0 pointer-events-none md:hidden" aria-hidden="true">
    <div
      bind:this={birdsContainer}
      class="absolute left-1/2 -translate-x-1/2 bottom-[28%] sm:bottom-[32%] w-[70vw] max-w-[400px] h-[35vw] max-h-[200px] opacity-70"
    ></div>
  </div>

  <div class="absolute inset-0 pointer-events-none">
    <div class="h-32 w-32 bg-primary-200/30 rounded-full blur-3xl absolute -left-10 top-10"></div>
    <div class="h-52 w-52 bg-neutral-200/45 rounded-full blur-3xl absolute left-1/2 top-[65%] -translate-x-1/2 -translate-y-1/2"></div>
  </div>

  <div class="relative max-w-6xl mx-auto px-4 sm:px-8 md:px-4 pt-24 pb-24 md:pt-28 md:pb-20 grid md:grid-cols-[1.1fr_1fr] items-center gap-12 md:gap-48 text-center">
    <div class="space-y-6">
      <!-- <p class="inline-flex items-center gap-0 text-xs font-semibold text-black bg-green-5000 rounded-full px-0 py-0">
        Curated island journeys
      </p> -->
      <div class="space-y-6">
        <h1 class="text-4xl sm:text-5xl md:text-6xl font-bold sm:font-semibold text-gray-900 leading-[1.3] tracking-tight">
          Discover the Soul
          <span class="block leading-[0.9] -mt-2">of Sri Lanka</span>
        </h1>
        <p class="text-[1.2rem] sm:text-[1.4rem] text-gray-500 max-w-72 mx-auto sm:max-w-xl sm:leading-relaxed">
          Handpicked cultural immersions guided by locals who know every hidden corner.
        </p>
      </div>
      <div class="flex items-center justify-center gap-4">
        <Button href="/tours" variant="primary" size="sm" className="!rounded-full !px-6 !py-3 shadow-md">
          Browse tours
        </Button>
      </div>
    </div>

    <div class="relative hidden md:block">
      <div class="relative aspect-[4/5] sm:aspect-[5/6] rounded-[28px] overflow-hidden shadow-2xl bg-gray-100">
        <img
          src="/preview%20images/AdobeStock_428450204_Preview.jpeg"
          alt="Traditional dancers performing in Sri Lanka"
          class="h-full w-full object-cover"
          loading="lazy"
        />
      </div>
      <div class="absolute -right-4 -bottom-6 bg-white/90 backdrop-blur-md shadow-lg rounded-2xl px-4 py-3 flex items-center gap-3 border border-gray-100">
        <img
          src="/images/profile01.jpg"
          alt="Local host"
          class="h-10 w-10 rounded-full object-cover"
          loading="lazy"
        />
        <div>
          <p class="text-sm font-semibold text-gray-900">Hosted experiences</p>
          <p class="text-xs text-gray-500">Trusted local experts</p>
        </div>
      </div>
    </div>
  </div>
</section>
