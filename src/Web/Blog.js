import React from "react";

const categories = ["Promotions", "New Menus", "Store Updates", "Events", "Partnerships"];
const blogData = [
    {
        id: 1,
        title: "New Spicy Chicken Box Launched",
        description: "Experience the fiery taste of our brand-new Spicy Chicken Box. Available for a limited time only!",
        date: "11TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog2.jpg"
    },
    {
        id: 2,
        title: "Holiday Bucket Offer",
        description: "Celebrate the holiday season with our exclusive Holiday Bucket. Perfect for sharing with family and friends!",
        date: "10TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog1.jpg"
    },
    {
        id: 3,
        title: "Grand Opening of Our New Outlet",
        description: "Join us at the grand opening of our new KFC outlet in downtown! Special discounts await!",
        date: "9TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog3.jpg"
    },
    {
        id: 4,
        title: "KFC Joins Hands with Local Farmers",
        description: "KFC is proud to announce its partnership with local farmers to bring fresh ingredients to your plate.",
        date: "8TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog4.jpg"
    },
    {
        id: 5,
        title: "Exclusive KFC App Offers",
        description: "Download the KFC app today and enjoy exclusive offers and rewards!",
        date: "7TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog5.jpg"
    },
    {
        id: 6,
        title: "Exclusive KFC App Offers",
        description: "Download the KFC app today and enjoy exclusive offers and rewards!",
        date: "7TH Dec, 2024",
        author: "KFC Team",
        image: "image/blog1.jpg"
    }
];

function Blog() {
    return (
        <div id="blog" className="bg-gray-100 px-4 xl:px-0 py-12">
            <div className="mx-auto container">
                <h1 className="text-center text-3xl lg:text-5xl tracking-wider text-gray-900 mb-12">
                    KFC News 2024
                </h1>
                <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
                    {/* Left Column - Categories */}
                    <div className="col-span-1 bg-white rounded-lg shadow p-6">
                        <h2 className="text-2xl font-semibold text-gray-900 mb-6">Categories</h2>
                        <ul className="space-y-4">
                            {categories.map((category, index) => (
                                <li
                                    key={index}
                                    className="text-lg text-gray-700 cursor-pointer hover:text-indigo-500"
                                >
                                    {category}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Right Column - Blog Posts */}
                    <div className="col-span-3 grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6">
                        {blogData.map((blog) => (
                            <div key={blog.id} className="bg-white rounded-lg shadow">
                                <img className="w-full rounded-t-lg h-48 object-cover" src={blog.image} alt={blog.title} />
                                <div className="py-3 px-5 w-full flex justify-between bg-red-600 rounded-t-none rounded-b-lg">
                                    <p className="text-xs text-white font-medium tracking-wide">{blog.author}</p>
                                    <p className="text-xs text-white font-medium tracking-wide">{blog.date}</p>
                                </div>
                                <div className="px-4 py-3">
                                    <h1 className="text-lg text-gray-900 font-semibold tracking-wide">{blog.title}</h1>
                                    <p className="text-gray-700 text-sm mt-3 line-clamp-2">{blog.description}</p>
                                    <div className="mt-3 flex items-center justify-end cursor-pointer">
                                        <p className="text-sm tracking-wide text-red-500">Read more</p>
                                        <svg
                                            className="ml-2"
                                            xmlns="http://www.w3.org/2000/svg"
                                            width={16}
                                            height={14}
                                            viewBox="0 0 20 18"
                                            fill="none"
                                        >
                                            <path
                                                d="M11.7998 1L18.9998 8.53662L11.7998 16.0732"
                                                stroke="#DC2626"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                            <path
                                                d="M1 8.53662H19"
                                                stroke="#DC2626"
                                                strokeWidth={2}
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                            />
                                        </svg>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Blog;
