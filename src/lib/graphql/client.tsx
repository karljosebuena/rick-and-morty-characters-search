import { createClient, cacheExchange, fetchExchange, Client, Provider, ssrExchange } from 'urql';

const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });
export const client = createClient({
  url: '/api/graphql',
  requestPolicy: 'cache-first',
  exchanges: [cacheExchange, fetchExchange, ssrCache]
});

interface GraphqlProviderProps {
  instance?: Client;
  children: React.ReactNode;
}

export const GraphqlProvider = ({ instance = client, children }: GraphqlProviderProps) => {
  return <Provider value={instance}>{children}</Provider>;
};
