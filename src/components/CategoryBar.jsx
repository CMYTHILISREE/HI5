import { motion } from "framer-motion";
import { categories } from "../data/categories";
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";

export default function CategoryBar() {
  const [active, setActive] = useState(null);
  const navigate = useNavigate();
  const location = useLocation();
  const activeSlug = location.pathname.startsWith('/category/')
    ? location.pathname.replace('/category/', '')
    : null;

  const handleClick = (cat) => {
    setActive(cat.id);
    navigate(`/category/${cat.slug}`);
  };

  return (
    <div className="bg-white/95 border-b border-orange-100 backdrop-blur-sm shadow-sm">

      <div className="max-w-7xl mx-auto px-2 sm:px-3 py-1.5 sm:py-2">

        <div className="flex justify-center">

          <div className="flex gap-2 sm:gap-3 overflow-x-auto scrollbar-hide py-1 px-1">

            {categories.map((cat) => {
              const isActive = active === cat.id || activeSlug === cat.slug;

              return (
                <motion.div
                  key={cat.id}
                  onClick={() => handleClick(cat)}
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex flex-col items-center min-w-[64px] max-w-[96px] sm:min-w-[82px] cursor-pointer"
                >

                  {/* ICON BOX */}
                  <div
                    className={`
                      w-12 h-12 sm:w-16 sm:h-16
                      flex items-center justify-center
                      rounded-[18px] sm:rounded-[22px]
                      transition-all duration-200
                      ${
                        isActive
                          ? "border border-orange-300 bg-[linear-gradient(135deg,_#fff7ed_0%,_#ffffff_48%,_#eff6ff_100%)] shadow-xl shadow-orange-200/30"
                          : "border border-transparent bg-white hover:border-orange-200 hover:bg-orange-50/40 hover:shadow-sm"
                      }
                    `}
                  >
                    <img
                      src={cat.img}
                      alt={cat.name}
                      className="w-8 h-8 sm:w-10 sm:h-10 object-contain"
                    />
                  </div>

                  {/* LABEL */}
                  <span
                    className={`
                      mt-1 sm:mt-1.5 text-[10px] sm:text-[12px] font-semibold text-center leading-tight
                      ${
                        isActive
                          ? "text-orange-600"
                          : "text-gray-600 hover:text-orange-600"
                      }
                    `}
                  >
                    {cat.name}
                  </span>

                </motion.div>
              );
            })}

          </div>

        </div>

      </div>

    </div>
  );
}