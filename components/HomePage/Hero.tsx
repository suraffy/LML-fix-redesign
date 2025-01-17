import Image from 'next/image';
import Link from 'next/link';
import * as motion from 'motion/react-client';
import { Button, Flex } from '@radix-ui/themes';
import { Tag, ChevronDown } from 'lucide-react';
import heroImage from '@/public/cracked-iphone.jpg';

const Hero = () => {
  return (
    <section className="relative bg-gray1 text-gray12">
      <div className="container flex flex-col-reverse lg:flex-row items-center py-8 md:py-16 px-6 md:px-16 gap-12">
        <div className="lg:w-1/2 space-y-6">
          <motion.h1
            className="text-4xl lg:text-5xl text-center md:text-start font-bold text-yellow12"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            Seattle&rsquo;s Premier Device Repair Service
          </motion.h1>
          <motion.p
            className="text-base text-gray11 text-center md:text-start"
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
            <Flex gap="4" className="justify-center md:justify-normal" wrap="wrap">
              <Button size="3">
                <Link href="/" className="flex items-center gap-2 py-2">
                  <Tag size={18} /> Book a Repair
                </Link>
              </Button>
              <Button size="3" color="gray" highContrast>
                <motion.span
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                >
                  <Link href="#services" className="flex items-center gap-2 py-2">
                    Learn More <ChevronDown size={18} />
                  </Link>
                </motion.span>
              </Button>
            </Flex>
          </motion.div>
        </div>

        <motion.div
          className="lg:w-1/2 max-h-[160px] sm:max-h-[200px] lg:max-h-[360px] relative overflow-hidden rounded-lg"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <Image
            src={heroImage}
            alt="Cracked Iphone"
            width={600}
            height={400}
            className="rounded-lg w-full h-full object-cover shadow-lg"
            priority
          />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
