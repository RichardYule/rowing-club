/**
 * Key club contacts, shown as a directory on /contact/.
 *
 * TODO: confirm names and role inboxes with the committee.
 * Role-based addresses are better than personal ones — they
 * survive committee changes.
 */

export interface Contact {
  role: string;
  /** Omit the name to show the role only. */
  name?: string;
  email: string;
}

export const contacts: Contact[] = [
  { role: 'Membership Secretary', email: 'membership@riuy.com' },
  { role: 'Learn to Row Co-ordinator', email: 'learntorow@riuy.com' },
  { role: 'Junior Co-ordinator', email: 'juniors@riuy.com' },
  { role: 'Welfare Officer', email: 'welfare@riuy.com' },
  { role: 'Press Secretary', email: 'press@riuy.com' },
  { role: 'Sponsorship', email: 'sponsorship@riuy.com' },
];
