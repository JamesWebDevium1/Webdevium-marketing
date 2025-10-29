import { getClient } from '@/lib/apolloClient';
import { HOMEPAGE_QUERY, HomeACF_Raw } from '@/lib/wp';
import { Hero } from '@/components/Hero';
import { LogoBar } from '@/components/LogoBar';
import { Steps } from '@/components/Steps';
import { Pricing } from '@/components/Pricing';
import { FAQ } from '@/components/FAQ';
import { WhyWebdevium } from '@/components/WhyWebdevium';
import { HowItWorks } from '@/components/HowItWorks';
import { HiringComparison } from '@/components/HiringComparison';
import { Testimonial } from '@/components/Testimonial';

export const revalidate = 300; // 5 minutes

interface HomepageData {
  page: {
    title: string;
    acfHome: HomeACF_Raw;
    seo?: any;
  };
}

export default async function HomePage() {
  try {
    const { data } = await getClient().query<HomepageData>({
      query: HOMEPAGE_QUERY,
      variables: { id: process.env.HOMEPAGE_DBID || 60 },
    });

    const acf = data.page.acfHome;
    const steps = acf.steps?.map((s: any) => ({
      ...s,
      icon: s?.icon?.node ?? s?.icon,
    }));

    const comparisonData = acf.comparison_data;

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
          heroImage={acf.heroImage?.node}
          showReviews={true}
        />

        {steps && <Steps steps={steps} title="WHY WEBDEVIUM" />}

        <HowItWorks />

        {comparisonData && <HiringComparison comparisonData = {comparisonData} />}

        <Testimonial />

        {acf.faq && <FAQ faqs={acf.faq} />}
      </>
    );
  } catch (error) {
    console.error('Error fetching homepage:', error);
    
    // Beautiful fallback content matching the Figma design
    return (
      <>
        <Hero
          title="SCALE YOUR PRODUCT — WITHOUT HIRING A FULL DEV TEAM."
          subtitle="Webdevium gives you a senior engineering pod — complete with project management, QA, and predictable throughput — for one flat monthly rate. Faster, simpler, and more cost-effective than hiring in-house."
          ctaPrimary="Book a Call"
          ctaPrimaryUrl="https://calendly.com/webdevium"
          ctaSecondary="Get Started"
          ctaSecondaryUrl="/contact"
          showReviews={true}
        />

        <WhyWebdevium />

        <HowItWorks />

        <HiringComparison />

        <Testimonial />

        <FAQ
          title="FREQUENTLY ASK QUESTIONS"
          faqs={[
            {
              q: 'How is Webdevium different from hiring freelancers?',
              a: "Webdevium provides a complete engineering pod with dedicated team members, project management, and QA. Unlike freelancers who work independently, our teams collaborate seamlessly and provide predictable throughput with consistent quality.",
            },
            {
              q: 'What if I need to scale up or down?',
              a: "You can scale your team up or down monthly. Need more developers for a big project? Scale up. Project winding down? Scale down. No long-term contracts or commitments.",
            },
            {
              q: 'How quickly can we get started?',
              a: "Typically within 1-2 weeks of signing up. We'll match you with the right team members and have them up to speed on your project requirements quickly.",
            },
            {
              q: 'What technologies do you support?',
              a: "We support all major technologies including React, Node.js, Python, PHP, .NET, mobile development, and more. Our senior engineers are experts across the full technology stack.",
            },
            {
              q: 'How do you ensure quality?',
              a: "Every project includes dedicated QA engineers, code reviews, and our senior developers have 8+ years of experience. We also provide regular project updates and maintain high code quality standards.",
            },
          ]}
        />

      </>
    );
  }
}

