import React from "react";

const Imgproduct = () => {
  const categories = [
    {
      title: "Fruits",
      image: "image/img1.jpg", // แทนที่ด้วย path รูปภาพจริง
    },
    {
      title: "Juices",
      image: "image/img2.jpg",
    },
    {
      title: "Vegetables",
      image: "image/img3.jpg",
    },
    {
      title: "Dried",
      image: "image/img4.jpg",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4 sm:px-8 md:px-36">
      {/* Layout Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-center">
        {/* รูปด้านซ้าย */}
        <div className="space-y-6">
          {categories.slice(0, 2).map((category, index) => (
            <div key={index} className="relative group">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-green-500 bg-opacity-80 text-white py-2 text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.title}
              </div>
            </div>
          ))}
        </div>

        {/* รูปใหญ่ตรงกลาง */}
        
        <div className="md:row-span-2 ">
        <div className="text-center mb-8">
        
        <h2 className="text-3xl font-bold text-green-700">Vegetables</h2>
        <p className="text-gray-600">Protect the health of every home</p>
        <button className="mt-4 px-6 py-2 bg-green-500 text-white rounded-full hover:bg-green-600">
          Shop now
        </button>
      </div>
          <img
            src="image/kfc3.jpeg" // แทนที่ด้วย path รูปภาพจริง
            alt="Vegetables"
            className="w-full h-full object-cover rounded-lg"
          />
        </div>

        {/* รูปด้านขวา */}
        <div className="space-y-6">
          {categories.slice(2, 4).map((category, index) => (
            <div key={index} className="relative group">
              <img
                src={category.image}
                alt={category.title}
                className="w-full h-48 object-cover rounded-lg"
              />
              <div className="absolute bottom-0 left-0 w-full bg-green-500 bg-opacity-80 text-white py-2 text-center rounded-b-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                {category.title}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Imgproduct;
