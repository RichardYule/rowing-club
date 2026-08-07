/**
 * Typed membership tiers shown on /membership.
 *
 * TODO: confirm current subscription rates with the treasurer.
 * Per club decision there is deliberately NO social tier here —
 * existing social members are served via /about/#social instead.
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
    price: '£120',
    blurb: 'A six-week course for complete beginners.',
    features: [
      'Twelve coached sessions',
      'All equipment provided',
      'Small groups on a safe, sheltered lake',
      'No experience needed',
      'Pathway into the Development Squad',
    ],
  },
  {
    name: 'Senior',
    price: '£38/mo',
    blurb: 'Full rowing membership for adults.',
    features: [
      'Unlimited water sessions',
      'Coached squad training',
      'Gym and erg room access',
      'Regatta entries organised for you',
      'Boat racking available',
      'Use of the new multi-purpose room',
    ],
    featured: true,
  },
  {
    name: 'Junior',
    price: '£15/mo',
    blurb: 'Ages 11–18, from first strokes to racing.',
    features: [
      'Dedicated junior coaching',
      'Squad sessions after school and at weekends',
      'Safety launches with every outing',
      'Racing at junior regattas',
      'DBS-checked coaches and volunteers',
    ],
  },
];
