import type { Metadata } from 'next';
import Services from '@/components/HomePage/Services';

export const metadata: Metadata = {
  title: 'Services | LML Fix',
};

const page = () => {
  return (
    <div className="mb-40">
      <Services />
    </div>
  );
};

export default page;
