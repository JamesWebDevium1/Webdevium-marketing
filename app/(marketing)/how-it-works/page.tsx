import { getClient } from '@/lib/apolloClient';
import { HOW_IT_WORKS_QUERY } from '@/lib/wp';
import { Steps } from '@/components/Steps';
import { Prose } from '@/components/Prose';

export const revalidate = 300;

export default async function HowItWorksPage() {
  try {
    const { data } = await getClient().query({
      query: HOW_IT_WORKS_QUERY,
      variables: { slug: 'how-it-works' },
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

        {data.page.acfSteps?.steps && (
          <Steps steps={data.page.acfSteps.steps} />
        )}
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

