import { FiSearch } from "react-icons/fi";

export default function ProductSearchBar({ onSearch }) {
  return (
    <div className="relative">
      <input
        type="text"
        placeholder="Cari produk..."
        onChange={(e) => onSearch(e.target.value)}
        className="w-full px-4 py-2 pl-10 border rounded-md focus:outline-none focus:ring"
      />
      <FiSearch className="absolute left-3 top-2.5 text-gray-500" />
    </div>
  );
}