import React from 'react';
import Slick from '../Components/Slick';
import Team from '../Components/Team';
import Sub from '../Components/Sub';
import Bar from '../Components/Bar';

function About() {
    return (
        <div className="bg-gray-50 min-h-screen ">
            <Slick />
            <div className="max-w-6xl mx-auto px-6 sm:px-12">
                {/* Heading */}


                {/* Company Overview Section */}
                <section className="bg-white  mb-12">
                    <div className="flex flex-col sm:flex-row items-center">
                        <div className="sm:w-1/2 sm:mr-8">
                            <img
                                src="https://via.placeholder.com/400x400"
                                alt="About Us"
                                className="rounded-lg shadow-md"
                            />
                        </div>
                        <div className="sm:w-1/2 text-center sm:text-left mt-6 sm:mt-0">
                            <h2 className="text-4xl font-semibold text-gray-800 mb-4">
                                Welcome to Vegefoods an eCommerce website
                            </h2>
                            <p className="text-lg text-gray-600 mb-4">
                                Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                                Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                                <br />
                                But nothing the copy said could convince her and so it didn’t take long until a few insidious Copy Writers ambushed her,
                                made her drunk with Longe and Parole and dragged her into their agency, where they abused her for their.
                            </p>

                            {/* Shop Now Button */}
                            <div className="mt-6">
                                <button
                                    className="bg-green-400 text-white py-2 px-8 rounded-3xl text-lg font-semibold hover:bg-green-700 transition duration-300"
                                >
                                    Shop Now
                                </button>
                            </div>
                        </div>

                    </div>
                </section>


                {/* Contact Us Section */}
                <section className="bg-white py-12 px-6 rounded-lg shadow-lg">
                    <h2 className="text-3xl font-semibold text-gray-800 text-center mb-4">Get in Touch</h2>
                    <p className="text-lg text-center text-gray-600 mb-6">
                        We would love to hear from you! If you have any questions or feedback, feel free to contact us.
                    </p>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 text-white py-3 px-6 rounded-lg hover:bg-blue-700 transition duration-300">
                            Contact Us
                        </button>
                    </div>
                </section>
            </div>
            <Sub />
            <Team />
            <Bar />
        </div>
    );
}

export default About;
