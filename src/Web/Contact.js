import React from "react";
import Slick from "../Components/Slick";

function ContactUs() {
    return (
        <div className="bg-gray-100 py-12 px-4 xl:px-0">
            <Slick />
            <div className="container mt-10 ">
                {/* Top Info Section */}
                <div className="grid justify-center grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-12 px-4 md:px-8 lg:px-16">
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <p className="text-gray-700 font-semibold">Address:</p>
                        <p className="text-sm text-gray-500">
                            198 West 21th Street, Suite 721 New York NY 10016
                        </p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <p className="text-gray-700 font-semibold">Phone:</p>
                        <p className="text-sm text-gray-500">+1235 2355 98</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <p className="text-gray-700 font-semibold">Email:</p>
                        <p className="text-sm text-gray-500">info@yoursite.com</p>
                    </div>
                    <div className="bg-white shadow rounded-lg p-6 text-center">
                        <p className="text-gray-700 font-semibold">Website:</p>
                        <p className="text-sm text-gray-500">yoursite.com</p>
                    </div>
                </div>


                {/* Contact Us Section */}
                <div className="grid mx-10 grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Google Map */}
                    <div className="h-96 w-full">
                        <iframe
                            className="w-full h-full rounded-lg"
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.086575817695!2d-122.41941548509664!3d37.77492977975973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085818c21a73e2f%3A0x33f8c54e6ab5294b!2s198%20West%2021th%20Street%2C%20New%20York%2C%20NY%2010016!5e0!3m2!1sen!2sus!4v1632424683032!5m2!1sen!2sus"
                            loading="lazy"
                        ></iframe>
                    </div>

                    {/* Contact Form */}
                    <div className="bg-white shadow rounded-lg p-6">
                        <form>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="name">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Name"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                                    Subject
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Email"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="message">
                                    Message
                                </label>
                                <textarea
                                    id="message"
                                    rows="4"
                                    className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                                    placeholder="Your Message"
                                ></textarea>
                            </div>
                            <div className="text-right">
                                <button
                                    type="submit"
                                    className="px-6 py-2 text-white bg-indigo-500 rounded-lg hover:bg-indigo-600 focus:outline-none"
                                >
                                    Send Message
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ContactUs;
