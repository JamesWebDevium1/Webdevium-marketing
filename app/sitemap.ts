import { MetadataRoute } from 'next';
import { getClient } from '@/lib/apolloClient';
import { ALL_POSTS_SLUGS } from '@/lib/wp';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webdevium.com';

  // Static pages
  const routes = ['', '/pricing', '/how-it-works', '/blog'].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date().toISOString(),
    changeFrequency: 'daily' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  // Dynamic blog posts
  try {
    const { data } = await getClient().query({
      query: ALL_POSTS_SLUGS,
    });

    const posts = data.posts.nodes.map((post: { slug: string }) => ({
      url: `${baseUrl}/blog/${post.slug}`,
      lastModified: new Date().toISOString(),
      changeFrequency: 'weekly' as const,
      priority: 0.6,
    }));

    return [...routes, ...posts];
  } catch (error) {
    console.error('Error generating sitemap:', error);
    return routes;
  }
}

