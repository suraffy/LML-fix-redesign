'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'motion/react';
import { Button, Flex } from '@radix-ui/themes';
import { Tag, ChevronDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative bg-gray1 text-gray12 lg:pt-12">
      <div className="container flex flex-col-reverse lg:flex-row items-center py-16 px-6 md:px-16 gap-12">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl lg:text-5xl font-bold text-yellow12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Seattle&rsquo;s Premier Device Repair Service
          </motion.h1>
          <motion.p
            className="text-base text-gray11"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            Fast, affordable, and reliable repair services for tablets, laptops, game consoles, and
            cell phones.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease: 'easeOut' }}
          >
            <Flex gap="4" justify="center" wrap="wrap">
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
          className="lg:w-1/2 max-h-[160px] xs:max-h-[200px] lg:max-h-[360px] relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src="/cracked-iphone.jpg"
            alt="Cracked Iphone"
            width={600}
            height={400}
            className="rounded-lg w-full h-full h-[200px]lg:h-[400px] object-cover shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
