# vjsamanthapudi.github.io

[![CI](https://github.com/vjsamanthapudi/vjsamanthapudi.github.io/actions/workflows/ci.yml/badge.svg)](https://github.com/vjsamanthapudi/vjsamanthapudi.github.io/actions/workflows/ci.yml)
[![Deploy](https://github.com/vjsamanthapudi/vjsamanthapudi.github.io/actions/workflows/deploy.yml/badge.svg)](https://github.com/vjsamanthapudi/vjsamanthapudi.github.io/actions/workflows/deploy.yml)

Source for my personal dev space: notes, projects, and ideas.

**Live:** <https://vjsamanthapudi.github.io>

## Stack

- [Astro](https://astro.build) with TypeScript in strict mode
- Markdown content collections with schema-validated front matter
- Plain CSS with design tokens, light and dark themes, and no client-side JavaScript
- RSS feed, sitemap, and `robots.txt` generated at build time
- GitHub Actions for checks and for deployment to GitHub Pages

## Getting started

Requires Node.js 22 or newer (see `.nvmrc`).

```sh
npm install
npm run dev
```

The site is then served at <http://localhost:4321>.

| Command           | What it does                                         |
| ----------------- | ---------------------------------------------------- |
| `npm run dev`     | Start the local dev server with live reload          |
| `npm run build`   | Build the production site into `dist/`               |
| `npm run preview` | Serve the built site locally                         |
| `npm run check`   | Type-check `.astro` and `.ts` files                  |
| `npm run format`  | Format every file with Prettier                      |
| `npm run verify`  | Run the same checks as CI: format, type-check, build |

## Project structure

```text
.
├── .github/workflows/     CI checks and the GitHub Pages deployment
├── public/                Files copied to the site root as they are
├── src/
│   ├── components/        Reusable pieces: header, footer, lists, badges
│   ├── content/
│   │   ├── blog/          One Markdown file per post
│   │   └── projects/      One Markdown file per project
│   ├── layouts/           Page shells shared by every page
│   ├── lib/               Content queries and formatting helpers
│   ├── pages/             Routes; each file becomes a URL
│   ├── styles/            Global stylesheet and design tokens
│   ├── content.config.ts  Schemas for the content collections
│   └── site.config.ts     Site name, navigation, and contact links
└── astro.config.mjs       Astro settings, including the public site URL
```

## Adding content

### A blog post

1. Copy `src/content/blog/_template.md` to a new file in the same folder. The file name becomes
   the URL: `my-first-post.md` is published at `/blog/my-first-post/`.
2. Fill in the front matter and write the post in Markdown.
3. Set `draft: false` when it is ready, then commit and push.

### A project

1. Copy `src/content/projects/_template.md` to a new file in the same folder.
2. Fill in the front matter. `status` is one of `idea`, `active`, `shipped`, or `paused`.
3. Set `draft: false` when it is ready, then commit and push.

Drafts are shown by `npm run dev` and left out of the production build. The list pages, the home
page, the RSS feed, and the sitemap pick up new files on their own.

### A new page

Add an `.astro` file under `src/pages/` and wrap its content in `BaseLayout`. To show it in the
header, add an entry to `NAV` in `src/site.config.ts`.

## Deployment

Every push to `main` builds the site and publishes it to GitHub Pages through
`.github/workflows/deploy.yml`. The repository's Pages source must be set to **GitHub Actions**
under Settings → Pages.

The public URL is defined once, as `SITE_URL` in `astro.config.mjs`. To serve the site from a
custom domain, change that value and add a `public/CNAME` file containing the domain.

## License

The code is released under the [MIT License](LICENSE). The writing under `src/content/` is
© Vijay Kumar Samanthapudi; please ask before republishing it.
