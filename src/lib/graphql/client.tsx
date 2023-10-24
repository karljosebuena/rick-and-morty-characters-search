import { createClient, cacheExchange, fetchExchange, Client, Provider, ssrExchange } from 'urql';

const url = process.env.GRAPHQL_URL ?? 'https://rickandmortyapi.com/graphql/';
const isServerSide = typeof window === 'undefined';

export const ssrCache = ssrExchange({ isClient: !isServerSide });
export const client = createClient({
  url,
  requestPolicy: 'cache-first',
  exchanges: [cacheExchange, fetchExchange, ssrCache, fetchExchange],
});

interface GraphqlProviderProps {
  instance?: Client;
  children: React.ReactNode;
}

export const GraphqlProvider = ({ instance = client, children }: GraphqlProviderProps) => {
  return <Provider value={instance}>{children}</Provider>;
};
