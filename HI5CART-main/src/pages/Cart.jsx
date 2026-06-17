import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import { useSelector, useDispatch } from "react-redux";
import { selectCartItems, selectTotalPrice, removeFromCart, updateQty } from "../store/slices/cartSlice";
import { Link } from "react-router-dom";
import PriceDisplay from "../components/PriceDisplay";
import { Trash2, Plus, Minus } from "lucide-react";

export default function Cart() {
  const cartItems = useSelector(selectCartItems);
  const totalPrice = useSelector(selectTotalPrice);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <CategoryBar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 text-center text-gray-600">
            <p className="text-base sm:text-lg font-semibold">Your cart is empty</p>
            <p className="mt-2 text-sm">Add some products to get started!</p>
            <Link
              to="/"
              className="mt-4 inline-block rounded-lg sm:rounded-xl bg-blue-600 px-4 sm:px-6 py-2 sm:py-3 text-sm sm:text-base font-medium text-white hover:bg-blue-700"
            >
              Continue Shopping
            </Link>
          </div>
        ) : (
          <div className="grid gap-4 sm:gap-6 lg:grid-cols-[1fr_350px]">
            {/* Cart Items */}
            <div className="space-y-3 sm:space-y-4">
              {cartItems.map((item) => (
                <div
                  key={item.id}
                  className="flex flex-col sm:flex-row gap-3 sm:gap-4 bg-white p-3 sm:p-4 rounded-xl sm:rounded-2xl shadow-sm"
                >
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full sm:w-24 h-32 sm:h-24 object-contain rounded-lg bg-gray-50"
                  />
                  <div className="flex-1 flex flex-col justify-between">
                    <div>
                      <h2 className="text-sm sm:text-base font-bold text-gray-900 line-clamp-2">{item.name}</h2>
                      <PriceDisplay product={item} size="sm" />
                    </div>
                    <div className="flex items-center justify-between mt-2 sm:mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => dispatch(updateQty({ id: item.id, qty: Math.max(1, item.qty - 1) }))}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                        >
                          <Minus size={14} />
                        </button>
                        <span className="text-sm sm:text-base font-semibold w-6 text-center">{item.qty}</span>
                        <button
                          onClick={() => dispatch(updateQty({ id: item.id, qty: item.qty + 1 }))}
                          className="w-7 h-7 sm:w-8 sm:h-8 flex items-center justify-center rounded-lg bg-gray-100 hover:bg-gray-200 transition"
                        >
                          <Plus size={14} />
                        </button>
                      </div>
                      <button
                        onClick={() => dispatch(removeFromCart(item.id))}
                        className="text-red-500 hover:text-red-700 transition"
                      >
                        <Trash2 size={18} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="bg-white p-4 sm:p-6 rounded-xl sm:rounded-2xl shadow-sm h-fit">
              <h2 className="text-lg sm:text-xl font-bold mb-4">Order Summary</h2>
              <div className="space-y-2 sm:space-y-3">
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Subtotal</span>
                  <span className="font-semibold">₹{totalPrice}</span>
                </div>
                <div className="flex justify-between text-sm sm:text-base">
                  <span className="text-gray-600">Delivery</span>
                  <span className="font-semibold text-green-600">FREE</span>
                </div>
                <div className="border-t border-gray-200 pt-2 sm:pt-3 flex justify-between text-base sm:text-lg font-bold">
                  <span>Total</span>
                  <span>₹{totalPrice}</span>
                </div>
              </div>
              <Link
                to="/checkout"
                className="mt-4 sm:mt-6 block w-full rounded-lg sm:rounded-xl bg-blue-600 py-2.5 sm:py-3 text-center text-sm sm:text-base font-bold text-white hover:bg-blue-700 transition"
              >
                Proceed to Checkout
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}