import * as React from 'react';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry';
import { ClerkProvider } from '@clerk/nextjs';
import { Box } from '@mui/material';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';

export const metadata = {
  title: 'Rick and Morty Characters Search App',
  description: 'Rick and Morty Characters Search App built with Next.js + Material UI v5',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <Box>
      <ResponsiveAppBar />
      {children}
    </Box>
  );
}
