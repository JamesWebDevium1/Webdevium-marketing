import { ApolloClient, InMemoryCache, HttpLink } from '@apollo/client';
import { registerApolloClient } from '@apollo/experimental-nextjs-app-support/rsc';

// Get WordPress GraphQL endpoint from environment variables
const getGraphQLEndpoint = () => {
  const endpoint = process.env.WP_GRAPHQL_ENDPOINT;
  
  if (!endpoint) {
    console.warn(
      '⚠️  WP_GRAPHQL_ENDPOINT is not set. Using fallback endpoint.\n' +
      '   To connect to WordPress:\n' +
      '   1. Copy .env.local.example to .env.local\n' +
      '   2. Set WP_GRAPHQL_ENDPOINT=https://your-wordpress-site.com/graphql\n' +
      '   3. Restart the dev server'
    );
    return 'https://example.com/graphql'; // Fallback that will trigger catch block
  }
  
  // Validate URL
  try {
    new URL(endpoint);
    return endpoint;
  } catch (error) {
    throw new Error(
      `Invalid WP_GRAPHQL_ENDPOINT: "${endpoint}"\n` +
      'Must be a full URL like: https://cms.webdevium.com/graphql'
    );
  }
};

export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: new HttpLink({
      uri: getGraphQLEndpoint(),
      fetchOptions: { cache: 'no-store' },
    }),
  });
});

