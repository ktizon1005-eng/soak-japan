import { getCollection } from 'astro:content';

// Published guides, newest first. Drafts are left out of every page, feed and sitemap.
export async function getPosts() {
	const posts = await getCollection('blog', ({ data }) => !data.draft);
	return posts.sort((a, b) => b.data.pubDate.valueOf() - a.data.pubDate.valueOf());
}
