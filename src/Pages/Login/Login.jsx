import React, { useState } from 'react';
import { FaRegUser, FaMotorcycle, FaStoreAlt } from 'react-icons/fa';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showModal, setShowModal] = useState(false); // Modal visibility state
    const [selectedRole, setSelectedRole] = useState('');

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();
        // For now, just log the form data to the console
        console.log('Email:', email);
        console.log('Password:', password);

        // Clear form fields after submission (optional)
        setEmail('');
        setPassword('');
    };

    const toggleModal = () => setShowModal(!showModal); // Toggle modal visibility

    const handleRoleSelect = (role) => {
        setSelectedRole(role);
        if (role === 'customer') {
            window.location.href = '/customer_signup';
        } else if (role === 'delivery') {
            window.location.href = '/delivery_man_signup';
        } else if (role === 'restaurant') {
            window.location.href = '/sales_signup';
        }
    };

    return (
        <div className="flex justify-center items-center min-h-screen bg-gray-100">
            <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg">
                <h2 className="text-center text-2xl font-extrabold mb-5">Login</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
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
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white p-3 mt-5 rounded-md hover:bg-blue-600"
                    >
                        Login
                    </button>
                </form>
                <div className="text-center mt-4">
                    <p className="text-sm text-gray-600">
                        Don't have an account?{' '}
                        <button
                            className="text-blue-500 hover:underline"
                            onClick={toggleModal} // Open the modal on click
                        >
                            Sign Up
                        </button>
                    </p>
                </div>
            </div>

            {/* Modal for Role Selection (Simplified) */}
            {showModal && (
                <div className="absolute bottom-64  inset-0 flex justify-center items-center z-50">
                    <div className="bg-white p-8 w-96">
                        <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">Select your Profile Role</h3>
                        <div className="flex justify-between mb-6">
                            <button
                                className="flex flex-col items-center w-28 p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition ease-in-out duration-300"
                                onClick={() => handleRoleSelect('customer')}
                            >
                                <FaRegUser className="text-3xl mb-2 text-blue-500" />
                                <span className="text-sm font-medium">Customer</span>
                            </button>

                            <button
                                className="flex flex-col items-center w-28 p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition ease-in-out duration-300"
                                onClick={() => handleRoleSelect('delivery')}
                            >
                                <FaMotorcycle className="text-3xl mb-2 text-yellow-500" />
                                <span className="text-sm font-medium">Delivery</span>
                            </button>

                            <button
                                className="flex flex-col items-center w-28 p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition ease-in-out duration-300"
                                onClick={() => handleRoleSelect('restaurant')}
                            >
                                <FaStoreAlt className="text-3xl mb-2 text-green-500" />
                                <span className="text-sm font-medium">Restaurant</span>
                            </button>
                        </div>
                        <button
                            className="w-full p-3 text-white bg-red-500 hover:bg-red-600 rounded-xl mt-4 transition ease-in-out duration-300"
                            onClick={toggleModal} // Close the modal
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Login;
