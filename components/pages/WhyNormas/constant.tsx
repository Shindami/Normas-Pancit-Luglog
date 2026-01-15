import { ChefHat, Layers, Fish, Sparkles, Clock, Award } from 'lucide-react';
import type { FeatureCardProps } from './type';

export const FEATURECARD: Omit<FeatureCardProps, 'delay'>[] = [
  {
    icon: <Layers />,
    title: 'Thick Noodles',
    description:
      'Unlike traditional pancit palabok, we use thick, hearty noodles that perfectly absorb our rich sauce.',
  },
  {
    icon: <ChefHat />,
    title: 'Sauce Perfection',
    description:
      'Our special sauce is incorporated into the noodles, not just on top – creating a harmonious blend of flavors.',
  },
  {
    icon: <Fish />,
    title: 'Generous Seafood',
    description:
      'Topped with fresh squid, succulent shrimp, eggs, smoked fish, crispy chicharon, and tender pork.',
  },
  {
    icon: <Sparkles />,
    title: 'Fresh Ingredients',
    description:
      'We source only the highest quality, freshest ingredients daily to ensure exceptional taste.',
  },
  {
    icon: <Clock />,
    title: '20+ Years Tradition',
    description:
      'Two decades of perfecting our craft, serving countless satisfied customers and families.',
  },
  {
    icon: <Award />,
    title: 'Authentic Recipe',
    description:
      'Faithful to Aling Normas original recipe – the same delicious taste since day one.',
  },
];
