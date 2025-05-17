export interface Product {
  id: string;
  image: string;
  name: string;
  price: number;
  inStock: boolean;
  tags?: string[];
  category: Category;
}

export interface CartItem {
  product: Product;
  quantity: number;
}

export type Category = "phone" | "tablet" | "computer";

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  quantity: number;
  total: number;
  discountPercentage: number;
  discountedTotal: number;
  thumbnail: string;
}
