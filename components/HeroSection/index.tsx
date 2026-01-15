'use client';
import React from 'react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 z-0'>
        <img
          src='https://images.unsplash.com/photo-1566866355075-8b384b6eb9fe'
          alt="Norma's Special Pancit Lug-log"
          className='w-full h-full object-cover'
          loading='eager'
        />
        <div className='absolute inset-0 gradient-overlay'></div>
      </div>

      {/* Decorative Pattern Overlay */}
      <div
        className='absolute inset-0 z-10 opacity-10'
        style={{
          backgroundImage: `radial-gradient(circle, rgba(212, 175, 55, 0.5) 1px, transparent 1px)`,
          backgroundSize: '30px 30px',
        }}
      ></div>

      {/* Content */}
      <div className='relative z-20 max-w-5xl mx-auto px-6 text-center'>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <h1 className='text-5xl md:text-7xl lg:text-8xl font-bold text-white mb-6 leading-tight'>
            Norma's Special
            <br />
            <span className='text-[#D4AF37] mb-6'>Pancit Lug-log</span>
          </h1>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='text-xl md:text-3xl text-white/90 mb-12 font-light tracking-wide'
        >
          20+ Years of Unforgettable Flavors
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className='flex flex-col sm:flex-row gap-4 justify-center items-center'
        >
          <button
            onClick={() => scrollToSection('how-to-order')}
            className='btn-primary text-lg px-8 py-4'
          >
            Order Now
          </button>
          <button
            onClick={() => scrollToSection('story')}
            className='btn-secondary text-lg px-8 py-4'
          >
            Learn Our Story
          </button>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1, delay: 1.5 }}
        className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20'
      >
        <div className='w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2'>
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className='w-1.5 h-1.5 bg-white/70 rounded-full'
          ></motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default HeroSection;
