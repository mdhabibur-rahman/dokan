import React, { useState, useEffect } from 'react';
import { FaBars, FaRegUser, FaMotorcycle, FaStoreAlt, FaEllipsisV } from 'react-icons/fa';

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainElementTop, setMainElementTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State for managing mobile menu toggle
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // State for managing dropdown visibility

  const handleScroll = () => {
    if (window.scrollY >= mainElementTop) {
      setIsNavbarVisible(true);
    } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
      setIsNavbarVisible(false);
    } else if (window.scrollY < lastScrollY) {
      setIsNavbarVisible(true);
    }

    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    const mainElement = document.querySelector('main');
    if (mainElement) {
      setMainElementTop(mainElement.offsetTop);
    }

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  const toggleModal = () => setShowModal(!showModal);

  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    if (role === 'customer') {
      window.location.href = '/customer_signup';
    } else if (role === 'delivery') {
      window.location.href = '/delivery_man_signup';
    } else if (role === 'restaurant') {
      window.location.href = '/sales_singup';
    }
  };

  const handlePriceChange = (e, type) => {
    if (type === 'min') {
      setMinPrice(e.target.value);
    } else if (type === 'max') {
      setMaxPrice(e.target.value);
    }
  };

  const handleRatingClick = (star) => {
    setRating(prevRating => prevRating === star ? 0 : star);
  };
  

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };
  

  return (
    <div
      className={`navbar sticky top-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="navbar-start flex items-center">
        {/* Hamburger menu for small screens */}
        <button className="lg:hidden text-2xl sm:text-lg ml-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <FaBars />
        </button>

        {/* Brand Name wrapped in a span */}
        <span className="btn btn-ghost ml-2 text-xl text-[17px] lg:text-[20px]">
          <a href='/'>ZOOMEATS</a>
        </span>
      </div>

      {/* Center menu */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About us</a></li>
        </ul>
      </div>

      {/* Navbar End with Login, Sign Up, and Profile Icon */}
      <div className="navbar-end flex items-center space-x-4">
        <div className="hidden lg:flex">
          <button className="btn btn-ghost text-sm"><a href="/login">Login</a></button>
          <button className="btn btn-ghost text-sm" onClick={toggleModal}>Sign Up</button>
        </div>
        <div className="relative flex items-center space-x-2">
          <a href="">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png"
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover ml-2"
            />
          </a>
          {/* Three-dot button */}
          <button
            className="text-xl text-gray-600"
            onClick={() => setIsDropdownOpen(!isDropdownOpen)} // Toggle dropdown visibility
          >
            <FaEllipsisV />
          </button>

          {/* Dropdown Menu */}
          {isDropdownOpen && (
            <div className="absolute right-[-8px] bg-white shadow-lg rounded-b-md mt-60 w-48 p-2 flex flex-col">
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
          )}
        </div>
      </div>

      {/* Modal for Role Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 mt-60">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96 animate__animated animate__fadeIn animate__faster">
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
              onClick={toggleModal}
            >
              Close
            </button>
          </div>
        </div>
      )}

      {/* Mobile Menu with Filters for small screens */}
      {isMenuOpen && (
        <div className="lg:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-4 rounded-b-lg">
          {/* Compact Filters Section */}
          <div className="space-y-4">

            {/* Sort By Section */}
            <div>
              <h3 className="font-medium text-lg">Sort By</h3>
              <select className="w-full p-2 border rounded-md text-sm">
                <option>Relevance</option>
                <option>Fastest Delivery</option>
                <option>Distance</option>
              </select>
            </div>

            {/* Price Range Section */}
            <div>
              <h3 className="font-medium text-lg">Price Range</h3>
              <div className="flex justify-between text-sm">
                <span>Min: ${minPrice}</span>
                <span>Max: ${maxPrice}</span>
              </div>
              <input
                type="range"
                min="0"
                max="1000"
                value={minPrice}
                onChange={(e) => handlePriceChange(e, 'min')}
                className="w-full mt-2"
              />
              <input
                type="range"
                min="0"
                max="1000"
                value={maxPrice}
                onChange={(e) => handlePriceChange(e, 'max')}
                className="w-full mt-2"
              />
            </div>

            {/* Rating Section */}
            <div>
              <h3 className="font-medium text-lg">Rating</h3>
              <div className="flex justify-start space-x-1 text-sm">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    onClick={() => handleRatingClick(star)}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill={star <= rating ? "gold" : "gray"}
                    className="w-5 h-5 cursor-pointer"
                  >
                    <path d="M10 15.27l4.18 2.73-1.64-5.1 4.18-3.64-5.2-.43L10 .6l-2.52 7.23-5.2.43 4.18 3.64-1.64 5.1L10 15.27z" />
                  </svg>
                ))}
              </div>
            </div>

            {/* Search Section */}
            <div>
              <h3 className="font-medium text-lg">Search</h3>
              <input
                type="text"
                className="w-full p-2 border rounded-md mt-2 text-sm"
                placeholder="Search for cuisines"
                value={searchQuery}
                onChange={handleSearchChange}
              />
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
