export default function ClientSpotlightPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Client Spotlight
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Discover how our clients are scaling their engineering teams with Webdevium
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <p className="text-gray-600">
                Client success stories will be featured here.
              </p>
              <p className="text-sm text-gray-500 mt-4">
                This page will showcase detailed case studies and testimonials from our clients.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
