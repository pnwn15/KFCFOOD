import React from "react";

const Sub = () => {
  return (
    <div className="bg-orange-100 mt-7 py-10">
      <div className="container mx-auto px-10 flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0">
        {/* Left Section */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl font-semibold">Subscribe to our Newsletter</h2>
          <p className="text-gray-500 mt-2">
            Get e-mail updates about our latest shops and special offers
          </p>
        </div>

        {/* Right Section */}
        <form className="flex w-full md:w-auto">
          <input
            type="email"
            placeholder="Enter email address"
            className="w-full md:w-64 px-4 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-green-500"
          />
          <button
            type="submit"
            className="bg-green-500 text-white px-6 py-2 rounded-r-md hover:bg-green-600"
          >
            Subscribe
          </button>
        </form>
      </div>
    </div>
  );
};

export default Sub;
