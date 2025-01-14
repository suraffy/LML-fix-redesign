'use client';

import { Button, TextField } from '@radix-ui/themes';
import Link from 'next/link';
import { Facebook, Twitter, Linkedin, Instagram, ArrowUp } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-gray2 text-gray12 pt-16 pb-8">
      <div className="container mx-auto text-[15px] px-8 sm:px-16 lg:px-20 flex flex-wrap gap-12">
        <div className="space-y-10 max-w-md">
          <div className="flex flex-col space-y-4">
            <h3 className="text-lg font-semibold text-yellow11">About Us</h3>
            <p className="text-gray11">
              LML Fix provides top-quality repair services for cell phones, tablets, laptops, and
              game consoles. We’re committed to bringing your devices back to life!
            </p>
          </div>

          <div className="flex flex-col items-centerp space-y-2">
            <h4 className="font-semibold text-gray11">Follow Us</h4>
            <div className="flex space-x-4">
              {[
                { href: 'https://facebook.com', icon: Facebook },
                { href: 'https://twitter.com', icon: Twitter },
                { href: 'https://linkedin.com', icon: Linkedin },
                { href: 'https://instagram.com', icon: Instagram },
              ].map(({ href, icon: Icon }) => (
                <Link
                  key={href}
                  href={href}
                  target="_blank"
                  className="text-yellow11 hover:text-yellow9 transition-all"
                >
                  <Icon size={24} />
                </Link>
              ))}
            </div>
          </div>
        </div>

        <div className="space-y-4 max-w-xs">
          <h3 className="text-lg font-semibold text-yellow11">Stay Connected</h3>
          <p className="text-gray11">Subscribe to our newsletter for updates, offers, and tips.</p>
          <form className="flex space-x-2">
            <TextField.Root
              type="email"
              required
              placeholder="Your Email*"
              className="bg-gray2 text-gray12 flex-1"
            />
            <Button className="bg-yellow9 hover:bg-yellow10 text-gray1">Subscribe</Button>
          </form>
        </div>

        <div className="space-y-4 lg:justify-self-center">
          <h3 className="text-lg font-semibold text-yellow11">Quick Links</h3>
          <nav className="grid gap-y-2">
            {[
              { href: '/', label: 'Home' },
              { href: '#services', label: 'Services' },
              { href: '#locations', label: 'Locations' },
              { href: '/', label: 'Contact' },
              { href: '/', label: 'FAQ' },
            ].map((link, index) => (
              <Link
                key={index}
                href={link.href}
                className="text-gray11 hover:text-gray9 transition-all"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="space-y-4">
          <h3 className="text-lg font-semibold text-yellow11">Contact Info</h3>
          <p className="text-gray11">
            Email:{' '}
            <a href="mailto:info@lmlfix.com" className="text-yellow9">
              info@lmlfix.com
            </a>{' '}
            <br />
            Phone:{' '}
            <a href="tel:+11234567890" className="text-yellow9">
              (123) 456-7890
            </a>
          </p>
          <div className="space-y-2">
            <h4 className="font-semibold text-gray12">Business Hours:</h4>
            <p>8am - 7pm, Everyday</p>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-8 lg:px-16 mt-20">
        <div className="flex justify-end mb-8 sm:mb-0">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center space-x-2 text-gray11 hover:text-yellow11 transition-all"
          >
            <ArrowUp size={16} />
            <span>Back to Top</span>
          </button>
        </div>

        <p className="text-sm text-gray11 text-center">
          &copy; {new Date().getFullYear()} LML Fix. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
