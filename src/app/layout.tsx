import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { ClerkProvider } from '@clerk/nextjs';
import Providers from './providers';

export const metadata = {
  title: 'Rick and Morty Characters Search App',
  description: 'Rick and Morty Characters Search App built with Next.js + Material UI v5'
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body>
          <ThemeRegistry>
            <Providers>{children}</Providers>
          </ThemeRegistry>
        </body>
      </html>
    </ClerkProvider>
  );
}
