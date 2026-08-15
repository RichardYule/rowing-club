/**
 * Central site configuration.
 * Import these values anywhere instead of hard-coding strings,
 * so renaming the club or changing a link only happens in one place.
 */

export const SITE = {
  name: 'Peterborough City Rowing Club',
  shortName: 'Peterborough City RC',
  tagline: 'Rowing for Peterborough on the lake at Thorpe Meadows',
  description:
    'Peterborough City Rowing Club is a friendly, competitive club rowing on the purpose-built ' +
    'lake at Thorpe Meadows. Learn-to-row courses, junior and senior squads, and two home regattas a year.',
  url: 'https://peterboroughcityrowing.co.uk',
  locale: 'en_GB',
  // Confirmed Aug 2026 (R-03): real inbox, but MUST be replaced with a
  // club-owned address before this site goes live.
  email: 'enquiries@riuy.com',
  // Decision (Aug 2026, R-03): no public phone number — email only.
  phone: null as string | null,
  // Confirmed with the club, Aug 2026 (R-03).
  founded: 1948,
  address: {
    street: 'The Boathouse, Thorpe Meadows',
    city: 'Peterborough',
    postcode: 'PE3 6LN',
    country: 'United Kingdom',
  },
  social: {
    // Confirmed Aug 2026 (R-03). Twitter/X is the club's main public channel
    // (regatta results and announcements); the Facebook group is members-only;
    // there is no Strava club.
    instagram: 'https://www.instagram.com/peterborough_city_rowing_club/',
    facebook: 'https://www.facebook.com/groups/79453943226/',
    twitter: 'https://twitter.com/P_C_R_C',
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

/** Primary nav — flat, no dropdowns. Home is reached via the logo. */
export const NAV_LINKS: NavLink[] = [
  { label: 'About', href: '/about' },
  { label: 'Squads', href: '/squads' },
  { label: 'Learn to Row', href: '/learn-to-row' },
  { label: 'Events', href: '/events' },
  { label: 'News', href: '/news' },
  { label: 'Contact', href: '/contact' },
];

/** Footer-only utility pages (not in the primary nav, per the IA). */
export const UTILITY_LINKS: NavLink[] = [
  { label: 'Support the club', href: '/support' },
  { label: 'Welfare & safeguarding', href: '/welfare' },
  { label: 'Club policies', href: '/policies' },
  { label: 'Lake & facility hire', href: '/lake-hire' },
  { label: 'Crew entries', href: '/crew-entries' },
  { label: 'Privacy policy', href: '/privacy-policy' },
];