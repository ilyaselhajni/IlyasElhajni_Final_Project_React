import React from 'react';
import { useCart } from '../../context/CartContext';
import Footer from '../../components/Footer';

const CartPage = () => {
  const { cart, removeFromCart, clearCart } = useCart();
  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <>
    <div className="max-w-4xl mx-auto py-12 px-4">
      <h1 className="text-3xl font-bold mb-8">Your Cart</h1>
      {cart.length === 0 ? (
        <div>Your cart is empty.</div>
      ) : (
        <>
          <ul className="divide-y">
            {cart.map(item => (
              <li key={item.id} className="flex items-center py-4">
                <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded mr-4" />
                <div className="flex-1">
                  <div className="font-semibold">{item.name}</div>
                  <div>Qty: {item.qty}</div>
                  <div>${(item.price * item.qty).toFixed(2)}</div>
                </div>
                <button onClick={() => removeFromCart(item.id)} className="text-red-500 ml-4">Remove</button>
              </li>
            ))}
          </ul>
          <div className="text-right mt-6 text-xl font-bold">Total: ${total.toFixed(2)}</div>
          <button onClick={clearCart} className="mt-4 bg-black text-white px-6 py-2 rounded-full">Clear Cart</button>
        </>
      )}

      
     
    </div>
     <Footer />
    </>
  );
};

export default CartPage; 