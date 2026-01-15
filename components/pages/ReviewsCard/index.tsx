'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import { ReviewCardProps } from '../ReviewSection/types';

const ReviewCard = ({ name, rating, review, delay = 0 }: ReviewCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className='card bg-white p-6 h-full'
    >
      <div className='flex items-center gap-1 mb-4'>
        {[...Array(5)].map((_, index) => (
          <Star
            key={index}
            className={`w-5 h-5 ${
              index < rating ? 'fill-[#D4AF37] text-[#D4AF37]' : 'text-gray-300'
            }`}
          />
        ))}
      </div>

      <p className='text-gray-700 italic mb-4 leading-relaxed'>{review}</p>

      <div className='border-t border-gray-200 pt-4'>
        <p className='font-semibold text-[#6B2C2C]'>{name}</p>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
