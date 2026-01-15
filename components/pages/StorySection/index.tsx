'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';

const StorySection = () => {
  const ref = React.useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section id='story' ref={ref} className='section-padding pattern-bg'>
      <div className='w-full flex justify-center'>
        <div className='max-w-6xl'>
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className='text-center mb-12'
          >
            <h2
              className='text-4xl md:text-6xl font-bold mb-4'
              style={{ color: 'var(--burgundy-dark)' }}
            >
              A Legacy of <span className='text-gradient-gold'>Flavor</span>
              <div className='w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto mt-5'></div>
            </h2>
          </motion.div>
          <div className='grid md:grid-cols-2 gap-12 items-center'>
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.2 }}
            >
              <div className='bg-white rounded-2xl p-8 shadow-xl'>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  For over{' '}
                  <span className='font-bold text-[#6B2C2C]'>20 years</span>,
                  Aling Norma has been serving her special Pancit Lug-log with
                  unwavering dedication and love. What started as a small
                  venture has grown into a beloved institution, cherished by
                  generations of families.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed mb-6'>
                  Her secret? Staying{' '}
                  <span className='font-semibold text-[#8B3A3A]'>
                    faithful to her original recipe
                  </span>{' '}
                  while using only the freshest ingredients. Every bowl is
                  prepared with the same care and attention as the very first
                  one she made two decades ago.
                </p>
                <p className='text-lg text-gray-700 leading-relaxed'>
                  Customers describe her Pancit Lug-log as{' '}
                  <span className='italic font-semibold text-[#D4AF37]'>
                    "nakakahumaling"
                  </span>{' '}
                  (addictive) – an unforgettable experience that keeps them
                  coming back, year after year.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
              className='space-y-6'
            >
              {/* Testimonial Cards */}
              <div className='bg-gradient-to-br from-[#6B2C2C] to-[#8B3A3A] text-white rounded-xl p-6 shadow-lg'>
                <p className='text-lg italic mb-3'>
                  "An unforgettable experience! We've been coming here for years
                  and it never disappoints."
                </p>
                <p className='text-[#D4AF37] font-semibold'>
                  - Long-time Customer
                </p>
              </div>

              <div className='bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-[#6B2C2C] rounded-xl p-6 shadow-lg'>
                <p className='text-lg italic mb-3'>
                  "Nakakahumaling talaga! The authentic flavors remind me of
                  home."
                </p>
                <p className='font-semibold'>- Maria Santos</p>
              </div>

              <div className='bg-white rounded-xl p-6 shadow-lg border-2 border-[#D4AF37]'>
                <p className='text-lg italic mb-3 text-gray-700'>
                  "She's been faithful to her cooking for over 20 years. That's
                  true dedication to quality!"
                </p>
                <p className='text-[#8B3A3A] font-semibold'>- Regular Patron</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default StorySection;
