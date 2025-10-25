import { useCart } from "../../utils/CartContext";
import { useState } from "react";

export default function CheckoutPage() {
  const { cartItems, removeFromCart, clearCart } = useCart();
  const [paymentMethod, setPaymentMethod] = useState("Transfer Bank");

  const total = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    const checkoutSummary = {
      items: cartItems,
      total,
      paymentMethod,
      timestamp: new Date().toISOString(),
    };

    localStorage.setItem("checkoutData", JSON.stringify(checkoutSummary));
    alert(`Pembayaran berhasil dengan metode: ${paymentMethod}`);
    clearCart();
  };

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Checkout</h1>

      {cartItems.length === 0 ? (
        <p>Keranjang kosong.</p>
      ) : (
        <ul className="space-y-4 mb-6">
          {cartItems.map((item) => (
            <li key={item.id} className="flex justify-between items-center border-b pb-2">
              <div>
                <p className="font-semibold">{item.name}</p>
                <p className="text-sm text-gray-500">Qty: {item.quantity}</p>
              </div>
              <div className="text-right">
                <p>Rp {item.price.toLocaleString()}</p>
                <button
                  onClick={() => removeFromCart(item.id)}
                  className="text-red-500 text-sm hover:underline"
                >
                  Hapus
                </button>
              </div>
            </li>
          ))}
        </ul>
      )}

      <div className="mb-6">
        <label className="block font-semibold mb-2">Metode Pembayaran:</label>
        <select
          value={paymentMethod}
          onChange={(e) => setPaymentMethod(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        >
          <option>Transfer Bank</option>
          <option>OVO</option>
          <option>GoPay</option>
          <option>Dana</option>
          <option>COD (Bayar di Tempat)</option>
          <option>Kartu Kredit/Debit</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <p className="text-lg font-bold">Total: Rp {total.toLocaleString()}</p>
        <button
          onClick={handleCheckout}
          className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700"
        >
          Bayar Sekarang
        </button>
      </div>
    </div>
  );
}