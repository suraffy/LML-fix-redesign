'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Button, Theme } from '@radix-ui/themes';
import Navbar from '@/components/Navbar/Navbar';
import Link from 'next/link';
import { useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeAppearance, setThemeAppearance] = useState<'light' | 'dark'>('light');

  const toggleTheme = () => {
    setThemeAppearance((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <html lang="en">
      <body className={inter.className}>
        <Theme
          appearance={themeAppearance}
          accentColor="yellow"
          grayColor="sand"
          radius="large"
          scaling="95%"
        >
          <div
            className={`hidden sm:flex gap-3 items-center justify-center bg-[#FEF100] text-gray-900 text-center text-sm font-medium tracking-wide`}
          >
            <span className="py-3">Reliable Repairs for Your Phones, Laptops, and Electronics</span>
            <Button size="2" style={{ backgroundColor: '#41431f', color: 'white' }}>
              <Link href="/" className="tracking-wide">
                Learn More
              </Link>
            </Button>
          </div>

          <div className="sticky top-0 z-50">
            <Navbar theme={themeAppearance} toggleTheme={toggleTheme} />
          </div>

          {children}
        </Theme>
      </body>
    </html>
  );
}
