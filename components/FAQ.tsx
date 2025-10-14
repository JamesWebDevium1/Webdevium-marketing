import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { FAQ as FAQType } from '@/lib/wp';

interface FAQProps {
  faqs: FAQType[];
  title?: string;
}

import { TrackingButton } from '@/components/TrackingButton';

export function FAQ({ faqs, title = 'Frequently Asked Questions' }: FAQProps) {
  if (!faqs || faqs.length === 0) return null;

  return (
    <section className="py-24 sm:py-32 bg-white">
      <div className="container mx-auto px-4">
        <div className="mx-auto max-w-4xl">
          <h2 className="text-3xl font-bold tracking-tight text-blue-900 sm:text-4xl text-center mb-12">
            FREQUENTLY ASK QUESTIONS
          </h2>

          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left text-lg font-semibold text-blue-900 hover:text-blue-700">
                  {faq.q}
                </AccordionTrigger>
                <AccordionContent className="text-gray-700 leading-relaxed">
                  {faq.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <div className="text-center mt-12">
            <p className="text-gray-600 mb-4">
              Didn't find your answer?{' '}
              <TrackingButton
                href="https://calendly.com/webdevium"
                className="text-green-600 hover:text-green-700 underline font-semibold"
                eventName="cta_click"
                eventParams={{
                  label: "Book a Call",
                  position: "inline",
                  location: "faq",
                }}
              >
                Book a Call
              </TrackingButton>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

