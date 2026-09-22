'use client';
import React from 'react';
import { motion } from 'framer-motion';

interface Props {
  icon: React.ReactNode;
  title: string;
  description: string;
  action: () => void;
  delay: number;
}

const OrderOption = ({
  icon,
  title,
  description,
  action,
  delay = 0,
}: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ scale: 1.05 }}
      className='card bg-white p-6 cursor-pointer'
      onClick={action}
    >
      <div className='flex flex-col items-center text-center'>
        <div className='w-20 h-20 mb-4 flex items-center justify-center rounded-full bg-gradient-to-br from-[#6B2C2C] to-[#8B3A3A] text-white text-4xl shadow-lg'>
          {icon}
        </div>
        <h3 className='text-xl font-bold mb-2 text-[#6B2C2C]'>{title}</h3>
        <p className='text-gray-600'>{description}</p>
      </div>
    </motion.div>
  );
};

export default OrderOption;
