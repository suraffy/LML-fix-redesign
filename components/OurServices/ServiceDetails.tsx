'use client';

import { motion } from 'motion/react';
import { FolderCode, SearchCheck, Droplet, Key, DollarSign, Settings } from 'lucide-react';
import { Link } from '@radix-ui/themes';

interface ServiceDetailsProps {
  title: string;
  description: string;
  icon: JSX.Element;
}

const ServiceDetails = ({ data }: { data: ServiceDetailsProps }) => {
  const serviceDetails = [
    {
      title: 'Software Repair',
      description: 'Fix and update your device software.',
      icon: <FolderCode className="text-gray-900" />,
    },
    {
      title: 'Diagnostics',
      description: 'Identify and fix device issues.',
      icon: <SearchCheck className="text-gray-900" />,
    },
    {
      title: 'Cleaning',
      description: 'Deep cleaning of your device.',
      icon: <Droplet className="text-gray-900" />,
    },
    {
      title: 'Unlocks',
      description: 'Unlock your devices for more flexibility.',
      icon: <Key className="text-gray-900" />,
    },
    {
      title: 'Buybacks',
      description: 'Sell your old devices for cash.',
      icon: <DollarSign className="text-gray-900" />,
    },
    {
      title: 'Customization',
      description: 'Personalize your device with unique designs.',
      icon: <Settings className="text-gray-900" />,
    },
  ];

  return (
    <div className="bg-gray1 text-gray12 min-h-screen flex flex-col pb-60">
      <header className="bg-gradient-to-r from-gray3 via-yellow9 to-gray3 p-8 text-center text-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          {data.title}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base mt-4 text-gray-800"
        >
          {data.description}
        </motion.p>
      </header>

      <section className="flex flex-col items-center justify-center p-6 my-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="bg-yellow9 p-8 rounded-full flex flex-col items-center justify-center mt-8"
        >
          {data.icon}
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="text-sm sm:text-base mt-4 text-gray-800"
        >
          <Link href="/our-services" highContrast>
            our services
          </Link>
        </motion.div>
      </section>
    </div>
  );
};

export default ServiceDetails;
