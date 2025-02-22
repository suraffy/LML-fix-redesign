import type { Metadata } from 'next';
import { Droplet } from 'lucide-react';
import ServiceDetails from '@/components/OurServices/ServiceDetails';

export const metadata: Metadata = {
  title: 'Cleaning | LML Fix',
};

const page = () => {
  const data = {
    title: 'Cleaning',
    description: 'Deep cleaning of your device.',
    icon: <Droplet size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
