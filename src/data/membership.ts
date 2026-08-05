/**
 * Typed membership tiers shown on /membership.
 */

export interface MembershipTier {
  name: string;
  /** Display price, e.g. '£32/mo' */
  price: string;
  blurb: string;
  features: string[];
  /** Visually highlight one tier as the most popular. */
  featured?: boolean;
}

export const membershipTiers: MembershipTier[] = [
  {
    name: 'Learn to Row',
    price: '£99',
    blurb: 'A six-week course for complete beginners.',
    features: [
      'Twelve coached sessions',
      'All equipment provided',
      'Small groups of eight',
      'Free taster session first',
      'Pathway into club squads',
    ],
  },
  {
    name: 'Full Membership',
    price: '£42/mo',
    blurb: 'Unlimited rowing for experienced athletes.',
    features: [
      'Unlimited water sessions',
      'Coached squad training',
      'Gym and erg room access',
      'Regatta entry support',
      'Boat racking included',
      'Guest passes for family',
    ],
    featured: true,
  },
  {
    name: 'Junior & Student',
    price: '£18/mo',
    blurb: 'Ages 11–18 and full-time students.',
    features: [
      'Dedicated junior coaching',
      'Three squad sessions weekly',
      'Safety-certified launches',
      'School holiday camps',
      'DBS-checked volunteers',
    ],
  },
];
