import React from 'react';

const About = () => {
    return (
        <div className="min-h-screen bg-gray-100 py-12">
            <div className="max-w-7xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold text-gray-800">About Us</h1>
                    <p className="text-xl text-gray-600 mt-4">
                        We provide fast, reliable, and delicious food delivery straight to your door!
                    </p>
                </div>

                {/* Mission Statement */}
                <div className="mb-16 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Our Mission</h2>
                    <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
                        Our mission is to offer you a seamless and enjoyable experience by bringing the best
                        local restaurants and delicacies right to your doorstep. We believe in convenience, quality,
                        and fast service, ensuring that your food arrives hot and fresh every time.
                    </p>
                </div>

                {/* Features */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Wide Selection of Restaurants</h3>
                        <p className="text-gray-600 mt-4">
                            Choose from a variety of local restaurants offering diverse cuisines, all available in one place.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Fast and Reliable Delivery</h3>
                        <p className="text-gray-600 mt-4">
                            Our delivery partners are always on time, ensuring your food arrives quickly and safely.
                        </p>
                    </div>
                    <div className="bg-white p-8 rounded-xl shadow-lg">
                        <h3 className="text-2xl font-bold text-gray-800">Easy Ordering</h3>
                        <p className="text-gray-600 mt-4">
                            With our simple and intuitive interface, ordering your favorite meals is just a few clicks away.
                        </p>
                    </div>
                </div>

                {/* Contact Information */}
                <div className="mt-16 text-center">
                    <h2 className="text-3xl font-semibold text-gray-800">Contact Us</h2>
                    <p className="text-lg text-gray-600 mt-4">
                        Have any questions or feedback? Feel free to reach out to us!
                    </p>
                    <div className="mt-8">
                        <p className="text-xl text-gray-700">Email: support@fooddelivery.com</p>
                        <p className="text-xl text-gray-700 mt-2">Phone: +1 (800) 123-4567</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
