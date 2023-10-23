'use client';

import { GraphqlProvider } from "@/lib/graphql/client";
import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  const queryClient = new QueryClient();
  return (
    <GraphqlProvider>
      <ReduxProvider store={store}>
        <QueryClientProvider client={queryClient}>
          {children}
        </QueryClientProvider>
      </ReduxProvider>
    </GraphqlProvider>
  );
}
