import ServiceDetails from '@/components/OurServices/ServiceDetails';
import { Droplet } from 'lucide-react';

const page = () => {
  const data = {
    title: 'Cleaning',
    description: 'Deep cleaning of your device.',
    icon: <Droplet size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
