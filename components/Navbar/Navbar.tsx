'use client';

import { Theme } from '@radix-ui/themes';
import React, { forwardRef, AnchorHTMLAttributes, ReactNode, useState, useEffect } from 'react';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import * as Dialog from '@radix-ui/react-dialog';
import * as Accordion from '@radix-ui/react-accordion';
import classNames from 'classnames';
import Image from 'next/image';
import Link from 'next/link';
import logo from '@/public/lml_logo.png';
import {
  FolderCode,
  Droplet,
  SearchCheck,
  Key,
  DollarSign,
  Settings,
  Tag,
  AlignJustify,
  ChevronDown,
  X,
  Facebook,
  Linkedin,
  Instagram,
  Twitter,
} from 'lucide-react';

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
        link: '/our-services/software',
        icon: <FolderCode size={18} />,
        description: 'Fix and update',
      },
      {
        id: 2,
        title: 'Diagnostics',
        link: '/our-services/diagnostics',
        icon: <SearchCheck size={18} />,
        description: 'Identify and fix device issues',
      },
      {
        id: 3,
        title: 'Cleaning',
        link: '/our-services/cleaning',
        icon: <Droplet size={18} />,
        description: 'Deep clean',
      },
      {
        id: 4,
        title: 'Unlocks',
        link: '/our-services/unlocks',
        icon: <Key size={18} />,
        description: 'Unlock your devices',
      },
      {
        id: 5,
        title: 'Buybacks',
        link: '/our-services/buybacks',
        icon: <DollarSign size={18} />,
        description: 'Sell your old devices',
      },
      {
        id: 6,
        title: 'Customization',
        link: '/our-services/customization',
        icon: <Settings size={18} />,
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
  const [isSticky, setIsSticky] = useState(false);

  const handleClickLink = () => {
    setOpenNavbar(false);
  };

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsSticky(currentScrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      <div
        className={`${isSticky ? 'shadow-sm bg-white' : ''} flex justify-between items-end bg-gray1 dark:bg-gray2 transition-all`}
      >
        <NavigationMenu.Root className="flex flex-1 items-end justify-between relative sm:mx-20 py-2">
          <Link href="/" onClick={handleClickLink}>
            <Image
              src={logo}
              width={50}
              height={50}
              loading="lazy"
              alt="logo"
              className="block mx-auto rounded-lg"
              style={{
                borderRadius: isSticky ? '50%' : '',
                transition: 'all 0.15s ease',
              }}
            />
          </Link>

          <NavigationMenu.List className="hidden lg:flex items-end flex-2 xl:gap-2 font-semibold rounded-lg">
            {navLinks.map((nav) => (
              <NavigationMenu.Item key={nav.id}>
                {nav.hover ? (
                  <>
                    <NavigationMenu.Trigger className="group flex select-none items-center justify-between gap-2 rounded px-4 py-3 text-[16px] font-medium leading-none text-gray12 outline-none hover:bg-yellow3 focus:shadow-[0_0_0_2px] focus:shadow-yellow7">
                      {nav.title}
                      <ChevronDown
                        size={18}
                        className="relative top-px text-gray12 transition-transform duration-[250] ease-in group-data-[state=open]:-rotate-180"
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
                                className="flex h-full w-full select-none flex-col justify-end rounded-md bg-gradient-to-b from-[#fef100] to-gray-800 p-[25px] no-underline outline-none focus:shadow-[0_0_0_2px] focus:shadow-yellow7"
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
                          <ListItem
                            key={subLink.id}
                            href={subLink.link}
                            title={subLink.title}
                            className="hover:bg-yellow3"
                          >
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
                    className="block select-none rounded px-4 py-3 text-[16px] font-medium leading-none text-gray12 no-underline outline-none hover:bg-yellow3 focus:shadow-[0_0_0_2px] focus:shadow-yellow7"
                    href={nav.link}
                  >
                    {nav.title}
                  </NavigationMenu.Link>
                )}
              </NavigationMenu.Item>
            ))}

            <NavigationMenu.Indicator className="top-full z-10 flex h-3 -mt-1 items-end justify-center overflow-hidden transition-[width,transform_250ms_ease] data-[state=hidden]:animate-fadeOut data-[state=visible]:animate-fadeIn">
              <div className="relative top-[70%] size-3 rotate-45 rounded-tl-xs bg-gray7" />
            </NavigationMenu.Indicator>
          </NavigationMenu.List>

          <div className="perspective-[2000px] absolute left-0 top-full flex w-full justify-center">
            <NavigationMenu.Viewport className="border border-gray3 relative h-[var(--radix-navigation-menu-viewport-height)] w-full origin-[top_center] overflow-hidden rounded-md bg-white dark:bg-gray2 transition-[width,_height] duration-300 data-[state=closed]:animate-scaleOut data-[state=open]:animate-scaleIn sm:w-[var(--radix-navigation-menu-viewport-width)]" />
          </div>

          <div className="hidden sm:block">
            <Flex gap="4" align="center">
              <Button size="3">
                <Link href="/" onClick={handleClickLink} className="flex gap-2 items-center py-2">
                  <Tag size={18} /> Book Now
                </Link>
              </Button>

              <Button size="3" color="gray" highContrast>
                <Link href="/" onClick={handleClickLink} className="py-2">
                  Contact Us
                </Link>
              </Button>
            </Flex>
          </div>
        </NavigationMenu.Root>

        <div className="px-4 py-2.5 hidden lg:block">
          <Button variant="outline" onClick={toggleTheme}>
            {theme === 'light' ? <SunIcon /> : <MoonIcon />}
          </Button>
        </div>

        <div className="px-4 py-2.5 lg:hidden">
          <Button variant="outline" onClick={() => setOpenNavbar(!openNavbar)}>
            <AlignJustify />
          </Button>
        </div>
      </div>

      <Dialog.Root open={openNavbar} onOpenChange={setOpenNavbar}>
        <Dialog.Portal>
          <Theme appearance={theme}>
            <Dialog.Overlay className="fixed inset-0 bg-black/50 transition-opacity duration-300" />

            <Dialog.Content className="fixed right-0 top-0 bottom-0 h-screen w-[90vw] max-w-[400px] overflow-y-auto rounded-tl-lg bg-gray1 p-6 shadow-xl transition-transform duration-300 data-[state=open]:animate-contentShow data-[state=closed]:animate-contentHide">
              <Dialog.Title className="sr-only">Navigation Menu</Dialog.Title>

              <Dialog.Description className="sr-only">
                Use the navigation links below to explore the website.
              </Dialog.Description>

              <div className="flex justify-between items-center mb-10 pb-4 border-b border-gray3">
                <Link href="/" onClick={handleClickLink} className="flex items-center gap-3">
                  <Image
                    src={logo}
                    width={40}
                    height={40}
                    loading="lazy"
                    alt="logo"
                    className="rounded-lg hover:scale-125 transition-transform"
                  />
                  <span className="text-[20px] font-semibold text-gray12 dark:text-gray12">
                    LML Fix
                  </span>
                </Link>
                <Dialog.Close asChild>
                  <button
                    className="p-2 rounded-full bg-yellow3 hover:bg-yellow4 text-yellow12 focus:shadow-[0_0_0_2px] focus:shadow-yellow7"
                    aria-label="Close"
                  >
                    <X size={20} />
                  </button>
                </Dialog.Close>
              </div>

              <Accordion.Root type="single" defaultValue="item-1" collapsible>
                {navLinks.map((nav) => (
                  <Accordion.Item key={nav.id} value={nav.title}>
                    <Accordion.Trigger className="w-full px-4 py-3 mb-2 rounded-lg bg-gray2 hover:bg-yellow3 text-gray12 flex justify-between items-center outline-yellow7">
                      <span>{nav.title}</span>
                      {nav.subLinks && <ChevronDown size={18} />}
                    </Accordion.Trigger>
                    {nav.subLinks && (
                      <Accordion.Content className="pb-8 pt-1 pr-1 pl-6 space-y-3 overflow-hidden data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown">
                        {nav.image && (
                          <Link
                            href="/"
                            onClick={handleClickLink}
                            className="flex items-center gap-4 p-4 rounded-lg bg-gradient-to-r from-yellow3 to-gray4 text-gray12 hover:shadow-md shadow-gray2 outline-yellow7"
                          >
                            <Image
                              src={logo}
                              width={60}
                              height={60}
                              loading="lazy"
                              alt="logo"
                              className="rounded-lg hover:scale-110 transition-transform"
                            />
                            <div>
                              <p className="text-lg font-bold text-gray12">LML Fix</p>
                              <p className="text-sm text-gray11">
                                Fast and affordable, around Seattle.
                              </p>
                            </div>
                          </Link>
                        )}
                        {nav.subLinks.map((subLink) => (
                          <Link
                            key={subLink.id}
                            href={subLink.link}
                            className="block px-4 py-2 rounded-lg bg-gray2 hover:bg-yellow3 text-gray12 outline-yellow7"
                          >
                            <div className="flex justify-between items-center">
                              <span>{subLink.title}</span>
                              {subLink?.icon && <span>{subLink.icon}</span>}
                            </div>
                            {subLink.description && (
                              <span className="block text-sm text-gray10">
                                {subLink.description}
                              </span>
                            )}
                          </Link>
                        ))}
                      </Accordion.Content>
                    )}
                  </Accordion.Item>
                ))}
              </Accordion.Root>

              {/* Footer */}
              <div className="mt-10 mb-40 space-y-6">
                {/* <div className="flex gap-4 mb-10 justify-center"> */}
                <Flex gap="4" align="center" justify="center">
                  <Button size="3">
                    <Link
                      href="/"
                      onClick={handleClickLink}
                      className="flex gap-2 items-center py-2"
                    >
                      <Tag size={20} /> Book Now
                    </Link>
                  </Button>

                  <Button size="3" color="gray" highContrast>
                    <Link href="/" onClick={handleClickLink} className="py-2">
                      Contact Us
                    </Link>
                  </Button>
                </Flex>

                <div className="flex items-center justify-center gap-4">
                  <Link href="/" title="Facebook">
                    <Facebook className="text-yellow8 hover:text-yellow6" />
                  </Link>
                  <Link href="/" title="Linkedin">
                    <Linkedin className="text-yellow8 hover:text-yellow6" />
                  </Link>
                  <Link href="/" title="Twitter">
                    <Twitter className="text-yellow8 hover:text-yellow6" />
                  </Link>
                  <Link href="/" title="Instagram">
                    <Instagram className="text-yellow8 hover:text-yellow6" />
                  </Link>
                </div>

                <div className="flex justify-between items-center px-4 py-3 rounded-lg bg-gray2">
                  <span className="text-gray12">Theme</span>
                  <button
                    className="p-2 rounded-full bg-gray3 hover:bg-gray4 text-gray12"
                    onClick={toggleTheme}
                  >
                    {theme === 'light' ? <SunIcon /> : <MoonIcon />}
                  </button>
                </div>
              </div>
            </Dialog.Content>
          </Theme>
        </Dialog.Portal>
      </Dialog.Root>
    </>
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
            'block select-none rounded-md p-3 text-[15px] leading-none no-underline outline-none transition-colors hover:bg-mauve3 focus:shadow-[0_0_0_2px] focus:shadow-yellow7',
            className
          )}
          {...props}
          ref={forwardedRef}
        >
          <div className="mb-[5px] font-medium leading-[1.2] text-gray12">{title}</div>
          <div className="leading-[1.4] text-mauve11">
            <div className="inline-flex gap-2">{children}</div>
          </div>
        </a>
      </NavigationMenu.Link>
    </li>
  )
);

export default NavBar;
