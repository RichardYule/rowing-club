/**
 * Central site configuration.
 * Import these values anywhere instead of hard-coding strings,
 * so renaming the club or changing a link only happens in one place.
 */

export const SITE = {
  name: 'Tideway Rowing Club',
  tagline: 'On the water at dawn since 1892',
  description:
    'Tideway Rowing Club is a friendly, competitive rowing club on the Thames. ' +
    'We offer learn-to-row courses, junior and masters squads, and racing at regattas across the UK.',
  url: 'https://tideway-rowing-club.pages.dev',
  locale: 'en_GB',
  email: 'hello@tidewayrc.example',
  phone: '+44 20 7946 0018',
  founded: 1892,
  address: {
    street: 'Boathouse Lane, Embankment',
    city: 'London',
    postcode: 'SW15 1LB',
    country: 'United Kingdom',
  },
  social: {
    instagram: 'https://instagram.com/tidewayrc',
    facebook: 'https://facebook.com/tidewayrc',
    strava: 'https://strava.com/clubs/tidewayrc',
  },
} as const;

export interface NavLink {
  label: string;
  href: string;
}

export const NAV_LINKS: NavLink[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Membership', href: '/membership' },
  { label: 'Events', href: '/events' },
  { label: 'Contact', href: '/contact' },
];
