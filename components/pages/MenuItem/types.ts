export interface MenuItemProps {
  image: string;
  name: string;
  description: string;
  price: string;
  toppings?: string[]; // ✅ array of strings
  isSpecial?: boolean;
  delay?: number;
}
