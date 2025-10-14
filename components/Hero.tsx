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
    <section className="relative overflow-hidden bg-white py-20 sm:py-32">
      {/* Decorative background shape - matching Figma */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-0 w-[800px] h-[600px] bg-gradient-to-br from-green-100 via-blue-100 to-blue-200 opacity-30 transform -translate-x-40 -translate-y-20 rounded-3xl" style={{
          clipPath: 'polygon(0% 0%, 85% 0%, 100% 100%, 0% 85%)'
        }}></div>
      </div>

      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-blue-900 mb-8 leading-tight">
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
                className="bg-green-500 text-white px-8 py-4 text-lg font-semibold rounded-lg shadow-lg hover:bg-green-600 transition-all duration-300"
                eventName="cta_click"
                eventParams={{
                  label: ctaPrimary,
                  position: 'primary',
                  location: 'hero',
                }}
              >
                <span className="flex items-center gap-2">
                  <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
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
                className="border-2 border-blue-900 text-blue-900 px-8 py-4 text-lg font-semibold rounded-lg hover:bg-blue-900 hover:text-white transition-all duration-300 bg-white"
                eventName="cta_click"
                eventParams={{
                  label: ctaSecondary,
                  position: 'secondary',
                  location: 'hero',
                }}
              >
                <span className="flex items-center gap-2">
                  {ctaSecondary}
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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
                  <div className="text-2xl font-bold text-blue-900">Google</div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-blue-900">4.9</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-blue-900 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                  <div className="text-sm text-gray-600">Google Reviews</div>
                </div>

                <div className="flex items-center gap-4">
                  <div className="text-2xl font-bold text-blue-900">Clutch</div>
                  <div className="flex items-center gap-2">
                    <div className="text-3xl font-bold text-blue-900">5.0</div>
                    <div className="text-sm text-blue-900 font-semibold">RATING</div>
                    <div className="flex">
                      {[...Array(5)].map((_, i) => (
                        <svg key={i} className="w-6 h-6 text-blue-900 fill-current" viewBox="0 0 20 20">
                          <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                        </svg>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
                {['JS', 'A', 'C', '5', 'PHP', 'Python', 'React', 'Node.js'].map((tech, i) => (
                  <div key={i} className="text-2xl font-bold text-gray-400">
                    {tech}
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}

