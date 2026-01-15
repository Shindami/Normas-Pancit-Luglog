'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { REVIEW_ITEMS } from './constant';
import { Star } from 'lucide-react';
import ReviewCard from '../ReviewsCard';

const ReviewsSection = () => {
  const totalRating = 4.5;
  const totalReviews = 188;

  return (
    <section className='section-padding pattern-bg'>
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold mb-6 text-[#6B2C2C]'>
            What Our <span className='text-gradient-gold'>Customers Say</span>
          </h2>

          <div className='flex flex-col items-center gap-4 mb-6'>
            <div className='flex items-center gap-2'>
              <div className='flex items-center gap-1'>
                {[...Array(5)].map((_, index) => (
                  <Star
                    key={index}
                    className={`w-8 h-8 ${
                      index < Math.floor(totalRating)
                        ? 'fill-[#D4AF37] text-[#D4AF37]'
                        : index < totalRating
                        ? 'fill-[#D4AF37] text-[#D4AF37] opacity-50'
                        : 'text-gray-300'
                    }`}
                  />
                ))}
              </div>
              <span className='text-3xl font-bold text-[#6B2C2C]'>
                {totalRating}
              </span>
            </div>
            <p className='text-xl text-gray-600'>
              Based on{' '}
              <span className='font-bold text-[#D4AF37]'>
                {totalReviews} reviews
              </span>
            </p>
          </div>

          <div className='w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6'>
          {REVIEW_ITEMS.map((review, index) => (
            <ReviewCard
              key={index}
              name={review.name}
              rating={review.rating}
              review={review.review}
              delay={index * 0.1}
            />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className='mt-12 text-center'
        >
          <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
            Join hundreds of satisfied customers who have made Normas their
            go-to place for authentic Filipino pancit!
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default ReviewsSection;
