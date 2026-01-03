export interface Fact {
  fact: string;
  icon: string;
  title?: string;
}

export const sriLankaFacts: Fact[] = [
  { title: 'Biodiverse island', fact: 'One of the most biodiverse countries on Earth', icon: '🌍' },
  { title: 'Whales & elephants', fact: 'You can see whales and elephants in the same day', icon: '🐋' },
  { title: 'UNESCO heritage', fact: '8 UNESCO World Heritage Sites', icon: '🏛️' },
  { title: 'Pearl of the Indian Ocean', fact: 'The Pearl of the Indian Ocean', icon: '💎' },
  { title: 'Wild elephant haven', fact: 'Home to one of the largest wild elephant populations in Asia', icon: '🐘' },
  { title: 'Deep history', fact: 'Over 2,500 years of documented history', icon: '📜' },
  { title: 'Tea country', fact: "World's finest Ceylon tea grown in misty highlands", icon: '🍵' },
  { title: 'Endless coast', fact: 'Golden beaches stretching over 1,300 kilometers', icon: '🏖️' }
];
