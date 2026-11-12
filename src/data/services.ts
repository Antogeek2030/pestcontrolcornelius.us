export interface Service {
  slug: string;
  name: string;
  shortDesc: string;
  intro: string;
  process: string[];
  priceRange: string;
  faqs: { q: string; a: string }[];
  related: string[];
}

export const services: Service[] = [
  {
    slug: 'ant-control',
    name: 'Ant Control',
    shortDesc: 'Effective ant elimination and prevention for homes and businesses in Cornelius, NC.',
    intro: 'Ants are one of the most common household pests in the Lake Norman area. Whether you are dealing with carpenter ants, odorous house ants, or fire ants, our team provides targeted treatments that address the colony at its source. We focus on long-term prevention so you are not calling us back every few weeks.',
    process: [
      'Thorough inspection to identify species, entry points, and nesting areas',
      'Customized treatment plan based on the type of ant and severity of the issue',
      'Application of targeted baits and residual treatments in key zones',
      'Follow-up recommendations and optional maintenance plans'
    ],
    priceRange: 'Typically $150–$350 depending on property size and severity',
    faqs: [
      { q: 'How long does ant treatment take?', a: 'Most residential treatments are completed in under two hours. Results are often noticeable within a few days as colonies begin to decline.' },
      { q: 'Are the treatments safe around pets and kids?', a: 'We use products labeled for residential use and apply them in a careful, targeted manner. We will discuss safety precautions specific to your household during the visit.' },
      { q: 'Will ants come back?', a: 'Without addressing entry points and food sources, ants can return. We provide practical prevention tips and offer ongoing service plans for lasting control.' }
    ],
    related: ['cockroach-control', 'spider-control', 'residential-pest-control']
  },
  {
    slug: 'cockroach-control',
    name: 'Cockroach Control',
    shortDesc: 'Professional cockroach treatment for German, American, and other common species.',
    intro: 'Cockroaches thrive in warm, humid conditions common in North Carolina. German cockroaches in particular can multiply quickly and are difficult to eliminate with store-bought sprays. Our approach combines inspection, gel baits, residual applications, and sanitation recommendations to break the cycle.',
    process: [
      'Detailed inspection of kitchens, bathrooms, and other harborage areas',
      'Identification of species and infestation level',
      'Strategic placement of baits and residual treatments',
      'Follow-up visit recommendations and sanitation guidance'
    ],
    priceRange: 'Typically $175–$400 for initial treatment',
    faqs: [
      { q: 'How many treatments will I need?', a: 'Many homes see significant improvement after one thorough treatment. Heavy infestations may require a follow-up visit 2–4 weeks later.' },
      { q: 'Can I treat cockroaches myself?', a: 'Over-the-counter products often scatter the colony without eliminating it. Professional-grade baits and residuals are more effective when applied correctly.' },
      { q: 'What attracts cockroaches?', a: 'Food debris, moisture, clutter, and easy entry points. Reducing these conditions helps any treatment succeed long-term.' }
    ],
    related: ['ant-control', 'residential-pest-control', 'commercial-pest-control']
  },
  {
    slug: 'termite-control',
    name: 'Termite Control',
    shortDesc: 'Termite inspection, treatment, and protection for properties in Cornelius and nearby areas.',
    intro: 'Subterranean termites are active in the Carolinas and can cause significant structural damage if left unchecked. We provide thorough inspections, liquid treatments, and bait systems designed to protect your home. Early detection is key, so we encourage regular inspections for older homes and those with previous activity.',
    process: [
      'Comprehensive visual inspection of accessible areas, including crawl spaces and basements',
      'Moisture and wood-damage assessment',
      'Presentation of treatment options suited to your property and budget',
      'Application of chosen treatment and documentation of findings'
    ],
    priceRange: 'Inspections often free or low-cost; treatments vary widely by method and home size',
    faqs: [
      { q: 'How do I know if I have termites?', a: 'Signs include mud tubes, discarded wings, hollow-sounding wood, and visible damage. A professional inspection is the most reliable way to confirm.' },
      { q: 'How long does termite treatment last?', a: 'Liquid barrier treatments and bait systems are designed for long-term protection. We recommend periodic inspections to monitor for new activity.' },
      { q: 'Do you offer termite warranties?', a: 'Warranty options depend on the treatment method selected. We will explain available coverage during your consultation.' }
    ],
    related: ['termite-inspection', 'crawl-space-treatment', 'residential-pest-control']
  },
  {
    slug: 'rodent-control',
    name: 'Rodent Control',
    shortDesc: 'Mice and rat removal with exclusion and prevention strategies.',
    intro: 'Rodents seek food, water, and shelter—especially as temperatures drop. Once inside, they can damage wiring, contaminate food, and spread disease. Our rodent service focuses on removal, sealing entry points, and recommendations to keep them out for good.',
    process: [
      'Inspection to locate activity, droppings, and entry points',
      'Trapping and removal of active rodents',
      'Exclusion work to seal gaps and openings',
      'Sanitation advice and optional follow-up monitoring'
    ],
    priceRange: 'Typically $200–$500 depending on severity and exclusion needs',
    faqs: [
      { q: 'How do rodents get inside?', a: 'Mice can enter through gaps as small as a quarter-inch. Common entry points include gaps around pipes, foundation cracks, and damaged screens.' },
      { q: 'Is trapping enough?', a: 'Trapping removes existing rodents, but without sealing entry points they will return. Exclusion is a critical part of lasting control.' },
      { q: 'Are rodenticides safe?', a: 'We prioritize trapping and exclusion. When baits are used, they are placed in secure stations and we discuss safety with every customer.' }
    ],
    related: ['wildlife-removal', 'residential-pest-control', 'crawl-space-treatment']
  },
  {
    slug: 'bed-bug-treatment',
    name: 'Bed Bug Treatment',
    shortDesc: 'Thorough bed bug inspection and heat or chemical treatment options.',
    intro: 'Bed bugs are resilient and can hitchhike into any home. Effective treatment requires experience, the right tools, and often more than one visit. We inspect carefully, prepare the space with you, and apply proven methods tailored to the level of activity.',
    process: [
      'Careful inspection of sleeping areas, furniture, and nearby rooms',
      'Preparation guidelines provided before treatment day',
      'Application of chosen treatment method (chemical, heat, or combination)',
      'Follow-up inspection and additional treatment if needed'
    ],
    priceRange: 'Varies significantly by infestation size and method; expect several hundred dollars upward',
    faqs: [
      { q: 'How did I get bed bugs?', a: 'They commonly travel on luggage, used furniture, or clothing. Hotels, public transit, and multi-unit housing increase exposure risk.' },
      { q: 'Do I need to throw away my mattress?', a: 'Not always. We can often treat mattresses and box springs effectively. We will advise based on the condition and level of infestation.' },
      { q: 'How long until they are gone?', a: 'Complete elimination can take several weeks and multiple visits. Consistent follow-through on preparation steps is essential.' }
    ],
    related: ['residential-pest-control', 'one-time-pest-treatment', 'emergency-pest-control']
  },
  {
    slug: 'spider-control',
    name: 'Spider Control',
    shortDesc: 'Reduce spiders and their food sources around your home.',
    intro: 'Most spiders found in North Carolina homes are harmless, but many people prefer not to share living space with them. We reduce spider populations by treating harborage areas and addressing the insects that attract them. Exterior treatments help keep more spiders outside where they belong.',
    process: [
      'Inspection of interior and exterior areas where spiders congregate',
      'Treatment of webs, corners, and entry points',
      'Exterior perimeter application when appropriate',
      'Advice on reducing clutter and outdoor lighting that attracts prey insects'
    ],
    priceRange: 'Typically $125–$275 for residential service',
    faqs: [
      { q: 'Are the spiders in my home dangerous?', a: 'Most common household spiders in this region are not medically significant. If you are unsure, we can help identify them during an inspection.' },
      { q: 'Will treatment kill all spiders immediately?', a: 'Treatments reduce populations over time. Web removal and ongoing service help maintain lower numbers.' },
      { q: 'Can I prevent spiders myself?', a: 'Reducing clutter, sealing cracks, and managing exterior lighting and vegetation all help. Professional treatments provide an extra layer of control.' }
    ],
    related: ['ant-control', 'wasp-hornet-removal', 'residential-pest-control']
  },
  {
    slug: 'mosquito-control',
    name: 'Mosquito Control',
    shortDesc: 'Yard treatments to reduce mosquito populations during peak season.',
    intro: 'Mosquitoes are more than a nuisance in the Carolinas—they can carry disease. Our mosquito service targets resting and breeding areas around your property with barrier treatments that help make outdoor spaces more enjoyable through the warmer months.',
    process: [
      'Property assessment to identify breeding sites and resting areas',
      'Application of residual barrier treatment to vegetation and shaded zones',
      'Recommendations for reducing standing water on the property',
      'Optional recurring service through mosquito season'
    ],
    priceRange: 'Typically $75–$150 per treatment; packages available',
    faqs: [
      { q: 'How long does a mosquito treatment last?', a: 'Barrier treatments generally provide several weeks of reduction. Frequency depends on rainfall, temperature, and property conditions.' },
      { q: 'Is the treatment safe for pets?', a: 'We use products labeled for outdoor residential use. We recommend keeping pets indoors during application and until dry, and we will review specifics with you.' },
      { q: 'What can I do between treatments?', a: 'Eliminate standing water in containers, gutters, and low spots. This is one of the most effective steps you can take.' }
    ],
    related: ['flea-tick-control', 'residential-pest-control', 'preventive-pest-plans']
  },
  {
    slug: 'wasp-hornet-removal',
    name: 'Wasp & Hornet Removal',
    shortDesc: 'Safe removal of wasp, hornet, and yellow jacket nests.',
    intro: 'Stinging insects become more aggressive later in the season as colonies grow. We safely treat and remove nests from eaves, play structures, and other high-traffic areas so your family and pets can enjoy the outdoors without the constant threat of stings.',
    process: [
      'Location and assessment of active nests',
      'Protective gear and careful treatment of the colony',
      'Removal of the nest when safe and practical',
      'Advice on preventing future nesting in the same spots'
    ],
    priceRange: 'Typically $100–$250 per nest depending on location and size',
    faqs: [
      { q: 'Should I try to remove a nest myself?', a: 'We strongly advise against it. Disturbed nests can lead to multiple stings. Professional equipment and protective gear make the job safer.' },
      { q: 'When is the best time to treat?', a: 'Early morning or evening when most insects are in the nest. We schedule accordingly for effectiveness and safety.' },
      { q: 'Will they come back to the same spot?', a: 'Sometimes. Sealing openings and reducing attractive conditions helps. We can discuss prevention during the visit.' }
    ],
    related: ['spider-control', 'mosquito-control', 'emergency-pest-control']
  },
  {
    slug: 'flea-tick-control',
    name: 'Flea & Tick Control',
    shortDesc: 'Indoor and outdoor treatment for fleas and ticks.',
    intro: 'Fleas and ticks are a concern for pet owners and anyone who spends time outdoors in this region. Our treatments address both the yard and the home when needed, and we work with you on pet care steps that make the difference between short-term relief and lasting control.',
    process: [
      'Inspection of pet areas, carpeting, and outdoor resting spots',
      'Indoor treatment if activity is present inside',
      'Yard application targeting shaded and vegetated areas',
      'Guidance on pet treatment coordination with your veterinarian'
    ],
    priceRange: 'Typically $150–$350 depending on indoor/outdoor scope',
    faqs: [
      { q: 'Do I need to treat my pets at the same time?', a: 'Yes. Treating the environment without addressing pets usually leads to reinfestation. Coordinate with your veterinarian for appropriate pet products.' },
      { q: 'How long until fleas are gone?', a: 'Fleas have a life cycle that can take several weeks to fully interrupt. Follow-up treatments and consistent pet care are often necessary.' },
      { q: 'Are outdoor treatments enough?', a: 'For many properties, outdoor treatment plus pet care is sufficient. Indoor activity requires additional steps.' }
    ],
    related: ['mosquito-control', 'residential-pest-control', 'preventive-pest-plans']
  },
  {
    slug: 'wildlife-removal',
    name: 'Wildlife Removal',
    shortDesc: 'Humane removal of raccoons, squirrels, and other wildlife from structures.',
    intro: 'Wildlife can find their way into attics, crawl spaces, and chimneys looking for shelter. We focus on safe removal, exclusion to prevent re-entry, and cleanup guidance so the problem does not return. Every situation is different, and we tailor the approach to the species and the structure.',
    process: [
      'Inspection to identify species, entry points, and extent of activity',
      'Humane trapping or one-way exclusion devices as appropriate',
      'Sealing of entry points once animals are out',
      'Recommendations for cleanup and damage repair'
    ],
    priceRange: 'Varies widely by species and complexity; quotes provided after inspection',
    faqs: [
      { q: 'Can I leave wildlife alone if they are not causing damage?', a: 'Wildlife in structures often causes damage over time and can create sanitation issues. Early intervention is usually less expensive.' },
      { q: 'Do you relocate animals?', a: 'Local regulations and best practices guide our approach. We prioritize exclusion and prevention so animals do not simply move next door and return.' },
      { q: 'What about bats?', a: 'Bat exclusion is highly regulated and seasonal. Contact us for guidance specific to bat situations.' }
    ],
    related: ['rodent-control', 'attic-insulation-cleaning', 'crawl-space-treatment']
  },
  {
    slug: 'commercial-pest-control',
    name: 'Commercial Pest Control',
    shortDesc: 'Reliable pest management for restaurants, offices, and retail spaces.',
    intro: 'Businesses cannot afford pest issues that affect reputation, health inspections, or employee comfort. We provide discreet, scheduled service tailored to your industry and facility. Documentation and clear communication are part of every visit so you always know what was done and what to watch for.',
    process: [
      'Initial facility assessment and risk evaluation',
      'Customized service plan based on business type and pest pressure',
      'Regular scheduled visits with detailed reporting',
      'Rapid response options for unexpected issues'
    ],
    priceRange: 'Custom quotes based on facility size and service frequency',
    faqs: [
      { q: 'Do you work after hours?', a: 'Yes. We can schedule service outside of business hours to minimize disruption when needed.' },
      { q: 'Can you help with health department requirements?', a: 'We provide documentation of services performed and can help you prepare for inspections related to pest management.' },
      { q: 'What industries do you serve?', a: 'Restaurants, retail, offices, multi-family housing, and light industrial facilities in the Cornelius area.' }
    ],
    related: ['residential-pest-control', 'monthly-pest-service', 'cockroach-control']
  },
  {
    slug: 'residential-pest-control',
    name: 'Residential Pest Control',
    shortDesc: 'Comprehensive home pest protection with flexible service options.',
    intro: 'Your home should be a place of comfort, not a battleground with pests. Our residential programs cover the most common invaders in the Lake Norman region and can be tailored to one-time needs or ongoing protection. We explain what we find, what we treat, and how you can help keep pests out between visits.',
    process: [
      'Full property inspection focusing on common entry points and harborage',
      'Discussion of findings and recommended treatment plan',
      'Interior and exterior treatment as agreed',
      'Prevention tips and optional recurring service schedule'
    ],
    priceRange: 'One-time treatments from ~$150; recurring plans available',
    faqs: [
      { q: 'What pests are covered under a general residential plan?', a: 'Most common crawling and flying insects. Specialized issues like termites, bed bugs, or wildlife are typically quoted separately.' },
      { q: 'How often should I have service?', a: 'Many homeowners prefer quarterly service for year-round protection. Monthly options are available for higher-pressure situations.' },
      { q: 'Do I need to be home for every visit?', a: 'Exterior treatments can often be completed without you present. We will discuss access needs when scheduling.' }
    ],
    related: ['monthly-pest-service', 'quarterly-pest-service', 'preventive-pest-plans']
  },
  {
    slug: 'one-time-pest-treatment',
    name: 'One-Time Pest Treatment',
    shortDesc: 'Targeted single-visit service for specific pest problems.',

    intro: 'Not every situation requires a long-term contract. If you have a specific issue—ants in the kitchen, wasps under the eave, or an isolated cockroach sighting—we can provide focused treatment and clear advice on what to watch for afterward.',
    process: [
      'Inspection focused on the reported problem',
      'Treatment of the identified issue',
      'Guidance on prevention and signs of recurrence',
      'Option to schedule follow-up if needed'
    ],
    priceRange: 'Typically $125–$300 depending on pest and scope',
    faqs: [
      { q: 'Is one visit enough?', a: 'For many isolated issues, yes. Some pests require follow-up due to their life cycles. We will be honest about expectations.' },
      { q: 'Can I convert to a recurring plan later?', a: 'Absolutely. Many customers start with a one-time service and later choose ongoing protection.' },
      { q: 'What if the problem returns quickly?', a: 'Contact us. We stand behind our work and will discuss the best next steps, which may include additional treatment or a service plan.' }
    ],
    related: ['residential-pest-control', 'emergency-pest-control', 'ant-control']
  },
  {
    slug: 'monthly-pest-service',
    name: 'Monthly Pest Service',
    shortDesc: 'Year-round protection with monthly visits for higher pest pressure homes.',
    intro: 'Some properties benefit from more frequent attention—especially those with a history of recurring issues, nearby wooded areas, or sensitive occupants. Monthly service keeps pressure low and allows us to catch new activity early.',
    process: [
      'Initial comprehensive inspection and treatment',
      'Monthly exterior and selective interior visits',
      'Monitoring of problem areas and adjustment of approach',
      'Regular communication about findings and recommendations'
    ],
    priceRange: 'Monthly plans typically start around $40–$70 per visit after initial service',
    faqs: [
      { q: 'Is monthly service necessary for every home?', a: 'No. Many homes do well on a quarterly schedule. Monthly is ideal when pest pressure is consistently high.' },
      { q: 'What is included each month?', a: 'Exterior perimeter treatment, inspection of key areas, and interior service as needed based on activity.' },
      { q: 'Can I pause service seasonally?', a: 'We can discuss flexible options. Consistency generally produces better results, but we work with customer needs.' }
    ],
    related: ['quarterly-pest-service', 'residential-pest-control', 'preventive-pest-plans']
  },
  {
    slug: 'quarterly-pest-service',
    name: 'Quarterly Pest Service',
    shortDesc: 'Balanced year-round protection with seasonal treatments.',
    intro: 'Quarterly service is a popular choice for homeowners who want consistent protection without monthly visits. Treatments are timed to address seasonal pest pressures, and each visit includes an inspection so we stay ahead of developing issues.',
    process: [
      'Initial full inspection and treatment',
      'Scheduled visits approximately every 90 days',
      'Seasonal adjustments to target current pest activity',
      'Written or verbal summary of findings after each visit'
    ],
    priceRange: 'Typically $40–$60 per quarter after the initial service',
    faqs: [
      { q: 'What happens if I have a problem between visits?', a: 'Most quarterly plans include free or discounted callbacks for covered pests. Ask about the specifics of your plan.' },
      { q: 'Do you treat inside every time?', a: 'Interior treatment is performed as needed based on inspection findings. Exterior service is consistent.' },
      { q: 'Can I switch from monthly to quarterly?', a: 'Yes. We can adjust your schedule based on how your property is performing.' }
    ],
    related: ['monthly-pest-service', 'residential-pest-control', 'preventive-pest-plans']
  },
  {
    slug: 'termite-inspection',
    name: 'Termite Inspection',
    shortDesc: 'Detailed termite and wood-destroying insect inspections.',
    intro: 'Whether you are buying a home, refinancing, or simply want peace of mind, a thorough termite inspection is a smart investment. We examine accessible areas of the structure, look for signs of current or past activity, and provide a clear written report of our findings.',
    process: [
      'Visual inspection of accessible interior and exterior areas',
      'Crawl space or basement evaluation when present and accessible',
      'Documentation of findings, including any conducive conditions',
      'Discussion of recommendations if activity or risk is identified'
    ],
    priceRange: 'Often complimentary with treatment; standalone inspections typically $75–$150',
    faqs: [
      { q: 'How long does an inspection take?', a: 'Most residential inspections take 45–90 minutes depending on the size and accessibility of the property.' },
      { q: 'Will you find every termite?', a: 'No inspection can guarantee detection of every insect in inaccessible areas. We examine what is reasonably accessible and note limitations.' },
      { q: 'Do I need an inspection if I have never seen termites?', a: 'Termites often work silently. Periodic inspections, especially for older homes or those near wooded areas, are a good preventive practice.' }
    ],
    related: ['termite-control', 'crawl-space-treatment', 'residential-pest-control']
  },
  {
    slug: 'attic-insulation-cleaning',
    name: 'Attic Insulation Cleaning',
    shortDesc: 'Removal of contaminated insulation after rodent or wildlife activity.',
    intro: 'When rodents or wildlife have nested in an attic, the insulation can become contaminated with droppings, urine, and nesting materials. Removing and replacing affected insulation improves air quality and removes a major attractant for future pests. We coordinate this work carefully with exclusion efforts.',
    process: [
      'Assessment of the extent of contamination and insulation type',
      'Safe removal of affected insulation and debris',
      'Sanitization of the attic space',
      'Coordination with insulation replacement if desired'
    ],
    priceRange: 'Varies significantly by attic size and contamination level; quotes after inspection',
    faqs: [
      { q: 'Is it always necessary to remove insulation?', a: 'Not always. Light activity may only require targeted cleaning. Heavy contamination typically warrants removal for health and odor reasons.' },
      { q: 'Can you replace the insulation too?', a: 'We can coordinate or recommend trusted partners for insulation replacement after cleaning.' },
      { q: 'How do I know if my attic needs this?', a: 'Visible droppings, strong odors, stained insulation, or confirmed wildlife activity are common indicators. An inspection clarifies the situation.' }
    ],
    related: ['wildlife-removal', 'rodent-control', 'crawl-space-treatment']
  },
  {
    slug: 'crawl-space-treatment',
    name: 'Crawl Space Treatment',
    shortDesc: 'Pest treatment and moisture-related recommendations for crawl spaces.',
    intro: 'Crawl spaces are frequent entry points and harborage areas for insects, rodents, and moisture-related issues. We treat active pest problems and can advise on conditions that make the space attractive to pests in the first place—such as standing water, debris, or inadequate vapor barriers.',
    process: [
      'Access and inspection of the crawl space',
      'Treatment for identified pests',
      'Assessment of moisture and structural conditions relevant to pest pressure',
      'Recommendations for improvements that reduce future issues'
    ],
    priceRange: 'Typically $175–$400 depending on size and conditions',
    faqs: [
      { q: 'Do I need to be present?', a: 'Access is required. We can often work with a lockbox or scheduled access if you cannot be home.' },
      { q: 'Will treatment fix moisture problems?', a: 'Pest treatment addresses insects and rodents. Moisture issues may require separate waterproofing or encapsulation work.' },
      { q: 'How often should crawl spaces be checked?', a: 'Annual inspections are a good practice, especially if you have had previous pest or moisture concerns.' }
    ],
    related: ['termite-control', 'rodent-control', 'termite-inspection']
  },
  {
    slug: 'emergency-pest-control',
    name: 'Emergency Pest Control',
    shortDesc: 'Priority response for urgent pest situations.',
    intro: 'Sometimes a pest problem cannot wait. Stinging insect nests near doorways, sudden rodent activity in a kitchen, or a bed bug discovery before guests arrive all call for prompt attention. We prioritize emergency requests and aim to get someone on site as quickly as scheduling allows.',
    process: [
      'Rapid phone or online assessment of the urgency',
      'Same-day or next-day scheduling when possible',
      'Focused treatment of the immediate problem',
      'Plan for any needed follow-up'
    ],
    priceRange: 'Standard rates plus possible after-hours or rush fees; confirmed at booking',
    faqs: [
      { q: 'What qualifies as an emergency?', a: 'Situations involving stinging insects in high-traffic areas, active indoor rodent issues, or pests that pose immediate health or safety concerns.' },
      { q: 'Are you available on weekends?', a: 'We make every effort to accommodate urgent weekend requests. Availability varies; call or message for current options.' },
      { q: 'Is emergency service more expensive?', a: 'Rush and after-hours work may carry additional fees. We are transparent about costs before beginning work.' }
    ],
    related: ['wasp-hornet-removal', 'rodent-control', 'bed-bug-treatment']
  },
  {
    slug: 'preventive-pest-plans',
    name: 'Preventive Pest Plans',
    shortDesc: 'Proactive protection designed to stop problems before they start.',
    intro: 'The best pest control is the kind you rarely notice. Preventive plans combine regular exterior treatments, monitoring, and practical advice so common pests never gain a foothold. Ideal for homeowners who value consistency and want fewer surprises.',
    process: [
      'Initial inspection to establish a baseline',
      'Scheduled preventive treatments timed to local pest seasons',
      'Ongoing monitoring and minor adjustments as needed',
      'Education on simple habits that support the plan'
    ],
    priceRange: 'Similar to quarterly or monthly plans; customized after assessment',
    faqs: [
      { q: 'How is this different from regular service?', a: 'The emphasis is on prevention and early intervention rather than reacting to established infestations. Treatments are proactive.' },
      { q: 'Will I still see occasional pests?', a: 'No plan eliminates every insect. The goal is to keep populations low and prevent the kinds of problems that require intensive treatment.' },
      { q: 'Can I customize what is covered?', a: 'Yes. We build plans around the pests most relevant to your property and concerns.' }
    ],
    related: ['quarterly-pest-service', 'monthly-pest-service', 'residential-pest-control']
  }
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find(s => s.slug === slug);
}

export function getAllServiceSlugs(): string[] {
  return services.map(s => s.slug);
}
