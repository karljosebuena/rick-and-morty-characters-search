'use client';

import { GraphqlProvider } from "@/lib/graphql/client";
import { store } from "@/redux/store";
import { Provider as ReduxProvider } from "react-redux";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return (
    <GraphqlProvider>
      <ReduxProvider store={store}>
        {children}
      </ReduxProvider>
    </GraphqlProvider>
  );
}
