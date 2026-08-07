/**
 * Course records for the Thorpe Meadows lake, shown on
 * /events/course-records/ as two tables (500 m and 1000 m).
 *
 * TODO: migrate the full tables from the old site's two
 * "Course Records" pages. The rows below are placeholders that
 * establish the shape of the data — replace them with the real
 * records. The page displays a "being updated" note meanwhile.
 */

export interface CourseRecord {
  /** Event category, e.g. 'Open 1x' */
  event: string;
  /** Record-holding crew or sculler */
  crew: string;
  /** e.g. '3:12.4' */
  time: string;
  year: number | string;
}

export const records500m: CourseRecord[] = [
  { event: 'Open 1x', crew: '—', time: '—', year: '—' },
  { event: 'Women’s 1x', crew: '—', time: '—', year: '—' },
  { event: 'Open 2x', crew: '—', time: '—', year: '—' },
  { event: 'Women’s 2x', crew: '—', time: '—', year: '—' },
  { event: 'J18 1x', crew: '—', time: '—', year: '—' },
  { event: 'WJ16 2x', crew: '—', time: '—', year: '—' },
];

export const records1000m: CourseRecord[] = [
  { event: 'Open 1x', crew: '—', time: '—', year: '—' },
  { event: 'Women’s 1x', crew: '—', time: '—', year: '—' },
  { event: 'Open 4-', crew: '—', time: '—', year: '—' },
  { event: 'Women’s 4x', crew: '—', time: '—', year: '—' },
  { event: 'Open 8+', crew: '—', time: '—', year: '—' },
  { event: 'J16 4x', crew: '—', time: '—', year: '—' },
];
