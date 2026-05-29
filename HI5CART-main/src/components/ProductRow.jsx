import { useRef } from "react";
import ProductCard from "./ProductCard";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";

export default function ProductRow({ products, onViewDetails }) {
  const scrollRef = useRef();

  const scroll = (direction) => {
    const { current } = scrollRef;
    if (!current) return;

    const scrollAmount = 300;

    if (direction === "left") {
      current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    } else {
      current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <section className="relative rounded-3xl bg-[linear-gradient(135deg,_#ffffff_0%,_#fff7ed_32%,_#f0fdf4_66%,_#eff6ff_100%)] px-4 py-6 shadow-sm ring-1 ring-yellow-100 sm:px-6">

      {/* HEADER */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_30%,_#22c55e_62%,_#2563eb_100%)] bg-clip-text text-xl font-black text-transparent">
          Trending Products
        </h2>

        <Link
          to="/products"
          className="rounded-full bg-[linear-gradient(90deg,_#fef2f2_0%,_#fef9c3_45%,_#dcfce7_100%)] px-4 py-2 text-sm font-bold text-blue-600 ring-1 ring-yellow-100 hover:brightness-105"
        >
          View All →
        </Link>
      </div>

      {/* SCROLL BUTTON LEFT */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-blue-600 shadow-md ring-1 ring-yellow-100 transition hover:scale-105 hover:bg-yellow-50 md:block"
      >
        <ChevronLeft size={20} />
      </button>

      {/* PRODUCTS */}
      <div
        ref={scrollRef}
        className="flex gap-5 overflow-x-auto scroll-smooth snap-x pb-2 scrollbar-hide"
      >
        {products.map((p) => (
          <div
            key={p.id}
            className="min-w-[260px] snap-start"
          >
            <ProductCard product={p} onViewDetails={onViewDetails} />
          </div>
        ))}
      </div>

      {/* SCROLL BUTTON RIGHT */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-1/2 z-10 hidden -translate-y-1/2 rounded-full bg-white p-2 text-blue-600 shadow-md ring-1 ring-yellow-100 transition hover:scale-105 hover:bg-yellow-50 md:block"
      >
        <ChevronRight size={20} />
      </button>

    </section>
  );
}