'use client';

import { TrackingButton } from '@/components/TrackingButton';
import GoogleReviewBadge from './GoogleReviewBadge';
import ClutchReviewBadge from './ClutchReviewBadge';
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
    <section id="home" className="relative overflow-hidden py-20 sm:py-32 scroll-mt-24 md:scroll-mt-28">
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
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-wide leading-wide mb-8 text-gradient-primary text-shadow-soft font-montserrat" >
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
                className="bg-gradient-to-r from-emerald-400 to-blue-600 text-white px-10 py-5 text-xl font-semibold rounded-full shadow-xl hover:bg-blue-800 transition-all duration-300"
                eventName="cta_click"
                 size="lg"
                eventParams={{
                  label: ctaPrimary,
                  position: "primary",
                  location: "hero",
                }}
                >
                <span className="flex items-center gap-2">
                {ctaPrimary}
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                  </svg>
                </span>
                </TrackingButton>
            )}

            {ctaSecondary && ctaSecondaryUrl && (
              <TrackingButton
                href={ctaSecondaryUrl}
                variant="outline"
                size="lg"
                className="border-2 border-blue-900 text-blue-900 px-10 py-5 text-xl font-semibold rounded-full hover:bg-blue-900 hover:text-white transition-all duration-300 bg-white"
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
              <p className="font-medium text-lg text-gradient-primary">
                TRUSTED BY FOUNDERS SCALING SAAS, E-COMMERCE AND ENTERPRISE SOFTWARE.
              </p>

              <div className="flex flex-col md:flex-row items-center justify-center gap-8">
                <div className="flex items-center gap-4">
                  <GoogleReviewBadge rating={4.9} />
                </div>

                <div className="flex items-center gap-4">
                  <ClutchReviewBadge rating={5.0} />
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src="/assets/images/tech_logo.png"
                  alt="Technologies and tools we use"
                  className="w-full max-w-5xl h-auto object-contain opacity-90"
                  loading="lazy"
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

