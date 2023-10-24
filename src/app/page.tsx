import * as React from 'react';
import { Button } from '@mui/material';
import TypewriterTitle from '@/components/TypewriterTitle';
import Link from 'next/link';
import { ArrowRight } from '@mui/icons-material';

export default function HomePage() {
  return (
    <div style={{
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      height: '100vh',
      paddingTop: '15rem'
    }}>
      <h1 style={{ fontSize: '2.5rem', textAlign: 'center' }}>Welcome to Rick and Morty Characters Search</h1>
      <h2 style={{ color: '#a8a8a8' }}>
        <TypewriterTitle />
      </h2>
      <Link href="/dashboard">
        <Button sx={{ background: 'green', color: 'white' }}>
          Get Started
          <ArrowRight className="ml-2 w-5 h-5" strokeWidth={3} />
        </Button>
      </Link>
    </div >
  );
}
