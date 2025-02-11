import React, { useState } from 'react';
import { FaEllipsisV } from 'react-icons/fa';

const More = ({ toggleModal }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);

    return (
        <div className="relative flex items-center space-x-2">
            <a href="">
                <img
                    src="https://www.w3schools.com/w3images/avatar2.png"
                    alt="Profile"
                    className="rounded-full w-10 h-10 object-cover ml-2"
                />
            </a>
            <button
                className="text-xl text-gray-600 lg:hidden"
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
            >
                <FaEllipsisV />
            </button>

            {/* Dropdown Menu */}
            <div
                className={`absolute right-[-8px] bg-white shadow-lg rounded-b-md mt-60 w-48 p-2 flex flex-col transition-all duration-700 ease-in-out ${isDropdownOpen
                    ? 'opacity-100 transform translate-y-0 scale-100 blur-none'
                    : 'opacity-0 transform translate-y-4 scale-95 blur-sm pointer-events-none'
                    }`}
            >
                <a href="/" className="py-2 px-4 hover:bg-gray-200 rounded-md">Home</a>
                <a href="/about" className="py-2 px-4 hover:bg-gray-200 rounded-md">About Us</a>
                <a href="/login" className="py-2 px-4 hover:bg-gray-200 rounded-md">Login</a>
                <a
                    className="py-2 px-4 hover:bg-gray-200 rounded-md"
                    onClick={toggleModal}
                >
                    Sign Up
                </a>
            </div>
        </div>
    );
};

export default More;
