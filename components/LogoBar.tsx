import Image from 'next/image';
import { LogoBarItem } from '@/lib/wp';

interface LogoBarProps {
  logos: LogoBarItem[];
  title?: string;
}

export function LogoBar({ logos, title = 'Trusted by leading companies' }: LogoBarProps) {
  if (!logos || logos.length === 0) return null;

  return (
    <section className="bg-white py-16">
      <div className="container mx-auto px-4">
        {title && (
          <p className="text-center text-sm font-semibold uppercase tracking-wide text-gray-500 mb-8">
            {title}
          </p>
        )}
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 lg:grid-cols-6">
          {logos.map((item, index) => (
            <div
              key={index}
              className="flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-200"
            >
              {item.url ? (
                <a
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative h-12 w-full"
                >
                  <Image
                    src={item.logo.mediaItemUrl}
                    alt={item.alt || item.logo.altText || 'Partner logo'}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </a>
              ) : (
                <div className="relative h-12 w-full">
                  <Image
                    src={item.logo.mediaItemUrl}
                    alt={item.alt || item.logo.altText || 'Partner logo'}
                    fill
                    className="object-contain"
                    sizes="(max-width: 768px) 50vw, 16vw"
                  />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

