export interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  toppings?: string[];
  isSpecial?: boolean;
  delay?: number;
}
