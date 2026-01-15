'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { FeatureCardProps } from './types';

const FeatureCard = ({
  icon,
  title,
  description,
  delay = 0,
}: FeatureCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className='card p-6 bg-white border-2 border-[#F5F1E8]'
    >
      <div className='flex flex-col items-center text-center'>
        <div className='w-16 h-16 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-white text-3xl shadow-lg'>
          {icon}
        </div>
        <h3 className='text-xl font-bold mb-3 text-[#6B2C2C]'>{title}</h3>
        <p className='text-gray-600 leading-relaxed'>{description}</p>
      </div>
    </motion.div>
  );
};

export default FeatureCard;
