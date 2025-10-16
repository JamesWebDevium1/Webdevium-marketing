import Link from 'next/link';
import { Clock } from 'lucide-react';
import { Post } from '@/lib/wp';
import { formatDate } from '@/lib/utils';

interface BlogCardProps {
  post: Post;
}

export function BlogCard({ post }: BlogCardProps) {
  const category = post.categories.nodes[0];
  const readingTime = post.acfPostExtras?.readingTime;

  return (
    <article className="group relative flex flex-col overflow-hidden rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 transition-all hover:shadow-lg">
      {post.featuredImage && (
        <Link href={`/blog/${post.slug}`} className="relative aspect-[16/9] overflow-hidden">
          <img
            src={post.featuredImage.node.mediaItemUrl}
            alt={post.featuredImage.node.altText || post.title}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
          />
        </Link>
      )}

      <div className="flex flex-1 flex-col p-6">
        <div className="flex items-center gap-3 text-sm text-gray-500 mb-3">
          {category && (
            <Link
              href={`/blog/category/${category.slug}`}
              className="font-medium text-blue-600 hover:text-blue-700"
            >
              {category.name}
            </Link>
          )}
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

        <h3 className="text-xl font-semibold text-gray-900 mb-3 line-clamp-2">
          <Link href={`/blog/${post.slug}`} className="hover:text-blue-600 transition-colors">
            {post.title}
          </Link>
        </h3>

        <div
          className="text-gray-600 line-clamp-3 mb-4 flex-1"
          dangerouslySetInnerHTML={{ __html: post.excerpt }}
        />

        <div className="flex items-center gap-3 mt-auto pt-4 border-t">
          {post.author.node.avatar && (
            <img
              src={post.author.node.avatar.url}
              alt={post.author.node.name}
              width={40}
              height={40}
              className="rounded-full"
            />
          )}
          <div className="text-sm">
            <p className="font-medium text-gray-900">{post.author.node.name}</p>
          </div>
        </div>
      </div>
    </article>
  );
}

