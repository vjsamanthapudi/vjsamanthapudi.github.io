// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// The public address of the site. This is the only place it is defined:
// canonical URLs, the sitemap, robots.txt, and the RSS feed all derive from it.
const SITE_URL = 'https://vjsamanthapudi.github.io';

export default defineConfig({
  site: SITE_URL,
  trailingSlash: 'always',
  integrations: [sitemap()],
  markdown: {
    shikiConfig: {
      themes: { light: 'github-light', dark: 'github-dark' },
    },
  },
});
