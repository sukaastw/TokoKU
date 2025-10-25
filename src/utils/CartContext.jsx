import React, { createContext, useState, useContext } from "react";

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);

  // 🔢 Hitung total jumlah item di keranjang
  const totalQty = cartItems.reduce((sum, item) => sum + item.quantity, 0);

  // 🛒 Tambahkan item ke keranjang
  const addToCart = (product) => {
    const existingItem = cartItems.find((item) => item.id === product.id);
    if (existingItem) {
      setCartItems(
        cartItems.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  // ❌ Hapus item dari keranjang
  const removeFromCart = (id) => {
    setCartItems(cartItems.filter((item) => item.id !== id));
  };

  // 🔄 Ubah jumlah item
  const updateQuantity = (id, quantity) => {
    setCartItems(
      cartItems.map((item) =>
        item.id === id ? { ...item, quantity } : item
      )
    );
  };

  // 🧹 Kosongkan keranjang
  const clearCart = () => {
    setCartItems([]);
  };

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        totalQty, // ✅ Sudah tersedia untuk komponen lain
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

// 🔗 Hook agar mudah digunakan di komponen lain
export const useCart = () => useContext(CartContext);