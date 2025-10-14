export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white">
      <div className="py-24 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
              Contact Us
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Ready to scale your engineering team? Let's talk about how Webdevium can help.
            </p>
            
            <div className="bg-gray-50 rounded-lg p-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">Get Started</h3>
                  <p className="text-gray-600 mb-4">
                    Book a call with our team to discuss your project needs and see how we can help.
                  </p>
                  <a 
                    href="https://calendly.com/webdevium"
                    className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors"
                  >
                    Book a Call
                  </a>
                </div>
                
                <div>
                  <h3 className="text-xl font-semibold text-gray-900 mb-4">General Inquiry</h3>
                  <p className="text-gray-600 mb-4">
                    Have questions about our services? Send us a message and we'll get back to you.
                  </p>
                  <a 
                    href="mailto:hello@webdevium.com"
                    className="inline-flex items-center px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors"
                  >
                    Send Email
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
