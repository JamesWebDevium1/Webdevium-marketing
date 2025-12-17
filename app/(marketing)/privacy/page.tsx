import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Privacy policy for Webdevium subscription-based software development services.',
};

export default function PrivacyPage() {
  return (
    <div className="py-24">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
            Webdevium Privacy Policy
          </h1>
          <p className="text-gray-600 mb-12 text-sm">
            Last Updated: September 2025
          </p>
          
          <div className="prose prose-lg max-w-none">
            <div className="space-y-8">
              <p className="text-gray-700 leading-relaxed">
                Webdevium LLC (&quot;Webdevium,&quot; &quot;we,&quot; &quot;us&quot;) respects your privacy.
              </p>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  1. Information We Collect
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may collect personal and business information such as name, email, billing details, and usage data.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  2. How We Use Information
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Information is used to provide services, process payments, communicate, and improve offerings.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  3. Payments
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Payments are processed by Stripe. Webdevium does not store credit card details.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  4. Data Security
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We take reasonable measures to protect data but cannot guarantee absolute security.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  5. Cookies
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may use cookies to improve user experience.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  6. Data Retention
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Data is retained only as long as necessary for business or legal purposes.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  7. Your Rights
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  You may request access, correction, or deletion of your data where applicable.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  8. Children&apos;s Privacy
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  Our services are not intended for individuals under 18.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  9. Updates
                </h2>
                <p className="text-gray-700 leading-relaxed">
                  We may update this policy periodically.
                </p>
              </section>

              <section className="space-y-4">
                <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                  10. Contact
                </h2>
                <div className="text-gray-700 leading-relaxed">
                  <p className="mb-2">Webdevium LLC</p>
                  <p>
                    Email:{' '}
                    <a 
                      href="mailto:tye@webdevium.com" 
                      className="text-blue-600 hover:text-blue-900 underline transition-colors"
                    >
                      tye@webdevium.com
                    </a>
                  </p>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
