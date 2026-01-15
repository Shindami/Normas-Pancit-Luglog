'use client';
import React from 'react';
import { motion } from 'framer-motion';
import MenuItem from '@/components/MenuItem';
import { MENU_ITEMS } from './constant';

const MenuSection = () => {
  return (
    <section className='section-padding bg-white'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold mb-4 text-[#6B2C2C]'>
            Our <span className='text-gradient-gold'>Menu</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Discover the flavors that have delighted customers for over 20 years
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto mt-6'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {MENU_ITEMS.map((item, index) => (
            <MenuItem
              key={index}
              image={item.image}
              name={item.name}
              description={item.description}
              price={item.price}
              toppings={item.toppings}
              isSpecial={item.isSpecial}
              delay={index * 0.15}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default MenuSection;
