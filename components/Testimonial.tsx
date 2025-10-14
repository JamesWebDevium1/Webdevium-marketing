export function Testimonial() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8">
            REAL COMPANIES, REAL OUTCOMES.
          </h2>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-2xl shadow-lg p-8 md:p-12 relative">
            {/* Quote icon */}
            <div className="absolute top-8 right-8 w-16 h-16 bg-gradient-to-br from-green-400 to-blue-600 rounded-full flex items-center justify-center">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h4v10h-10z"/>
              </svg>
            </div>

            <div className="flex flex-col md:flex-row items-start gap-8">
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-br from-blue-400 to-blue-600 rounded-full flex items-center justify-center text-white text-2xl font-bold">
                  CM
                </div>
              </div>

              <div className="flex-1">
                <h3 className="text-2xl font-bold text-blue-900 mb-4">
                  CHARLES' STORY
                </h3>
                
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  "We partnered with Webdevium to build a custom logistics platform that transformed how we manage hospital operations nationwide. Their team is fast, approachable, and deeply invested in helping us scale — delivering quality and efficiency every step of the way. After 7+ years together, Webdevium remains a trusted partner, flexing capacity as needed and keeping our costs lean."
                </p>

                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div>
                    <h4 className="font-bold text-blue-900">Charles Morse</h4>
                    <p className="text-gray-600">Founder & CEO - Adonius Corp</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
