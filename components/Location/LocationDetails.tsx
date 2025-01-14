'use client';

import React, { useState } from 'react';
import { motion } from 'motion/react';
import { Button, Flex, Heading } from '@radix-ui/themes';
import { Building2, MapPin, PhoneCall, Send, Signpost } from 'lucide-react';
import Link from 'next/link';

interface LocationDetailsProps {
  location: string;
  address: string;
  near: string;
  building: string;
  floor: string;
  number: string;
  steps: string[];
  position: string;
  direction: string;
}

const LocationDetails = ({ data }: { data: LocationDetailsProps }) => {
  const [isMapLoading, setIsMapLoading] = useState(false);

  const handleMapLoad = () => {
    setIsMapLoading(false);
  };

  return (
    <div className="bg-gray1 text-gray12 min-h-screen flex flex-col pb-40">
      <header className="bg-gradient-to-r from-gray3 via-yellow9 to-gray3 p-8 text-center text-black">
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          className="text-3xl sm:text-4xl font-bold"
        >
          Our {data.location} Shop
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-sm sm:text-base mt-4 text-gray-800"
        >
          8am - 7pm Everyday | {data.near}
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="text-[13px] sm:text-[15px] text-gray-800 flex items-center justify-center gap-2"
        >
          <Building2 size="16" />
          {data.building} {data.floor}
        </motion.p>
      </header>

      <section className="flex justify-center p-6 my-2">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.4 }}
          className="rounded-lg px-6 py-4 bg-gray2 shadow-gray4 border border-gray3 hover:shadow-lg transition-all"
        >
          <Flex direction="column" gap="4" align="center" justify="center">
            <Heading as="h3" size="3" color="gray" weight="medium">
              <Flex align="center" gap="2">
                <MapPin size="20" /> {data.address}
              </Flex>
            </Heading>

            <Flex gap="3" wrap="wrap" justify="center">
              <Button>
                <Link
                  href={`tel: ${data.number}`}
                  className="flex items-center justify-center gap-2"
                >
                  <PhoneCall size="18" /> Call Us
                </Link>
              </Button>
              <Button>
                <Link
                  href={`sms: ${data.number}`}
                  className="flex items-center justify-center gap-2"
                >
                  <Send size="18" /> Text Us
                </Link>
              </Button>
              <Button>
                <Link
                  href={data.direction}
                  target="_blank"
                  className="flex items-center justify-center gap-2"
                >
                  <Signpost size="18" /> Get Direction
                </Link>
              </Button>
            </Flex>
          </Flex>
        </motion.div>
      </section>

      <section className="container mx-auto px-6 py-8">
        <div className="flex flex-wrap md:flex-nowrap gap-8 items-stretch">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-semibold text-yellow11">
              How&nbsp;to&nbsp;Enter&nbsp;Our&nbsp;Shop
            </h2>
            <ol className="space-y-4">
              {data.steps?.map((step, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2, duration: 0.4 }}
                  whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  className="bg-gray2 p-4 rounded-lg shadow-md flex items-start"
                >
                  <span className="font-bold text-yellow11 mr-4">Step&nbsp;{index + 1}</span>
                  {step}
                </motion.li>
              ))}
            </ol>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.4 }}
            className="relative w-full h-96 rounded-lg shadow-lg overflow-hidden self-center"
          >
            {isMapLoading && (
              <div className="absolute inset-0 flex items-center justify-center bg-gray1/50">
                <div className="animate-spin h-8 w-8 border-4 border-yellow11 border-t-transparent rounded-full"></div>
              </div>
            )}
            <iframe
              src={data.position}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              onLoad={handleMapLoad}
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default LocationDetails;
