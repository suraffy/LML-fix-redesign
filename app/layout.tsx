'use client';

import { useEffect, useState } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { Inter } from 'next/font/google';
import { Theme } from '@radix-ui/themes';
import '@radix-ui/themes/styles.css';
import './globals.css';
import Navbar from '@/components/Navbar/Navbar';
import Footer from '@/components/Footer/Footer';

const inter = Inter({ subsets: ['latin'] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const [themeAppearance, setThemeAppearance] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const theme = localStorage.getItem('theme');
    if (theme === 'light' || theme === 'dark') {
      setThemeAppearance(theme);
    }
  }, []);

  const toggleTheme = () => {
    setThemeAppearance((prevTheme) => {
      const newTheme = prevTheme === 'light' ? 'dark' : 'light';
      localStorage.setItem('theme', newTheme);

      return newTheme;
    });
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

        <Analytics />
      </body>
    </html>
  );
}
