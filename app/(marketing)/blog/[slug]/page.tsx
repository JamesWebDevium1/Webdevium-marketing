import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { getClient } from '@/lib/apolloClient';
import { BLOG_POST_QUERY, ALL_POSTS_SLUGS, RELATED_POSTS_QUERY, Post } from '@/lib/wp';
import { Prose } from '@/components/Prose';
import { BlogCard } from '@/components/BlogCard';
import { Button } from '@/components/ui/button';
import { formatDate } from '@/lib/utils';
import { Clock, ArrowLeft } from 'lucide-react';

export const revalidate = 300;

interface BlogPostData {
  post: Post;
}

interface RelatedPostsData {
  posts: {
    nodes: Post[];
  };
}

export async function generateStaticParams() {
  try {
    const { data } = await getClient().query({
      query: ALL_POSTS_SLUGS,
    });

    return data.posts.nodes.map((post: { slug: string }) => ({
      slug: post.slug,
    }));
  } catch (error) {
    return [];
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: { slug: string };
}) {
  try {
    const { data } = await getClient().query<BlogPostData>({
      query: BLOG_POST_QUERY,
      variables: { slug: params.slug },
    });

    if (!data.post) {
      notFound();
    }

    const post = data.post;
    const category = post.categories.nodes[0];
    const readingTime = post.acfPostExtras?.readingTime;

    // Fetch related posts
    let relatedPosts: Post[] = [];
    if (post.tags && post.tags.nodes.length > 0) {
      try {
        const tagIds = post.tags.nodes.map((tag) => tag.slug);
        const { data: relatedData } = await getClient().query<RelatedPostsData>({
          query: RELATED_POSTS_QUERY,
          variables: {
            tagIds,
            excludeId: post.id,
            first: 3,
          },
        });
        relatedPosts = relatedData.posts.nodes;
      } catch (error) {
        console.error('Error fetching related posts:', error);
      }
    }

    return (
      <article className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <Link
            href="/blog"
            className="inline-flex items-center gap-2 text-sm text-gray-600 hover:text-gray-900 mb-8"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Blog
          </Link>

          {/* Header */}
          <header className="max-w-4xl mx-auto mb-12">
            {category && (
              <Link
                href={`/blog/category/${category.slug}`}
                className="inline-block text-sm font-medium text-blue-600 hover:text-blue-700 mb-4"
              >
                {category.name}
              </Link>
            )}

            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 text-balance">
              {post.title}
            </h1>

            <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
              <div className="flex items-center gap-3">
                {post.author.node.avatar && (
                  <Image
                    src={post.author.node.avatar.url}
                    alt={post.author.node.name}
                    width={40}
                    height={40}
                    className="rounded-full"
                  />
                )}
                <span className="font-medium text-gray-900">
                  {post.author.node.name}
                </span>
              </div>
              <span>·</span>
              <time dateTime={post.date}>{formatDate(post.date)}</time>
              {readingTime && (
                <>
                  <span>·</span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {readingTime} min read
                  </span>
                </>
              )}
            </div>
          </header>

          {/* Featured Image */}
          {post.featuredImage && (
            <div className="relative aspect-[21/9] max-w-6xl mx-auto mb-12 rounded-2xl overflow-hidden">
              <Image
                src={post.featuredImage.node.mediaItemUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                priority
                className="object-cover"
                sizes="(max-width: 1280px) 100vw, 1280px"
              />
            </div>
          )}

          {/* Content */}
          <div className="max-w-3xl mx-auto">
            <Prose html={post.content} />

            {/* Post CTA */}
            {post.acfPostExtras?.postCtaLabel && post.acfPostExtras?.postCtaUrl && (
              <div className="mt-12 p-8 bg-blue-50 rounded-2xl text-center">
                <h3 className="text-2xl font-bold text-gray-900 mb-4">
                  Ready to get started?
                </h3>
                <Button asChild size="lg">
                  <Link href={post.acfPostExtras.postCtaUrl}>
                    {post.acfPostExtras.postCtaLabel}
                  </Link>
                </Button>
              </div>
            )}

            {/* Author Bio */}
            {post.author.node.description && (
              <div className="mt-12 p-6 bg-gray-50 rounded-2xl">
                <div className="flex items-start gap-4">
                  {post.author.node.avatar && (
                    <Image
                      src={post.author.node.avatar.url}
                      alt={post.author.node.name}
                      width={64}
                      height={64}
                      className="rounded-full"
                    />
                  )}
                  <div>
                    <p className="font-semibold text-gray-900 mb-2">
                      About {post.author.node.name}
                    </p>
                    <p className="text-gray-600 text-sm">
                      {post.author.node.description}
                    </p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Related Posts */}
          {relatedPosts.length > 0 && (
            <div className="mt-20 max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">
                Related Articles
              </h2>
              <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
                {relatedPosts.map((relatedPost) => (
                  <BlogCard key={relatedPost.id} post={relatedPost} />
                ))}
              </div>
            </div>
          )}
        </div>
      </article>
    );
  } catch (error) {
    console.error('Error fetching blog post:', error);
    notFound();
  }
}

