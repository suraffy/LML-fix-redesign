'use client';

import React, { forwardRef, AnchorHTMLAttributes, ReactNode, useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import classNames from 'classnames';
import { CaretDownIcon } from '@radix-ui/react-icons';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/lml_logo.png';
import { FolderCode, Droplet, SearchCheck, Key, DollarSign, Settings, Tag } from 'lucide-react';
import { Button, Flex } from '@radix-ui/themes';
import { SunIcon, MoonIcon } from '@radix-ui/react-icons';

interface Props {
  theme: 'light' | 'dark';
  toggleTheme: () => void;
}

interface SubLink {
  id: number;
  title: string;
  link: string;
  icon?: JSX.Element;
  description?: string;
}

interface NavLink {
  id: number;
  title: string;
  link: string;
  hover: boolean;
  image?: boolean;
  subLinks?: SubLink[];
}

const navLinks: NavLink[] = [
  { id: 1, title: 'Home', link: '/', hover: false },
  {
    id: 2,
    title: 'Services',
    link: '/services',
    hover: true,
    subLinks: [
      {
        id: 1,
        title: 'Software',
        link: '/software',
        icon: <FolderCode />,
        description: 'Fix and update',
      },
      {
        id: 2,
        title: 'Diagnostics',
        link: '/diagnostics',
        icon: <SearchCheck />,
        description: 'Identify and fix device issues',
      },
      {
        id: 3,
        title: 'Cleaning',
        link: '/cleaning',
        icon: <Droplet />,
        description: 'Deep clean',
      },
      {
        id: 4,
        title: 'Unlocks',
        link: '/unlocks',
        icon: <Key />,
        description: 'Unlock your devices',
      },
      {
        id: 5,
        title: 'Buybacks',
        link: '/buybacks',
        icon: <DollarSign />,
        description: 'Sell your old devices',
      },
      {
        id: 6,
        title: 'Customization',
        link: '/customization',
        icon: <Settings />,
        description: 'Personalize your device',
      },
    ],
  },
  {
    id: 3,
    title: 'Location',
    link: '#',
    hover: true,
    image: true,
    subLinks: [
      { id: 1, title: 'Seattle', link: '/seattle', description: 'Serving all of Seattle' },
      {
        id: 2,
        title: 'West Seattle',
        link: '/westseattle',
        description: 'Reliable service in West Seattle',
      },
      {
        id: 3,
        title: 'North Seattle',
        link: '/northseattle',
        description: 'Convenient repairs in North Seattle',
      },
    ],
  },
  { id: 4, title: 'FAQ', link: '/faq', hover: false },
];

const NavBar: React.FC<Props> = ({ theme, toggleTheme }) => {
  const [openNavbar, setOpenNavbar] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<number | null>(null);

  const handleClickLink = () => {
    setOpenNavbar(false);
    setExpandedMenu(null);
  };

  const toggleSubMenu = (id: number) => {
    setExpandedMenu((prev) => (prev === id ? null : id));
  };

  const [isSticky, setIsSticky] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsSticky(currentScrollY > 40);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="shadow-sm flex justify-between items-end">
      <NavigationMenu.Root className="flex flex-1 items-end justify-between relative bg-white dark:bg-gray2 sm:mx-20 py-2">
        {/* Logo */}
        <Link href="/" onClick={handleClickLink} className="w-16">
          <Image
            src={logo}
            width={50}
            height={50}
            loading="lazy"
            alt="logo"
            className="block mx-auto rounded-xl"
            style={{
              width: isSticky ? '40px' : '60px',
              height: isSticky ? '40px' : '60px',
              borderRadius: isSticky ? '50%' : '',
              transition: 'all 0.2s ease',
            }}
          />
        </Link>

        <NavigationMenu.List className="hidden m-0 sm:flex items-end p-0 gap-4 xl:gap-6 font-semibold">
          {navLinks.map((nav) => (
            <NavigationMenu.Item key={nav.id}>
              {nav.hover ? (
                <>
                  <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-0.5 rounded px-4 py-3 text-[16px] font-medium leading-none text-violet11 outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7">
                    {nav.title}
                    <CaretDownIcon
                      className="relative top-px text-violet11 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
                      aria-hidden
                    />
                  </NavigationMenu.Trigger>
                  <NavigationMenu.Content className="absolute left-0 top-0 w-full data-[motion=from-start]:animate-enterFromRight data-[motion=from-end]:animate-enterFromLeft data-[motion=to-start]:animate-exitToRight data-[motion=to-end]:animate-exitToLeft sm:w-auto">
                    <ul
                      className={`one m-0 grid list-none gap-x-2.5 p-[22px] sm:w-[500px] sm:grid-cols-[0.75fr_1fr] ${!nav.image ? 'm-0 grid list-none gap-x-2.5 p-[22px] sm:w-[600px] sm:grid-flow-col sm:grid-rows-3' : ''}`}
                    >
                      {nav.image && (
                        <li className="row-span-3 grid">
                          <NavigationMenu.Link asChild>
                            <Link
                              href="/"
                              onClick={handleClickLink}
                              className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#fef100] to-gray-800 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                            >
                              <Image
                                src={logo}
                                width={60}
                                height={60}
                                loading="lazy"
                                alt="logo"
                                className="block transition-transform duration-150 rounded-xl hover:scale-110 mx-2"
                              />

                              <div className="mb-[7px] mt-4 text-[18px] font-medium leading-[1.2] text-white">
                                LML Fix
                              </div>
                              <p className="text-[14px] leading-[1.3] text-mauve4l text-gray-50">
                                Fast and affordable, around seattle.
                              </p>
                            </Link>
                          </NavigationMenu.Link>
                        </li>
                      )}

                      {nav.subLinks?.map((subLink) => (
                        <ListItem key={subLink.id} href={subLink.link} title={subLink.title}>
                          <div className="inline-flex gap-2">
                            {subLink.icon} {subLink.description}
                          </div>
                        </ListItem>
                      ))}
                    </ul>
                  </NavigationMenu.Content>
                </>
              ) : (
                <NavigationMenu.Link
                  className="block select-none rounded px-4 py-3 text-[16px] font-medium leading-none text-violet11 no-underline outline-none hover:bg-violet3 focus:shadow-[0_0_0_2px] focus:shadow-violet7"
                  href={nav.link}
                >
                  {nav.title}
                </NavigationMenu.Link>
              )}
            </NavigationMenu.Item>
          ))}

          <NavigationMenu.Indicator className="top-full z-10 flex h-2.5 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
            <div className="relative top-[70%] size-3 rotate-45 rounded-tl-xsl bg-violet4" />
          </NavigationMenu.Indicator>
        </NavigationMenu.List>

        <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
          <NavigationMenu.Viewport className="shadow-[0_2px_10px] shadow-gray4 border border-gray3 relative mt-0.5 h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white dark:bg-gray2 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
        </div>

        <Flex gap="3" align="center">
          <Button size="3">
            <Link href="/" onClick={handleClickLink} className="flex gap-2 items-center py-2">
              <Tag size={20} /> Book Now
            </Link>
          </Button>

          <Button size="3" color="gray" highContrast>
            <Link href="/" onClick={handleClickLink} className="py-2">
              Contact Us
            </Link>
          </Button>
        </Flex>
      </NavigationMenu.Root>

      <div className="px-4 py-2.5">
        <Button variant="outline" onClick={toggleTheme} className="ml-10">
          {theme === 'light' ? <SunIcon /> : <MoonIcon />}
        </Button>
      </div>
    </div>
  );
};

type ListItemProps = {
  className?: string;
  children: ReactNode;
  title: string;
} & AnchorHTMLAttributes<HTMLAnchorElement>;

const ListItem = forwardRef<HTMLAnchorElement, ListItemProps>(
  ({ className, children, title, ...props }, forwardedRef) => (
    <li>
      <NavigationMenu.Link asChild>
        <a
          className={classNames(
            'block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-violet7',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-violet12">{title}</div>
          <div className="leading-[1.4] text-mauve11">
            <div className="inline-flex gap-2">{children}</div>
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavBar;
