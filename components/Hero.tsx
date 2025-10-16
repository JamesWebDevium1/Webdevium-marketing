'use client';

import { TrackingButton } from '@/components/TrackingButton';
import { ProgrammingIcons } from '@/components/ProgrammingIcons';
import { WPImage } from '@/lib/wp';

interface HeroProps {
  kicker?: string;
  title: string;
  subtitle?: string;
  ctaPrimary?: string;
  ctaPrimaryUrl?: string;
  ctaSecondary?: string;
  ctaSecondaryUrl?: string;
  heroImage?: WPImage;
  showReviews?: boolean;
}

export function Hero({
  kicker,
  title,
  subtitle,
  ctaPrimary,
  ctaPrimaryUrl,
  ctaSecondary,
  ctaSecondaryUrl,
  heroImage,
  showReviews = false,
}: HeroProps) {
  return (
    <section className="relative overflow-hidden py-20 sm:py-32 image-container">
      <div className="absolute inset-0 z-0 pointer-events-none">
       
        <img
          src="/assets/images/back-vector-1.png"
          alt=""
          loading="lazy"
          className="hidden md:block absolute  top-40 w-[260px] lg:w-[360px] opacity-70"
        />
        <img
          src="/assets/images/back-vector-2.png"
          alt=""
          loading="lazy"
          className="hidden md:block absolute top-40 right-0 w-[260px] lg:w-[360px] opacity-70"
        />
        <img
          src="/assets/images/back-stroke-1.png"
          alt=""
          loading="lazy"
          className="hidden md:block absolute left-10  bottom-8 w-[420px] lg:w-[520px] opacity-60"
        />
        <img
          src="/assets/images/back-vector-white.png"
          alt=""
          loading="lazy"
          className="hidden md:block absolute right-10 bottom-30 w-[260px] lg:w-[520px] opacity-60"
        />
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-blue-900 mb-8 leading-tight">
            {title}
          </h1>

          {subtitle && (
            <p className="text-xl md:text-2xl text-gray-700 mb-12 max-w-4xl mx-auto leading-relaxed">
              {subtitle}
            </p>
          )}

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-16">
            {ctaPrimary && ctaPrimaryUrl && (
              <TrackingButton
                href={ctaPrimaryUrl}
                size="xl"
                className="bg-blue-900 text-white px-10 py-5 text-xl font-semibold rounded-lg shadow-xl hover:bg-blue-800 transition-all duration-300"
                eventName="cta_click"
                eventParams={{
                  label: ctaPrimary,
                  position: 'primary',
                  location: 'hero',
                }}
              >
                <span className="flex items-center gap-3">
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z" clipRule="evenodd" />
                  </svg>
                  {ctaPrimary}
                </span>
              </TrackingButton>
            )}

            {ctaSecondary && ctaSecondaryUrl && (
              <TrackingButton
                href={ctaSecondaryUrl}
                variant="outline"
                size="xl"
                className="border-2 border-blue-900 text-blue-900 px-10 py-5 text-xl font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 bg-white"
                eventName="cta_click"
                eventParams={{
                  label: ctaSecondary,
                  position: 'secondary',
                  location: 'hero',
                }}
              >
                <span className="flex items-center gap-3">
                  {ctaSecondary}
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </span>
              </TrackingButton>
            )}
          </div>

          {showReviews && (
            <div className="space-y-8">
              <p className="text-green-600 font-medium text-lg">
                TRUSTED BY FOUNDERS SCALING SAAS, E-COMMERCE AND ENTERPRISE SOFTWARE.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <img src="/assets/images/google-review.png" alt="Google" className="w-50 h-40" />
                </div>

                 <div className="flex items-center gap-4">
                    <img src="/assets/images/clutch-review.png" alt="Clutch" className="w-80 h-40" />
                  </div>
              </div>

              <ProgrammingIcons />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

