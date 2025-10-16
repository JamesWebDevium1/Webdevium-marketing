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
        
            <div className="flex flex-col md:flex-row items-center gap-8">
              <div className="flex-shrink-0">
                <div className="w-[260px] bg-gradient-to-br from-blue-400 to-blue-600 rounded-12 flex items-center justify-center text-white text-2xl font-bold">
                  <img src="/assets/images/charles-morse.png" alt="Charles Morse" className="object-cover rounded-12" />
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
