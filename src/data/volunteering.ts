/**
 * Volunteering roles, shown on /support/#volunteering.
 *
 * The regatta list comes from the regatta organising committee.
 * Non-regatta help is more ad hoc (working parties, painting, events)
 * so the page invites people to register interest rather than
 * listing fixed roles.
 */

export interface VolunteerRole {
  name: string;
  description: string;
  /** Optional extra note, e.g. experience requirements or TBC details. */
  note?: string;
}

export const regattaRoles: VolunteerRole[] = [
  {
    name: 'Commentary',
    description: 'Bringing the racing to life for spectators along the course.',
    note: 'Previous experience required — or speak to John Canton',
  },
  {
    name: 'Start timing',
    description: 'Operating the timing team at the start of every race.',
  },
  {
    name: 'Start Marshal — 100 / 200 m',
    description: 'Marshalling crews at the short-course starts used for junior racing.',
  },
  {
    name: 'CC Recorder',
    description: 'Keeping a record of crews going up to the start.',
  },
  {
    name: 'Landing stages',
    description:
      'Managing the flow of boats after the finish to keep the area clear — and collecting crew numbers.',
  },
  {
    name: 'Finish timing & results',
    description: 'Timing crews over the line and helping produce the results.',
  },
  {
    name: 'Cyclists for paperwork',
    description: 'Carrying paperwork between start and finish by bike.',
    note: 'Times to be confirmed',
  },
  {
    name: 'Stakeboat Supervisor',
    description: 'Leading the team that keeps every crew aligned at the start.',
  },
  {
    name: 'Stakeboat Operators',
    description: 'Laying out and holding the stakeboats that give every race a fair start.',
  },
  {
    name: 'BBQ',
    description: 'Running the regatta barbecue on the bank by the clubhouse.',
  },
  {
    name: 'Clubhouse catering stall',
    description: 'Serving refreshments from the clubhouse kitchen.',
  },
  {
    name: 'Clubhouse bar',
    description: 'Keeping the bar running for spectators and crews alike.',
  },
  {
    name: 'Pimms stall',
    description: 'A Summer Regatta tradition — the busiest spot on the bank.',
  },
];
