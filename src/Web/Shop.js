import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for routing
import { useCart } from './CartContext'; // Import useCart from CartContext
import Slick from '../Components/Slick';
import Sub from '../Components/Sub';

function Shop() {
  const navigate = useNavigate(); // ใช้สำหรับการนำทางไปยังหน้าอื่น
  const { addToCart } = useCart(); // Get addToCart from CartContext
  const categories = ["All", "Bucket", "Drinks", "Sides", "Desserts"];

  const allProducts = [
    { name: "Original Chicken Bucket", category: "Bucket", image: "image/menu1.png", price: 10 },
    { name: "Spicy Chicken Bucket", category: "Bucket", image: "image/menu2.png", price: 12 },
    { name: "Coleslaw", category: "Sides", image: "image/menu3.png", price: 3 },
    { name: "Mashed Potatoes", category: "Sides", image: "image/menu4.png", price: 4 },
    { name: "Coca-Cola", category: "Drinks", image: "image/menu5.png", price: 2 },
    { name: "Pepsi", category: "Drinks", image: "image/menu6.png", price: 2 },
    { name: "Chocolate Cake", category: "Desserts", image: "image/menu7.png", price: 5 },
    { name: "Apple Pie", category: "Desserts", image: "image/menu8.png", price: 3 },
  ];

  const [activeCategory, setActiveCategory] = useState("All");

  // กรองสินค้าตามหมวดหมู่ที่เลือก
  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  const handleProductClick = (product) => {
    // นำทางไปยังหน้าของ Wishlist พร้อมส่งข้อมูลสินค้าที่เลือกไป
    navigate('/wishlist', { state: { product } });
  };

  const handleAddToCart = (product) => {
    // Add product to the cart
    addToCart(product);
    // Navigate to the cart page
    navigate('/cart');
  };

  return (
    <div className="bg-white">
      <Slick />
      <div className="flex flex-col items-center mt-5">
        {/* แสดงแถบหมวดหมู่ */}
        <div className="flex space-x-4 border-b-2 border-gray-200 pb-2">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-md font-medium ${
                activeCategory === category
                  ? "text-red-600 border-b-4 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              } transition-all duration-200 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8">
          <div className="justify-center flex">
            <p className="text-gray-700 text-lg font-semibold">
              Showing menu for: <span className="font-bold">{activeCategory}</span>
            </p>
          </div>

          {/* แสดงรายการสินค้า */}
          <div className="grid grid-cols-2 md:grid-cols-4 mx-16 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <p className="text-xl font-bold text-red-600">${product.price}</p>
                </div>
                {/* Add to Cart button */}
                <button
                  onClick={() => handleAddToCart(product)}
                  className="w-full bg-red-600 text-white py-2 mt-4 rounded-md hover:bg-red-700 transition-colors"
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Sub />
    </div>
  );
}

export default Shop;
