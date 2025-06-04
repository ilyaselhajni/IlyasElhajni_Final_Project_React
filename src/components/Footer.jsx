import React from 'react';

const Footer = () => (
  <div className="bg-gray-100 pt-16 pb-6 mt-16">
    <div className="max-w-7xl mx-auto px-8 grid grid-cols-1 md:grid-cols-5 gap-10">
      {/* Get in Touch */}
      <div>
        <div className="font-bold font-montserrat text-sm mb-4">GET IN TOUCH</div>
        <div className="text-gray-600 text-base mb-6">Any questions? Let us know in store at 8th floor, 379 Hudson St, New York, NY 10018 or call us on (+1) 96 716 6879</div>
        <div className="flex gap-4 text-sm text-gray-500">
          <a href="#" className="hover:text-black"><i className="fab fa-facebook-f"></i></a>
          <a href="#" className="hover:text-black"><i className="fab fa-twitter"></i></a>
          <a href="#" className="hover:text-black"><i className="fab fa-pinterest-p"></i></a>
          <a href="#" className="hover:text-black"><i className="fab fa-google-plus-g"></i></a>
          <a href="#" className="hover:text-black"><i className="fab fa-instagram"></i></a>
        </div>
      </div>
      {/* Categories */}
      <div>
        <div className="font-bold font-montserrat text-sm mb-4">CATEGORIES</div>
        <ul className="text-gray-700 space-y-2">
          <li>Men</li>
          <li>Women</li>
          <li>Dresses</li>
          <li>Sunglasses</li>
        </ul>
      </div>
      {/* Links */}
      <div>
        <div className="font-bold font-montserrat ttext-sm mb-4">LINKS</div>
        <ul className="text-gray-700 space-y-2">
          <li>Search</li>
          <li>About Us</li>
          <li>Contact Us</li>
          <li>Returns</li>
        </ul>
      </div>
      {/* Help */}
      <div>
        <div className="font-bold font-montserrat text-sm mb-4">HELP</div>
        <ul className="text-gray-700 space-y-2">
          <li>Track Order</li>
          <li>Returns</li>
          <li>Shipping</li>
          <li>FAQs</li>
        </ul>
      </div>
      {/* Newsletter */}
      <div>
        <div className="font-bold font-montserrat text-sm mb-4">NEWSLETTER</div>
        <input type="email" placeholder="Email Address" className="w-full border-b border-gray-300 bg-transparent py-2 mb-4 focus:outline-none" />
        <button className="w-full bg-black text-white py-3 rounded-full font-montserrat text-lg font-semibold tracking-wide hover:bg-gray-800 transition">SUBSCRIBE</button>
      </div>
    </div>
    <div className="text-center text-gray-500 text-sm mt-12">
      Copyright © 2022 <span className="font-semibold">Shopify Theme Developed by MassTechnologist</span> All rights reserved.
    </div>
  </div>
);

export default Footer; 