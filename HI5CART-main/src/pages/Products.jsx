import Header from "../components/Header";
import { useSelector, useDispatch } from "react-redux";
import { selectProducts } from "../store/slices/productSlice";
import { addToCart } from "../store/slices/cartSlice";
import PriceDisplay from "../components/PriceDisplay";

export default function Products() {
  const products = useSelector(selectProducts);
  const dispatch = useDispatch();

  return (
    <div>
      <Header />

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
        {products.map((p) => (
          <div key={p.id} className="bg-white p-3 shadow rounded">
            <img src={p.image} className="h-40 w-full object-cover" />
            <h2>{p.name}</h2>
            <PriceDisplay product={p} size="sm" />

            <button
              onClick={() => dispatch(addToCart(p))}
              className="bg-red-500 text-white px-3 py-1 mt-2 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}