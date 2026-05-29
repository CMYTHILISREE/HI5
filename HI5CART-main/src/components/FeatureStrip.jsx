import { motion } from "framer-motion";

export default function FeatureStrip() {
  const features = [
    {
      img: "data:image/png;base64,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",
      title: "FREE Delivery",
      sub: "On all Orders",
    },
    {
      img: "data:image/png;base64,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",
      title: "7 days",
      sub: "Easy Returns",
    },
    {
      img: "https://img.freepik.com/premium-vector/best-quality-premium-badge-emblem_691616-171.jpg?w=1200",
      title: "Great Quality at",
      sub: "Best Prices",
    },
  ];

  return (
    <div className="mt-4 sm:mt-6 flex justify-center px-2 sm:px-3">
      
      <div className="w-full max-w-[1100px] bg-black rounded-full px-2 sm:px-3 md:px-4 py-2 sm:py-3 flex items-center justify-between gap-1 sm:gap-2 md:gap-4">
        
        {features.map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.02 }}
            className="
              flex items-center justify-center gap-1 sm:gap-2
              bg-gray-100
              rounded-lg sm:rounded-xl
              px-1 sm:px-1.5 md:px-2 py-1 sm:py-1.5
              flex-1
              max-w-[100px] sm:max-w-[200px] md:max-w-[300px]
              mx-auto
            "
          >
            
            {/* IMAGE */}
            <img
              src={item.img}
              alt={item.title}
              className="w-10 h-10 sm:w-14 sm:h-14 md:w-20 md:h-20 object-contain flex-shrink-0"
            />

            {/* TEXT */}
            <div className="text-center leading-tight">
              <p className="text-[10px] sm:text-[14px] md:text-[20px] font-semibold text-purple-800">
                {item.title}
              </p>
              <p className="text-[10px] sm:text-[14px] md:text-[20px] text-gray-600">
                {item.sub}
              </p>
            </div>

          </motion.div>
        ))}

      </div>
    </div>
  );
}