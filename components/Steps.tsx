import { Step } from '@/lib/wp';

interface StepsProps {
  steps: Step[];
  title?: string;
  subtitle?: string;
}

export function Steps({
  steps,
  title = 'How It Works',
  subtitle = 'Get started in minutes',
}: StepsProps) {
  if (!steps || steps.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-2xl text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
            {title}
          </h2>
          {subtitle && (
            <p className="mt-4 text-lg text-gray-600">{subtitle}</p>
          )}
        </div>

        <div className="mx-auto max-w-7xl">
          <div className={`grid gap-8 md:grid-cols-2 ${steps.length === 4 ? 'lg:grid-cols-4' : 'lg:grid-cols-3'}`}>
            {steps.map((step, index) => (
              <div
                key={index}
                className="relative rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-900/5 hover:shadow-md transition-shadow"
              >
                {/* Step number badge */}
                <div className="absolute -top-4 -left-4 flex h-12 w-12 items-center justify-center rounded-full bg-blue-600 text-white font-bold text-lg shadow-lg">
                  {index + 1}
                </div>

                {/* Icon or Emoji */}
                <div className="mb-4 text-4xl">{step.icon}</div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-gray-900 mb-3">
                  {step.title}
                </h3>

                {/* Body */}
                <p className="text-gray-600 leading-relaxed">{step.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

