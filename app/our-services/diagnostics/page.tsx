import type { Metadata } from 'next';
import { SearchCheck } from 'lucide-react';
import ServiceDetails from '@/components/OurServices/ServiceDetails';

export const metadata: Metadata = {
  title: 'Diagnostics | LML Fix',
};

const page = () => {
  const data = {
    title: 'Diagnostics',
    description: 'Identify and fix device issues.',
    icon: <SearchCheck size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
