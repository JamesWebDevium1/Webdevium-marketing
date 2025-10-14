import { getClient } from '@/lib/apolloClient';
import { HOMEPAGE_QUERY, HomeACF } from '@/lib/wp';
import { Hero } from '@/components/Hero';
import { LogoBar } from '@/components/LogoBar';
import { Steps } from '@/components/Steps';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';

export const revalidate = 300; // 5 minutes

interface HomepageData {
  page: {
    title: string;
    acfHome: HomeACF;
    seo?: any;
  };
}

export default async function HomePage() {
  try {
    const { data } = await getClient().query<HomepageData>({
      query: HOMEPAGE_QUERY,
      variables: { id: process.env.HOMEPAGE_DBID || '2' },
    });

    const acf = data.page.acfHome;

    return (
      <>
        <Hero
          kicker={acf.heroKicker}
          title={acf.heroTitle}
          subtitle={acf.heroSub}
          ctaPrimary={acf.ctaPrimary}
          ctaPrimaryUrl={acf.ctaPrimaryUrl}
          ctaSecondary={acf.ctaSecondary}
          ctaSecondaryUrl={acf.ctaSecondaryUrl}
          heroImage={acf.heroImage}
        />

        {acf.logoBar && <LogoBar logos={acf.logoBar} />}

        {acf.steps && <Steps steps={acf.steps} />}

        {acf.pricing && <Pricing tiers={acf.pricing} />}

        {acf.faq && <FAQ faqs={acf.faq} />}
      </>
    );
  } catch (error) {
    console.error('Error fetching homepage:', error);
    
    // Beautiful fallback content when WP is not configured
    return (
      <>
        <Hero
          kicker="✨ Introducing Webdevium"
          title="Build and Deploy Modern Web Apps in Minutes"
          subtitle="The all-in-one platform for developers who want to ship faster. From idea to production with powerful tools and seamless deployment."
          ctaPrimary="Get Started Free"
          ctaPrimaryUrl="https://app.webdevium.com/signup"
          ctaSecondary="Watch Demo"
          ctaSecondaryUrl="/how-it-works"
        />

        <Steps
          title="How It Works"
          subtitle="Get started in minutes with our simple 4-step process"
          steps={[
            {
              icon: '🚀',
              title: 'Sign Up in Seconds',
              body: 'Create your account with just an email address. No credit card required. Start building immediately with our generous free tier.',
            },
            {
              icon: '⚙️',
              title: 'Configure Your Project',
              body: 'Use our intuitive setup wizard to configure your project. Choose your stack, connect repositories, and set environment variables.',
            },
            {
              icon: '🎨',
              title: 'Build Your Application',
              body: 'Write code with powerful IDE integration, real-time collaboration, and AI-powered suggestions. Build faster with pre-built components.',
            },
            {
              icon: '🌐',
              title: 'Deploy Globally',
              body: 'Push to production with a single command. Your app is automatically deployed to our global edge network for lightning-fast performance.',
            },
          ]}
        />

        <Pricing
          title="Simple, Transparent Pricing"
          subtitle="Choose the plan that works best for you. Start free, scale as you grow."
          tiers={[
            {
              name: 'Starter',
              price: '$29/mo',
              bullets: [
                { bullet: '10 projects' },
                { bullet: '100GB bandwidth' },
                { bullet: '1 team member' },
                { bullet: 'Email support' },
                { bullet: 'Community access' },
                { bullet: 'Basic analytics' },
              ],
              cta: 'Start Free Trial',
              url: 'https://app.webdevium.com/signup?plan=starter',
            },
            {
              name: 'Professional',
              price: '$79/mo',
              bullets: [
                { bullet: 'Unlimited projects' },
                { bullet: '500GB bandwidth' },
                { bullet: '5 team members' },
                { bullet: 'Priority support' },
                { bullet: 'Advanced analytics' },
                { bullet: 'Custom domains' },
                { bullet: 'Preview deployments' },
                { bullet: 'Team collaboration' },
              ],
              cta: 'Start Free Trial',
              url: 'https://app.webdevium.com/signup?plan=pro',
            },
            {
              name: 'Enterprise',
              price: 'Custom',
              bullets: [
                { bullet: 'Everything in Pro' },
                { bullet: 'Unlimited bandwidth' },
                { bullet: 'Unlimited team members' },
                { bullet: '24/7 phone support' },
                { bullet: 'Dedicated account manager' },
                { bullet: 'SLA guarantee' },
                { bullet: 'Custom integrations' },
                { bullet: 'On-premise option' },
              ],
              cta: 'Contact Sales',
              url: '/contact',
            },
          ]}
        />

        <FAQ
          title="Frequently Asked Questions"
          faqs={[
            {
              q: 'Do I need a credit card to sign up?',
              a: "No! You can start with our free tier without providing any payment information. Upgrade when you're ready to unlock more features.",
            },
            {
              q: 'Can I change plans later?',
              a: "Absolutely. You can upgrade or downgrade your plan at any time. Changes take effect immediately, and we'll prorate any charges.",
            },
            {
              q: 'What kind of support do you offer?',
              a: 'All plans include email support. Professional and Enterprise plans get priority support with faster response times. Enterprise customers also get 24/7 phone support.',
            },
            {
              q: 'Is there a setup fee?',
              a: 'No setup fees, ever. You only pay for your monthly subscription, and you can cancel anytime.',
            },
            {
              q: 'Do you offer refunds?',
              a: "Yes! If you're not satisfied within the first 30 days, we'll give you a full refund, no questions asked.",
            },
          ]}
        />

        {/* WordPress Setup Notice */}
        <section className="py-16 bg-blue-50">
          <div className="container mx-auto px-4 text-center">
            <div className="max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                <svg className="w-8 h-8 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">
                Demo Content Active
              </h3>
              <p className="text-gray-600 mb-4">
                This page is showing beautiful demo content. To connect your WordPress CMS and manage this content:
              </p>
              <ol className="text-left text-sm text-gray-600 space-y-2 max-w-lg mx-auto mb-6">
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">1</span>
                  <span>Set up your WordPress instance with WPGraphQL</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">2</span>
                  <span>Configure <code className="bg-gray-100 px-1 rounded">WP_GRAPHQL_ENDPOINT</code> in <code className="bg-gray-100 px-1 rounded">.env.local</code></span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="flex-shrink-0 w-6 h-6 bg-blue-600 text-white rounded-full flex items-center justify-center text-xs font-bold">3</span>
                  <span>Restart your dev server and your content will appear!</span>
                </li>
              </ol>
              <a 
                href="/wordpress/WORDPRESS_SETUP.md" 
                className="inline-flex items-center gap-2 text-blue-600 hover:text-blue-700 font-medium"
              >
                Read WordPress Setup Guide
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>
          </div>
        </section>
      </>
    );
  }
}

