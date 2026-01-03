export interface Testimonial {
  id: string;
  name: string;
  quote: string;
  role: string;
  image?: string;
  tourId?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: '1',
    name: 'Sarah Mitchell',
    quote: 'An absolutely incredible experience! Our guide was knowledgeable, friendly, and made every moment special. The sunrise at Sigiriya was breathtaking.',
    role: 'From United Kingdom',
    tourId: 'tour-1'
  },
  {
    id: '2',
    name: 'Michael Chen',
    quote: 'The wildlife safari exceeded all expectations. We saw leopards, elephants, and even blue whales! Ceylon Reef Tours made our dream trip a reality.',
    role: 'From Australia',
    tourId: 'tour-3'
  },
  {
    id: '3',
    name: 'Emma & James Wilson',
    quote: 'Our honeymoon was absolutely magical. The romantic dinners, beautiful hotels, and personalized attention made it unforgettable. Highly recommend!',
    role: 'From Canada',
    tourId: 'tour-4'
  },
  {
    id: '4',
    name: 'David Thompson',
    quote: 'From the ancient temples to the pristine beaches, every day brought new wonders. The local insights from our guide were invaluable.',
    role: 'From USA',
    tourId: 'tour-2'
  }
];

export const getTestimonialsByTour = (tourId: string): Testimonial[] => {
  return testimonials.filter(t => t.tourId === tourId);
};
