import React, { useState, useEffect } from "react";
import logo from '../assets/images/logo.png.webp' 
import { Link } from 'react-router-dom';

const socialIcons = [
  { icon: "fab fa-facebook-f", url: "#" },
  { icon: "fab fa-twitter", url: "#" },
  { icon: "fab fa-pinterest-p", url: "#" },
  { icon: "fab fa-google-plus-g", url: "#" },
  { icon: "fab fa-instagram", url: "#" },
];

export default function Navbar() {
  const [showTopBar, setShowTopBar] = useState(true);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;
    const handleScroll = () => {
      if (window.scrollY > 40 && window.scrollY > lastScrollY) {
        setShowTopBar(false);
      } else if (window.scrollY < 40) {
        setShowTopBar(true);
      }
      lastScrollY = window.scrollY;
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className="p-0 m-0">
      <div
        className={`transition-all duration-300 bg-gray-100 text-gray-500 text-sm px-4 py-2 flex justify-between items-center ${
          showTopBar ? "block" : "hidden"
        } fixed w-full top-0 left-0 z-40`}
      >
        <div className="flex items-center gap-4">
          {socialIcons.map((s, i) => (
            <a key={i} href={s.url} className="hover:text-black">
              <i className={s.icon}></i>
            </a>
          ))}
        </div>
        <div>Free shipping for standard order over $100</div>
        <div className="flex items-center gap-4">
          <span>fashe@example.com</span>
          <span>USD <i className="fas fa-chevron-down text-xs"></i></span>
        </div>
      </div>

      <nav
        className={`flex items-center justify-between px-8 py-4 bg-white w-full z-50 transition-all duration-300 fixed top-0 left-0 border-b ${
          showTopBar ? "mt" : "mt-0"
        }`}
        style={{ top: showTopBar ? "48px" : "0" }}
      >
        <div className="flex items-center gap-2 text-3xl font-bold">
          <img src={logo} alt="" />
        </div>
        <button
          className="lg:hidden block text-3xl focus:outline-none"
          onClick={() => setMobileMenuOpen(true)}
          aria-label="Open menu"
        >
          <i className="fas fa-bars"></i>
        </button>
        <ul className="hidden lg:flex gap-8 text-lg font-medium">
          <a href="/">          <li  className="text-red-500">Home</li></a>
          <a href="/shop"><li className="hover:text-red-500 cursor-pointer">Shop</li></a>
          <li className="hover:text-red-500 cursor-pointer">Sale</li>
          <li className="hover:text-red-500 cursor-pointer">Features</li>
          <a href="/blog"><li className="hover:text-red-500 cursor-pointer">Blog</li></a>
          <a href="/about"><li className="hover:text-red-500 cursor-pointer">About</li></a>
          <a href="/contact"><li className="hover:text-red-500 cursor-pointer">Contact</li></a>
        </ul>
        <div className="hidden lg:flex items-center gap-6">
          <Link to="/account">
            <i className="fas fa-user-circle text-2xl text-gray-400"></i>
          </Link>
          <div className="border-l h-6"></div>
          <div className="relative">
            <i className="fas fa-shopping-bag text-2xl text-gray-400"></i>
            <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">0</span>
          </div>
        </div>
      </nav>
      <div
        className={`fixed inset-0 z-[100] bg-black/40 transition-opacity duration-300 ${
          mobileMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setMobileMenuOpen(false)}
      >
        <div
          className={`fixed top-0 left-0 h-full w-80 max-w-full bg-white z-[101] shadow-lg transform transition-transform duration-300 ${
            mobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
          onClick={e => e.stopPropagation()}
        >
          <div className="flex items-center justify-between px-6 py-4 border-b">
            <div className="flex items-center gap-2 text-3xl font-bold">
              Fashe<span className="text-red-500">.</span>
            </div>
            <button
              className="text-3xl focus:outline-none"
              onClick={() => setMobileMenuOpen(false)}
              aria-label="Close menu"
            >
              <i className="fas fa-times"></i>
            </button>
          </div>
          <div className="px-6 py-2 border-b">
            <div className="text-gray-500 text-sm mb-1">Free shipping for standard order over $100</div>
            <div className="text-gray-500 text-sm mb-1">fashe@example.com</div>
            <div className="flex gap-4 text-lg mt-2 mb-2">
              {socialIcons.map((s, i) => (
                <a key={i} href={s.url} className="hover:text-black">
                  <i className={s.icon}></i>
                </a>
              ))}
            </div>
          </div>
          <ul className="flex flex-col gap-2 px-0 py-4 text-lg font-medium bg-[#E65641] text-white">
            <li className="px-6 py-3 flex justify-between items-center border-b border-[#e97a6a]">Home <i className="fas fa-chevron-right"></i></li>
            <li className="px-6 py-3 border-b border-[#e97a6a]">Shop</li>
            <li className="px-6 py-3 border-b border-[#e97a6a]">Sale</li>
            <li className="px-6 py-3 border-b border-[#e97a6a]">Features</li>
            <li className="px-6 py-3 border-b border-[#e97a6a]">Blog</li>
            <li className="px-6 py-3 border-b border-[#e97a6a]">About</li>
            <li className="px-6 py-3">Contact</li>
          </ul>
          <div className="flex items-center gap-6 px-6 py-4 border-t">
            <Link to="/account">
              <i className="fas fa-user-circle text-2xl text-gray-400"></i>
            </Link>
            <div className="border-l h-6"></div>
            <div className="relative">
              <i className="fas fa-shopping-bag text-2xl text-gray-400"></i>
              <span className="absolute -top-2 -right-2 bg-black text-white text-xs rounded-full px-1">0</span>
            </div>
          </div>
        </div>
      </div>
      <div className={showTopBar ? "h-28" : "h-16"}></div>
    </header>
  );
} 