import { useState } from "react";
import { CartItem } from "../types";
import Button from "./Button";

function Navbar({ cart }: { cart: CartItem[] }) {
  const [open, setOpen] = useState(false);
  const totalItems = cart.length;
  const totalPrice = cart.reduce((sum, item) => sum + item.product.price * item.quantity, 0);
  return (
    <nav className="navbar">
      <div>Logo</div>
      <div>
        <Button>Home</Button>
        <Button>About</Button>

        <div className="relative">
          <Button className="h-full" onClick={() => setOpen(!open)}>
            🛒 Cart ({cart.length})
          </Button>

          {open && (
            <div className="mt-3 p-3 absolute right-0 top-full bg-white text-black min-w-[350px] shadow rounded flex flex-col items-flex-start text-left gap-2">
              <p className="text-l font-bold"> {totalItems} san pham</p>
              <div>
                <ul>
                  {cart.map((item) => (
                    <li
                      key={item.product.id}
                      className="flex gap-1 items-center mb-2 border-b-[#d2d2d2] border-b pb-2"
                    >
                      <img />
                      <h4>{item.product.name}</h4>x <span>{item.quantity}</span> ={" "}
                      <span>{(item.product.price * item.quantity).toLocaleString()}</span>
                      <Button className="ml-auto bg-red-500">X</Button>
                    </li>
                  ))}

                  {/* <li className="flex gap-1">
                  <image /> <h4>title</h4>x <span>quantity</span>=<span>total</span>
                  <button>X</button>
                </li> */}
                </ul>
              </div>
              <p>
                Tong: <b>{totalPrice.toLocaleString()}</b>
              </p>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
