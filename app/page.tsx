import Hero from '@/components/HomePage/Hero';
import Services from '@/components/HomePage/Services';
import Location from '@/components/HomePage/Location';
import Testimonials from '@/components/HomePage/Testimonials';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'LML Fix',
  description:
    'Fast, affordable, and reliable repair services for tablets, laptops, game consoles, and cell phones.',
};

export default function Home() {
  return (
    <div>
      <Hero />
      <Services />
      <Location />
      <Testimonials />
    </div>
  );
}
