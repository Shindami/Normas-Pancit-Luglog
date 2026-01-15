'use client';

import React from 'react';
import { motion } from 'framer-motion';
import type { MenuItemProps } from './types';

const MenuItem: React.FC<MenuItemProps> = ({
  image,
  name,
  description,
  price,
  toppings,
  isSpecial = false,
  delay = 0,
}) => {
  const scrollToOrder = (): void => {
    const element = document.getElementById('how-to-order');
    element?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay }}
      className={`card bg-white overflow-hidden ${
        isSpecial ? 'ring-4 ring-[#D4AF37] ring-offset-4' : ''
      }`}
    >
      <div className='relative overflow-hidden group'>
        <img
          src={image}
          alt={name}
          className='w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110'
          loading='lazy'
        />

        {isSpecial && (
          <div className='absolute top-4 right-4 bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-white px-4 py-2 rounded-full font-bold shadow-lg'>
            Our Specialty
          </div>
        )}
      </div>

      <div className='p-6'>
        <h3 className='text-2xl font-bold mb-2 text-[#6B2C2C]'>{name}</h3>
        <p className='text-gray-600 mb-4 leading-relaxed'>{description}</p>

        {toppings && toppings.length > 0 && (
          <div className='mb-4'>
            <p className='font-semibold text-[#8B3A3A] mb-2'>Toppings:</p>
            <div className='flex flex-wrap gap-2'>
              {toppings.map((topping: string, index: number) => (
                <span
                  key={index}
                  className='px-3 py-1 bg-[#F5F1E8] text-[#6B2C2C] text-sm rounded-full'
                >
                  {topping}
                </span>
              ))}
            </div>
          </div>
        )}

        <div className='flex items-center justify-between mt-6'>
          <span className='text-3xl font-bold text-[#D4AF37]'>{price}</span>
          <button
            onClick={scrollToOrder}
            className='bg-gradient-to-r from-[#D4AF37] to-[#C9A961] text-white px-6 py-3 rounded-lg font-semibold hover:shadow-xl transition-all hover:scale-105'
          >
            Order Now
          </button>
        </div>
      </div>
    </motion.div>
  );
};

export default MenuItem;
