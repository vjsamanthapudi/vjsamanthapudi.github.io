import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/**
 * Content collections. Each Markdown file's front matter is validated against
 * the schema below at build time, so a missing or mistyped field fails the
 * build instead of reaching the live site.
 *
 * Files whose name starts with an underscore (such as _template.md) are ignored.
 */

const blog = defineCollection({
  loader: glob({ base: './src/content/blog', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string().max(80),
    description: z.string().max(200),
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    tags: z.array(z.string()).default([]),
    draft: z.boolean().default(false),
  }),
});

const projects = defineCollection({
  loader: glob({ base: './src/content/projects', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string().max(80),
    description: z.string().max(200),
    status: z.enum(['idea', 'active', 'shipped', 'paused']),
    startDate: z.coerce.date(),
    stack: z.array(z.string()).default([]),
    repo: z.url().optional(),
    url: z.url().optional(),
    featured: z.boolean().default(false),
    draft: z.boolean().default(false),
  }),
});

export const collections = { blog, projects };
