'use client';

import { TrackingButton } from '@/components/TrackingButton';

export function HowItWorks() {
  return (
    <section id="how-it-works" className="py-6 md:py-6 relative scroll-mt-24 md:scroll-mt-28">
      <div className="mx-auto px-4 md:px-6 max-w-[1900px] max-h-[700px] min-h-[860px]">
        <div className="relative overflow-hidden rounded-3xl bg-[#0E5181] py-16 md:py-24 min-h-[760px]">
          {/* Curve line */}
          <img
            src="/assets/images/how-it-works-curve-line.png"
            alt=""
            loading="lazy"
            className="pointer-events-none absolute left-1/2 top-[55%] -translate-x-1/2 -translate-y-1/2 w-[1400px] max-w-none opacity-80"
          />


          {/* Heading */}
          <h1 className="relative z-[1] text-center text-white text-3xl md:text-4xl font-semibold tracking-[0.15em] uppercase" style={{marginTop:'-10px', marginBottom:'110px'}}>
            HOW IT WORKS
          </h1>

          {/* Steps */}
          <div className="relative z-[1] grid grid-cols-1 md:grid-cols-3 gap-20 md:gap-20 max-w-7xl mx-auto px-6 items-start">
            {/* Step 1 */}
            <div className="text-start ml-[90px]">
              <div className="relative inline-block mb-12">
                <span className="absolute -top-8 text-gradient-green text-7xl font-bold select-none" >01</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">Submit a Request</h3>
              <p className="text-white/80 max-w-sm mx-auto">
                Outline your feature, fix, or project directly in the dashboard.
              </p>
            </div>

            {/* Step 2 */}
            <div className="text-start mt-[200px] ml-[90px]" >
              <div className="relative inline-block mb-12">
                <span className="absolute  -top-8 text-gradient-green text-7xl font-bold select-none">02</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">We Build It</h3>
              <p className="text-white/80 max-w-sm mx-auto">
                Our pod scopes, manages, and delivers with PM + QA baked in.
              </p>
            </div>

            {/* Step 3 */}
            <div className="text-start -mt-[100px] ml-[90px]" >
              <div className="relative inline-block mb-12">
                 <span className="absolute -top-8 text-gradient-green text-7xl font-bold select-none">03</span>
              </div>
              <h3 className="text-white text-2xl md:text-3xl font-bold mb-8">Get Results</h3>
              <p className="text-white/80 max-w-sm mx-auto">
                Receive tested, production‑ready code. Rinse and repeat.
              </p>
            </div>
          </div>

          {/* CTA */}
          <div className="relative z-[1] text-center mt-32 md:mt-40">
            <p className="text-white text-base md:text-lg">
              Ready to start your first sprint?{' '}
              <TrackingButton
                href="https://calendly.com/webdevium"
                className="inline-flex items-center px-6 py-3 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition-colors mx-5"
                eventName="cta_click"
                eventParams={{ label: 'Book a Call', position: 'inline', location: 'how_it_works' }}
              >
                Book a Call
              </TrackingButton>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
