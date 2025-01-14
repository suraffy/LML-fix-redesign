import ServiceDetails from '@/components/OurServices/ServiceDetails';
import { SearchCheck } from 'lucide-react';

const page = () => {
  const data = {
    title: 'Diagnostics',
    description: 'Identify and fix device issues.',
    icon: <SearchCheck size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
