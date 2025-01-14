import Hero from '@/components/HomePage/Hero';
import Services from '@/components/HomePage/Services';
import Location from '@/components/HomePage/Location';
import Testimonials from '@/components/HomePage/Testimonials';

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
