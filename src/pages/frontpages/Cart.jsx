import { useCart } from "../../utils/CartContext";
import { useNavigate } from "react-router-dom";

export default function Cart() {
  const { cartItems, updateQuantity, removeFromCart } = useCart();
  const navigate = useNavigate();

  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0);

  if (cartItems.length === 0) {
    return <div className="p-6 text-center text-gray-600">Cart is empty</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Your Cart</h1>
      <div className="space-y-4">
        {cartItems.map((item) => (
          <div key={item.id} className="flex justify-between items-center border p-4 rounded">
            <div className="flex gap-4 items-center">
              <img src={item.img_url} alt={item.name} className="w-16 h-16 object-cover rounded" />
              <div>
                <p className="font-semibold">{item.name}</p>
                <p>Rp {item.price.toLocaleString()}</p>
              </div>
            </div>
            <div className="flex gap-2 items-center">
              <input
                type="number"
                value={item.quantity}
                min="1"
                className="w-16 border rounded text-center"
                onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
              />
              <button
                onClick={() => removeFromCart(item.id)}
                className="px-3 py-1 bg-red-500 text-white rounded"
              >
                Delete
              </button>
            </div>
          </div>
        ))}
      </div>
      <div className="mt-6 text-right">
        <p className="text-lg font-semibold">Total Barang: {totalQty}</p>
        <p className="text-lg font-semibold">Total Harga: Rp {totalPrice.toLocaleString()}</p>
        <button
          onClick={() => navigate("/checkout")}
          className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
        >
          Checkout
        </button>
      </div>
    </div>
  );
}