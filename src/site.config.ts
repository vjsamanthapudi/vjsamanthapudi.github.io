/**
 * Site-wide settings. Edit this file to change the name, navigation, or
 * contact links everywhere at once. The public URL lives in astro.config.mjs.
 */

export const SITE = {
  name: 'Vijay Kumar Samanthapudi',
  brand: 'vj',
  tagline: 'dev space',
  description:
    "Vijay Kumar Samanthapudi's dev space: LLM-powered projects, how they were built, and ideas along the way.",
  locale: 'en',
} as const;

export const NAV = [
  { label: 'Blog', href: '/blog/' },
  { label: 'Projects', href: '/projects/' },
  { label: 'Why now?', href: '/why-now/' },
] as const;

export const SOCIAL = [
  { label: 'GitHub', handle: 'vjsamanthapudi', href: 'https://github.com/vjsamanthapudi' },
  {
    label: 'LinkedIn',
    handle: 'vjsamanthapudi',
    href: 'https://www.linkedin.com/in/vjsamanthapudi/',
  },
  {
    label: 'Email',
    handle: 'vj.samanthapudi@gmail.com',
    href: 'mailto:vj.samanthapudi@gmail.com',
  },
] as const;

export const REPO_URL = 'https://github.com/vjsamanthapudi/vjsamanthapudi.github.io';
