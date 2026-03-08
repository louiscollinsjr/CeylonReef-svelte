export interface AddOnStop {
  id: string;
  city: string;
  region: string;
  description: string;
  suggestedDays: number;
  highlights: string[];
  enabled: boolean;
}

export const stops: AddOnStop[] = [
  {
    id: 'stop-negombo',
    city: 'Negombo',
    region: 'Western Coast',
    description: 'Coastal town near the airport with beaches, a lagoon, and a vibrant fish market.',
    suggestedDays: 1,
    highlights: ['Beach & lagoon', 'Fish market', 'Dutch Canal'],
    enabled: true
  },
  {
    id: 'stop-colombo',
    city: 'Colombo',
    region: 'Western Province',
    description: 'Sri Lanka\'s capital with colonial architecture, shopping, and diverse dining.',
    suggestedDays: 1,
    highlights: ['Gangaramaya Temple', 'Galle Face Green', 'Pettah Market'],
    enabled: true
  },
  {
    id: 'stop-anuradhapura',
    city: 'Anuradhapura',
    region: 'North Central',
    description: 'Ancient sacred city with massive stupas, the Sri Maha Bodhi tree, and ruins spanning millennia.',
    suggestedDays: 2,
    highlights: ['Sri Maha Bodhi', 'Ruwanwelisaya', 'Jetavanaramaya'],
    enabled: true
  },
  {
    id: 'stop-mihintale',
    city: 'Mihintale',
    region: 'North Central',
    description: 'Birthplace of Buddhism in Sri Lanka with hilltop monasteries and panoramic views.',
    suggestedDays: 1,
    highlights: ['Mihintale stairway', 'Ambasthala Dagoba', 'Sunset views'],
    enabled: true
  },
  {
    id: 'stop-sigiriya',
    city: 'Sigiriya',
    region: 'Cultural Triangle',
    description: 'Iconic rock fortress rising from the jungle — a UNESCO World Heritage Site.',
    suggestedDays: 1,
    highlights: ['Rock Fortress climb', 'Frescoes', 'Water gardens'],
    enabled: true
  },
  {
    id: 'stop-dambulla',
    city: 'Dambulla',
    region: 'Cultural Triangle',
    description: 'Cave temple complex with ancient Buddhist murals and over 150 Buddha statues.',
    suggestedDays: 1,
    highlights: ['Cave Temple', 'Golden Temple', 'Wholesale market'],
    enabled: true
  },
  {
    id: 'stop-polonnaruwa',
    city: 'Polonnaruwa',
    region: 'Cultural Triangle',
    description: 'Medieval capital with well-preserved ruins, the Royal Palace, and Gal Vihara.',
    suggestedDays: 1,
    highlights: ['Royal Palace', 'Gal Vihara', 'Sacred Quadrangle'],
    enabled: true
  },
  {
    id: 'stop-kandy',
    city: 'Kandy',
    region: 'Central Highlands',
    description: 'Hill capital home to the Temple of the Sacred Tooth Relic and a scenic lake.',
    suggestedDays: 2,
    highlights: ['Temple of the Tooth', 'Kandy Lake', 'Cultural dance show'],
    enabled: true
  },
  {
    id: 'stop-nuwara-eliya',
    city: 'Nuwara Eliya',
    region: 'Hill Country',
    description: 'Cool-climate tea country town surrounded by plantations, waterfalls, and misty peaks.',
    suggestedDays: 1,
    highlights: ['Tea plantations', 'Gregory Lake', 'Waterfalls'],
    enabled: true
  },
  {
    id: 'stop-ella',
    city: 'Ella',
    region: 'Hill Country',
    description: 'Laid-back mountain village with stunning viewpoints, the Nine Arches Bridge, and hiking trails.',
    suggestedDays: 1,
    highlights: ['Nine Arches Bridge', 'Ella Rock', 'Little Adam\'s Peak'],
    enabled: true
  },
  {
    id: 'stop-yala',
    city: 'Yala',
    region: 'Southern Province',
    description: 'Premier national park famous for leopard sightings, elephants, and diverse birdlife.',
    suggestedDays: 1,
    highlights: ['Leopard safari', 'Elephant herds', 'Birdwatching'],
    enabled: true
  },
  {
    id: 'stop-udawalawe',
    city: 'Udawalawe',
    region: 'Southern Province',
    description: 'National park renowned for large elephant herds in open grasslands.',
    suggestedDays: 1,
    highlights: ['Elephant safari', 'Elephant Transit Home', 'Reservoir views'],
    enabled: true
  },
  {
    id: 'stop-sinharaja',
    city: 'Sinharaja',
    region: 'Sabaragamuwa',
    description: 'UNESCO-listed tropical rainforest with endemic species and guided nature treks.',
    suggestedDays: 1,
    highlights: ['Rainforest trek', 'Endemic birds', 'Waterfalls'],
    enabled: true
  },
  {
    id: 'stop-galle',
    city: 'Galle',
    region: 'Southern Coast',
    description: 'Historic Dutch Fort town with cobblestone streets, boutiques, and ocean ramparts.',
    suggestedDays: 1,
    highlights: ['Galle Fort', 'Lighthouse', 'Rampart walks'],
    enabled: true
  },
  {
    id: 'stop-south-coast',
    city: 'South Coast',
    region: 'Southern Province',
    description: 'Pristine beaches from Mirissa to Tangalle — whale watching, surfing, and sunsets.',
    suggestedDays: 2,
    highlights: ['Mirissa beach', 'Whale watching', 'Turtle hatchery'],
    enabled: true
  },
  {
    id: 'stop-pinnawala',
    city: 'Pinnawala',
    region: 'Sabaragamuwa',
    description: 'Home to the famous Elephant Orphanage where you can watch elephants bathe in the river.',
    suggestedDays: 1,
    highlights: ['Elephant Orphanage', 'River bathing', 'Elephant feeding'],
    enabled: true
  },
  {
    id: 'stop-trincomalee',
    city: 'Trincomalee',
    region: 'Eastern Province',
    description: 'East-coast port city with pristine beaches, hot springs, and a natural harbour.',
    suggestedDays: 2,
    highlights: ['Nilaveli Beach', 'Pigeon Island', 'Koneswaram Temple'],
    enabled: true
  },
  {
    id: 'stop-jaffna',
    city: 'Jaffna',
    region: 'Northern Province',
    description: 'Tamil cultural capital with unique cuisine, Hindu temples, and island excursions.',
    suggestedDays: 2,
    highlights: ['Nallur Kandaswamy Temple', 'Jaffna Fort', 'Nagadeepa Island'],
    enabled: true
  },
  {
    id: 'stop-arugam-bay',
    city: 'Arugam Bay',
    region: 'Eastern Province',
    description: 'World-class surf spot on the east coast with a relaxed vibe and lagoon safaris.',
    suggestedDays: 2,
    highlights: ['Surfing', 'Pottuvil Lagoon', 'Kumana National Park'],
    enabled: true
  },
  {
    id: 'stop-bentota',
    city: 'Bentota',
    region: 'Southern Coast',
    description: 'Beach resort town with water sports, river safaris, and Geoffrey Bawa\'s gardens.',
    suggestedDays: 1,
    highlights: ['Beach & water sports', 'Brief Garden', 'Madu River safari'],
    enabled: true
  }
];

