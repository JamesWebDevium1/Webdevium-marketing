export default function BlogPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-2xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Blog
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Insights, tutorials, and updates from the Webdevium team
            </p>
            <div className="bg-white rounded-lg shadow-sm p-8">
              <p className="text-gray-600">
                Blog posts will appear here once your WordPress backend is connected.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                Configure your WP_GRAPHQL_ENDPOINT in .env.local to see blog content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}