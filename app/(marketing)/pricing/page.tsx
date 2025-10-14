import { getClient } from '@/lib/apolloClient';
import { PRICING_QUERY } from '@/lib/wp';
import { Pricing } from '@/components/Pricing';
import { Prose } from '@/components/Prose';

export const revalidate = 300;

export default async function PricingPage() {
  try {
    const { data } = await getClient().query({
      query: PRICING_QUERY,
      variables: { slug: 'pricing' },
    });

    return (
      <div className="py-24">
        <div className="container mx-auto px-4 mb-12">
          <h1 className="text-4xl font-bold text-center mb-4">{data.page.title}</h1>
          {data.page.content && (
            <div className="max-w-3xl mx-auto">
              <Prose html={data.page.content} />
            </div>
          )}
        </div>

        {data.page.acfPricing?.pricing && (
          <Pricing tiers={data.page.acfPricing.pricing} />
        )}
      </div>
    );
  } catch (error) {
    console.error('Error fetching pricing page:', error);
    
    // Fallback pricing
    return (
      <div className="py-24">
        <Pricing
          tiers={[
            {
              name: 'Starter',
              price: '$29/mo',
              bullets: [
                { bullet: '10 projects' },
                { bullet: '100GB bandwidth' },
                { bullet: 'Email support' },
              ],
              cta: 'Get Started',
              url: 'https://app.webdevium.com/signup',
            },
            {
              name: 'Pro',
              price: '$79/mo',
              bullets: [
                { bullet: 'Unlimited projects' },
                { bullet: '500GB bandwidth' },
                { bullet: 'Priority support' },
                { bullet: 'Advanced analytics' },
              ],
              cta: 'Get Started',
              url: 'https://app.webdevium.com/signup',
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              bullets: [
                { bullet: 'Everything in Pro' },
                { bullet: 'Custom bandwidth' },
                { bullet: '24/7 phone support' },
                { bullet: 'Dedicated account manager' },
              ],
              cta: 'Contact Sales',
              url: '/contact',
            },
          ]}
        />
      </div>
    );
  }
}

