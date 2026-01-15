'use client';
import React from 'react';
import { Facebook, Instagram, Mail, Phone, MapPin } from 'lucide-react';

const Footer = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <footer className='bg-gradient-to-br from-[#6B2C2C] to-[#8B3A3A] text-[#F5F1E8]'>
      <div className='max-w-7xl mx-auto px-6 py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12'>
          {/* Brand */}
          <div>
            <h3 className='text-3xl font-bold text-[#D4AF37] mb-4'>
              Normas Special
            </h3>
            <p className='text-[#F5F1E8]/90 leading-relaxed'>
              Serving authentic Filipino Pancit Lug-log with love and tradition
              for over 20 years.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <span className='text-xl font-bold text-white mb-4 block'>
              Quick Links
            </span>
            <nav className='space-y-3'>
              <button
                onClick={() => scrollToSection('story')}
                className='block text-[#F5F1E8]/80 hover:text-[#D4AF37] transition-colors'
              >
                Our Story
              </button>
              <button
                onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
                className='block text-[#F5F1E8]/80 hover:text-[#D4AF37] transition-colors'
              >
                Menu
              </button>
              <button
                onClick={() => scrollToSection('how-to-order')}
                className='block text-[#F5F1E8]/80 hover:text-[#D4AF37] transition-colors'
              >
                Order Now
              </button>
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <span className='text-xl font-bold text-white mb-4 block'>
              Contact Us
            </span>
            <div className='space-y-3'>
              <div className='flex items-center gap-3'>
                <Phone className='w-5 h-5 text-[#D4AF37]' />
                <a
                  href='tel:+639123456789'
                  className='text-[#F5F1E8]/80 hover:text-[#D4AF37] transition-colors'
                >
                  +63 912 345 6789
                </a>
              </div>
              <div className='flex items-center gap-3'>
                <Mail className='w-5 h-5 text-[#D4AF37]' />
                <a
                  href='mailto:normas@special.ph'
                  className='text-[#F5F1E8]/80 hover:text-[#D4AF37] transition-colors'
                >
                  normas@special.ph
                </a>
              </div>
              <div className='flex items-start gap-3'>
                <MapPin className='w-5 h-5 text-[#D4AF37] mt-1' />
                <span className='text-[#F5F1E8]/80'>
                  123 Food Street
                  <br />
                  Manila, Philippines
                </span>
              </div>
            </div>
          </div>

          {/* Hours & Social */}
          <div>
            <span className='text-xl font-bold text-white mb-4 block'>
              Hours & Social
            </span>
            <p className='text-[#F5F1E8]/90 mb-4'>
              Monday - Sunday
              <br />
              9:00 AM - 8:00 PM
            </p>
            <div className='flex gap-4'>
              <a
                href='https://facebook.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#6B2C2C] hover:bg-[#C9A961] transition-all hover:scale-110'
              >
                <Facebook className='w-5 h-5' />
              </a>
              <a
                href='https://instagram.com'
                target='_blank'
                rel='noopener noreferrer'
                className='w-10 h-10 bg-[#D4AF37] rounded-full flex items-center justify-center text-[#6B2C2C] hover:bg-[#C9A961] transition-all hover:scale-110'
              >
                <Instagram className='w-5 h-5' />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className='border-t border-[#F5F1E8]/20 pt-8 text-center'>
          <p className='text-[#F5F1E8]/70'>
            © {new Date().getFullYear()} Normas Special Pancit Lug-log. All
            rights reserved.
          </p>
          <p className='text-[#D4AF37] mt-2 font-semibold'>
            Proudly serving authentic Filipino flavors since 2003
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
