import React from 'react';
import HeroSection from '@/components/HeroSection';
import StorySection from '@/components/StorySection';
import WhyNormas from '@/components/WhyNormas';
import MenuSection from '@/components/MenuSection';
import ReviewsSection from '@/components/ReviewSection';
import HowToOrderSection from '@/components/HowToOrderSection';
import Footer from '@/components/Footer';
import { ToastProvider, Toast } from '@/components/ui/toaster/toast';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title:
    'Normas Special Pancit Lug-log | 20+ Years of Authentic Filipino Flavors',
  description:
    'Experience the best Pancit Lug-log in Manila! Aling Norma has been serving authentic Filipino pancit with thick noodles, generous seafood, and unforgettable flavors for over 20 years. Order now!',
};

function App() {
  return (
    <>
      <title>
        Normas Special Pancit Lug-log | 20+ Years of Authentic Filipino Flavors
      </title>
      <meta
        name='description'
        content='Experience the best Pancit Lug-log in Manila! Aling Norma has been serving authentic Filipino pancit with thick noodles, generous seafood, and unforgettable flavors for over 20 years. Order now!'
      />

      <div className='min-h-screen'>
        <ToastProvider>
          <div className='min-h-screen'>
            <HeroSection />
            <StorySection />
            <WhyNormas />
            <MenuSection />
            <ReviewsSection />
            <HowToOrderSection />
            <Footer />
          </div>
        </ToastProvider>
      </div>
    </>
  );
}

export default App;
