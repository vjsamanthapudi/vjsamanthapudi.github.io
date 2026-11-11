---
title: This website
description: A personal dev space built with Astro and published to GitHub Pages.
status: active
startDate: 2026-11-09
stack: [Astro, TypeScript, Markdown, GitHub Actions, GitHub Pages]
repo: https://github.com/vjsamanthapudi/vjsamanthapudi.github.io
featured: true
---

The site you're reading. It started as a single HTML file and a stylesheet, and was then rebuilt
on Astro so that adding a page no longer means copying the header and footer by hand.

## How it works

- **Content is Markdown.** Each blog post and project is one file under `src/content/`. The front
  matter at the top of every file is checked against a schema at build time, so a missing date or
  a mistyped field fails the build instead of reaching the live site.
- **Pages are generated.** The list pages, the RSS feed, and the sitemap are built from those
  files. Nothing is listed by hand.
- **No client-side JavaScript.** The output is plain HTML and CSS, with light and dark themes that
  follow the system setting.
- **Deploys are automatic.** Every push to `main` runs formatting and type checks, builds the
  site, and publishes it to GitHub Pages through GitHub Actions.

## Source

The code is open on [GitHub](https://github.com/vjsamanthapudi/vjsamanthapudi.github.io).
