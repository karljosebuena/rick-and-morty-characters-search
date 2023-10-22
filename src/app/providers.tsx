'use client';

import { GraphqlProvider } from "@/lib/graphql/client";

type Props = {
  children: React.ReactNode;
};

export default function Providers({ children }: Props) {
  return <GraphqlProvider>{children}</GraphqlProvider>;
}
