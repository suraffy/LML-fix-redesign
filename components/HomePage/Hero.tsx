'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Flex } from '@radix-ui/themes';
import { Tag, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray1 text-gray12 lg:pt-12">
      <div className="container flex flex-col-reverse lg:flex-row items-center py-16 px-6 gap-12">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-yellow12"
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.6 }}
          >
            Seattle&rsquo;s Premier Device Repair Service
          </motion.h1>
          <motion.p
            className="text-base text-gray11"
            animate={{ opacity: [0, 1], x: [-50, 0] }}
            transition={{ duration: 0.8 }}
          >
            Fast, affordable, and reliable repair services for tablets, laptops, game consoles, and
            cell phones.
          </motion.p>
          <motion.div animate={{ opacity: [0, 1], x: [-50, 0] }} transition={{ duration: 1 }}>
            <Flex gap="4" wrap="wrap">
              <Button size="3">
                <Link href="/" className="flex items-center gap-2">
                  <Tag size={18} /> Book a Repair
                </Link>
              </Button>
              <Button size="3" color="gray" highContrast>
                <Link href="#services" className="flex items-center gap-2">
                  Learn More <ChevronDown size={18} />
                </Link>
              </Button>
            </Flex>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 relative overflow-hidden rounded-lg"
          animate={{ opacity: [0, 1], x: [50, 0] }}
          transition={{ duration: 0.6 }}
        >
          <Image
            src="/cracked-iphone.jpg"
            alt="Cracked Iphone"
            width={600}
            height={400}
            className="rounded-lg h-[200px] lg:h-[400px] object-cover shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
