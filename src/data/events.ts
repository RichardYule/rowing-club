/**
 * Typed club events. In a real deployment this data could come from
 * a CMS or content collection — keeping it in one typed module makes
 * that migration trivial.
 *
 * NOTE: fixtures below are for the coming season — confirm dates and
 * times with the fixtures secretary before publishing each term.
 */

export interface ClubEvent {
  title: string;
  /** ISO 8601 date string, e.g. '2026-09-12' */
  date: string;
  startTime: string;
  location: string;
  category: 'Regatta' | 'Social' | 'Training' | 'Course' | 'Club';
  description: string;
}

export const events: ClubEvent[] = [
  {
    title: 'Learn to Row — September intake',
    date: '2026-09-07',
    startTime: '18:30',
    location: 'PCRC Boathouse, Thorpe Meadows',
    category: 'Course',
    description:
      'Six-week beginner course for adults. No experience needed — coaches, boats and blades all provided.',
  },
  {
    title: 'Boston Marathon',
    date: '2026-09-20',
    startTime: '09:00',
    location: 'River Witham, Lincoln to Boston',
    category: 'Regatta',
    description:
      'The classic long-distance head race — senior and masters crews take on 31 miles of the Witham.',
  },
  {
    title: 'Winter training camp',
    date: '2026-12-27',
    startTime: '08:00',
    location: 'PCRC Boathouse, Thorpe Meadows',
    category: 'Training',
    description:
      'Four days of twice-daily sessions on the lake to build base fitness ahead of the head race season.',
  },
  {
    title: 'New Year social & awards',
    date: '2027-01-09',
    startTime: '19:00',
    location: 'Clubhouse bar',
    category: 'Social',
    description:
      'Celebrate the year with crew-of-the-year awards and a proper clubhouse night.',
  },
  {
    title: 'Regatta volunteering day',
    date: '2027-04-24',
    startTime: '09:30',
    location: 'PCRC Boathouse, Thorpe Meadows',
    category: 'Club',
    description:
      'Working party to get the course, stakeboats and clubhouse race-ready for the Spring Regatta. Bacon butties provided.',
  },
  {
    title: 'Peterborough Spring Regatta',
    date: '2027-05-15',
    startTime: '08:30',
    location: 'Thorpe Meadows, Peterborough',
    category: 'Regatta',
    description:
      'Our home regatta on the 1000 m buoyed course — a weekend of side-by-side racing with visiting clubs from across the region.',
  },
  {
    title: 'Peterborough Summer Regatta',
    date: '2027-06-12',
    startTime: '08:30',
    location: 'Thorpe Meadows, Peterborough',
    category: 'Regatta',
    description:
      'Sprint racing at its best: 1000 m and 500 m courses, a packed bank, and the famous Pimms stall.',
  },
];

/** The regattas PCRC hosts each year — shown in their own section of /events/. */
export interface HostedRegatta {
  name: string;
  /** Typical timing, e.g. 'a weekend in mid May' */
  usualDates: string;
  course: string;
  description: string;
  spectatorNote: string;
}

export const hostedRegattas: HostedRegatta[] = [
  {
    name: 'Peterborough Spring Regatta',
    usualDates: 'A weekend in mid May',
    course: '1000 m, multi-lane, fully buoyed',
    description:
      'The season opener on home water, drawing clubs from across the East of England and beyond for side-by-side racing.',
    spectatorNote:
      'Free entry for spectators. Parking at Thorpe Meadows; refreshments in the clubhouse all day.',
  },
  {
    name: 'Peterborough Summer Regatta',
    usualDates: 'A weekend in mid June',
    course: '1000 m and 500 m sprint courses',
    description:
      'Our flagship regatta — fast sprint racing, a packed bank, the BBQ, the bar and the traditional Pimms stall.',
    spectatorNote:
      'Free entry. Bring a picnic rug — the best viewing is along the finishing 250 m.',
  },
];

/** Format an ISO date for display, e.g. "Sat, 3 Oct 2026". */
export function formatEventDate(isoDate: string): string {
  return new Intl.DateTimeFormat('en-GB', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(new Date(isoDate));
}
