import { TrackingButton } from '@/components/TrackingButton';

export function HowItWorks() {
  const steps = [
    {
      number: "01",
      title: "Submit a Request",
      description: "Outline your feature, fix, or project directly in the Webdevium dashboard.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
        </svg>
      ),
    },
    {
      number: "02",
      title: "We Build It",
      description: "Our team scopes, manages, and delivers — with PM + QA baked in.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
        </svg>
      ),
    },
    {
      number: "03",
      title: "Get Results",
      description: "Receive tested, production-ready code. Rinse and repeat.",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="py-24 bg-blue-900 relative overflow-hidden">
      {/* Rounded top corners */}
      <div className="absolute top-0 left-0 w-full h-8 bg-white rounded-t-3xl"></div>

      <div className="container mx-auto px-4 relative">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
            HOW IT WORKS
          </h2>
        </div>

        <div className="grid gap-12 md:grid-cols-3 max-w-6xl mx-auto relative">
          {/* Connection line for desktop */}
          <div className="hidden md:block absolute top-16 left-1/2 transform -translate-x-1/2 w-full h-0.5 bg-gradient-to-r from-green-400 to-blue-600"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="text-center relative z-10">
              <div className="mb-6">
                <div className="inline-flex items-center justify-center w-12 h-12 bg-gradient-to-br from-green-400 to-blue-600 text-white rounded-lg mb-4">
                  {step.icon}
                </div>
                <div className="text-4xl font-bold text-green-400 mb-4">
                  {step.number}
                </div>
              </div>
              
              <h3 className="text-xl font-bold text-white mb-4">
                {step.title}
              </h3>
              
              <p className="text-gray-300 leading-relaxed">
                {step.description}
              </p>
            </div>
          ))}
        </div>

        <div className="text-center mt-16">
          <p className="text-white text-lg mb-6">
            Ready to start your first sprint?{' '}
            <TrackingButton
              href="https://calendly.com/webdevium"
              className="text-green-400 hover:text-green-300 underline font-semibold"
              eventName="cta_click"
              eventParams={{
                label: "Book a Call",
                position: "inline",
                location: "how_it_works",
              }}
            >
              Book a Call
            </TrackingButton>
          </p>
        </div>
      </div>
    </section>
  );
}
