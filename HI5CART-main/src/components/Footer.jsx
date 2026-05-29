import { MapPin, Phone, Mail } from "lucide-react";


export default function Footer() {
  return (
    <footer className="mt-14 bg-[linear-gradient(135deg,_#fef2f2_0%,_#fef9c3_30%,_#dcfce7_62%,_#dbeafe_100%)] border-t border-yellow-200">
      
      {/* MAIN */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">
        
        {/* LEFT - BRAND */}
        <div className="space-y-4">
          <div>
             <h2 className="bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_30%,_#22c55e_62%,_#2563eb_100%)] bg-clip-text text-2xl font-black tracking-wide text-transparent">
      Hi5Cart
    </h2>
            <p className="text-sm text-blue-700 mt-1 italic">
              Steeped in Luxury
            </p>
          </div>

          <div className="space-y-3 text-gray-700 text-sm">
            
            <div className="flex items-start gap-3 hover:translate-x-1 transition">
              <MapPin size={18} className="text-red-600 mt-1" />
              <span className="leading-snug">
                No 286/1, Bharathi nagar, Chinniyampalayam pirivu, Chinniyampalayam post, Erode.
              </span>
            </div>

            <div className="flex items-center gap-3 hover:translate-x-1 transition">
              <Phone size={18} className="text-green-600" />
              <span>+91-8884695310</span>
            </div>

            <div className="flex items-center gap-3 hover:translate-x-1 transition">
              <Mail size={18} className="text-blue-600" />
              <span>hi5cartsales@gmail.com</span>
            </div>

          </div>
        </div>

        {/* MIDDLE - LINKS */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Quick Links
            <span className="block h-[2px] w-14 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_35%,_#22c55e_70%,_#2563eb_100%)] mt-1 rounded"></span>
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            {["Home", "About", "Contact", "Shop"].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 hover:translate-x-1 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>

        {/* RIGHT - CUSTOMER SERVICE */}
        <div>
          <h3 className="text-lg font-semibold mb-5 relative inline-block">
            Customer Service
            <span className="block h-[2px] w-14 bg-[linear-gradient(90deg,_#ef4444_0%,_#f59e0b_35%,_#22c55e_70%,_#2563eb_100%)] mt-1 rounded"></span>
          </h3>

          <ul className="space-y-3 text-gray-700 text-sm">
            {[
              "Contact Us",
              "Privacy Policy",
              "Payment Policy",
              "Shipping Policy",
              "Returns & Exchange Policy",
            ].map((item) => (
              <li
                key={item}
                className="hover:text-blue-600 hover:translate-x-1 transition cursor-pointer"
              >
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* DIVIDER */}
      <div className="max-w-7xl mx-auto px-6">
        <div className="border-t border-yellow-200"></div>
      </div>

      {/* BOTTOM */}
      <div className="max-w-7xl mx-auto px-6 py-5 flex flex-col md:flex-row justify-between items-center gap-3 text-sm text-gray-600">
        
        <p className="text-center md:text-left">
          © 2026 <span className="font-semibold text-gray-800">Hi5Cart</span>. All rights reserved.
        </p>

       

      </div>
    </footer>
  );
}