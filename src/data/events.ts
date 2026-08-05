/**
 * Typed club events. In a real deployment this data could come from
 * a CMS or content collection — keeping it in one typed module makes
 * that migration trivial.
 */

export interface ClubEvent {
  title: string;
  /** ISO 8601 date string, e.g. '2026-09-12' */
  date: string;
  startTime: string;
  location: string;
  category: 'Regatta' | 'Social' | 'Training' | 'Course';
  description: string;
}

export const events: ClubEvent[] = [
  {
    title: 'Autumn Head Race',
    date: '2026-10-03',
    startTime: '09:00',
    location: 'Championship Course, Putney',
    category: 'Regatta',
    description:
      'Our flagship head race over the 4.25 km championship course. All senior and masters squads racing.',
  },
  {
    title: 'Learn to Row — September Intake',
    date: '2026-09-07',
    startTime: '18:30',
    location: 'Tideway Boathouse',
    category: 'Course',
    description:
      'Six-week beginner course. No experience needed — coaches, boats and blades all provided.',
  },
  {
    title: 'Club Erg Marathon',
    date: '2026-11-14',
    startTime: '10:00',
    location: 'Tideway Gym',
    category: 'Training',
    description:
      'Relay marathon on the ergs to raise funds for the junior fleet. Teams of six, fancy dress encouraged.',
  },
  {
    title: 'Winter Training Camp',
    date: '2026-12-27',
    startTime: '07:00',
    location: 'Tideway Boathouse',
    category: 'Training',
    description:
      'Four days of twice-daily sessions to build base fitness ahead of the head race season.',
  },
  {
    title: 'New Year Social & Awards',
    date: '2027-01-09',
    startTime: '19:00',
    location: 'Clubhouse Bar',
    category: 'Social',
    description:
      'Celebrate the season with crew of the year awards, speeches and a ceilidh.',
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
