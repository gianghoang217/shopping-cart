export interface Product {
  id: string;
  name: string;
  price: number;
  instock: boolean;
  tags?: string[];
  category: Category;
}
type Category = "electronics" | "clothing" | "home" | "books";

export interface User {
  id: string;
  name: string;
  email: string;
  isAdmin: boolean;
}

export type CartItem = Product & { quantity: number };
