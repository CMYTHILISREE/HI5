import { useState } from "react";
import { useDispatch } from "react-redux";
import { addToCart } from "../store/slices/cartSlice";
import PriceDisplay from "./PriceDisplay";

export default function ProductDetailsModal({ product, onClose }) {
  const dispatch = useDispatch();
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImages = product ? [...new Set([product.image, ...(product.images || [])])] : [];

  if (!product) return null;

  const showPreviousImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === 0 ? selectedImages.length - 1 : currentIndex - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((currentIndex) =>
      currentIndex === selectedImages.length - 1 ? 0 : currentIndex + 1
    );
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
      <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] bg-white p-4 shadow-2xl scrollbar-hide sm:p-6">
        <div className="mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
          <div>
            <p className="text-sm font-bold uppercase tracking-wide text-red-500">{product.category}</p>
            <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">{product.name}</h2>
          </div>
          <button
            onClick={onClose}
            className="rounded-full bg-gray-100 px-4 py-2 text-sm font-semibold text-gray-700 hover:bg-gray-200"
          >
            Close
          </button>
        </div>

        <div className="grid gap-5 lg:grid-cols-[minmax(0,1.35fr)_380px]">
          <div>
            <div className="relative flex h-[300px] items-center justify-center overflow-hidden rounded-3xl bg-gray-50 p-4 sm:h-[420px]">
              <img
                src={selectedImages[selectedImageIndex]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={showPreviousImage}
                    className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-800 shadow-md transition hover:scale-105"
                  >
                    ‹
                  </button>
                  <button
                    onClick={showNextImage}
                    className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-2xl font-bold text-gray-800 shadow-md transition hover:scale-105"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-4 right-4 rounded-full bg-black/70 px-3 py-1 text-xs font-bold text-white">
                    {selectedImageIndex + 1} / {selectedImages.length}
                  </span>
                </>
              )}
            </div>

            {selectedImages.length > 1 && (
              <div className="mt-4 flex gap-3 overflow-x-auto rounded-2xl bg-gray-50 p-3">
                {selectedImages.map((image, index) => (
                  <button
                    key={`${product.id}-thumb-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1 transition sm:h-20 sm:w-20 ${
                      selectedImageIndex === index ? "border-red-500" : "border-transparent"
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="max-h-full max-w-full object-contain"
                    />
                  </button>
                ))}
              </div>
            )}
          </div>

          <div className="rounded-3xl border border-gray-100 bg-white p-5 shadow-sm">
            <div>
              <p className="mb-2 text-sm font-semibold text-gray-500">Price</p>
              <PriceDisplay product={product} />
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-5 flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-4 text-base font-black text-white shadow-md transition hover:bg-red-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
