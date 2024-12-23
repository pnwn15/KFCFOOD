import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation
import { useCart } from '../Web/CartContext'; // Import the CartContext to access the cart items
import Sub from './Sub';
import Slick from './Slick';

function Cart() {
  const { cartItems, removeFromCart, increaseQuantity, decreaseQuantity } = useCart(); // Get cart methods and items
  const navigate = useNavigate(); // Initialize useNavigate

  return (
    <div className="bg-gray-50">
      <Slick />
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">รายการสินค้าที่เลือก</h1>

      {/* Display cart items */}
      {cartItems.length === 0 ? (
        <p className="text-center text-gray-600 text-lg">Your cart is empty.</p>
      ) : (
        <div className="mx-4 sm:mx-8 md:mx-16">
          <ul>
            {cartItems.map((item, index) => (
              <li
                key={index}
                className="flex flex-col sm:flex-row justify-between items-center p-6 border-b border-gray-300 rounded-lg bg-white shadow-sm mb-4"
              >
                <div className="flex items-center space-x-4 w-full sm:w-1/3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-20 h-20 object-cover rounded-md"
                  />
                  <div>
                    <p className="text-lg font-medium text-gray-800">{item.name}</p>
                    <p className="text-sm text-gray-500">{item.category}</p>
                  </div>
                </div>

                <div className="flex items-center justify-center space-x-4 w-full sm:w-1/3 mt-4 sm:mt-0">
                  {/* Decrease quantity button */}
                  <button
                    onClick={() => decreaseQuantity(item.name)}
                    className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                  >
                    -
                  </button>

                  {/* Display quantity */}
                  <span className="text-lg font-semibold">{item.quantity}</span>

                  {/* Increase quantity button */}
                  <button
                    onClick={() => increaseQuantity(item.name)}
                    className="px-3 py-1 bg-gray-200 rounded-full text-gray-700 hover:bg-gray-300"
                  >
                    +
                  </button>
                </div>

                {/* Display price */}
                <p className="text-lg font-semibold text-gray-800 w-full sm:w-1/3 text-right mt-4 sm:mt-0">
                  ${(item.price * item.quantity).toFixed(2)}
                </p>

                {/* Remove from cart button */}
                <button
                  onClick={() => removeFromCart(item.name)}
                  className="text-red-600 hover:text-red-800 text-lg ml-4 mt-4 sm:mt-0"
                >
                  Remove
                </button>
              </li>
            ))}
          </ul>

          {/* Total and Checkout */}
          <div className="mt-6 flex flex-col sm:flex-row justify-between items-center py-4 px-6 bg-gray-100 rounded-lg shadow-md">
            <div className="flex items-center">
              <p className="text-xl font-semibold text-gray-700">Total:</p>
              <p className="text-2xl font-bold text-gray-900 ml-4">
                $
                {cartItems
                  .reduce((total, item) => total + item.price * item.quantity, 0)
                  .toFixed(2)}
              </p>
            </div>
            <button
              onClick={() => navigate('/checkout')} // Navigate to checkout page
              className="bg-red-600 text-white py-3 px-6 rounded-lg text-lg hover:bg-red-700 mt-4 sm:mt-0"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      )}
      <Sub />
    </div>
  );
}

export default Cart;
