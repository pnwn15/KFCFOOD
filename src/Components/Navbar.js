import React, { useState } from "react"; // Import React and useState

const Navbar = () => {
    const [showMenu, setShowMenu] = useState(false);
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
                        className={`${showMenu ? "block" : "hidden"
                            } w-full md:flex md:items-center md:w-auto`}
                    >
                        <div className="flex flex-col md:flex-row items-center md:space-x-8 text-sm space-y-4 md:space-y-0">
                            <a href="#" className="hover:text-green-600">
                                HOME
                            </a>
                            <div className="relative group">
                                <a href="#" className="hover:text-green-600">
                                    SHOP
                                </a>
                                <div className="absolute left-0 mt-2 hidden w-32 bg-white border border-gray-300 shadow-lg group-hover:block">
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-black hover:bg-green-100"
                                    >
                                        Product 1
                                    </a>
                                    <a
                                        href="#"
                                        className="block px-4 py-2 text-black hover:bg-green-100"
                                    >
                                        Product 2
                                    </a>
                                </div>
                            </div>
                            <a href="#" className="hover:text-green-600">
                                ABOUT
                            </a>
                            <a href="#" className="hover:text-green-600">
                                BLOG
                            </a>
                            <a href="#" className="hover:text-green-600">
                                CONTACT
                            </a>
                        </div>
                    </div>

                    {/* Cart */}
                    <div className="flex items-center">
                        <span className="material-icons-outlined text-lg">
                            shopping_cart
                        </span>
                        <span className="ml-1">[0]</span>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default Navbar;
