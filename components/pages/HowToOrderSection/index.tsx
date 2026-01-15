'use client';
import React from 'react';
import { motion } from 'framer-motion';
import OrderOption from '@/components/pages/OrderOption';
import { Phone, ShoppingBag, Truck, MapPin, Clock } from 'lucide-react';
import { toast } from '@/components/ui/Toaster/use-toast';

const HowToOrderSection = () => {
  const phoneNumber = '+63 912 345 6789';
  const address = '123 Food Street, Manila, Philippines';

  const handleCall = () => {
    window.location.href = `tel:${phoneNumber}`;
  };

  const handleOnlineOrder = () => {
    toast({
      title: 'Online Ordering',
      description:
        '🚧 Online ordering will be available soon! Please call us to place your order. 📞',
      duration: 5000,
    });
  };

  const handleDelivery = () => {
    toast({
      title: 'Delivery Service',
      description:
        '🚧 Delivery booking feature coming soon! Call us to arrange delivery. 🚚',
      duration: 5000,
    });
  };

  const handleTakeout = () => {
    toast({
      title: 'Takeout Orders',
      description:
        "📞 Call us to place your takeout order and we'll have it ready for pickup!",
      duration: 5000,
    });
  };

  const orderOptions = [
    {
      icon: <Phone />,
      title: 'Call Us',
      description: 'Quick and easy phone orders',
      action: handleCall,
    },
    {
      icon: <ShoppingBag />,
      title: 'Online Order',
      description: 'Order through our website',
      action: handleOnlineOrder,
    },
    {
      icon: <Truck />,
      title: 'Delivery',
      description: 'We deliver to your doorstep',
      action: handleDelivery,
    },
    {
      icon: <MapPin />,
      title: 'Takeout',
      description: 'Pick up at our location',
      action: handleTakeout,
    },
  ];

  return (
    <section
      id='how-to-order'
      className='section-padding bg-gradient-to-b from-white to-[#F5F1E8]'
    >
      <div className='max-w-7xl mx-auto'>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='text-center mb-16'
        >
          <h2 className='text-4xl md:text-6xl font-bold mb-4 text-[#6B2C2C]'>
            How to <span className='text-gradient-gold'>Order</span>
          </h2>
          <p className='text-xl text-gray-600 max-w-3xl mx-auto'>
            Multiple convenient ways to enjoy our delicious pancit
          </p>
          <div className='w-24 h-1 bg-gradient-to-r from-[#D4AF37] to-[#C9A961] mx-auto mt-6'></div>
        </motion.div>

        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16'>
          {orderOptions.map((option, index) => (
            <OrderOption
              key={index}
              icon={option.icon}
              title={option.title}
              description={option.description}
              action={option.action}
              delay={index * 0.1}
            />
          ))}
        </div>

        {/* Contact Information */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className='grid md:grid-cols-3 gap-8'
        >
          <div className='card bg-gradient-to-br from-[#6B2C2C] to-[#8B3A3A] text-white p-8 text-center'>
            <Phone className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2'>Phone Number</h3>
            <a
              href={`tel:${phoneNumber}`}
              className='text-[#D4AF37] text-lg hover:underline'
            >
              {phoneNumber}
            </a>
          </div>

          <div className='card bg-gradient-to-br from-[#D4AF37] to-[#C9A961] text-[#6B2C2C] p-8 text-center'>
            <Clock className='w-12 h-12 mx-auto mb-4' />
            <h3 className='text-xl font-bold mb-2'>Operating Hours</h3>
            <p className='text-lg'>Mon-Sun: 9:00 AM - 8:00 PM</p>
          </div>

          <div className='card bg-white p-8 text-center border-2 border-[#D4AF37]'>
            <MapPin className='w-12 h-12 mx-auto mb-4 text-[#8B3A3A]' />
            <h3 className='text-xl font-bold mb-2 text-[#6B2C2C]'>Location</h3>
            <p className='text-gray-700 mb-2'>{address}</p>
            <p className='text-sm text-[#D4AF37] font-semibold'>
              Free parking available
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HowToOrderSection;
