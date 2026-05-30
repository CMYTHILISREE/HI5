import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
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
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-2 sm:p-4 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-2xl sm:rounded-[1.5rem] bg-white p-3 sm:p-4 md:p-6 shadow-2xl scrollbar-hide">
        <div className="mb-4 sm:mb-5 flex items-start justify-between gap-2 sm:gap-4 border-b border-gray-100 pb-3 sm:pb-4">
          <div className="flex-1">
            <p className="text-[10px] sm:text-sm font-bold uppercase tracking-wide text-red-500">{product.category}</p>
            <h2 className="mt-0.5 sm:mt-1 text-lg sm:text-2xl md:text-3xl font-black text-gray-900 line-clamp-2">{product.name}</h2>
          </div>
          <div className="flex gap-2">
            <Link
              to="/"
              onClick={onClose}
              className="rounded-full bg-blue-500 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-white hover:bg-blue-600 flex-shrink-0"
            >
              Home
            </Link>
            <button
              onClick={onClose}
              className="rounded-full bg-gray-100 px-3 sm:px-4 py-1.5 sm:py-2 text-[10px] sm:text-sm font-semibold text-gray-700 hover:bg-gray-200 flex-shrink-0"
            >
              Close
            </button>
          </div>
        </div>

        <div className="grid gap-4 sm:gap-5 lg:grid-cols-[minmax(0,1.35fr)_380px]">
          <div>
            <div className="relative flex h-[200px] sm:h-[250px] md:h-[300px] lg:h-[420px] items-center justify-center overflow-hidden rounded-2xl sm:rounded-3xl bg-gray-50 p-2 sm:p-4">
              <img
                src={selectedImages[selectedImageIndex]}
                alt={`${product.name} view ${selectedImageIndex + 1}`}
                className="max-h-full max-w-full object-contain"
              />
              {selectedImages.length > 1 && (
                <>
                  <button
                    onClick={showPreviousImage}
                    className="absolute left-2 sm:left-3 top-1/2 flex h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl sm:text-2xl font-bold text-gray-800 shadow-md transition hover:scale-105"
                  >
                    ‹
                  </button>
                  <button
                    onClick={showNextImage}
                    className="absolute right-2 sm:right-3 top-1/2 flex h-8 w-8 sm:h-10 sm:w-10 -translate-y-1/2 items-center justify-center rounded-full bg-white text-xl sm:text-2xl font-bold text-gray-800 shadow-md transition hover:scale-105"
                  >
                    ›
                  </button>
                  <span className="absolute bottom-2 sm:bottom-4 right-2 sm:right-4 rounded-full bg-black/70 px-2 sm:px-3 py-0.5 sm:py-1 text-[10px] sm:text-xs font-bold text-white">
                    {selectedImageIndex + 1} / {selectedImages.length}
                  </span>
                </>
              )}
            </div>

            {selectedImages.length > 1 && (
              <div className="mt-3 sm:mt-4 flex gap-2 sm:gap-3 overflow-x-auto rounded-xl sm:rounded-2xl bg-gray-50 p-2 sm:p-3 scrollbar-hide">
                {selectedImages.map((image, index) => (
                  <button
                    key={`${product.id}-thumb-${index}`}
                    onClick={() => setSelectedImageIndex(index)}
                    className={`flex h-12 w-12 sm:h-14 sm:w-14 md:h-16 md:w-16 lg:h-20 lg:w-20 flex-none items-center justify-center overflow-hidden rounded-lg sm:rounded-xl border-2 bg-white p-1 transition ${
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

          <div className="rounded-2xl sm:rounded-3xl border border-gray-100 bg-white p-3 sm:p-4 md:p-5 shadow-sm">
            <div>
              <p className="mb-1.5 sm:mb-2 text-xs sm:text-sm font-semibold text-gray-500">Price</p>
              <PriceDisplay product={product} />
            </div>
            <button
              onClick={() => dispatch(addToCart(product))}
              className="mt-3 sm:mt-5 flex w-full items-center justify-center rounded-xl sm:rounded-2xl bg-red-500 px-4 sm:px-5 py-3 sm:py-4 text-sm sm:text-base font-black text-white shadow-md transition hover:bg-red-600"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
