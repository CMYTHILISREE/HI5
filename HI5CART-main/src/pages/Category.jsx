import { useParams, Link } from 'react-router-dom';
import { useState } from 'react';
import Header from '../components/Header';
import CategoryBar from '../components/CategoryBar';
import ProductCard from '../components/ProductCard';
import PriceDisplay from '../components/PriceDisplay';
import { products } from '../data/Products';
import { categories } from '../data/categories';
import { useDispatch } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

export default function Category() {
  const { slug } = useParams();
  const category = categories.find((cat) => cat.slug === slug);
  const categoryProducts = category
    ? products.filter((product) => product.category === category.name)
    : [];
  const dispatch = useDispatch();
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedImageIndex, setSelectedImageIndex] = useState(0);
  const selectedImages = selectedProduct
    ? [...new Set([selectedProduct.image, ...(selectedProduct.images || [])])]
    : [];

  const openProductDetails = (product) => {
    setSelectedProduct(product);
    setSelectedImageIndex(0);
  };

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
    <div className="bg-gray-100 min-h-screen">
      <Header />
      <CategoryBar />
      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:p-6">
        <div className="mb-4 sm:mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h1 className="text-2xl sm:text-3xl font-bold">
              {category ? category.name : 'Category not found'}
            </h1>
            {category && (
              <p className="mt-1 sm:mt-2 text-sm sm:text-base text-gray-600">
                {categoryProducts.length} product{categoryProducts.length !== 1 ? 's' : ''} available.
              </p>
            )}
          </div>
          <div className="flex gap-2 sm:gap-3">
            <Link
              to="/"
              className="rounded-lg sm:rounded-xl border border-gray-300 bg-white px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-gray-700 hover:bg-gray-50"
            >
              Back to Home
            </Link>
            <Link
              to="/products"
              className="rounded-lg sm:rounded-xl bg-red-500 px-3 sm:px-4 py-2 sm:py-3 text-xs sm:text-sm font-medium text-white hover:bg-red-600"
            >
              View All Products
            </Link>
          </div>
        </div>

        {!category ? (
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 text-center text-gray-600">
            <p className="text-base sm:text-lg font-semibold">The category you selected could not be found.</p>
            <p className="mt-2 text-sm">Please choose another category from the home page.</p>
          </div>
        ) : categoryProducts.length === 0 ? (
          <div className="rounded-2xl sm:rounded-3xl border border-gray-200 bg-white p-4 sm:p-8 text-center text-gray-600">
            <p className="text-base sm:text-lg font-semibold">No products found in this category.</p>
            <p className="mt-2 text-sm">Try another category or view all products.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-3 sm:gap-5 sm:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4">
            {categoryProducts.map((product) => (
              <ProductCard key={product.id} product={product} onViewDetails={openProductDetails} />
            ))}
          </div>
        )}
      </div>

      {selectedProduct && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm">
          <div className="max-h-[92vh] w-full max-w-6xl overflow-y-auto rounded-[1.5rem] bg-white p-4 shadow-2xl scrollbar-hide sm:p-6">
            <div className="mb-5 flex items-start justify-between gap-4 border-b border-gray-100 pb-4">
              <div>
                <p className="text-sm font-bold uppercase tracking-wide text-red-500">{category.name}</p>
                <h2 className="mt-1 text-2xl font-black text-gray-900 sm:text-3xl">{selectedProduct.name}</h2>
              </div>
              <button
                onClick={() => {
                  setSelectedProduct(null);
                  setSelectedImageIndex(0);
                }}
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
                    alt={`${selectedProduct.name} view ${selectedImageIndex + 1}`}
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
                        key={`${selectedProduct.id}-thumb-${index}`}
                        onClick={() => setSelectedImageIndex(index)}
                        className={`flex h-16 w-16 flex-none items-center justify-center overflow-hidden rounded-xl border-2 bg-white p-1 transition sm:h-20 sm:w-20 ${
                          selectedImageIndex === index ? 'border-red-500' : 'border-transparent'
                        }`}
                      >
                        <img
                          src={image}
                          alt={`${selectedProduct.name} thumbnail ${index + 1}`}
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
                  <PriceDisplay product={selectedProduct} />
                </div>
                <div className="mt-5 rounded-2xl bg-gray-50 p-4">
                  <p className="text-sm font-bold text-gray-900">What you get</p>
                  <div className="mt-3 space-y-2 text-sm text-gray-600">
                    <p>Clean product image slider</p>
                    <p>{selectedImages.length} unique product photos</p>
                    <p>One cart item for this color variant</p>
                  </div>
                </div>
                <button
                  onClick={() => dispatch(addToCart(selectedProduct))}
                  className="mt-5 flex w-full items-center justify-center rounded-2xl bg-red-500 px-5 py-4 text-base font-black text-white shadow-md transition hover:bg-red-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>

            {selectedImages.length > 1 && (
              <div className="mt-5">
                <h3 className="mb-2 text-lg font-bold text-gray-900">Image Gallery</h3>
                <p className="text-sm text-gray-500">
                  Use the slider arrows or thumbnails to view all product feature images.
                </p>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
