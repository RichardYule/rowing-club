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
  // TODO: confirm the public enquiry inbox before launch
  email: 'enquiries@peterboroughcityrowing.co.uk',
  // TODO: add a public phone number if the club wants one published
  phone: null as string | null,
  // TODO: confirm the founding year with the club historian
  founded: 1948,
  address: {
    street: 'The Boathouse, Thorpe Meadows',
    city: 'Peterborough',
    postcode: 'PE3 6LN',
    country: 'United Kingdom',
  },
  social: {
    // TODO: confirm the club's real social handles
    instagram: 'https://instagram.com/peterboroughcityrc',
    facebook: 'https://facebook.com/peterboroughcityrowingclub',
    strava: 'https://strava.com/clubs/peterboroughcityrc',
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
