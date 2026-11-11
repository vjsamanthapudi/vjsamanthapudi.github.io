import { getCollection, type CollectionEntry } from 'astro:content';

export type Post = CollectionEntry<'blog'>;
export type Project = CollectionEntry<'projects'>;

/** Drafts are visible while developing locally and hidden from the built site. */
const isVisible = (entry: { data: { draft: boolean } }) => import.meta.env.DEV || !entry.data.draft;

/** Published posts, newest first. */
export async function getPosts(): Promise<Post[]> {
  const posts = await getCollection('blog', isVisible);
  return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}

/** Published projects: featured first, then newest first. */
export async function getProjects(): Promise<Project[]> {
  const projects = await getCollection('projects', isVisible);
  return projects.sort(
    (a, b) =>
      Number(b.data.featured) - Number(a.data.featured) ||
      b.data.startDate.valueOf() - a.data.startDate.valueOf(),
  );
}
