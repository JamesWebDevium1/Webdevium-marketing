import Image from 'next/image';
import { TrackingButton } from '@/components/TrackingButton';
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
}: HeroProps) {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white py-20 sm:py-32">
      <div className="container mx-auto px-4">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-8 items-center">
          <div className="mx-auto max-w-2xl lg:mx-0">
            {kicker && (
              <div className="mb-6">
                <span className="inline-flex items-center rounded-full bg-blue-100 px-4 py-1.5 text-sm font-medium text-blue-700">
                  {kicker}
                </span>
              </div>
            )}

            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-6xl text-balance">
              {title}
            </h1>

            {subtitle && (
              <p className="mt-6 text-lg leading-8 text-gray-600 text-balance">
                {subtitle}
              </p>
            )}

            <div className="mt-10 flex flex-wrap items-center gap-4">
              {ctaPrimary && ctaPrimaryUrl && (
                <TrackingButton
                  href={ctaPrimaryUrl}
                  size="xl"
                  eventName="cta_click"
                  eventParams={{
                    label: ctaPrimary,
                    position: 'primary',
                    location: 'hero',
                  }}
                >
                  {ctaPrimary}
                </TrackingButton>
              )}

              {ctaSecondary && ctaSecondaryUrl && (
                <TrackingButton
                  href={ctaSecondaryUrl}
                  variant="outline"
                  size="xl"
                  eventName="cta_click"
                  eventParams={{
                    label: ctaSecondary,
                    position: 'secondary',
                    location: 'hero',
                  }}
                >
                  {ctaSecondary}
                </TrackingButton>
              )}
            </div>
          </div>

          {heroImage && (
            <div className="relative aspect-[4/3] lg:aspect-square">
              <Image
                src={heroImage.mediaItemUrl}
                alt={heroImage.altText || title}
                fill
                priority
                className="rounded-2xl object-cover shadow-2xl"
                sizes="(max-width: 768px) 100vw, 50vw"
              />
            </div>
          )}
        </div>
      </div>

      {/* Decorative background elements */}
      <div
        className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
        aria-hidden="true"
      >
        <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-blue-400 to-purple-400 opacity-20 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]" />
      </div>
    </section>
  );
}

