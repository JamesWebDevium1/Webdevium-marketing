interface BlogPostPageProps {
  params: {
    slug: string;
  };
}

export default function BlogPostPage({ params }: BlogPostPageProps) {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="mb-8">
              <button 
                onClick={() => window.history.back()}
                className="text-blue-600 hover:text-blue-700 font-medium mb-4"
              >
                ← Back to Blog
              </button>
            </div>
            
            <article className="prose prose-lg max-w-none">
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Blog Post: {params.slug}
              </h1>
              
              <div className="bg-gray-50 rounded-lg p-8 text-center">
                <p className="text-gray-600 mb-4">
                  This blog post will load once your WordPress backend is connected.
                </p>
                <p className="text-sm text-gray-500">
                  Configure your WP_GRAPHQL_ENDPOINT in .env.local to see blog content.
                </p>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
}