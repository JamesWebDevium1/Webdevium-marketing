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
              price: '$3,500 / month',
              description: 'Best for early-stage SaaS, MVPs, and focused development needs.',
              bullets: [
                { bullet: 'Dedicated developer' },
                { bullet: '1 active task at a time' },
                { bullet: 'Continuous delivery & QA' },
                { bullet: 'Weekly progress summary' },
                { bullet: 'Async communication' },
              ],
              cta: 'Get Started',
              url: 'https://app.webdevium.com/signup',
            },
            {
              name: 'Growth',
              price: '$6,500 / month',
              description: 'Designed for growing products and agencies that need consistent velocity.',
              bullets: [
                { bullet: 'Dedicated developer + light PM support' },
                { bullet: '2 active tasks at a time' },
                { bullet: 'Faster turnaround' },
                { bullet: 'Feature development & integrations' },
                { bullet: 'Weekly progress summary' },
              ],
              cta: 'Get Started',
              url: 'https://app.webdevium.com/signup',
            },
            {
              name: 'Scale',
              price: '$12,000 / month',
              description: 'For funded startups and teams that need serious execution power.',
              bullets: [
                { bullet: 'Dedicated development team (1–2 devs)' },
                { bullet: '3–4 active tasks in parallel' },
                { bullet: 'Priority delivery queue' },
                { bullet: 'Ongoing planning & QA' },
                { bullet: 'Weekly demos & progress updates' },
              ],
              cta: 'Book a Call',
              url: '/contact',
            },
          ]}
        />
      </div>
    );
  }
}

