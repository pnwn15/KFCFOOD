import React, { useState } from "react";
import { Link, useLocation } from 'react-router-dom';
import { useCart } from "../Web/CartContext"; // Import the custom hook to access cart items

const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const location = useLocation();
  const { cartItems } = useCart(); // Get cart items from context

  // List of navigation links
  const navLinks = [
    { name: "HOME", path: "/" },
    { name: "SHOP", path: "/shop" },
    { name: "ABOUT", path: "/about" },
    { name: "BLOG", path: "/blog" },
    { name: "CONTACT", path: "/contact" },
  ];

  // Function to check if the current path matches the link
  const isActive = (path) => location.pathname === path;

  return (
    <div className="bg-green-500 text-white">
      {/* Top bar */}
      <div className="container mx-auto flex flex-col md:flex-row justify-center items-center py-2 text-sm space-y-2 md:space-y-0">
        <div className="flex flex-col md:flex-row items-center justify-between w-full md:w-auto space-y-4 md:space-y-0 md:space-x-32">
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-sm">phone</span>
            <span className="ml-1">+1235 2355 98</span>
          </div>
          <div className="flex items-center justify-center">
            <span className="material-icons-outlined text-sm">mail</span>
            <span className="ml-1">youremail@email.com</span>
          </div>
          <div className="text-sm text-center md:text-left">
            3-5 BUSINESS DAYS DELIVERY & FREE RETURNS
          </div>
        </div>
      </div>

      {/* Main Navbar */}
      <div className="bg-white text-black border-t border-green-500 shadow-sm">
        <div className="container px-16 flex flex-wrap justify-between items-center py-4">
          {/* Logo */}
          <div className="text-green-600 text-2xl font-bold">
            WarisaraFOODS
          </div>

          {/* Hamburger Menu (Mobile) */}
          <button
            className="block md:hidden text-green-600 focus:outline-none"
            onClick={() => setShowMenu(!showMenu)}
          >
            <span className="material-icons-outlined text-2xl">
              menu
            </span>
          </button>

          {/* Navigation Links */}
          <div
            className={`${showMenu ? "block" : "hidden"} w-full md:flex md:items-center md:w-auto`}
          >
            <div className="flex flex-col md:flex-row items-center md:space-x-8 text-sm space-y-4 md:space-y-0">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`hover:text-green-600 ${isActive(link.path) ? "text-green-600 font-bold" : ""}`}
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* Cart */}
          <div className="flex items-center relative">
            <Link to="/cart">
              <span className="material-icons-outlined text-lg">shopping_cart</span>
            </Link>
            {/* Display cart count inside a small circle */}
            <span className="ml-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex justify-center items-center absolute -top-2 -right-2">
              {cartItems.length}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
