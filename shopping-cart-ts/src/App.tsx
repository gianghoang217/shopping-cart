import "./App.css";
import Navbar from "./components/Navbar";
import Product from "./components/Product";

function App() {
  return (
    <div>
      <Navbar />
      <Product product={{ id: 1, name: "Product 1", price: 10 }} />
      <Product product={{ id: 1, name: "Product 2", price: 10 }} />
      <Product product={{ id: 1, name: "Product 3", price: 10 }} />
    </div>
  );
}

export default App;
