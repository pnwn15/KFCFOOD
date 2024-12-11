import React, { useState } from 'react';
import Modal from 'react-modal'; // Import react-modal
import { useNavigate } from 'react-router-dom';
import { useCart } from './CartContext';
import Slick from '../Components/Slick';
import Sub from '../Components/Sub';

Modal.setAppElement('#root'); // Set the root element for accessibility

function Shop() {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  const categories = ["All", "Bucket", "Drinks", "Sides", "Desserts"];

  const allProducts = [
    { name: "Original Chicken Bucket", category: "Bucket", about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu1.png", price: 10 },
    { name: "Spicy Chicken Bucket", category: "Bucket",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu2.png", price: 12 },
    { name: "Coleslaw", category: "Sides",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu3.png", price: 3 },
    { name: "Mashed Potatoes", category: "Sides",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu4.png", price: 4 },
    { name: "Coca-Cola", category: "Drinks",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu5.png", price: 2 },
    { name: "Pepsi", category: "Drinks",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu6.png", price: 2 },
    { name: "Chocolate Cake", category: "Desserts",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu7.png", price: 5 },
    { name: "Apple Pie", category: "Desserts",about:"A recipe has no soul. You, as the cook, must bring soul to the recipe.", image: "image/menu8.png", price: 3 },
  ];

  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedProduct, setSelectedProduct] = useState(null); // Track selected product
  const [isModalOpen, setIsModalOpen] = useState(false); // Track modal state

  const filteredProducts = activeCategory === "All"
    ? allProducts
    : allProducts.filter(product => product.category === activeCategory);

  const handleProductClick = (product) => {
    setSelectedProduct(product); // Set selected product
    setIsModalOpen(true); // Open modal
  };

  const handleAddToCart = (product) => {
    addToCart(product);
    navigate('/cart');
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close modal
    setSelectedProduct(null); // Clear selected product
  };

  return (
    <div className="bg-white">
      <Slick />
      <div className="flex flex-col items-center mt-5 px-4 sm:px-8 lg:px-16">
        <div className="flex space-x-4 sm:space-x-6 md:space-x-8 border-b-2 overflow-x-auto border-gray-200 pb-2 w-full justify-center flex-wrap">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveCategory(category)}
              className={`px-6 py-3 text-sm sm:text-md font-medium ${
                activeCategory === category
                  ? "text-red-600 border-b-4 border-red-600"
                  : "text-gray-600 hover:text-red-600"
              } transition-all duration-200 ease-in-out`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="mt-8 w-full">
          <div className="justify-center flex">
            <p className="text-gray-700 text-lg font-semibold">
              Showing menu for: <span className="font-bold">{activeCategory}</span>
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6 mt-8">
            {filteredProducts.map((product) => (
              <div
                key={product.name}
                className="p-6 border rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 ease-in-out"
                onClick={() => handleProductClick(product)} // Open modal on click
              >
                <img src={product.image} alt={product.name} className="w-full h-48 object-cover rounded-md mb-4" />
                <div className="text-center">
                  <p className="text-lg font-semibold text-gray-900">{product.name}</p>
                  <p className="text-sm text-gray-600 mb-2">{product.category}</p>
                  <p className="text-xl font-bold text-red-600">${product.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Sub />

      {/* Modal for product details */}
      <Modal
  isOpen={isModalOpen}
  onRequestClose={closeModal}
  contentLabel="Product Details"
  className="w-full max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-4 sm:p-8"
  overlayClassName="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center"
>
  {selectedProduct && (
    <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-8">
      {/* รูปภาพสินค้า */}
      <img
        src={selectedProduct.image}
        alt={selectedProduct.name}
        className="w-full h-48 md:h-auto md:w-1/2 object-cover rounded-md"
      />

      {/* รายละเอียดสินค้า */}
      <div className="flex-1 text-center md:text-left">
        <h2 className="text-2xl sm:text-3xl font-bold text-gray-800">{selectedProduct.name}</h2>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Category: {selectedProduct.category}
        </p>
        <p className="text-base sm:text-lg text-gray-600 mt-4">
          Description: {selectedProduct.about}
        </p>
        <p className="text-xl sm:text-2xl font-bold text-red-600 mt-6">
          ${selectedProduct.price}
        </p>

        <div className="mt-6 flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-6">
          {/* ปุ่ม Add to Cart */}
          <button
            onClick={() => handleAddToCart(selectedProduct)}
            className="bg-red-600 text-white py-2 px-4 rounded-md text-base sm:text-lg hover:bg-red-700"
          >
            Add to Cart
          </button>

          {/* ปุ่ม Close */}
          <button
            onClick={closeModal}
            className="bg-gray-600 text-white py-2 px-4 rounded-md text-base sm:text-lg hover:bg-gray-700"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )}
</Modal>


    </div>
  );
}

export default Shop;
