export interface TourDay {
  day: number;
  title: string;
  timeframe: string;
  description: string;
}

export interface TourImage {
  id: string;
  url: string;
  alt?: string;
  tags: string[];
  scope: 'tour' | 'day';
  day?: number;
  location?: string;
}

export interface TourReview {
  id: string;
  name: string;
  role?: string;
  rating?: number;
  quote: string;
  tourId: string;
  date?: string;
}

export interface Tour {
  id: string;
  slug: string;
  title: string;
  shortTitle: string;
  category: 'cultural' | 'wildlife' | 'honeymoon' | 'adventure';
  categories: ('cultural' | 'wildlife' | 'honeymoon' | 'adventure')[];
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
  status: 'draft' | 'published' | 'archived';
  tags: string[];
  locations?: string[];
  images?: TourImage[];
  reviews?: TourReview[];
}

export const tours: Tour[] = [
  {
    id: 'tour-ancient-wonders-7d',
    slug: 'ancient-wonders-escape-7d',
    title: 'Ancient Wonders Escape | 7 Days / 6 Nights',
    shortTitle: 'Ancient Wonders Escape',
    category: 'cultural',
    categories: ['cultural'],
    description:
      'Discover Sri Lanka’s ancient culture and heritage on a 7-day journey through kingdoms, temples, and UNESCO sites across the island’s heartland.',
    shortDescription: 'Negombo • Dambulla • Sigiriya • Polonnaruwa • Kandy • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 6, days: 7 },
    bestFor: ['First-time visitors', 'History lovers', 'Relaxed cultural travel'],
    difficulty: 'easy',
    highlights: [
      'Negombo Beach & Lagoon',
      'Dambulla Cave Temple',
      'Sigiriya Rock Fortress',
      'Polonnaruwa Ancient City',
      'Kandy Cultural Dance Show',
      'Temple of the Sacred Tooth',
      'Colombo leisure time'
    ],
    itinerary: [
      { day: 1, title: 'Arrival | BIA to Negombo', timeframe: '', description: 'Arrive, meet your guide, transfer to Negombo and unwind by the beach.' },
      { day: 2, title: 'Negombo to Dambulla', timeframe: '', description: 'Travel to Dambulla and explore the UNESCO-listed cave temple.' },
      { day: 3, title: 'Sigiriya Icon', timeframe: '', description: 'Climb Sigiriya Rock Fortress and enjoy optional village experiences.' },
      { day: 4, title: 'Polonnaruwa Heritage', timeframe: '', description: 'Discover the ancient city: Royal Palace, Gal Vihara, Sacred Quadrangle.' },
      { day: 5, title: 'Spice Trails to Kandy', timeframe: '', description: 'Drive to Kandy via spice gardens; enjoy an evening cultural dance show.' },
      { day: 6, title: 'Kandy to Colombo', timeframe: '', description: 'Visit the Temple of the Tooth, stroll Kandy Lake, markets, and gem museum.' },
      { day: 7, title: 'Colombo & Departure', timeframe: '', description: 'Optional city tour and shopping before airport transfer or hotel drop.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_322535378_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['heritage', 'unesco', 'culture'],
    locations: ['Negombo', 'Dambulla', 'Sigiriya', 'Polonnaruwa', 'Kandy', 'Colombo'],
    images: [
      {
        id: 'img-ancient-7d-hero',
        url: '/preview images/AdobeStock_322535378_Preview.jpeg',
        alt: 'Sigiriya sunrise and cultural highlights',
        tags: ['cultural', 'heritage'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-sacred-heritage-9d',
    slug: 'sacred-heritage-9d',
    title: 'Sacred Heritage Tours | 9 Days / 8 Nights',
    shortTitle: 'Sacred Heritage',
    category: 'cultural',
    categories: ['cultural'],
    description:
      'Explore Sri Lanka’s sacred culture and spiritual heritage on a relaxed 9-day guided tour across ancient capitals and revered Buddhist sites.',
    shortDescription: 'Negombo • Anuradhapura • Mihintale • Sigiriya • Dambulla • Polonnaruwa • Kandy • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 8, days: 9 },
    bestFor: ['Culture lovers', 'Pilgrims', 'Slow travelers', 'First-time visitors'],
    difficulty: 'easy',
    highlights: [
      'Sacred City of Anuradhapura',
      'Mihintale birthplace of Buddhism',
      'Dambulla Cave Temple',
      'Sigiriya Rock Fortress',
      'Polonnaruwa Ancient City',
      'Kandy Cultural Dance & Temple of the Tooth',
      'Colombo leisure time'
    ],
    itinerary: [
      { day: 1, title: 'Arrival | BIA to Negombo', timeframe: '', description: 'Arrival welcome and coastal unwind in Negombo.' },
      { day: 2, title: 'To Anuradhapura', timeframe: '', description: 'Explore the Sacred City: Sri Maha Bodhi, Ruwanwelisaya, Jetavanaramaya.' },
      { day: 3, title: 'Anuradhapura & Mihintale', timeframe: '', description: 'Continue ancient sites; climb Mihintale for sunset views.' },
      { day: 4, title: 'Anuradhapura to Sigiriya', timeframe: '', description: 'Scenic transfer through rural villages; evening at leisure.' },
      { day: 5, title: 'Sigiriya • Dambulla • Polonnaruwa', timeframe: '', description: 'Climb Sigiriya, visit Dambulla Cave Temple, and tour Polonnaruwa.' },
      { day: 6, title: 'Sigiriya to Kandy', timeframe: '', description: 'Travel via spice garden; enjoy the Kandy Cultural Dance Show.' },
      { day: 7, title: 'Kandy Sacred Sites', timeframe: '', description: 'Temple of the Tooth, Kandy Lake, markets, gem museum.' },
      { day: 8, title: 'Kandy to Colombo', timeframe: '', description: 'Drive to Colombo for optional city tour and shopping.' },
      { day: 9, title: 'Colombo to BIA', timeframe: '', description: 'Airport transfer; farewell Sri Lanka.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_191117435_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['sacred', 'culture', 'heritage'],
    locations: ['Negombo', 'Anuradhapura', 'Mihintale', 'Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Colombo'],
    images: [
      {
        id: 'img-sacred-hero',
        url: '/preview images/AdobeStock_218725059_Preview.jpeg',
        alt: 'Anuradhapura stupas at dusk',
        tags: ['heritage'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-legacy-12d',
    slug: 'legacy-of-sri-lanka-12d',
    title: 'Legacy of Sri Lanka | 12 Days / 11 Nights',
    shortTitle: 'Legacy of Sri Lanka',
    category: 'cultural',
    categories: ['cultural'],
    description:
      'A complete 12-day cultural journey across Sri Lanka’s ancient civilizations, sacred heritage, hill country, and coastal charm.',
    shortDescription: 'Negombo • Anuradhapura • Mihintale • Sigiriya • Dambulla • Polonnaruwa • Kandy • Nuwara Eliya • Ella • Galle • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 11, days: 12 },
    bestFor: ['Culture enthusiasts', 'Long-stay travelers', 'Explorers'],
    difficulty: 'moderate',
    highlights: [
      'Anuradhapura Sacred City',
      'Mihintale',
      'Sigiriya Rock Fortress',
      'Dambulla Cave Temple',
      'Polonnaruwa Ancient City',
      'Temple of the Tooth & Kandy dance show',
      'Tea country Nuwara Eliya',
      'Scenic train to Ella',
      'Galle Dutch Fort',
      'Colombo leisure time'
    ],
    itinerary: [
      { day: 1, title: 'Arrival | BIA to Negombo', timeframe: '', description: 'Meet and relax on the Negombo coast.' },
      { day: 2, title: 'Negombo to Anuradhapura', timeframe: '', description: 'Explore the Sacred City including Sri Maha Bodhi and stupas.' },
      { day: 3, title: 'Anuradhapura & Mihintale', timeframe: '', description: 'Continue key sites; sunset ascent at Mihintale.' },
      { day: 4, title: 'Anuradhapura to Sigiriya', timeframe: '', description: 'Transfer via rural landscapes; evening at leisure.' },
      { day: 5, title: 'Sigiriya • Dambulla • Polonnaruwa', timeframe: '', description: 'Sigiriya climb, Dambulla caves, Polonnaruwa royal complex.' },
      { day: 6, title: 'Sigiriya to Kandy', timeframe: '', description: 'Spice garden visit; cultural dance show in Kandy.' },
      { day: 7, title: 'Kandy Sacred & City', timeframe: '', description: 'Temple of the Tooth, lake walk, markets, gem museum.' },
      { day: 8, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Scenic drive through tea country, plantations, and waterfalls.' },
      { day: 9, title: 'Nuwara Eliya to Ella (Train)', timeframe: '', description: 'Hill-country train ride; explore Nine Arches Bridge and viewpoints.' },
      { day: 10, title: 'Ella to Galle', timeframe: '', description: 'Drive south via waterfalls and coastal scenery.' },
      { day: 11, title: 'Galle to Colombo', timeframe: '', description: 'Explore Galle Fort, then head to Colombo for leisure and shopping.' },
      { day: 12, title: 'Colombo to BIA', timeframe: '', description: 'Departure transfer.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_202776698_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['legacy', 'culture', 'heritage'],
    locations: ['Negombo', 'Anuradhapura', 'Mihintale', 'Sigiriya', 'Dambulla', 'Polonnaruwa', 'Kandy', 'Nuwara Eliya', 'Ella', 'Galle', 'Colombo'],
    images: [
      {
        id: 'img-legacy-hero',
        url: '/preview images/AdobeStock_202776698_Preview.jpeg',
        alt: 'Galle Fort sunset ramparts',
        tags: ['heritage', 'long-stay'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-wild-trails-5d',
    slug: 'wild-trails-of-sri-lanka-5d',
    title: 'Wild Trails of Sri Lanka | 5 Days / 4 Nights',
    shortTitle: 'Wild Trails of Sri Lanka',
    category: 'adventure',
    categories: ['adventure', 'wildlife'],
    description:
      'A 5-day adventure blending wildlife, waterfalls, hill country vistas, and coastal downtime for nature lovers and thrill seekers.',
    shortDescription: 'Negombo • Pinnawala • Kandy • Nuwara Eliya • Yala • South Coast • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 4, days: 5 },
    bestFor: ['Nature lovers', 'Wildlife enthusiasts', 'Adventure travelers'],
    difficulty: 'moderate',
    highlights: [
      'Pinnawala Elephant Orphanage',
      'Hill country waterfalls & tea',
      'Yala National Park safari',
      'South Coast beaches',
      'Scenic drives across countryside',
      'Colombo leisure time'
    ],
    itinerary: [
      { day: 1, title: 'Negombo • Pinnawala • Kandy', timeframe: '', description: 'Arrive and visit Pinnawala Elephant Orphanage en route to Kandy.' },
      { day: 2, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Travel through tea country, waterfalls, and a tea factory visit.' },
      { day: 3, title: 'Nuwara Eliya to Yala', timeframe: '', description: 'Scenic drive south; afternoon Yala jeep safari.' },
      { day: 4, title: 'Yala to South Coast', timeframe: '', description: 'Beach time or optional lagoon safaris and turtle hatchery visits.' },
      { day: 5, title: 'South Coast to Colombo', timeframe: '', description: 'Morning by the beach, then Colombo city/shopping and departure.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/images/tours/adventure-hero.jpg',
    galleryImages: [],
    status: 'published',
    tags: ['wildlife', 'nature', 'beach'],
    locations: ['Negombo', 'Pinnawala', 'Kandy', 'Nuwara Eliya', 'Yala', 'South Coast', 'Colombo'],
    images: [
      {
        id: 'img-wild-trails-hero',
        url: '/images/tours/adventure-hero.jpg',
        alt: 'Yala safari jeep',
        tags: ['adventure'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-hill-jungle-7d',
    slug: 'hill-and-jungle-escapade-7d',
    title: 'Hill & Jungle Escapade | 7 Days / 6 Nights',
    shortTitle: 'Hill & Jungle Escapade',
    category: 'adventure',
    categories: ['adventure', 'wildlife'],
    description:
      'A 7-day blend of misty hills, scenic trains, jungles, wildlife, and beaches—perfect for photographers and outdoor seekers.',
    shortDescription: 'Negombo • Kandy • Nuwara Eliya • Ella • Yala • South Coast • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 6, days: 7 },
    bestFor: ['Nature lovers', 'Adventure seekers', 'Photographers'],
    difficulty: 'moderate',
    highlights: [
      'Kandy nature and culture',
      'Tea country vistas in Nuwara Eliya',
      'Scenic hill-country train ride to Ella',
      'Yala safari',
      'South Coast beaches',
      'Scenic drives and viewpoints'
    ],
    itinerary: [
      { day: 1, title: 'Negombo to Kandy', timeframe: '', description: 'Arrive and head to Kandy for an easy evening amid green hills.' },
      { day: 2, title: 'Kandy Day', timeframe: '', description: 'Nature walks, optional gardens or viewpoints around Kandy.' },
      { day: 3, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Waterfalls, tea plantations, and tea factory experiences.' },
      { day: 4, title: 'Nuwara Eliya to Ella (Train)', timeframe: '', description: 'Famous hill-country train to Ella; explore viewpoints.' },
      { day: 5, title: 'Ella to Yala', timeframe: '', description: 'Drive to Yala and enjoy an afternoon safari.' },
      { day: 6, title: 'Yala to South Coast', timeframe: '', description: 'Beach relaxation or optional nature-based activities.' },
      { day: 7, title: 'South Coast to Colombo', timeframe: '', description: 'Morning beach time then depart for Colombo/airport.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_1409646510_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['hills', 'train', 'safari'],
    locations: ['Negombo', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'South Coast', 'Colombo'],
    images: [
      {
        id: 'img-hill-jungle-hero',
        url: '/preview images/AdobeStock_191117435_Preview.jpeg',
        alt: 'Waterfall picnic in Ella',
        tags: ['train', 'wildlife'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-ultimate-wild-10d',
    slug: 'ultimate-wild-journey-10d',
    title: 'The Ultimate Wild Journey | 10 Days / 9 Nights',
    shortTitle: 'Ultimate Wild Journey',
    category: 'adventure',
    categories: ['adventure', 'wildlife'],
    description:
      'A 10-day immersive nature expedition across Sri Lanka’s mountains, scenic trains, jungles, rainforests, and beaches for true wildlife enthusiasts.',
    shortDescription: 'Negombo • Kandy • Nuwara Eliya • Ella • Yala • Udawalawe • Sinharaja • South Coast • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 9, days: 10 },
    bestFor: ['Wildlife enthusiasts', 'Adventure travelers', 'Photographers', 'Long-stay explorers'],
    difficulty: 'moderate',
    highlights: [
      'Hill-country train to Ella',
      'Yala leopard safari',
      'Udawalawe elephant safari',
      'Sinharaja Rainforest trekking (UNESCO)',
      'South Coast beach finale',
      'Scenic drives across the island'
    ],
    itinerary: [
      { day: 1, title: 'Arrival | BIA to Negombo', timeframe: '', description: 'Arrive and unwind by the Negombo coast.' },
      { day: 2, title: 'Negombo to Kandy', timeframe: '', description: 'Travel to Kandy through countryside; easy evening.' },
      { day: 3, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Waterfalls, tea estates, and a tea factory visit.' },
      { day: 4, title: 'Nuwara Eliya to Ella (Train)', timeframe: '', description: 'Scenic rail journey; explore Ella town and viewpoints.' },
      { day: 5, title: 'Ella to Yala', timeframe: '', description: 'Transfer to Yala; afternoon safari for leopards and wildlife.' },
      { day: 6, title: 'Yala to Udawalawe', timeframe: '', description: 'Drive to Udawalawe for an elephant-focused safari.' },
      { day: 7, title: 'Udawalawe to Sinharaja', timeframe: '', description: 'Travel to Sinharaja Rainforest; evening at leisure in nature.' },
      { day: 8, title: 'Sinharaja Rainforest', timeframe: '', description: 'Guided trek through endemic flora and fauna in the rainforest.' },
      { day: 9, title: 'Sinharaja to South Coast', timeframe: '', description: 'Head to southern beaches to relax after the jungle.' },
      { day: 10, title: 'South Coast to Colombo', timeframe: '', description: 'Morning beach time then depart for Colombo/airport.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/images/tours/wildlife-hero.jpg',
    galleryImages: [],
    status: 'published',
    tags: ['wildlife', 'rainforest', 'beach'],
    locations: ['Negombo', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'Udawalawe', 'Sinharaja', 'South Coast', 'Colombo'],
    images: [
      {
        id: 'img-ultimate-wild-hero',
        url: '/images/tours/wildlife-hero.jpg',
        alt: 'Elephant crossing at golden hour',
        tags: ['wild', 'safari'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-love-in-sun-3d',
    slug: 'love-in-the-sun-3d',
    title: 'Love in the Sun | 3 Days / 2 Nights',
    shortTitle: 'Love in the Sun',
    category: 'honeymoon',
    categories: ['honeymoon'],
    description:
      'A short romantic beach escape designed for couples seeking relaxation, privacy, and sunsets along Sri Lanka’s south coast.',
    shortDescription: 'Negombo • South Coast • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 2, days: 3 },
    bestFor: ['Couples', 'Honeymooners', 'Anniversary celebrations'],
    difficulty: 'easy',
    highlights: [
      'Beachside romance and sunsets',
      'Private leisure time',
      'Optional candlelight dining',
      'Colombo leisure & shopping'
    ],
    itinerary: [
      { day: 1, title: 'Negombo to South Coast', timeframe: '', description: 'Arrival and transfer to a beachside hotel for relaxation.' },
      { day: 2, title: 'South Coast', timeframe: '', description: 'Full day at leisure: beaches, romantic walks, optional private dinner.' },
      { day: 3, title: 'South Coast to Colombo', timeframe: '', description: 'Light sightseeing or café time in Colombo before departure.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_218725059_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['romantic', 'beach'],
    locations: ['Negombo', 'South Coast', 'Colombo'],
    images: [
      {
        id: 'img-love-sun-hero',
        url: '/preview images/AdobeStock_1409646510_Preview.jpeg',
        alt: 'Golden hour beach walk',
        tags: ['romance'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-misty-hills-6d',
    slug: 'misty-hills-romance-6d',
    title: 'Misty Hills Romance | 6 Days / 5 Nights',
    shortTitle: 'Misty Hills Romance',
    category: 'honeymoon',
    categories: ['honeymoon', 'adventure'],
    description:
      'A dreamy hill-country escape with misty mountains, tea estates, and scenic train rides tailored for couples.',
    shortDescription: 'Negombo • Kandy • Nuwara Eliya • Ella • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 5, days: 6 },
    bestFor: ['Couples', 'Honeymooners', 'Anniversary travelers'],
    difficulty: 'easy',
    highlights: [
      'Lakeside romance in Kandy',
      'Tea country walks in Nuwara Eliya',
      'Scenic hill-country train ride',
      'Ella mountain views & sunrises',
      'Cool climate escape'
    ],
    itinerary: [
      { day: 1, title: 'Negombo to Kandy', timeframe: '', description: 'Travel through countryside to Kandy; relaxed evening.' },
      { day: 2, title: 'Kandy Day', timeframe: '', description: 'Leisurely nature walks, lakeside moments, optional culture.' },
      { day: 3, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Misty hills, waterfalls, tea plantations, and factory visit.' },
      { day: 4, title: 'Nuwara Eliya to Ella (Train)', timeframe: '', description: 'Romantic scenic train; explore Ella viewpoints.' },
      { day: 5, title: 'Ella to Colombo', timeframe: '', description: 'Leisure morning in Ella before departing toward Colombo.' },
      { day: 6, title: 'Colombo & Departure', timeframe: '', description: 'City leisure, shopping, or cafés before your flight.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/preview images/AdobeStock_186145375_Preview.jpeg',
    galleryImages: [],
    status: 'published',
    tags: ['romance', 'hills', 'train'],
    locations: ['Negombo', 'Kandy', 'Nuwara Eliya', 'Ella', 'Colombo'],
    images: [
      {
        id: 'img-misty-hills-hero',
        url: '/preview images/AdobeStock_186145375_Preview.jpeg',
        alt: 'Misty hills tea country',
        tags: ['romantic', 'hills'],
        scope: 'tour'
      }
    ],
    reviews: []
  },
  {
    id: 'tour-forever-together-10d',
    slug: 'forever-together-10d',
    title: 'Forever Together | 10 Days / 9 Nights',
    shortTitle: 'Forever Together',
    category: 'honeymoon',
    categories: ['honeymoon', 'adventure', 'wildlife'],
    description:
      'A luxurious 10-day romantic journey mixing misty hills, scenic trains, wildlife safaris, beaches, and heritage forts.',
    shortDescription: 'Negombo • Kandy • Nuwara Eliya • Ella • Yala • South Coast • Galle • Colombo',
    price: 0,
    currency: 'USD',
    duration: { nights: 9, days: 10 },
    bestFor: ['Couples', 'Honeymooners', 'Anniversaries', 'Luxury travelers'],
    difficulty: 'easy',
    highlights: [
      'Negombo beach & lagoon',
      'Kandy lakeside romance',
      'Tea country love in Nuwara Eliya',
      'Scenic train ride to Ella',
      'Yala safari adventure',
      'South Coast relaxation',
      'Galle Dutch Fort strolls',
      'Colombo leisure & shopping'
    ],
    itinerary: [
      { day: 1, title: 'BIA to Negombo', timeframe: '', description: 'Arrive and relax by the beach.' },
      { day: 2, title: 'Negombo to Kandy', timeframe: '', description: 'Countryside drive to Kandy; lakeside moments.' },
      { day: 3, title: 'Kandy Day', timeframe: '', description: 'Nature walks, lake time, optional cultural visits.' },
      { day: 4, title: 'Kandy to Nuwara Eliya', timeframe: '', description: 'Tea country, waterfalls, and tea factory visit.' },
      { day: 5, title: 'Nuwara Eliya to Ella (Train)', timeframe: '', description: 'Iconic hill-country rail journey; explore Ella.' },
      { day: 6, title: 'Ella Exploration', timeframe: '', description: 'Nine Arches Bridge, viewpoints, or relaxed café time.' },
      { day: 7, title: 'Ella to Yala', timeframe: '', description: 'Travel to Yala for an afternoon safari.' },
      { day: 8, title: 'Yala to South Coast', timeframe: '', description: 'Transfer to southern beaches; optional romantic activities.' },
      { day: 9, title: 'South Coast to Galle', timeframe: '', description: 'Visit Galle Dutch Fort and continue to Colombo.' },
      { day: 10, title: 'Galle to Colombo', timeframe: '', description: 'Leisure in Colombo, shopping or sightseeing, then departure.' }
    ],
    inclusions: [],
    exclusions: [],
    heroImage: '/images/tours/honeymoon-hero.jpg',
    galleryImages: [],
    status: 'published',
    tags: ['romantic', 'luxury', 'beach'],
    locations: ['Negombo', 'Kandy', 'Nuwara Eliya', 'Ella', 'Yala', 'South Coast', 'Galle', 'Colombo'],
    images: [
      {
        id: 'img-forever-together-hero',
        url: '/images/tours/honeymoon-hero.jpg',
        alt: 'Romantic journey across Sri Lanka',
        tags: ['romance', 'luxury'],
        scope: 'tour'
      }
    ],
    reviews: []
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

export const getTourImages = (slug: string): TourImage[] => {
  const tour = getTourBySlug(slug);
  return tour?.images ?? [];
};

export const getTourReviews = (slug: string): TourReview[] => {
  const tour = getTourBySlug(slug);
  return tour?.reviews ?? [];
};
