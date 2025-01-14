import ServiceDetails from '@/components/OurServices/ServiceDetails';
import { Key } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Unlocks | LML Fix',
};

const page = () => {
  const data = {
    title: 'Unlocks',
    description: 'Unlock your devices for more flexibility.',
    icon: <Key size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
