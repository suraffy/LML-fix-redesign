'use client';

import { Inter } from 'next/font/google';
import './globals.css';
import '@radix-ui/themes/styles.css';
import { Theme } from '@radix-ui/themes';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

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
          grayColor="mauve"
          radius="medium"
          scaling="95%"
        >
          <div className={inter.className}>
            <div className="sticky top-0 z-50">
              <Navbar theme={themeAppearance} toggleTheme={toggleTheme} />
            </div>

            {children}

            <Footer />
          </div>
        </Theme>
      </body>
    </html>
  );
}
