import { Product } from "../types";

export const products: Product[] = [
  {
    id: "1",
    name: "Laptop",
    price: 999.99,
    instock: true,
    tags: ["electronics", "computer"],
    category: "electronics",
  },
  {
    id: "2",
    name: "T-shirt",
    price: 19.99,
    instock: true,
    tags: ["clothing", "fashion"],
    category: "clothing",
  },
  {
    id: "3",
    name: "PS5",
    price: 199.99,
    instock: false,
    tags: ["electronics", "computer"],
    category: "electronics",
  },
];
