'use client';

import { Check } from 'lucide-react';
import { TrackingButton } from '@/components/TrackingButton';
import { PricingTier } from '@/lib/wp';

interface PricingProps {
  tiers: PricingTier[];
  title?: string;
  subtitle?: string;
}

export function Pricing({
  tiers,
  title = 'Simple, transparent pricing',
  subtitle = 'Choose the plan that works best for you',
}: PricingProps) {
  if (!tiers || tiers.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-white">
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
          <div className="grid gap-8 lg:grid-cols-3 lg:gap-6">
            {tiers.map((tier, index) => {
              const isPopular = index === 1; // Middle tier is popular

              return (
                <div
                  key={index}
                  className={`relative rounded-2xl ${
                    isPopular
                      ? 'ring-2 ring-blue-600 shadow-xl scale-105'
                      : 'ring-1 ring-gray-200 shadow-sm'
                  } bg-white p-8 hover:shadow-lg transition-all`}
                >
                  {isPopular && (
                    <div className="absolute -top-5 left-0 right-0 mx-auto w-fit">
                      <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold text-white">
                        Most Popular
                      </span>
                    </div>
                  )}

                  <div className="mb-8">
                    <h3 className="text-2xl font-bold text-gray-900">
                      {tier.name}
                    </h3>
                    <p className="mt-4 flex items-baseline">
                      <span className="text-5xl font-bold tracking-tight text-gray-900">
                        {tier.price}
                      </span>
                    </p>
                  </div>

                  <ul className="space-y-4 mb-8">
                    {tier.bullets.map((item, bulletIndex) => (
                      <li key={bulletIndex} className="flex items-start gap-3">
                        <Check className="h-5 w-5 flex-shrink-0 text-blue-600 mt-0.5" />
                        <span className="text-gray-600">{item.bullet}</span>
                      </li>
                    ))}
                  </ul>

                  <TrackingButton
                    href={tier.url}
                    variant={isPopular ? 'default' : 'outline'}
                    size="lg"
                    className="w-full"
                    eventName="pricing_select"
                    eventParams={{ tier: tier.name }}
                  >
                    {tier.cta}
                  </TrackingButton>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

