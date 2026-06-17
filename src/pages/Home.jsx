import { useState } from "react";
import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import HeroSlider from "../components/HeroSlider";
import VideoShowcase from "../components/VideoShowcase";
import ProductRow from "../components/ProductRow";
import ProductCard from "../components/ProductCard";
import ProductDetailsModal from "../components/ProductDetailsModal";
import { products } from "../data/Products";
import { categories } from "../data/categories";
import Footer from "../components/Footer";

export default function Home() {
  const categoryNames = categories.map((category) => category.name);
  const categoryProducts = products.filter((product) => categoryNames.includes(product.category));
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="min-h-screen bg-[linear-gradient(180deg,_#ffffff_0%,_#fffaf0_36%,_#f8fbff_100%)]">

      {/* HEADER */}
      <Header />

      {/* CATEGORY */}
      <CategoryBar />

      {/* HERO SLIDER */}
      <HeroSlider />

      <div className="hidden md:block">
        <VideoShowcase />
      </div>

      {/* TRENDING ROW */}
      <div className="hidden sm:block max-w-7xl mx-auto px-3 sm:px-4">
        <ProductRow products={categoryProducts} onViewDetails={setSelectedProduct} />
      </div>

      {/* DEALS SECTION */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 py-6 sm:py-8">
        <h2 className="mb-3 sm:mb-4 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_32%,_#22c55e_65%,_#2563eb_100%)] bg-clip-text text-lg sm:text-xl font-black text-transparent">
          Today's Deal 🔥
        </h2>

        <div className="flex justify-center">
          {categoryProducts.length > 0 && (
            <div className="w-full max-w-[300px] sm:max-w-[400px]">
              <ProductCard product={categoryProducts[0]} onViewDetails={setSelectedProduct} />
            </div>
          )}
        </div>
      </section>

      {/* GRID PRODUCTS */}
      <section className="max-w-7xl mx-auto px-3 sm:px-4 pb-8 sm:pb-10">
        <h2 className="mb-3 sm:mb-4 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_32%,_#22c55e_65%,_#2563eb_100%)] bg-clip-text text-lg sm:text-xl font-black text-transparent">
          Recommended for You
        </h2>

        <div className="grid grid-cols-1 gap-4 sm:gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {categoryProducts.map((p) => (
            <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
          ))}
        </div>
      </section>

      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />

      {/* FOOTER */}
      <Footer/>

    </div>
  );
}