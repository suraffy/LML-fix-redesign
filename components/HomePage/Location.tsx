'use client';

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Flex, Link } from '@radix-ui/themes';

const Locations = () => {
  const [selectedLocation, setSelectedLocation] = useState('Seattle');

  const locations = [
    {
      id: 1,
      name: 'Seattle',
      description: 'Main location, convenient for all your repair needs.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2687.3589847913568!2d-122.36782272360401!3d47.65802217119456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490154fe786c23b%3A0x4ebd3ad31cbb95ee!2sLML%20Repair%20-%20Ballard!5e0!3m2!1sen!2sus!4v1694732382875!5m2!1sen!2sus',
      image: '/seattle.jpg',
      link: 'seattle',
    },
    {
      id: 2,
      name: 'North Seattle',
      description: 'Fast repairs in North Seattle for your convenience.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86029.7856478836!2d-122.41901626540476!3d47.63719469918059!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x549013a42b28bdbf%3A0xddf67a8bb8f93d1e!2sLML%20Repair%20-%20North%20Seattle!5e0!3m2!1sen!2sso!4v1707896875796!5m2!1sen!2sso',
      image: '/seattle-north.jpg',
      link: 'northseattle',
    },
    {
      id: 3,
      name: 'West Seattle',
      description: 'Located in West Seattle for quick and easy repairs.',
      map: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d86135.66264469302!2d-122.52284050273434!3d47.572857500000005!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x5490435d141069cd%3A0x8949cfda1da34803!2sLML%20Repair%20-%20Same%20Day%20Phone%20%26%20Tablet%20Repair!5e0!3m2!1sen!2sus!4v1722519680294!5m2!1sen!2sus',
      image: '/seattle-west.jpg',
      link: 'westseattle',
    },
  ];

  return (
    <section id="locations" className="py-16 bg-gray2 text-gray12">
      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-3">Our Locations</h2>

        <p className="text-center text-sm text-gray10 mb-6">
          Click on a location card to view its map.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {locations.map((location) => (
            <motion.div
              key={location.name}
              whileTap={{
                scale: 0.95,
                transition: { type: 'spring', stiffness: 300, damping: 20 },
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{
                opacity: 1,
                y: 0,
                transition: { duration: 0.4, delay: location.id * 0.2 },
              }}
              viewport={{ once: true, amount: 0.5 }}
              className="max-w-md mx-auto flex flex-col bg-gray1 p-6 py-4 rounded-lg shadow-lg hover:shadow-xl transition-hover cursor-pointer"
              onClick={() => setSelectedLocation(location.name)}
            >
              <div className="flex items-center justify-center space-x-4">
                <div className="flex items-center">
                  <Image
                    src={location.image}
                    alt={location.name}
                    height={100}
                    width={100}
                    className="rounded-full object-cover"
                  />
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-yellow12">{location.name}</h3>
                  <p className="text-sm text-gray11">{location.description}</p>
                </div>
              </div>

              <Flex className="self-end mt-4 flex-grow">
                <Link href={`/${location.link}`}>Explore</Link>
              </Flex>
            </motion.div>
          ))}
        </div>

        <div className="mt-8">
          {selectedLocation && (
            <div className="bg-gray3 h-64 rounded-lg shadow-lg">
              <div className="relative flex justify-center items-center h-full text-gray12">
                <iframe
                  src={locations.find((loc) => loc.name === selectedLocation)?.map}
                  className="w-full h-full border-0 rounded-xl"
                  aria-hidden="false"
                  title="Shop Location"
                ></iframe>
              </div>
            </div>
          )}
          {!selectedLocation && (
            <div className="bg-gray3 h-64 rounded-lg shadow-lg flex justify-center items-center text-gray12">
              <span className="text-xl">Select a location to view the map</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default Locations;
