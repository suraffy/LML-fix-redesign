import type { Metadata } from 'next';
import { FolderCode } from 'lucide-react';
import ServiceDetails from '@/components/OurServices/ServiceDetails';

export const metadata: Metadata = {
  title: 'Software | LML Fix',
};

const page = () => {
  const data = {
    title: 'Software Repair',
    description: 'Fix and update your device software.',
    icon: <FolderCode size="64" color="black" />,
  };

  return <ServiceDetails data={data} />;
};

export default page;
