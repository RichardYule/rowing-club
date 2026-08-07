/**
 * Topics for the consolidated enquiry form (see IA decision 3:
 * one form with topic routing replaces the four old WordPress forms).
 *
 * Pages across the site link to /contact/?topic=<value> so the
 * visitor lands with the right topic pre-selected.
 */

export interface EnquiryTopic {
  /** Used in the ?topic= query param */
  value: string;
  /** Shown in the <select> */
  label: string;
  /** Who the enquiry is routed to (displayed as a hint) */
  routesTo: string;
}

export const enquiryTopics: EnquiryTopic[] = [
  { value: 'join', label: 'Joining the club', routesTo: 'the Membership Secretary' },
  { value: 'learn-to-row', label: 'Learn to Row courses', routesTo: 'the Learn to Row co-ordinator' },
  { value: 'juniors', label: 'Junior rowing', routesTo: 'the Junior co-ordinator' },
  { value: 'crew-entries', label: 'Crew entries', routesTo: 'the Regatta Secretary' },
  { value: 'volunteering', label: 'Volunteering', routesTo: 'the volunteer co-ordinator' },
  { value: 'sponsorship', label: 'Sponsorship & donations', routesTo: 'the sponsorship team' },
  { value: 'lake-hire', label: 'Lake & facility hire', routesTo: 'the facilities team' },
  { value: 'press', label: 'Press & media', routesTo: 'the Press Secretary' },
  { value: 'other', label: 'Something else', routesTo: 'the Club Secretary' },
];
