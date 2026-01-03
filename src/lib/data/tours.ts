export interface TourDay {
  day: number;
  title: string;
  timeframe: string;
  description: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'cultural' | 'wildlife' | 'honeymoon' | 'adventure';
  description: string;
  shortDescription: string;
  price: number;
  currency: string;
  duration: {
    nights: number;
    days: number;
  };
  bestFor: string[];
  difficulty: 'easy' | 'moderate' | 'challenging';
  highlights: string[];
  itinerary: TourDay[];
  inclusions: string[];
  exclusions: string[];
  heroImage: string;
  galleryImages: string[];
}

export const tours: Tour[] = [
  {
    id: 'tour-1',
    slug: '9-day-cultural-circuit',
    title: '09 Nights 10 Days Cultural Circuit',
    shortTitle: 'Cultural Circuit',
    category: 'cultural',
    description: 'Welcome to our 10-day tour of Sri Lanka, an incredible journey that showcases the island\'s diverse beauty, rich heritage, and unforgettable experiences. From the ancient ruins of Sigiriya to the serene beaches of Mirissa, this tour covers the best of Sri Lanka.',
    shortDescription: 'Experience the best of Sri Lanka\'s cultural heritage, from ancient temples to colonial architecture.',
    price: 2400,
    currency: 'USD',
    duration: { nights: 9, days: 10 },
    bestFor: ['First-timers', 'Culture enthusiasts', 'History buffs'],
    difficulty: 'moderate',
    highlights: [
      'Climb the iconic Sigiriya Lion Rock',
      'Explore Dambulla Cave Temple',
      'Visit the Temple of the Tooth in Kandy',
      'Scenic train ride through tea country',
      'Safari at Yala National Park',
      'Whale watching in Mirissa'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Negombo', timeframe: '10:00 AM - 10:00 PM', description: 'Upon your arrival at the airport, our representative will warmly welcome you. From there, we\'ll head to the charming coastal town of Negombo. Explore the fish market, the Dutch canal, and St. Mary\'s Church. Relax and unwind at your hotel.' },
      { day: 2, title: 'Sigiriya Exploration', timeframe: '10:00 AM - 9:00 PM', description: 'After breakfast, journey to Sigiriya. Visit the iconic Dambulla Cave Temple, a UNESCO World Heritage site. In the afternoon, immerse yourself in the majestic Sigiriya Lion Rock. Experience local village life with a bullock cart ride and catamaran ride.' },
      { day: 3, title: 'More of Sigiriya', timeframe: '11:00 AM - 8:00 PM', description: 'Visit the majestic Sigiriya Lion Rock and witness the ancient ruins built by King Kasyapa. Embark on a village tour with traditional Sri Lankan lunch. In the afternoon, enjoy a thrilling safari at Minneriya or Hurulu National Park.' },
      { day: 4, title: 'Journey to Kandy', timeframe: '9:00 AM - 9:00 PM', description: 'Head to the picturesque city of Kandy, stopping by Nalanda Gedige and a spice garden in Matale. Visit the sacred Temple of the Tooth Relic, explore Kandy View Point, and experience a captivating cultural dance show.' },
      { day: 5, title: 'Enchanting Nuwara Eliya', timeframe: 'Full Day', description: 'Drive to Nuwara Eliya, the "Little England" of Sri Lanka. Visit a tea factory, enjoy tea cultivation in beautiful estates, and take in the picturesque view of Ramboda Waterfalls. Explore Gregory Lake and the charming city.' },
      { day: 6, title: 'Beautiful Ella', timeframe: 'Full Day', description: 'Head to Ella, stopping by Moon Plains. Enjoy an unforgettable train journey from Nanuoya to Ella with stunning views. Hike up Little Adam\'s Peak and visit the iconic Nine Arch Bridge.' },
      { day: 7, title: 'Wildlife Adventure in Yala', timeframe: 'Full Day', description: 'Drive to Yala, famous for wildlife encounters. Explore Seetha Cave and prepare for an exciting jungle safari in Yala National Park, known for its abundant leopard population.' },
      { day: 8, title: 'Relaxing Mirissa', timeframe: 'Full Day', description: 'Proceed to the serene beaches of Mirissa. Spend the evening relaxing on the sandy shores and enjoying the coastal atmosphere.' },
      { day: 9, title: 'Whales and Dolphins', timeframe: '6:00 AM onwards', description: 'Early morning whale and dolphin watching tour. Spend the rest of the day relaxing on the pristine Mirissa beach.' },
      { day: 10, title: 'Departure', timeframe: 'Morning', description: 'Transfer to the airport for your departure flight. Farewell to beautiful Sri Lanka!' }
    ],
    inclusions: ['Specialized Bilingual Guide', 'Private Transport', 'Entrance Fees', 'Box Lunch, Water, Dinner and Snacks', 'Accommodation'],
    exclusions: ['Additional Services', 'Insurance', 'Alcoholic Drinks', 'International Flight Tickets'],
    heroImage: '/images/tours/cultural-hero.jpg',
    galleryImages: []
  },
  {
    id: 'tour-2',
    slug: '11-day-round-tour',
    title: '10 Nights 11 Days Round Tour',
    shortTitle: 'Complete Round Tour',
    category: 'adventure',
    description: 'Welcome to our 11-day tour of Sri Lanka, a journey that will take you through the best of our beautiful island\'s culture, nature, and heritage. Experience everything from ancient temples to pristine rainforests.',
    shortDescription: 'The ultimate Sri Lanka experience covering culture, wildlife, beaches, and rainforests.',
    price: 2800,
    currency: 'USD',
    duration: { nights: 10, days: 11 },
    bestFor: ['Adventure seekers', 'Nature lovers', 'Complete experience'],
    difficulty: 'moderate',
    highlights: [
      'Sigiriya Lion Rock UNESCO site',
      'Jungle safari at Hurulu Eco Park',
      'Scenic train journey to Ella',
      'Yala National Park wildlife',
      'Sinharaja Rainforest trekking',
      'Historic Galle Dutch Fort'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Negombo', timeframe: 'Evening', description: 'Welcome to Sri Lanka! Upon arrival, transfer to Negombo. Explore the vibrant fish market and serene Dutch canal. Unwind on the stunning beach.' },
      { day: 2, title: 'Discovering Sigiriya', timeframe: 'Full Day', description: 'Head to iconic Sigiriya. Visit the magnificent Dambulla Golden Temple. Experience rural charm with a village tour including traditional lunch, bullock cart and catamaran riding.' },
      { day: 3, title: 'Sigiriya Adventure', timeframe: 'Full Day', description: 'Visit the majestic Sigiriya Lion Rock, a UNESCO World Heritage site. Evening jungle safari at Hurulu Eco Park to witness elephants in their natural habitat.' },
      { day: 4, title: 'Journey to Kandy', timeframe: 'Full Day', description: 'Drive to charming Kandy. Visit Nalanda Gedige, an intriguing ancient architectural site. Witness a captivating cultural dance show and explore the Temple of the Tooth Relic.' },
      { day: 5, title: 'Scenic Nuwara Eliya', timeframe: 'Full Day', description: 'Proceed to Nuwara Eliya, a picturesque hill station. Visit the gem museum and wood carving places. Enjoy scenic tea plantations and visit a tea factory.' },
      { day: 6, title: 'Horton Plains and Gregory Lake', timeframe: 'Full Day', description: 'Early morning visit to enchanting Horton Plains. Take in the breathtaking beauty and later visit Gregory Lake to unwind.' },
      { day: 7, title: 'Stunning Ella', timeframe: 'Full Day', description: 'Head to charming Ella. Enjoy the scenic train journey from Nuwara Eliya to Ella, one of the most beautiful railway tracks in Asia. Visit Little Adam\'s Peak.' },
      { day: 8, title: 'Wildlife in Yala', timeframe: 'Full Day', description: 'Drive to Yala. Visit the iconic Nine Arch Bridge and Ravana Waterfall. Afternoon jungle safari in Yala National Park.' },
      { day: 9, title: 'Tranquil Sinharaja', timeframe: 'Full Day', description: 'Head to the serene Sinharaja rainforest. Check-in to your lodge and relax amidst nature\'s beauty.' },
      { day: 10, title: 'Exploring Galle', timeframe: 'Full Day', description: 'Morning trekking adventure in Sinharaja rainforest. Later, drive to historic Galle and visit the iconic Dutch Fort.' },
      { day: 11, title: 'Departure', timeframe: 'Morning', description: 'Transfer to the airport for your departure. Safe travels!' }
    ],
    inclusions: ['Specialized Bilingual Guide', 'Private Transport', 'Entrance Fees', 'Box Lunch, Water, Dinner and Snacks', 'Accommodation'],
    exclusions: ['Additional Services', 'Insurance', 'Alcoholic Drinks', 'International Flight Tickets'],
    heroImage: '/images/tours/adventure-hero.jpg',
    galleryImages: []
  },
  {
    id: 'tour-3',
    slug: '9-day-wildlife-tour',
    title: '08 Nights 09 Days Wildlife Tour',
    shortTitle: 'Wildlife Adventure',
    category: 'wildlife',
    description: 'Welcome to the beautiful island of Sri Lanka! This 08 Nights/09 Days tour explores the best of Sri Lanka\'s cultural and natural wonders with a focus on incredible wildlife experiences.',
    shortDescription: 'Get up close with leopards, elephants, whales, and dolphins on this wildlife-focused adventure.',
    price: 2200,
    currency: 'USD',
    duration: { nights: 8, days: 9 },
    bestFor: ['Wildlife enthusiasts', 'Photography lovers', 'Nature seekers'],
    difficulty: 'moderate',
    highlights: [
      'Minneriya National Park elephant gathering',
      'Yala National Park leopard safari',
      'Whale and dolphin watching',
      'Scenic Ella train journey',
      'Galle Fort exploration',
      'Mirissa beach relaxation'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Sigiriya', timeframe: '3:30 PM onwards', description: 'Upon arrival at the airport, transfer to Sigiriya (approximately 3.5 hours). Check in and relax after your journey.' },
      { day: 2, title: 'Sigiriya Exploration', timeframe: 'Full Day', description: 'Visit Sigiriya Rock Fortress, a UNESCO World Heritage site. Experience traditional village life with a bullock cart ride. Afternoon Minneriya National Park Safari.' },
      { day: 3, title: 'Transfer to Kandy', timeframe: 'Full Day', description: 'Depart for Kandy. Stop at Dambulla Cave Temple. Visit Kandy Lake, View Point, and Royal Botanical Garden. Evening Kandyan dance performance and Temple of the Tooth.' },
      { day: 4, title: 'Journey to Nuwara Eliya', timeframe: 'Full Day', description: 'Head to Nuwara Eliya with stops at Ramboda waterfall and a Ceylon tea factory. Explore "Little England" including Lake Gregory Park and tea plantations.' },
      { day: 5, title: 'Horton Plains and Ella Train', timeframe: '5:30 AM onwards', description: 'Early morning visit to Horton Plains for World\'s End and Baker\'s Falls. Scenic train journey to Ella from Nanu Oya station.' },
      { day: 6, title: 'Ella\'s Charm', timeframe: 'Full Day', description: 'Explore the stunning Nine Arch Bridge, Ella Gap, and Ravana Falls. Transfer to Yala. Evening jeep safari at Yala National Park.' },
      { day: 7, title: 'Galle Fort and Mirissa', timeframe: 'Full Day', description: 'Travel to Mirissa, stopping at Galle Fort. Discover Dondra Light House and stilt fishermen in Weligama. Enjoy the beach and water sports.' },
      { day: 8, title: 'Whales and Dolphins', timeframe: '6:15 AM onwards', description: 'Whale and dolphin watching early morning. Relaxing day on beautiful Mirissa beach with optional water sports.' },
      { day: 9, title: 'Departure', timeframe: 'Morning', description: 'Transfer to Colombo airport for departure. Thank you for choosing us!' }
    ],
    inclusions: ['Specialized Bilingual Guide', 'Private Transport', 'Entrance Fees', 'Box Lunch, Water, Dinner and Snacks', 'Accommodation'],
    exclusions: ['Additional Services', 'Insurance', 'Alcoholic Drinks', 'International Flight Tickets'],
    heroImage: '/images/tours/wildlife-hero.jpg',
    galleryImages: []
  },
  {
    id: 'tour-4',
    slug: '5-day-honeymoon',
    title: '04 Nights 05 Days Honeymoon Tour',
    shortTitle: 'Romantic Honeymoon',
    category: 'honeymoon',
    description: 'Welcome to our 5-day honeymoon tour in Sri Lanka, an enchanting journey filled with romantic experiences and breathtaking sights. We are dedicated to making your honeymoon a truly memorable and special occasion.',
    shortDescription: 'A romantic getaway featuring beaches, elephants, tea country, and complimentary dinners.',
    price: 1800,
    currency: 'USD',
    duration: { nights: 4, days: 5 },
    bestFor: ['Couples', 'Honeymooners', 'Romantic getaway'],
    difficulty: 'easy',
    highlights: [
      'Romantic beach dinner in Negombo',
      'Pinnawala Elephant Orphanage',
      'Cultural dance show in Kandy',
      'Tea plantation experience',
      'White water rafting adventure',
      'Madu River boat safari'
    ],
    itinerary: [
      { day: 1, title: 'Arrival in Negombo', timeframe: '10:00 AM - 10:00 PM', description: 'Upon arrival at Sri Lanka airport, transfer to the coastal paradise of Negombo. Relax on the picturesque beach. Enjoy a complimentary romantic dinner to start your honeymoon.' },
      { day: 2, title: 'Discovering Kandy', timeframe: '10:00 AM - 9:00 PM', description: 'Journey to the cultural capital of Kandy. Visit Pinnawala Elephant Orphanage with optional elephant ride. Explore Kandy City, Kandy Lake, View Point, and cultural dance show. Complimentary dinner included.' },
      { day: 3, title: 'Exploring Nuwara Eliya', timeframe: '11:00 AM - 8:00 PM', description: 'Set out for Nuwara Eliya, "Little England." Stop at Ramboda waterfall, tea plantation, and Tea Factory. Explore Lake Gregory Park, Golf Course, and Strawberry Farms. Complimentary dinner at your hotel.' },
      { day: 4, title: 'Bentota Bliss', timeframe: '9:00 AM - 9:00 PM', description: 'Venture to coastal Bentota. Optional white-water rafting at Kithulgala. Visit a turtle hatchery and enjoy a Madu River boat safari. Complimentary dinner included.' },
      { day: 5, title: 'Departure', timeframe: '9:00 AM - 5:00 PM', description: 'Transfer to Colombo airport for your departure. Congratulations on your special journey together!' }
    ],
    inclusions: ['Specialized Bilingual Guide', 'Private Transport', 'Entrance Fees', 'Box Lunch, Water, Dinner and Snacks', 'Accommodation', 'Complimentary Romantic Dinners'],
    exclusions: ['Additional Services', 'Insurance', 'Alcoholic Drinks', 'International Flight Tickets'],
    heroImage: '/images/tours/honeymoon-hero.jpg',
    galleryImages: []
  }
];

export const getTourBySlug = (slug: string): Tour | undefined => {
  return tours.find(tour => tour.slug === slug);
};

export const getToursByCategory = (category: string): Tour[] => {
  if (category === 'all') return tours;
  return tours.filter(tour => tour.category === category);
};

export const categoryLabels: Record<string, string> = {
  cultural: 'Cultural',
  wildlife: 'Wildlife',
  honeymoon: 'Honeymoon',
  adventure: 'Adventure'
};

export const categoryColors: Record<string, string> = {
  cultural: 'bg-amber-100 text-amber-800',
  wildlife: 'bg-green-100 text-green-800',
  honeymoon: 'bg-pink-100 text-pink-800',
  adventure: 'bg-blue-100 text-blue-800'
};
