import { getClient } from '@/lib/apolloClient';
import { HOMEPAGE_QUERY, HOW_IT_WORKS_QUERY } from '@/lib/wp';
import { Steps } from '@/components/Steps';
import { Prose } from '@/components/Prose';

export const revalidate = 300;

interface HowItWorksData {
  page: {
    title: string;
    acfSteps: any;
    seo?: any;
  };
}

export default async function HowItWorksPage() {
  try {

    const { data } = await getClient().query<HowItWorksData>({
      query: HOW_IT_WORKS_QUERY,
      variables: { id : 77 },
    });
    

   const acf = data.page.acfSteps;

    const rawSteps = acf?.steps1 || [];
    const steps = rawSteps.map((s: any) => ({
      ...s,
      icon: s?.icon?.node ?? s?.icon,
    }));
    

    return (
      <div className="py-24">
        {steps && <Steps steps={steps} title="HOW IT WORKS" />}
      </div>
    );
  } catch (error) {
    console.error('Error fetching how-it-works page:', error);
    
    // Fallback steps
    return (
      <div className="py-24">
        <Steps
          steps={[
            {
              icon: '🚀',
              title: 'Sign Up',
              body: 'Create your account in seconds and get instant access to the platform.',
            },
            {
              icon: '⚙️',
              title: 'Configure',
              body: 'Set up your project with our intuitive configuration wizard.',
            },
            {
              icon: '🎨',
              title: 'Build',
              body: 'Use our powerful tools to build your application with ease.',
            },
            {
              icon: '🌐',
              title: 'Deploy',
              body: 'Deploy your application globally with a single click.',
            },
          ]}
        />
      </div>
    );
  }
}

