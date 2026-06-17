import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { motion } from "framer-motion";
import { useState } from "react";

import FeatureStrip from "./FeatureStrip";

import banner1 from "../assets/banner1.png";
import banner2 from "../assets/banner2.png";
import banner3 from "../assets/banner3.png";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

export default function HeroSlider() {
  const [loaded, setLoaded] = useState({});

  const banners = [
    {
      img: banner1,
      title: "Modern Wardrobes",
      subtitle:
        "Elegant storage solutions crafted for stylish and organized living.",

      bg: `
        bg-[linear-gradient(135deg,_#1e1b4b_0%,_#2563eb_36%,_#22c55e_68%,_#f59e0b_100%)]
      `,

      glow1: "bg-yellow-300/20",
      glow2: "bg-green-300/15",
      glow3: "bg-blue-200/15",

      accent: "from-yellow-200 to-white/20",
    },

    {
      img: banner2,
      title: "Luxury Shoe Racks",
      subtitle:
        "Premium organizers with modern space-saving elegance.",

      bg: `
        bg-[linear-gradient(135deg,_#7f1d1d_0%,_#ef4444_32%,_#f59e0b_64%,_#22c55e_100%)]
      `,

      glow1: "bg-rose-300/20",
      glow2: "bg-yellow-200/15",
      glow3: "bg-green-200/15",

      accent: "from-yellow-200 to-white/20",
    },

    {
      img: banner3,
      title: "Bathroom Essentials",
      subtitle:
        "Minimal and elegant organizers for a modern bathroom space.",

      bg: `
        bg-[linear-gradient(135deg,_#581c87_0%,_#2563eb_38%,_#22c55e_70%,_#f59e0b_100%)]
      `,

      glow1: "bg-blue-300/20",
      glow2: "bg-green-300/15",
      glow3: "bg-yellow-200/15",

      accent: "from-blue-200 to-white/20",
    },
  ];

  return (
    <div className="w-full max-w-[1700px] mx-auto px-2 sm:px-3 md:px-6 mt-3 sm:mt-5">

      <Swiper
        modules={[Autoplay, Navigation, Pagination]}
        slidesPerView={1}
        loop
        navigation
        autoplay={{
          delay: 4500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        className="rounded-2xl sm:rounded-[40px] overflow-hidden"
      >
        {banners.map((item, i) => (
          <SwiperSlide key={i}>
            <div
              className={`
                relative
                overflow-hidden
                rounded-2xl sm:rounded-[40px]
                ${item.bg}
                aspect-[16/12]
                sm:aspect-[16/10]
                md:aspect-[16/8]
                lg:aspect-[16/7]
                xl:aspect-[16/5]
                shadow-[0_10px_40px_rgba(0,0,0,0.15)]
              `}
            >

              {/* LIGHT OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-br
                from-white/10
                via-transparent
                to-transparent
              " />

              {/* GLOW 1 */}
              <motion.div
                animate={{
                  scale: [1, 1.15, 1],
                }}
                transition={{
                  duration: 5,
                  repeat: Infinity,
                }}
                className={`
                  absolute
                  -top-24
                  -left-24
                  w-[320px]
                  h-[320px]
                  rounded-full
                  blur-3xl
                  ${item.glow1}
                `}
              />

              {/* GLOW 2 */}
              <motion.div
                animate={{
                  scale: [1.1, 1, 1.1],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                }}
                className={`
                  absolute
                  bottom-[-100px]
                  right-[-100px]
                  w-[300px]
                  h-[300px]
                  rounded-full
                  blur-3xl
                  ${item.glow2}
                `}
              />

              {/* CENTER GLOW */}
              <div
                className={`
                  absolute
                  top-[35%]
                  right-[30%]
                  w-[180px]
                  h-[180px]
                  rounded-full
                  blur-3xl
                  ${item.glow3}
                `}
              />

              {/* DARK OVERLAY */}
              <div className="
                absolute inset-0
                bg-gradient-to-r
                from-black/35
                via-black/10
                to-transparent
              " />

              {/* IMAGE */}
              <motion.div
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1 }}
                className="
                  flex
                  absolute
                  right-0
                  top-0
                  h-full
                  w-full
                  sm:w-[58%]
                  md:w-[52%]
                  items-center justify-end
                  pr-2 sm:pr-4 md:pr-10
                  z-10
                "
              >

                {!item.video && !loaded[i] && (
                  <div className="absolute inset-0 bg-white/5 animate-pulse rounded-3xl" />
                )}

                {item.video ? (
                  <motion.video
                    whileHover={{
                      scale: 1.03,
                    }}
                    src={item.video}
                    autoPlay
                    muted
                    loop
                    playsInline
                    className="
                      h-full
                      w-full
                      rounded-[32px]
                      object-cover
                      object-center
                      shadow-[0_18px_45px_rgba(0,0,0,0.24)]
                    "
                  />
                ) : (
                  <motion.img
                    whileHover={{
                      scale: 1.03,
                    }}
                    src={item.img}
                    alt={item.title}
                    loading="lazy"
                    onLoad={() =>
                      setLoaded((prev) => ({
                        ...prev,
                        [i]: true,
                      }))
                    }
                    className={`
                      h-full
                      w-full
                      object-contain
                      object-right
                      transition-all duration-700
                      ${
                        loaded[i]
                          ? "opacity-100"
                          : "opacity-0"
                      }
                    `}
                  />
                )}

              </motion.div>

              {/* CONTENT */}
              <div className="
                hidden sm:flex
                absolute inset-0 z-20
                items-center
                px-3 sm:px-6 md:px-10 lg:px-16 xl:px-24
                w-1/2
                sm:w-1/2
                md:w-1/2
              ">

                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  animate={{
                    opacity: 1,
                    y: [0, -6, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                  }}
                  className="max-w-full sm:max-w-[400px] md:max-w-[540px]"
                >

                 {/* PREMIUM LABEL */}
<motion.div
  initial={{ opacity: 0, y: -20 }}
  animate={{
    opacity: 1,
    y: [0, -4, 0],
  }}
  transition={{
    duration: 4,
    repeat: Infinity,
  }}
  className="
    relative
    inline-flex items-center gap-2 sm:gap-4
    px-3 sm:px-4 md:px-6 py-2 sm:py-3
    rounded-xl sm:rounded-2xl
    overflow-hidden
    mb-4 sm:mb-7

    bg-[linear-gradient(135deg,_rgba(251,191,36,0.20)_0%,_rgba(255,248,220,0.14)_45%,_rgba(255,255,255,0.08)_100%)]

    border border-amber-200/30
    backdrop-blur-2xl

    shadow-[0_10px_35px_rgba(251,191,36,0.18)]
  "
>

  {/* SHINE */}
  <motion.div
    animate={{
      x: ["-120%", "120%"],
    }}
    transition={{
      duration: 5,
      repeat: Infinity,
      ease: "linear",
    }}
    className="
      absolute inset-0
      bg-gradient-to-r
      from-transparent
      via-white/25
      to-transparent
      skew-x-12
    "
  />

  {/* ICON */}
  <div
    className="
      relative z-10
      w-8 h-8 sm:w-11 sm:h-11
      rounded-lg sm:rounded-xl

      bg-[linear-gradient(135deg,_#fbbf24_0%,_#f59e0b_45%,_#ea580c_100%)]

      flex items-center justify-center

      shadow-[0_8px_24px_rgba(251,191,36,0.45)]
    "
  >
    <span className="text-white text-sm sm:text-lg">
      ✦
    </span>
  </div>

  {/* TEXT */}
  <div className="relative z-10 flex flex-col">

    <span
      className="
        text-amber-100/80
        text-[8px] sm:text-[10px]
        uppercase
        tracking-[2px] sm:tracking-[4px]
        font-semibold
      "
    >
      Exclusive
    </span>

    <span
      className="
        text-white
        text-xs sm:text-base md:text-lg
        font-bold
        tracking-wide
      "
    >
      Premium Collection
    </span>

  </div>

</motion.div>

                  {/* TITLE */}
                  <h1 className="
                    text-white
                    font-black
                    leading-[1.1]
                    tracking-tight
                    text-2xl
                    sm:text-3xl
                    md:text-4xl
                    lg:text-5xl
                    xl:text-6xl
                    drop-shadow-2xl
                  ">
                    {item.title}
                  </h1>

                  {/* SUBTITLE */}
                  <p className="
                    mt-3 sm:mt-4 md:mt-6
                    text-white/80
                    text-xs sm:text-sm md:text-base lg:text-lg
                    leading-relaxed
                    max-w-[280px] sm:max-w-[400px] md:max-w-[500px]
                  ">
                    {item.subtitle}
                  </p>

                  {/* STATS */}
                  <div className="
                    flex gap-4 sm:gap-6 md:gap-8
                    mt-6 sm:mt-8 md:mt-10
                    flex-wrap
                  ">

                    <div>
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        10K+
                      </h3>
                      <p className="text-white/70 text-[10px] sm:text-xs md:text-sm">
                        Happy Customers
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        Premium
                      </h3>
                      <p className="text-white/70 text-[10px] sm:text-xs md:text-sm">
                        Modern Quality
                      </p>
                    </div>

                    <div>
                      <h3 className="text-white text-lg sm:text-xl md:text-2xl font-bold">
                        Elegant
                      </h3>
                      <p className="text-white/70 text-[10px] sm:text-xs md:text-sm">
                        Stylish Designs
                      </p>
                    </div>

                  </div>

                </motion.div>
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <FeatureStrip />
    </div>
  );
}