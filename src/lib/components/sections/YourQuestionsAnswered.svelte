<script lang="ts">
  type FAQ = {
    title: string;
    content: string;
  };

  const faqs: FAQ[] = [
    {
      title: 'Top questions',
      content: 'Find the essentials: what to expect on tours, who our guides are, and how we curate each experience.'
    },
    {
      title: 'Hosting basics',
      content: 'We partner with trusted local hosts. Safety briefings, insurance, and vetted partners keep experiences smooth.'
    },
    {
      title: 'Application process',
      content: 'Reserve online in minutes. We confirm availability, then send your tailored itinerary and prep guide.'
    },
    {
      title: 'Licensing & insurance',
      content: 'Licensed operators, insured transport, and compliant experiences give you peace of mind from pickup to drop-off.'
    }
  ];

  let openIndex: number | null = null;

  function toggle(index: number) {
    openIndex = openIndex === index ? null : index;
  }
</script>

<section class="py-20 bg-gray-50">
  <div class="max-w-4xl mx-auto px-4 sm:px-8 md:px-4 space-y-10">
    <div class="text-center space-y-3">
      <h2 class="text-3xl sm:text-4xl md:text-[3.3rem] font-semibold text-gray-900 leading-tight">
        Your questions,
        <span class="block -mt-4">answered</span>
      </h2>
    </div>

    <div class="divide-y divide-gray-200 border-b border-gray-50 rounded-2xl overflow-hidden">
      {#each faqs as faq, i}
        <div class="bg-gray-50">
          <button
            class="w-full flex items-center justify-between px-5 sm:px-6 py-5 text-left hover:bg-gray-50 transition-colors"
            on:click={() => toggle(i)}
            aria-expanded={openIndex === i}
            aria-controls={`faq-panel-${i}`}
          >
            <span class="text-base sm:text-lg font-semibold text-gray-900">{faq.title}</span>
            <svg class="w-5 h-5 text-gray-500 transition-transform {openIndex === i ? 'rotate-180' : ''}" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
          {#if openIndex === i}
            <div id={`faq-panel-${i}`} class="px-5 sm:px-6 pb-5 text-sm sm:text-base text-gray-600 leading-relaxed">
              {faq.content}
            </div>
          {/if}
        </div>
      {/each}
    </div>
  </div>
</section>
