import { Search } from "lucide-react";

export default function SearchBar() {
  return (
    <div className="flex w-full max-w-xl border rounded-lg overflow-hidden shadow-sm">

      <input
        type="text"
        placeholder="Search for products, brands and more..."
        className="w-full px-4 py-2 outline-none text-sm"
      />

      <button className="bg-red-500 text-white px-5 flex items-center justify-center hover:bg-red-600">
        <Search size={18} />
      </button>

    </div>
  );
}