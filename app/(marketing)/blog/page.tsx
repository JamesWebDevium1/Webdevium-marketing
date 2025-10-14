import { getClient } from '@/lib/apolloClient';
import { BLOG_ARCHIVE_QUERY, Post } from '@/lib/wp';
import { BlogCard } from '@/components/BlogCard';

export const revalidate = 300;

interface BlogArchiveData {
  posts: {
    nodes: Post[];
    pageInfo: {
      hasNextPage: boolean;
      endCursor: string;
    };
  };
}

export default async function BlogPage() {
  try {
    const { data } = await getClient().query<BlogArchiveData>({
      query: BLOG_ARCHIVE_QUERY,
      variables: { first: 12 },
    });

    const posts = data.posts.nodes;

    return (
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center mb-16">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600">
              Insights, tutorials, and updates from the Webdevium team
            </p>
          </div>

          {posts.length > 0 ? (
            <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
              {posts.map((post) => (
                <BlogCard key={post.id} post={post} />
              ))}
            </div>
          ) : (
            <div className="text-center py-12">
              <p className="text-gray-600">No posts found. Check back soon!</p>
            </div>
          )}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching blog posts:', error);
    
    return (
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-gray-600 mt-4">
              Configure your WordPress backend to see blog posts here.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

