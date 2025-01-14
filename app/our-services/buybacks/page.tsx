import ServiceDetails from '@/components/OurServices/ServiceDetails';
import { DollarSign } from 'lucide-react';

const page = () => {
  const data = {
    title: 'Buybacks',
    description: 'Sell your old devices for cash.',
    icon: <DollarSign size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
