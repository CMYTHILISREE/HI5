import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectTotalPrice, removeFromCart } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import PriceDisplay from "../components/PriceDisplay";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />

      <div className="p-6">
        <h1 className="text-xl font-bold">Cart</h1>

        {cartItems.map((item) => (
          <div
            key={item.id}
            className="flex justify-between bg-white p-3 mt-3"
          >
            <div>
              <h2>{item.name}</h2>
              <PriceDisplay product={item} size="sm" />
              <p>Qty: {item.qty}</p>
            </div>

            <button onClick={() => dispatch(removeFromCart(item.id))}>
              Remove
            </button>
          </div>
        ))}

        <h2 className="mt-4 font-bold">
          Total: ₹{totalPrice}
        </h2>

        {cartItems.length > 0 && (
          <Link to="/checkout" className="block mt-4 bg-blue-600 text-white py-2 px-4 rounded">
            Proceed to Checkout
          </Link>
        )}
      </div>
    </div>
  );
}