import { gql } from '@apollo/client';

// ─────────────────────────────────────────────────────────────────
// GraphQL Fragments
// ─────────────────────────────────────────────────────────────────

export const IMAGE_FRAGMENT = gql`
  fragment ImageFields on MediaItem {
    mediaItemUrl
    altText
    title
    srcSet
    sizes
  }
`;

export const SEO_FRAGMENT = gql`
  fragment SEOFields on PostTypeSEO {
    title
    metaDesc
    opengraphTitle
    opengraphDescription
    opengraphImage { mediaItemUrl }
  }
`;

// ─────────────────────────────────────────────────────────────────
// Homepage Query
// ─────────────────────────────────────────────────────────────────

export const HOMEPAGE_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  query Homepage($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      acfHome {
        heroKicker
        heroTitle
        heroSub
        ctaPrimary
        ctaPrimaryUrl
        ctaSecondary
        ctaSecondaryUrl
        comparison_data {
          category
          inhouse
          webdevium
        }
        heroImage {
          node {
            ...ImageFields
          }
        }
        logoBar {
          logo {
            node {
              ...ImageFields
            }
          }
          alt
          url
        }
        steps {
           icon {
            node {
              ...ImageFields
            }
          }
          title
          body
        }
        pricing {
          name
          price
          bullets {
            bullet
          }
          cta
          url
        }
        faq {
          q
          a
        }
      }
      seo { ...SEOFields }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// Pricing Page Query
// ─────────────────────────────────────────────────────────────────

export const PRICING_QUERY = gql`
  ${SEO_FRAGMENT}
  query PricingPage($slug: ID!) {
    page(id: $slug, idType: URI) {
      title
      content
      acfPricing {
        pricing {
          name
          price
          bullets {
            bullet
          }
          cta
          url
        }
      }
      seo { ...SEOFields }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// How It Works Page Query
// ─────────────────────────────────────────────────────────────────

export const HOW_IT_WORKS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  query HowItWorksPage($id: ID!) {
    page(id: $id, idType: DATABASE_ID) {
      title
      content
      acfSteps {
        steps1 {
          icon {
            node { ...ImageFields }
          }
          title
          body
        }
      }
      seo { ...SEOFields }
    }
  }
`;

  // ─────────────────────────────────────────────────────────────────
// Blog Archive Query
// ─────────────────────────────────────────────────────────────────

export const BLOG_ARCHIVE_QUERY = gql`
  ${IMAGE_FRAGMENT}
  query BlogArchive($first: Int = 10, $after: String) {
    posts(first: $first, after: $after, where: { status: PUBLISH }) {
      pageInfo {
        hasNextPage
        endCursor
      }
      nodes {
        id
        title
        slug
        excerpt
        date
        author {
          node {
            name
            avatar {
              url
            }
          }
        }
        featuredImage {
          node {
            ...ImageFields
          }
        }
        categories {
          nodes {
            name
            slug
          }
        }
        acfPostExtras {
          readingTime
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// Blog Post Query
// ─────────────────────────────────────────────────────────────────

export const BLOG_POST_QUERY = gql`
  ${IMAGE_FRAGMENT}
  ${SEO_FRAGMENT}
  query BlogPost($slug: ID!) {
    post(id: $slug, idType: SLUG) {
      id
      title
      content
      date
      modified
      author {
        node {
          name
          description
          avatar {
            url
          }
        }
      }
      featuredImage {
        node {
          ...ImageFields
        }
      }
      categories {
        nodes {
          name
          slug
        }
      }
      tags {
        nodes {
          name
          slug
        }
      }
      acfPostExtras {
        readingTime
        postCtaLabel
        postCtaUrl
      }
      seo { ...SEOFields }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// Related Posts Query
// ─────────────────────────────────────────────────────────────────

export const RELATED_POSTS_QUERY = gql`
  ${IMAGE_FRAGMENT}
  query RelatedPosts($tagIds: [ID], $excludeId: ID!, $first: Int = 3) {
    posts(
      first: $first
      where: { tagIn: $tagIds, notIn: [$excludeId], status: PUBLISH }
    ) {
      nodes {
        id
        title
        slug
        excerpt
        date
        featuredImage {
          node {
            ...ImageFields
          }
        }
        acfPostExtras {
          readingTime
        }
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// All Post Slugs (for static generation)
// ─────────────────────────────────────────────────────────────────

export const ALL_POSTS_SLUGS = gql`
  query AllPostSlugs {
    posts(first: 1000, where: { status: PUBLISH }) {
      nodes {
        slug
      }
    }
  }
`;

// ─────────────────────────────────────────────────────────────────
// Type Definitions
// ─────────────────────────────────────────────────────────────────

export interface WPImage {
  mediaItemUrl: string;
  altText?: string;
  title?: string;
  srcSet?: string;
  sizes?: string;
}

export interface WPImageEdge {
  node: WPImage;
}

export interface SEO {
  title?: string;
  metaDesc?: string;
  opengraphTitle?: string;
  opengraphDescription?: string;
  opengraphImage?: {
    mediaItemUrl: string;
  };
}

export interface LogoBarItem {
  logo: WPImage;
  alt: string;
  url: string;
}

export interface LogoBarItemRaw {
  logo: WPImageEdge;
  alt: string;
  url: string;
}

export interface Step {
  icon?: string | WPImage;
  title: string;
  body: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description?: string;
  bullets: Array<{ bullet: string }>;
  cta: string;
  url: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface ComparisonDataItem {
  category: string;
  inhouse: string;
  webdevium: string;
}

export interface HomeACF {
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  ctaPrimary: string;
  ctaPrimaryUrl: string;
  ctaSecondary: string;
  ctaSecondaryUrl: string;
  heroImage: WPImage;
  logoBar: LogoBarItem[];
  steps: Step[];
  pricing: PricingTier[];
  faq: FAQ[];
}

export interface HomeACF_Raw {
  heroKicker: string;
  heroTitle: string;
  heroSub: string;
  ctaPrimary: string;
  ctaPrimaryUrl: string;
  ctaSecondary: string;
  ctaSecondaryUrl: string;
  heroImage: WPImageEdge;
  logoBar: LogoBarItemRaw[];
  steps: StepRaw[];
  pricing: PricingTier[];
  faq: FAQ[];
  comparison_data?: ComparisonDataItem[];
}

export interface StepRaw {
  icon?: WPImageEdge;
  title: string;
  body: string;
}

export interface Post {
  id: string;
  title: string;
  slug: string;
  excerpt: string;
  content?: string;
  date: string;
  modified?: string;
  author: {
    node: {
      name: string;
      description?: string;
      avatar: {
        url: string;
      };
    };
  };
  featuredImage?: {
    node: WPImage;
  };
  categories: {
    nodes: Array<{ name: string; slug: string }>;
  };
  tags?: {
    nodes: Array<{ name: string; slug: string }>;
  };
  acfPostExtras?: {
    readingTime?: number;
    postCtaLabel?: string;
    postCtaUrl?: string;
  };
  seo?: SEO;
}

