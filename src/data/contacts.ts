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
  { role: 'Membership Secretary', email: 'membership@peterboroughcityrowing.co.uk' },
  { role: 'Learn to Row Co-ordinator', email: 'learntorow@peterboroughcityrowing.co.uk' },
  { role: 'Junior Co-ordinator', email: 'juniors@peterboroughcityrowing.co.uk' },
  { role: 'Welfare Officer', email: 'welfare@peterboroughcityrowing.co.uk' },
  { role: 'Press Secretary', email: 'press@peterboroughcityrowing.co.uk' },
  { role: 'Sponsorship', email: 'sponsorship@peterboroughcityrowing.co.uk' },
];
