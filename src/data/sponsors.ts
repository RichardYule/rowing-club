/**
 * Club sponsors, shown on /support/.
 *
 * Stories beat logos: each entry records what the sponsorship actually
 * achieved. Add new sponsors here — a logo path (under
 * public/images/sponsors/) is optional.
 */

export interface Sponsor {
  name: string;
  url?: string;
  /** What the sponsorship achieved, in a sentence or two. */
  story: string;
  year: number;
  /** Optional logo image under /images/sponsors/ */
  logo?: string;
}

export const sponsors: Sponsor[] = [
  {
    name: 'Bridewell',
    url: 'https://bridewell.com',
    story:
      'In 2025 Bridewell gave £500 for a new pair of blades for our junior girls’ ' +
      'squad — and then sent eight colleagues for a volunteering day to strip the ' +
      'old railings around the new extension, ready for painting.',
    year: 2025,
  },
  // Add further sponsors here, e.g.:
  // {
  //   name: 'Example & Co',
  //   url: 'https://example.com',
  //   story: 'Sponsored the Summer Regatta finish-line gantry in 2026.',
  //   year: 2026,
  //   logo: '/images/sponsors/example-co.svg',
  // },
];

/** Ways a company can help — used as prompts on the sponsorship section. */
export const sponsorshipOpportunities: string[] = [
  'Sponsor a boat or a set of blades — your name on the hull',
  'Kit sponsorship for a squad',
  'Regatta sponsorship — your brand in front of hundreds of competitors and spectators',
  'Employee volunteering days at the club (like Bridewell’s railings team)',
  'Funded places for junior and learn-to-row courses',
];
