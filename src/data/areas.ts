export interface Area {
  slug: string;
  name: string;
  shortDesc: string;
  intro: string;
  neighborhoods?: string[];
}

export const areas: Area[] = [
  {
    slug: 'cornelius',
    name: 'Cornelius',
    shortDesc: 'Local pest control serving Cornelius, NC and the Lake Norman shoreline.',
    intro: 'As a local pest control provider based in Cornelius, we understand the unique challenges of properties near Lake Norman—from moisture-loving insects to seasonal mosquito pressure. We serve homes and businesses throughout Cornelius with responsive, professional service.',
    neighborhoods: ['Jetton Village', 'The Peninsula', 'Birkdale', 'Catawba Ridge', 'Heritage Green']
  },
  {
    slug: 'huntersville',
    name: 'Huntersville',
    shortDesc: 'Reliable pest control for Huntersville homes and businesses.',
    intro: 'Huntersville continues to grow, and so does the need for consistent pest protection. We serve residential neighborhoods and commercial properties throughout Huntersville with the same attention to detail we provide in Cornelius.',
    neighborhoods: ['Birkdale Village area', 'Northstone', 'Vermillion', 'Gilead Road corridor']
  },
  {
    slug: 'davidson',
    name: 'Davidson',
    shortDesc: 'Pest control services for the Davidson community.',
    intro: 'Davidson’s mix of historic homes and newer developments creates varied pest pressures. We provide thorough inspections and treatments tailored to the character of each property, whether you are near the college campus or in surrounding neighborhoods.',
    neighborhoods: ['Downtown Davidson', 'River Run', 'Summerfield', 'Davidson East']
  },
  {
    slug: 'mooresville',
    name: 'Mooresville',
    shortDesc: 'Professional pest management for Mooresville and Lake Norman east.',
    intro: 'Mooresville residents deal with many of the same pests found throughout the Lake Norman region. We offer convenient scheduling and clear communication for both one-time treatments and ongoing service plans.',
    neighborhoods: ['Lake Norman area', 'Downtown Mooresville', 'Brawley School Road', 'Langtree']
  },
  {
    slug: 'denver-nc',
    name: 'Denver, NC',
    shortDesc: 'Pest control for Denver, NC and surrounding Lincoln County areas.',
    intro: 'Denver, NC sits just west of Lake Norman and shares many of the same environmental conditions that support common household pests. We extend our service area to include Denver homes and small businesses looking for dependable local support.',
    neighborhoods: ['Westport', 'Forney Creek', 'Highway 16 corridor']
  },
  {
    slug: 'charlotte-north',
    name: 'North Charlotte',
    shortDesc: 'Service for northern Charlotte neighborhoods near the Lake Norman corridor.',
    intro: 'Northern Charlotte neighborhoods bordering Huntersville and Cornelius benefit from our proximity and local knowledge. We provide residential and light commercial pest control with flexible scheduling.',
    neighborhoods: ['University area vicinity', 'Mallard Creek', 'Highland Creek']
  }
];

export function getAreaBySlug(slug: string): Area | undefined {
  return areas.find(a => a.slug === slug);
}

export function getAllAreaSlugs(): string[] {
  return areas.map(a => a.slug);
}
