'use client';

import { motion } from 'motion/react';
import { Link } from '@radix-ui/themes';
import { FolderCode, SearchCheck, Droplet, Key, DollarSign, Settings } from 'lucide-react';

import { ArrowRightIcon } from '@radix-ui/react-icons';

const Services = () => {
  const services = [
    {
      title: 'Software Repair',
      description: 'Fix and update your device software.',
      icon: <FolderCode className="text-gray-900" />,
      link: 'software',
    },
    {
      title: 'Diagnostics',
      description: 'Identify and fix device issues.',
      icon: <SearchCheck className="text-gray-900" />,
      link: 'diagnostics',
    },
    {
      title: 'Cleaning',
      description: 'Deep cleaning of your device.',
      icon: <Droplet className="text-gray-900" />,
      link: 'cleaning',
    },
    {
      title: 'Unlocks',
      description: 'Unlock your devices for more flexibility.',
      icon: <Key className="text-gray-900" />,
      link: 'unlocks',
    },
    {
      title: 'Buybacks',
      description: 'Sell your old devices for cash.',
      icon: <DollarSign className="text-gray-900" />,
      link: 'buybacks',
    },
    {
      title: 'Customization',
      description: 'Personalize your device with unique designs.',
      icon: <Settings className="text-gray-900" />,
      link: 'customization',
    },
  ];

  return (
    <section id="services" className="py-20 bg-gray1 text-gray12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Our Services</h2>
        <p className="text-gray11 mb-8 text-center">
          Check out the top-quality repair services we offer in the Seattle area!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service) => (
            <motion.div
              key={service.title}
              whileTap={{ scale: 0.95 }}
              className="relative p-6 bg-gradient-to-br from-gray2 to-gray4 rounded-lg border border-gray6 shadow-md hover:shadow-lg transition-shadow"
            >
              <div className="text-4xl mb-6 flex items-center justify-center w-14 h-14 bg-yellow9 text-gray1 rounded-full shadow-md">
                {service.icon}
              </div>

              <div>
                <h3 className="text-xl font-semibold text-yellow12">{service.title}</h3>
                <p className="text-sm text-gray11 mb-2">{service.description}</p>
              </div>

              <Link href={`our-services/${service.link}`}>
                <span className="flex items-center gap-2 hover:gap-3 transition-all">
                  Learn More
                  <ArrowRightIcon className="w-4 h-4" />
                </span>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
