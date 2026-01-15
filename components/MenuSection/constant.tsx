import { MenuItemProps } from './types';

export const MENU_ITEMS: MenuItemProps[] = [
  {
    image: '/backgrounda.jpg',
    name: 'Pancit Lug-log',
    description:
      'Our signature dish! Thick noodles with rich sauce, topped with generous seafood, eggs, and crispy chicharon. A true Filipino comfort food experience.',
    price: '₱300-400',
    toppings: ['Squid', 'Shrimp', 'Eggs', 'Smoked Fish', 'Chicharon', 'Pork'],
    isSpecial: true,
  },
  {
    image: '/bbq.jpg',
    name: 'Pancit Palabok',
    description:
      'Traditional Filipino rice noodles with savory shrimp sauce, topped with eggs, chicharon, and fresh seafood.',
    price: '₱250-350',
    toppings: ['Shrimp', 'Eggs', 'Chicharon', 'Green Onions'],
  },
  {
    image: '/lumpia.jpg',
    name: 'Fresh Lumpiang Ubod',
    description:
      'Soft, fluffy Filipino steamed rice cakes. Perfect companion to our savory pancit dishes!',
    price: '₱200',
    toppings: [],
  },
];
