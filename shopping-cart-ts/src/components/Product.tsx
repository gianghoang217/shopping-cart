interface ProductData {
  id?: number;
  name: string;
  price: number;
}
interface ProductProps {
  product: ProductData;
}

function Product({ product }: ProductProps) {
  return (
    <div>
      <h2>{product.name}</h2>
      <p>Price: ${product.price}</p>
      <button>Add to Cart</button>
    </div>
  );
}
export default Product;
