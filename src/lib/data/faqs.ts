export interface FAQ {
  id: string;
  question: string;
  answer: string;
  category?: 'booking' | 'payments' | 'itinerary' | 'cancellation' | 'other';
  relatedTourId?: string;
  tags?: string[];
}

export const faqs: FAQ[] = [
  {
    id: 'faq-1',
    question: 'How far in advance should I book a tour?',
    answer:
      'We recommend booking at least 4–6 weeks ahead for multi-day tours and 1–2 weeks for day trips, especially in peak season (Dec–Mar, Jul–Aug).',
    category: 'booking'
  },
  {
    id: 'faq-2',
    question: 'Can I customize the itinerary?',
    answer:
      'Yes. We can swap activities, add extra nights, or adjust pacing. Tell us your must-sees and pace and we’ll tailor it.',
    category: 'itinerary'
  },
  {
    id: 'faq-3',
    question: 'What payment methods do you accept?',
    answer:
      'We accept major credit cards and bank transfers. A deposit confirms your booking, with the balance due before departure.',
    category: 'payments'
  },
  {
    id: 'faq-4',
    question: 'What is your cancellation policy?',
    answer:
      'Free cancellation up to 14 days before the start date. 14–7 days: 50% fee. Under 7 days: full tour fee applies. We’ll always try to help reschedule.',
    category: 'cancellation'
  },
  {
    id: 'faq-5',
    question: 'When is the best time for wildlife sightings?',
    answer:
      'Leopards and elephants peak Jun–Sep in Yala/Minneriya. Whales peak Nov–Apr in the South. We’ll advise based on your dates.',
    category: 'itinerary',
    tags: ['wildlife']
  }
];

export const getFaqsByCategory = (category: FAQ['category'] | 'all' = 'all'): FAQ[] => {
  if (category === 'all') return faqs;
  return faqs.filter((faq) => faq.category === category);
};

export const addFaq = (data: Omit<FAQ, 'id'>): FAQ => {
  const newItem: FAQ = { ...data, id: `faq-${Date.now()}` };
  faqs.push(newItem);
  return newItem;
};

export const updateFaq = (id: string, data: Partial<FAQ>): FAQ | undefined => {
  const index = faqs.findIndex(f => f.id === id);
  if (index === -1) return undefined;
  faqs[index] = { ...faqs[index], ...data };
  return faqs[index];
};

export const deleteFaq = (id: string): boolean => {
  const index = faqs.findIndex(f => f.id === id);
  if (index === -1) return false;
  faqs.splice(index, 1);
  return true;
};
