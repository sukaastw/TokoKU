import { Link } from 'react-router-dom';
import { useCart } from "../utils/CartContext";

export default function ProductCard({ p }) {
  const { addToCart } = useCart();

  return (
    <div className="border rounded-lg p-4 shadow hover:shadow-lg">
      <img
        src={p.img_url}
        alt={p.name}
        className="w-full h-40 object-cover rounded mb-3"
      />
      <h2 className="font-semibold text-lg">{p.name}</h2>
      <p className="text-gray-600">Rp {p.price.toLocaleString()}</p>

      <Link
        to={`/product/${p.slug}`}
        state={p}
        className="text-blue-600 hover:underline mt-2 block"
      >
        Lihat Detail
      </Link>

      <button
        onClick={() => addToCart(p)}
        className="mt-3 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 flex items-center gap-2"
      >
        Add to Cart
      </button>
    </div>
  );
}