export const getEnabledStops = (): AddOnStop[] => {
  return stops.filter(s => s.enabled);
};

export const getStopById = (id: string): AddOnStop | undefined => {
  return stops.find(s => s.id === id);
};

export const getStopsByCity = (cities: string[]): AddOnStop[] => {
  return stops.filter(s => cities.includes(s.city));
};

export const addStop = (stop: Partial<AddOnStop>): AddOnStop => {
  const next: AddOnStop = {
    id: stop.id ?? `stop-${(stop.city ?? 'new').toLowerCase().replace(/\s+/g, '-')}-${Date.now()}`,
    city: stop.city ?? 'New City',
    region: stop.region ?? '',
    description: stop.description ?? '',
    suggestedDays: stop.suggestedDays ?? 1,
    highlights: stop.highlights ?? [],
    enabled: stop.enabled ?? true
  };
  stops.push(next);
  return next;
};

export const updateStop = (id: string, updates: Partial<AddOnStop>): AddOnStop | undefined => {
  const idx = stops.findIndex(s => s.id === id);
  if (idx === -1) return undefined;
  stops[idx] = { ...stops[idx], ...updates };
  return stops[idx];
};

export const deleteStop = (id: string): boolean => {
  const idx = stops.findIndex(s => s.id === id);
  if (idx === -1) return false;
  stops.splice(idx, 1);
  return true;
};
