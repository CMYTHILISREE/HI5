import { useDispatch } from "react-redux";
import { useState } from "react";
import { addToCart } from "../store/slices/cartSlice";
import PriceDisplay from "./PriceDisplay";

export default function ProductCard({ product, onViewDetails }) {
  const dispatch = useDispatch();
  const [showCartMessage, setShowCartMessage] = useState(false);

  const handleAddToCart = () => {
    dispatch(addToCart(product));
    setShowCartMessage(true);
    setTimeout(() => setShowCartMessage(false), 1600);
  };

  return (
    <div className="group relative flex h-full min-h-[320px] sm:min-h-[370px] flex-col overflow-hidden rounded-2xl sm:rounded-3xl bg-white shadow-[0_10px_30px_rgba(15,23,42,0.08)] ring-1 ring-slate-100 transition duration-500 hover:-translate-y-2 hover:rotate-[0.25deg] hover:shadow-[0_22px_55px_rgba(37,99,235,0.14)]">
      <div className="absolute inset-x-0 top-0 h-1 sm:h-1.5 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_28%,_#22c55e_56%,_#2563eb_78%,_#9333ea_100%)]" />
      <div className="pointer-events-none absolute -right-8 -top-8 sm:-right-12 sm:-top-12 h-20 w-20 sm:h-28 sm:w-28 rounded-full bg-yellow-200/25 blur-2xl transition duration-500 group-hover:bg-green-300/30" />
      <div className="pointer-events-none absolute -bottom-12 -left-12 sm:-bottom-16 sm:-left-16 h-24 w-24 sm:h-32 sm:w-32 rounded-full bg-blue-200/20 blur-2xl transition duration-500 group-hover:bg-purple-300/25" />

      {showCartMessage && (
        <div className="cart-star-toast absolute left-1/2 top-3 sm:top-4 z-20 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-slate-950 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black text-white shadow-2xl">
          <span className="star-pop">★</span>
          Added to Cart
          <span className="star-pop delay-100">★</span>
        </div>
      )}

      <div className="relative p-2 sm:p-3">
        <div className="relative flex h-[140px] sm:h-[185px] items-center justify-center overflow-hidden rounded-xl sm:rounded-2xl bg-[linear-gradient(135deg,_#fff7ed_0%,_#ffffff_38%,_#eff6ff_100%)] p-1.5 sm:p-2 ring-1 ring-yellow-100">
          <img
            src={product.image}
            alt={product.name}
            className="h-full w-full rounded-xl sm:rounded-2xl object-contain transition duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-1.5 sm:inset-2 rounded-xl sm:rounded-2xl bg-gradient-to-t from-slate-900/10 via-transparent to-transparent opacity-70" />
          {product.images?.length > 1 && (
            <span className="absolute right-2 sm:right-3 top-2 sm:top-3 rounded-full bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_45%,_#22c55e_100%)] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-white shadow-md shadow-yellow-500/20">
              {product.images.length} Photos
            </span>
          )}
        </div>
      </div>

      <div className="relative flex flex-1 flex-col px-3 sm:px-4 pb-2.5 sm:pb-3.5">
        <div className="mb-1.5 sm:mb-2 flex justify-between">
          <span className="rounded-full bg-[linear-gradient(90deg,_#fef2f2_0%,_#fef9c3_45%,_#dcfce7_100%)] px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold uppercase tracking-wide text-orange-600 ring-1 ring-yellow-100">
            Premium
          </span>
          <span className="rounded-full bg-emerald-50 px-2 sm:px-2.5 py-0.5 sm:py-1 text-[9px] sm:text-[10px] font-bold text-emerald-700 ring-1 ring-emerald-100">
            In Stock
          </span>
        </div>

        <h3 className="min-h-[36px] sm:min-h-[42px] text-left text-[13px] sm:text-[15px] font-black leading-snug tracking-tight text-slate-900 transition duration-300 line-clamp-2 group-hover:text-blue-600">
          {product.name}
        </h3>

        <div className="mt-2 sm:mt-2.5 flex items-end justify-between gap-2">
          <PriceDisplay product={product} size="sm" />
          <div className="rounded-xl bg-[linear-gradient(135deg,_#fff7ed_0%,_#fef9c3_55%,_#eff6ff_100%)] px-2 sm:px-2.5 py-1 sm:py-1.5 text-right ring-1 ring-yellow-100">
            <p className="text-[8px] sm:text-[9px] font-semibold text-slate-400">Save More</p>
            <p className="text-[10px] sm:text-[11px] font-bold text-blue-600">{product.discountPercentage}% OFF</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-1.5 sm:gap-2 border-t border-yellow-100 bg-[linear-gradient(90deg,_#ffffff_0%,_#fff7ed_55%,_#eff6ff_100%)] p-2 sm:p-3">
        <button
          onClick={() => onViewDetails?.(product)}
          className="rounded-lg sm:rounded-xl border border-yellow-200 bg-white px-1.5 sm:px-2 py-1.5 sm:py-2 text-[10px] sm:text-xs font-bold text-slate-700 transition hover:border-blue-300 hover:bg-blue-50 hover:text-blue-600"
        >
          View Details
        </button>
        <button
          onClick={handleAddToCart}
          className="rounded-lg sm:rounded-xl bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_32%,_#22c55e_66%,_#2563eb_100%)] px-1.5 sm:px-2 py-1.5 sm:py-2 text-[10px] sm:text-xs font-black text-white shadow-lg shadow-yellow-500/25 transition hover:scale-[1.03] hover:brightness-110 hover:shadow-blue-500/25 active:scale-95"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}
