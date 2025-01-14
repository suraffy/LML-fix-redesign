import ServiceDetails from '@/components/OurServices/ServiceDetails';
import { DollarSign } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Buybacks | LML Fix',
};

const page = () => {
  const data = {
    title: 'Buybacks',
    description: 'Sell your old devices for cash.',
    icon: <DollarSign size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
