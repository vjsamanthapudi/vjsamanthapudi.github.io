import { SITE } from '@/site.config';

const dateFormatter = new Intl.DateTimeFormat(SITE.locale, {
  year: 'numeric',
  month: 'short',
  day: 'numeric',
  timeZone: 'UTC',
});

/** "Nov 9, 2026" */
export const formatDate = (date: Date): string => dateFormatter.format(date);

/** Page title as shown in the browser tab and search results. */
export const pageTitle = (title?: string): string =>
  title ? `${title} | ${SITE.name}` : `${SITE.name} | Dev Space`;
