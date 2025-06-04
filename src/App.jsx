import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomePage from './pages/home/HomePage';
import Navbar from './components/Navbar';
import ErrorPage from './pages/error/ErrorPage';
import About from './pages/about/about';
import Contact from './pages/contact/contact';
import CartPage from './pages/cart/CartPage';
import ShopPage from './pages/shop/ShopPage';
import LoginPage from './pages/account/LoginPage';

const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="*" element={<ErrorPage />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/account" element={<LoginPage />} />
      </Routes>
    </>
  );
};

export default App;
