import type { Metadata } from 'next';
import { Settings } from 'lucide-react';
import ServiceDetails from '@/components/OurServices/ServiceDetails';

export const metadata: Metadata = {
  title: 'Customization | LML Fix',
};

const page = () => {
  const data = {
    title: 'Customization',
    description: 'Personalize your device with unique designs.',
    icon: <Settings size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
