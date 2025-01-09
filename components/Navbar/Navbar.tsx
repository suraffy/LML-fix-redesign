'use client';

import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/lml_logo.png';
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from '../ui/hover-card';
import { useState } from 'react';
import { Button } from '../ui/button';
import { Menu } from 'lucide-react';

interface SubLink {
  id: number;
  title: string;
  link: string;
}

interface NavLink {
  id: number;
  title: string;
  link: string;
  hover: boolean;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { id: 1, title: 'Home', link: '/', hover: false },
  // { id: 2, title: 'Services', link: '/services', hover: false },
  {
    id: 3,
    title: 'Location',
    link: '#',
    hover: true,
    subLinks: [
      { id: 4, title: 'Seattle', link: '/seattle' },
      { id: 5, title: 'West Seattle', link: '/westseattle' },
      { id: 6, title: 'North Seattle', link: '/northseattle' },
    ],
  },
];

const NavBar: React.FC = () => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);

  const handleClickLink = () => {
    setOpenNavbar(false);
    setExpandedMenu(null);
  };

  const toggleSubMenu = (id: number) => {
    setExpandedMenu((prev) => (prev === id ? null : id));
  };

  return (
    <nav className='flex items-center justify-between relative sm:mx-20 mt-4 border-b pb-2 mb-4'>
      {/* Logo */}
      <Link href='/' onClick={handleClickLink}>
        <Image
          src={logo}
          width={60}
          height={60}
          loading='lazy'
          alt='logo'
          className='block transition-transform duration-150 rounded-xl hover:scale-110 mx-2'
        />
      </Link>

      {/* Navigation Links for Large Screens */}
      <ul className='hidden sm:flex items-center gap-8 xl:gap-10 font-semibold'>
        {navLinks.map((nav) => (
          <li key={nav.id}>
            {nav.hover ? (
              <HoverCard>
                <HoverCardTrigger asChild>
                  <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                    {nav.title}
                  </span>
                </HoverCardTrigger>
                <HoverCardContent className='w-screen my-4'>
                  <div className='text-right pr-16 space-y-2'>
                    {nav.subLinks?.map((subLink) => (
                      <li key={subLink.id}>
                        <Link href={subLink.link}>
                          <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                            {subLink.title}
                          </span>
                        </Link>
                      </li>
                    ))}
                  </div>
                </HoverCardContent>
              </HoverCard>
            ) : (
              <Link href={nav.link}>
                <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                  {nav.title}
                </span>
              </Link>
            )}
          </li>
        ))}
      </ul>

      {/* Mobile Navigation */}
      <div className='sm:hidden mx-2'>
        <Button onClick={() => setOpenNavbar((pre) => !pre)}>
          <Menu />
        </Button>
      </div>

      {openNavbar && (
        <ul className='sm:hidden absolute bg-white w-full mt-44 z-50 py-5 rounded-lg px-3 space-y-2'>
          {navLinks.map((nav) => (
            <li key={nav.id} className='space-y-2'>
              <span
                className='underline-animation p-0.5 text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e] flex justify-between'
                onClick={() =>
                  nav.hover ? toggleSubMenu(nav.id) : handleClickLink()
                }
              >
                {nav.title}
                {nav.hover && (
                  <span className='ml-2'>
                    {expandedMenu === nav.id ? '▲' : '▼'}
                  </span>
                )}
              </span>
              {nav.hover && expandedMenu === nav.id && (
                <ul className='pl-4'>
                  {nav.subLinks?.map((subLink) => (
                    <li key={subLink.id}>
                      <Link href={subLink.link} onClick={handleClickLink}>
                        <span className='underline-animation text-lg hover:underline-offset-1 hover:border-b hover:border-[#e3de1e]'>
                          {subLink.title}
                        </span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default NavBar;
