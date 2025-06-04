import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const useCart = () => useContext(CartContext);

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart(prev =>
      prev.find(item => item.id === product.id)
        ? prev.map(item => item.id === product.id ? { ...item, qty: item.qty + 1 } : item)
        : [...prev, { ...product, qty: 1 }]
    );
  };

  const removeFromCart = (id) => setCart(prev => prev.filter(item => item.id !== id));

  const clearCart = () => setCart([]);

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, clearCart }}>
      {children}
    </CartContext.Provider>
  );
}; 