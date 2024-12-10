import React from 'react';
import { useLocation } from 'react-router-dom';

function Wishlist() {
  const location = useLocation();
  const product = location.state?.product; // Get the product passed from Shop

  return (
    <div className="bg-white p-8">
      <h1 className="text-2xl font-semibold text-center mb-6">Your Wishlist</h1>

      {/* Show product in wishlist */}
      {product ? (
        <div className="flex justify-center items-center">
          <div className="p-6 border rounded-xl shadow-lg">
            <img src={product.image} alt={product.name} className="w-48 h-48 object-cover rounded-md mb-4" />
            <div className="text-center">
              <p className="text-xl font-semibold">{product.name}</p>
              <p className="text-sm text-gray-600 mb-2">{product.category}</p>
              <p className="text-lg font-bold text-red-600">${product.price}</p>
            </div>
          </div>
        </div>
      ) : (
        <p className="text-gray-600 text-center">No product selected for wishlist.</p>
      )}
    </div>
  );
}

export default Wishlist;
