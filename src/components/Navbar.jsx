import { Link } from "react-router-dom";
import { useCart } from "../utils/CartContext";

export default function Navbar() {
  const { totalQty } = useCart(); // ✅ Tambahan penting agar jumlah bisa muncul

  return (
    <nav className="bg-blue-600 text-white px-6 py-4 flex justify-between items-center">
      <Link to="/" className="font-bold text-xl">
        MyShop
      </Link>
      <div className="flex gap-6">
        <Link to="/products" className="hover:text-gray-200">
          Dashboard
        </Link>
        <Link to="/cart" className="hover:text-gray-200 relative">
          Keranjang
          {totalQty > 0 && (
            <span className="absolute -top-2 -right-4 bg-red-500 text-xs px-2 rounded-full">
              {totalQty}
            </span>
          )}
        </Link>
        <Link to="/checkout" className="hover:text-gray-200">
          Checkout
        </Link>
      </div>
    </nav>
  );
}