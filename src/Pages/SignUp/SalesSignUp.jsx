import React, { useState } from 'react';

const SalesSignUp = () => {
    // State to manage form input values
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [restaurantName, setRestaurantName] = useState('');
    const [address, setAddress] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const [cuisineType, setCuisineType] = useState('');
    const [openingHours, setOpeningHours] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // Log the form data to the console (to be replaced with actual form submission logic)
        console.log('Restaurant Name:', restaurantName);
        console.log('Full Name:', name);
        console.log('Email:', email);
        console.log('Password:', password);
        console.log('Address:', address);
        console.log('Phone Number:', phoneNumber);
        console.log('Cuisine Type:', cuisineType);
        console.log('Opening Hours:', openingHours);

        // Clear form fields after submission (optional)
        setName('');
        setEmail('');
        setPassword('');
        setRestaurantName('');
        setAddress('');
        setPhoneNumber('');
        setCuisineType('');
        setOpeningHours('');
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg my-20">
                <h2 className="text-center text-2xl font-extrabold mb-5">Restaurant/Home Kitchen Sign Up</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label htmlFor="restaurantName" className="block text-sm font-medium text-gray-700">Restaurant/Home Kitchen Name</label>
                        <input
                            type="text"
                            id="restaurantName"
                            name="restaurantName"
                            value={restaurantName}
                            onChange={(e) => setRestaurantName(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">Owner's Full Name</label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="address" className="block text-sm font-medium text-gray-700">Restaurant Address</label>
                        <input
                            type="text"
                            id="address"
                            name="address"
                            value={address}
                            onChange={(e) => setAddress(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="phoneNumber" className="block text-sm font-medium text-gray-700">Phone Number</label>
                        <input
                            type="tel"
                            id="phoneNumber"
                            name="phoneNumber"
                            value={phoneNumber}
                            onChange={(e) => setPhoneNumber(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="cuisineType" className="block text-sm font-medium text-gray-700">Cuisine Type</label>
                        <input
                            type="text"
                            id="cuisineType"
                            name="cuisineType"
                            value={cuisineType}
                            onChange={(e) => setCuisineType(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <div>
                        <label htmlFor="openingHours" className="block text-sm font-medium text-gray-700">Opening Hours</label>
                        <input
                            type="text"
                            id="openingHours"
                            name="openingHours"
                            value={openingHours}
                            onChange={(e) => setOpeningHours(e.target.value)}
                            className="w-full p-3 mt-2 border border-gray-300 rounded-md"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700"
                    >
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    );
};

export default SalesSignUp;
