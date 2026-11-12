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

const WORDS_PER_MINUTE = 220;

/** "7 min read", estimated from a post's Markdown source. */
export const readingTime = (markdown = ''): string => {
  const text = markdown
    .replace(/<!--[\s\S]*?-->/g, ' ') // author notes that never render
    .replace(/<[^>]+>/g, ' '); // inline HTML tags and their attributes
  const words = text.split(/\s+/).filter(Boolean).length;
  return `${Math.max(1, Math.round(words / WORDS_PER_MINUTE))} min read`;
};
