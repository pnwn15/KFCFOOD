import React from "react";

const Bar = () => {
  const features = [
    {
      icon: "🚚", // ใช้ emoji แทนไอคอน (หรือใช้ SVG/ไอคอนอื่นได้)
      title: "FREE SHIPPING",
      description: "ON ORDER OVER $100",
      bgColor: "bg-pink-200", // สีพื้นหลัง
    },
    {
      icon: "🥗",
      title: "ALWAYS FRESH",
      description: "PRODUCT WELL PACKAGE",
      bgColor: "bg-yellow-200",
    },
    {
      icon: "🏅",
      title: "SUPERIOR QUALITY",
      description: "QUALITY PRODUCTS",
      bgColor: "bg-blue-200",
    },
    {
      icon: "📞",
      title: "SUPPORT",
      description: "24/7 SUPPORT",
      bgColor: "bg-yellow-200",
    },
  ];

  return (
    <div className="container mx-auto py-10 px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {features.map((feature, index) => (
          <div
            key={index}
            className="flex flex-col items-center text-center space-y-4"
          >
            <div
              className={`w-20 h-20 flex items-center justify-center rounded-full ${feature.bgColor}`}
            >
              <span className="text-4xl">{feature.icon}</span>
            </div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-500 text-sm">{feature.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Bar;
