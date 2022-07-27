import { ApolloClient, HttpLink, InMemoryCache } from '@apollo/client';

const createApolloClient = () => {
  return new ApolloClient({
    ssrMode: typeof window === 'undefined',
    link: new HttpLink({
      uri: process.env.NEXT_PUBLIC_GQL_URL,
    }),
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
