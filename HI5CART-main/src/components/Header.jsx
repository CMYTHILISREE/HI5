import { Link, useNavigate } from "react-router-dom";
import { Phone, Search, ShoppingCart, User } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalItems } from "../store/slices/cartSlice";
import {
  logout,
  selectIsAuthenticated,
  selectUser,
} from "../store/slices/authSlice";
import { useState, useRef, useEffect } from "react";

export default function Header() {
  const totalItems = useSelector(selectTotalItems);
  const isAuthenticated = useSelector(selectIsAuthenticated);
  const user = useSelector(selectUser);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);

  const dropdownRef = useRef();

  useEffect(() => {
    const handler = (e) => {
      if (!dropdownRef.current?.contains(e.target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handler);

    return () => document.removeEventListener("mousedown", handler);
  }, []);

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      className="
        sticky top-0 z-50
        bg-white/95
        border-b border-yellow-100
        shadow-[0_6px_24px_rgba(15,23,42,0.06)]
        backdrop-blur-xl
      "
    >
      <div
        className="
          max-w-7xl mx-auto
          px-4 md:px-6
          py-3.5
          flex items-center gap-5
        "
      >
        {/* LOGO */}
        <Link
          to="/"
          className="
            text-3xl md:text-4xl
            font-black
            tracking-tight
            whitespace-nowrap
            bg-gradient-to-r
            from-orange-500
            via-pink-500
            to-blue-600
            bg-clip-text
            text-transparent
            drop-shadow-sm
            hover:scale-105
            hover:brightness-110
            transition-all duration-300
          "
        >
          Hi5Cart
        </Link>

        {/* SEARCH */}
        <div
          className="
            flex flex-1 items-center
            rounded-2xl
            overflow-hidden
            border border-orange-100
            bg-white
            transition-all duration-300
            focus-within:border-orange-300
            focus-within:ring-2
            focus-within:ring-orange-100
            shadow-[0_8px_24px_rgba(15,23,42,0.06)]
          "
        >
          <input
            type="text"
            placeholder="Search for products, brands & more"
            className="
              w-full
              px-5 py-3
              bg-transparent
              outline-none
              text-sm
              font-medium
              text-gray-700
              placeholder:text-gray-400
            "
          />

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.95 }}
            className="
              px-5 py-3
              bg-[linear-gradient(135deg,_#ef4444_0%,_#f59e0b_42%,_#22c55e_100%)]
              text-white
              shadow-lg shadow-orange-400/25
              transition-all duration-300
            "
          >
            <Search size={18} />
          </motion.button>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center gap-5">
          {/* PHONE */}
          <a
            href="tel:+918884695310"
            className="
              hidden
              lg:flex
              items-center gap-2
              rounded-2xl
              border border-green-100
              bg-[linear-gradient(135deg,_#f0fdf4_0%,_#ffffff_55%,_#eff6ff_100%)]
              px-3 py-2.5
              shadow-[0_8px_24px_rgba(15,23,42,0.06)]
              transition-all duration-300
              hover:-translate-y-0.5
              hover:border-green-200
              hover:shadow-green-300/20
            "
          >
            <span className="flex h-9 w-9 items-center justify-center rounded-xl bg-green-100 text-green-700">
              <Phone size={17} />
            </span>

            <span className="flex flex-col leading-tight">
              <span className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
                Contact
              </span>

              <span className="text-xs font-black text-slate-800">
                8884695310
              </span>
            </span>
          </a>

          {/* ACCOUNT */}
          <div className="relative" ref={dropdownRef}>
            <motion.div
              whileHover={{ y: -2 }}
              onClick={() => setOpen(!open)}
              className="
                flex flex-col items-center
                cursor-pointer group
              "
            >
              <div
                className="
                  p-3 rounded-2xl
                  bg-[linear-gradient(135deg,_#fff7ed_0%,_#fef9c3_40%,_#dcfce7_75%,_#dbeafe_100%)]
                  transition-all duration-300
                  ring-1 ring-yellow-100
                  group-hover:shadow-md
                  group-hover:shadow-yellow-300/25
                "
              >
                <User
                  size={18}
                  className="
                    text-blue-600
                    group-hover:text-purple-600
                    transition
                  "
                />
              </div>

              <span
                className="
                  text-xs font-medium mt-1
                  text-gray-600
                  group-hover:text-blue-600
                  transition
                "
              >
                {isAuthenticated ? `Hi, ${user?.name}` : "Account"}
              </span>
            </motion.div>

            {/* DROPDOWN */}
            <AnimatePresence>
              {open && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 10 }}
                  transition={{ duration: 0.2 }}
                  className="
                    absolute right-0 mt-4 w-48
                    bg-white
                    rounded-2xl
                    border border-yellow-100
                    shadow-xl
                    overflow-hidden
                  "
                >
                  {!isAuthenticated && (
                    <Link
                      to="/login"
                      className="
                        block px-5 py-3
                        text-sm text-gray-700
                        hover:bg-yellow-50
                        hover:text-blue-600
                        transition
                      "
                    >
                      Login
                    </Link>
                  )}

                  <Link
                    to="/orders"
                    className="
                      block px-5 py-3
                      text-sm text-gray-700
                      hover:bg-yellow-50
                      hover:text-blue-600
                      transition
                    "
                  >
                    Orders
                  </Link>

                  {isAuthenticated && (
                    <button
                      onClick={() => {
                        dispatch(logout());
                        navigate("/");
                      }}
                      className="
                        w-full text-left
                        px-5 py-3
                        text-sm text-gray-700
                        hover:bg-red-50
                        hover:text-red-500
                        transition
                      "
                    >
                      Logout
                    </button>
                  )}
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* CART */}
          <Link
            to="/cart"
            className="
              relative
              flex flex-col items-center
              group
            "
          >
            <motion.div
              whileHover={{ y: -2 }}
              className="
                p-3 rounded-2xl
                bg-[linear-gradient(135deg,_#fef2f2_0%,_#fef9c3_35%,_#dcfce7_68%,_#dbeafe_100%)]
                transition-all duration-300
                ring-1 ring-yellow-100
                group-hover:shadow-md
                group-hover:shadow-yellow-300/25
              "
            >
              <ShoppingCart
                className="
                  text-blue-600
                  group-hover:text-blue-600
                  transition
                "
              />
            </motion.div>

            <span
              className="
                text-xs font-medium mt-1
                text-gray-600
                group-hover:text-blue-600
                transition
              "
            >
              My Cart
            </span>

            {totalItems > 0 && (
              <motion.span
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="
                  absolute
                  -top-1
                  right-0
                  min-w-[20px]
                  h-5
                  px-1.5
                  flex items-center justify-center
                  rounded-full
                  text-[11px]
                  font-bold
                  text-white
                  bg-[linear-gradient(135deg,_#ef4444_0%,_#f59e0b_30%,_#22c55e_62%,_#2563eb_100%)]
                  shadow-md shadow-yellow-400/30
                "
              >
                {totalItems}
              </motion.span>
            )}
          </Link>
        </div>
      </div>

      {/* MARQUEE */}
      <div className="overflow-hidden border-t border-orange-100 bg-[linear-gradient(90deg,_#fff1f2_0%,_#fffbeb_28%,_#ecfdf5_58%,_#eff6ff_82%,_#faf5ff_100%)] py-2 shadow-inner">
        <div className="header-offer-marquee flex w-max items-center gap-12 whitespace-nowrap text-xs font-black uppercase tracking-wide">
          
          <span className="flex items-center gap-2 text-rose-600">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Order on WhatsApp: +91 8884695310 and get clear confirmation
          </span>

          <span className="flex items-center gap-2 text-emerald-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            For every 5 successful orders, get a surprise gift
          </span>

          <span className="flex items-center gap-2 text-blue-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Website-only MRP, selling price, and discount offers
          </span>

          <span className="flex items-center gap-2 text-purple-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Fast WhatsApp order support for all products
          </span>

          <span className="flex items-center gap-2 text-rose-600">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Order on WhatsApp: +91 8884695310 and get clear confirmation
          </span>

          <span className="flex items-center gap-2 text-emerald-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            For every 5 successful orders, get a surprise gift
          </span>

          <span className="flex items-center gap-2 text-blue-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Website-only MRP, selling price, and discount offers
          </span>

          <span className="flex items-center gap-2 text-purple-700">
            <span className="bg-gradient-to-b from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent drop-shadow-[0_0_8px_rgba(255,215,0,0.9)] animate-pulse">
              ★
            </span>
            Fast WhatsApp order support for all products
          </span>

        </div>
      </div>
    </motion.header>
  );
}