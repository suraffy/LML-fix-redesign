'use client';

import { motion } from 'motion/react';
import { Flex } from '@radix-ui/themes';

const testimonials = [
  {
    id: 1,
    name: 'John Doe',
    location: 'Seattle, WA',
    feedback:
      'LML Fix provided exceptional service! They fixed my phone quickly and at a reasonable price. Highly recommend!',
    image:
      'https://images.unsplash.com/photo-1595152772835-219674b2a8a6?crop=faces&fit=crop&w=300&h=300&q=100',
  },
  {
    id: 2,
    name: 'Jane Smith',
    location: 'North Seattle, WA',
    feedback:
      'Amazing experience! The staff was friendly and knowledgeable. My laptop is now working perfectly!',
    image:
      'https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?crop=faces&fit=crop&w=300&h=300&q=100',
  },
  {
    id: 3,
    name: 'Sam Wilson',
    location: 'West Seattle, WA',
    feedback: 'They repaired my gaming console in record time! Super satisfied with their service.',
    image:
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?crop=faces&fit=crop&w=300&h=300&q=100',
  },
];

const Testimonial = () => {
  return (
    <section className="bg-gray1 pt-20 pb-40 px-6 md:px-12 lg:px-20">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10"
      >
        <h2 className="text-3xl md:text-4xl font-bold text-gray12">What People Say About Us</h2>
        <p className="text-gray11 mt-3">
          Hear from our satisfied customers in Seattle, North Seattle, and West Seattle!
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {testimonials.map((testimonial) => (
          <motion.div
            key={testimonial.id}
            initial={{ opacity: 0, scale: 0.9 }}
            // animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: testimonial.id * 0.2 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="max-w-md mx-auto bg-gray1 p-6 rounded-xl shadow-md flex flex-col items-start border border-transparent hover:border-gray3 hover:shadow-xl transition-all"
          >
            <Flex align="center" gap="4" className="mb-4">
              <motion.img
                src={testimonial.image}
                alt={testimonial.name}
                className="w-16 h-16 rounded-full object-cover shadow-md"
                whileHover={{ scale: 1.1 }}
              />
              <div>
                <h3 className="text-lg font-semibold text-gray12">{testimonial.name}</h3>
                <p className="text-sm text-gray11">{testimonial.location}</p>
              </div>
            </Flex>

            <motion.div
              className="mt-4 flex items-center gap-2 text-centero"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
            >
              <p className="text-gray11">{testimonial.feedback}</p>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonial;
