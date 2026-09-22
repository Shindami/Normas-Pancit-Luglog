import React from 'react';
import HeroSection from '@/components/pages/HeroSection';
import StorySection from '@/components/pages/StorySection';
import WhyNormas from '@/components/pages/WhyNormas';
import MenuSection from '@/components/pages/MenuSection';
import ReviewsSection from '@/components/pages/ReviewSection';
import HowToOrderSection from '@/components/pages/HowToOrderSection';
import Footer from '@/components/pages/Footer';
import { ToastProvider } from '@/components/ui/toaster/toast';
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
