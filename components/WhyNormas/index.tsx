'use client';
import React from 'react';
import { motion } from 'framer-motion';
import FeatureCard from '@/components/FeatureCard';
import { FEATURECARD } from './constant';

const WhyNormas: React.FC = () => {
  return (
    <section className='section-padding bg-gradient-to-b from-[#F5F1E8] to-white'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold mb-4 text-[#6B2C2C]'>
            Why Choose <span className='text-gradient-gold'>Normas?</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Experience the difference that passion, quality, and tradition make
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto mt-6'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {FEATURECARD.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyNormas;
