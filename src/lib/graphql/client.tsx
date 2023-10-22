import { createClient, cacheExchange, fetchExchange, Client, Provider } from 'urql';

const url = process.env.GRAPHQL_URL ?? 'https://rickandmortyapi.com/graphql/';

export const client = createClient({
  url,
  requestPolicy: 'cache-first',
  exchanges: [cacheExchange, fetchExchange],
});

interface GraphqlProviderProps {
  instance?: Client;
  children: React.ReactNode;
}

export const GraphqlProvider = ({ instance = client, children }: GraphqlProviderProps) => {
  return <Provider value={instance}>{children}</Provider>;
};
