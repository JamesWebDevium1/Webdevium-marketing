import { DefaultSeoProps } from 'next-seo';
import { SEO } from './wp';

export const DEFAULT_SEO: DefaultSeoProps = {
  titleTemplate: '%s | Webdevium',
  defaultTitle: 'Webdevium - Modern Web Development Platform',
  description:
    'Build and deploy modern web applications with ease. Webdevium provides tools and infrastructure for developers.',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: process.env.NEXT_PUBLIC_SITE_URL || 'https://webdevium.com',
    siteName: 'Webdevium',
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL || 'https://webdevium.com'}/og-default.jpg`,
        width: 1200,
        height: 630,
        alt: 'Webdevium',
      },
    ],
  },
  twitter: {
    handle: '@webdevium',
    site: '@webdevium',
    cardType: 'summary_large_image',
  },
  additionalLinkTags: [
    {
      rel: 'icon',
      href: '/favicon.ico',
    },
    {
      rel: 'apple-touch-icon',
      href: '/apple-touch-icon.png',
      sizes: '180x180',
    },
  ],
};

export function buildSEO(wpSeo?: SEO, customTitle?: string) {
  const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://webdevium.com';
  
  return {
    title: wpSeo?.title || customTitle || DEFAULT_SEO.defaultTitle,
    description: wpSeo?.metaDesc || DEFAULT_SEO.description,
    openGraph: {
      ...DEFAULT_SEO.openGraph,
      title: wpSeo?.opengraphTitle || wpSeo?.title || customTitle,
      description: wpSeo?.opengraphDescription || wpSeo?.metaDesc,
      images: wpSeo?.opengraphImage?.mediaItemUrl
        ? [
            {
              url: wpSeo.opengraphImage.mediaItemUrl,
              width: 1200,
              height: 630,
              alt: wpSeo?.opengraphTitle || wpSeo?.title || 'Webdevium',
            },
          ]
        : DEFAULT_SEO.openGraph?.images,
    },
  };
}

export function trackEvent(
  eventName: string,
  eventParams?: Record<string, any>
) {
  // Google Analytics 4
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', eventName, eventParams);
  }

  // Plausible
  if (typeof window !== 'undefined' && (window as any).plausible) {
    (window as any).plausible(eventName, { props: eventParams });
  }

  // PostHog
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(eventName, eventParams);
  }

  // Console log in development
  if (process.env.NODE_ENV === 'development') {
    console.log('📊 Event:', eventName, eventParams);
  }
}

