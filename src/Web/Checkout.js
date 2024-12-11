import React, { useState } from 'react';
import Slick from '../Components/Slick';
import Sub from '../Components/Sub';

function Checkout() {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    address: '',
    phone: '',
    email: '',
    postcode: '',
    country: '',
    paymentMethod: 'bank', // Default to bank
  });

  const [orderId, setOrderId] = useState(null); // Track the generated order ID
  const [showDialog, setShowDialog] = useState(false); // Control dialog visibility

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Generate a random order ID
    const newOrderId = `ORD-${Math.floor(Math.random() * 1000000)}`;
    setOrderId(newOrderId);

    // Show the dialog
    setShowDialog(true);

    // Simulate form submission logic (e.g., save data to server)
    console.log('Form Data Submitted:', formData);
  };

  const closeDialog = () => {
    setShowDialog(false);
  };

  return (
    <div className="bg-gray-50 min-h-screen">
      <Slick />
      <h1 className="text-3xl font-semibold text-center mb-8 text-gray-800">Checkout</h1>

      <form
        onSubmit={handleSubmit}
        className="max-w-2xl mx-auto bg-white p-6 rounded-lg shadow-md space-y-6"
      >
        {/* First Name and Last Name */}
        <div className="flex flex-col sm:flex-row sm:space-x-4">
          <div className="flex-1">
            <label htmlFor="firstName" className="block text-gray-700 font-medium mb-2">
              First Name
            </label>
            <input
              type="text"
              id="firstName"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
          <div className="flex-1">
            <label htmlFor="lastName" className="block text-gray-700 font-medium mb-2">
              Last Name
            </label>
            <input
              type="text"
              id="lastName"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
            />
          </div>
        </div>

        {/* Address */}
        <div>
          <label htmlFor="address" className="block text-gray-700 font-medium mb-2">
            Address
          </label>
          <input
            type="text"
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Country */}
        <div>
          <label htmlFor="country" className="block text-gray-700 font-medium mb-2">
            Country
          </label>
          <select
            id="country"
            name="country"
            value={formData.country}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
          >
            <option value="" disabled>
              Select a country
            </option>
            <option value="Thailand">Thailand</option>
            <option value="United States">United States</option>
            <option value="India">India</option>
            <option value="Australia">Australia</option>
            {/* Add more countries */}
          </select>
        </div>

        {/* Phone */}
        <div>
          <label htmlFor="phone" className="block text-gray-700 font-medium mb-2">
            Phone
          </label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Email */}
        <div>
          <label htmlFor="email" className="block text-gray-700 font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Postcode */}
        <div>
          <label htmlFor="postcode" className="block text-gray-700 font-medium mb-2">
            Postcode
          </label>
          <input
            type="text"
            id="postcode"
            name="postcode"
            value={formData.postcode}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-red-300"
          />
        </div>

        {/* Payment Method */}
        <div>
          <p className="block text-gray-700 font-medium mb-2">Payment Method</p>
          <div className="flex items-center space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="bank"
                checked={formData.paymentMethod === 'bank'}
                onChange={handleChange}
                className="mr-2"
              />
              Direct Bank Transfer
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="cash"
                checked={formData.paymentMethod === 'cash'}
                onChange={handleChange}
                className="mr-2"
              />
              Check Payment
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                name="paymentMethod"
                value="paypal"
                checked={formData.paymentMethod === 'paypal'}
                onChange={handleChange}
                className="mr-2"
              />
              Paypal
            </label>
          </div>
        </div>

        {/* Submit Button */}
        <div className="text-center">
          <button
            type="submit"
            className="w-full bg-red-600 text-white py-3 px-6 rounded-md text-lg hover:bg-red-700"
          >
            Confirm Order
          </button>
        </div>
      </form>

      <Sub />

      {/* Dialog */}
      {showDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Order Confirmed</h2>
            <p className="text-gray-700 mb-6">
              Your order <span className="font-bold">{orderId}</span> has been successfully placed.
              We are processing your order.
            </p>
            <button
              onClick={closeDialog}
              className="bg-red-600 text-white px-6 py-2 rounded-md hover:bg-red-700"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default Checkout;
