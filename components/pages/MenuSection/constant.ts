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
  {
    image: '/bbq.jpg',
    name: 'Adobong Pusit',
    description:
      'Adobong Pusit is a tasty squid dish cooked using the popular Filipino adobo method.',
    price: '₱250-300',
    toppings: [
      'Toasted Garlic',
      'Sautéed Aromatics',
      'Chilies',
      'Green Onions',
    ],
  },
  {
    image: '/asim.jpg',
    name: 'Sinampalukan Aguot',
    description:
      'Soft, fluffy Filipino steamed rice cakes. Perfect companion to our savory pancit dishes!',
    price: '₱100',
    toppings: ['Usbong ng Sampalok', 'Siling Haba', 'Mustasa'],
  },
  {
    image: '/sapsap.jpg',
    name: 'Pangat sa Kamatis na Sapsap',
    description:
      'fish stew featuring sapsap (slipmouth or ponyfish) gently simmered in a light, watery broth made sour and savory primarily by ripe tomatoes',
    price: '₱150',
    toppings: ['Smashed Tomatoes', 'Siling Haba', 'Fresh Leafy Greens'],
    isSpecial: true,
  },
];
