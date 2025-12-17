import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Terms and conditions for using Webdevium subscription-based software development services.',
};

export default function TermsPage() {
  return (
    <div className="py-24">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-4">
              Webdevium Terms & Conditions
            </h1>
            <p className="text-gray-600 mb-12 text-sm">
              Last Updated: September 2025
            </p>
            
            <div className="prose prose-lg max-w-none">
              <div className="space-y-8">
                <p className="text-gray-700 leading-relaxed">
                  These Terms & Conditions (&quot;Terms&quot;) govern your access to and use of services provided by Webdevium LLC (&quot;Webdevium,&quot; &quot;we,&quot; &quot;us,&quot; or &quot;our&quot;). By purchasing or using our services, you agree to be bound by these Terms.
                </p>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    1. Services Overview
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Webdevium provides subscription-based software development services. Services are capacity-based and delivered on a monthly recurring basis.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    2. Subscription Model
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All services are billed monthly in advance and renew automatically unless canceled. Services are provided based on plan throughput and priority, not hourly billing.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    3. Scope of Work
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Clients submit tasks through agreed channels. Webdevium may reasonably break work into phases. Work outside scope may require a plan upgrade.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    4. No Hourly Billing
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Webdevium does not guarantee a specific number of hours. Internal time tracking is used only for planning and quality assurance.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    5. Payment & Billing
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    All fees are non-refundable. Failed payments may result in suspension of services.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    6. Cancellation
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Clients may cancel at any time. Cancellation takes effect at the end of the current billing cycle.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    7. Intellectual Property
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Upon full payment, clients own final deliverables. Webdevium retains rights to internal tools and non-client-specific code.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    8. Client Responsibilities
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Clients must provide timely feedback, access, and lawful content.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    9. No Guarantees
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Webdevium makes no guarantees regarding business outcomes or timelines.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    10. Limitation of Liability
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    Liability is limited to fees paid in the previous 30 days.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    11. Governing Law
                  </h2>
                  <p className="text-gray-700 leading-relaxed">
                    These Terms are governed by the laws of the State of Texas.
                  </p>
                </section>

                <section className="space-y-4">
                  <h2 className="text-2xl font-semibold text-gray-900 mt-8 mb-4">
                    12. Contact
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
