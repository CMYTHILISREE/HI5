import Header from "../components/Header";
import CategoryBar from "../components/CategoryBar";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";
import ProductCard from "../components/ProductCard";
import { useState } from "react";
import ProductDetailsModal from "../components/ProductDetailsModal";

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);

  return (
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <CategoryBar />

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 py-4 sm:py-6">
        <h1 className="text-2xl sm:text-3xl font-bold mb-4 sm:mb-6">All Products</h1>

        <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {products.map((p) => (
            <ProductCard key={p.id} product={p} onViewDetails={setSelectedProduct} />
          ))}
        </div>
      </div>

      <ProductDetailsModal product={selectedProduct} onClose={() => setSelectedProduct(null)} />
    </div>
  );
}