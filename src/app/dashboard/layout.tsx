import * as React from 'react';
import { Box } from '@mui/material';
import ResponsiveAppBar from '@/components/ResponsiveAppBar';
import { auth } from '@clerk/nextjs';
import { clerk } from '@/lib/clerk-server ';

export const metadata = {
  title: 'Rick and Morty Characters Search App',
  description: 'Rick and Morty Characters Search App built with Next.js + Material UI v5',
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const { userId, } = auth();
  const user = await clerk.users.getUser(userId as string);

  return (
    <Box>
      <ResponsiveAppBar profileImgUrl={user.imageUrl} />
      {children}
    </Box>
  );
}
