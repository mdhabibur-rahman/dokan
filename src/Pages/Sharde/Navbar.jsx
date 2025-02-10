import React, { useState, useEffect } from 'react';
import { FaBars, FaRegUser, FaMotorcycle, FaStoreAlt } from 'react-icons/fa';
import Menu from '../Component/Menu/Menu';
import More from '../Component/More/More';


const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainElementTop, setMainElementTop] = useState(0);
  const [showModal, setShowModal] = useState(false);
  const [selectedRole, setSelectedRole] = useState('');
  const [minPrice, setMinPrice] = useState(0);
  const [maxPrice, setMaxPrice] = useState(1000);
  const [rating, setRating] = useState(0);
  const [searchQuery, setSearchQuery] = useState('');

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

  return (
    <div
      className={`navbar sticky top-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="navbar-start flex items-center">
        <Menu
          minPrice={minPrice}
          setMinPrice={setMinPrice}
          maxPrice={maxPrice}
          setMaxPrice={setMaxPrice}
          rating={rating}
          setRating={setRating}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        {/* Brand Name */}
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

      {/* Navbar End */}
      <div className="navbar-end flex items-center space-x-4">
        <div className="hidden lg:flex">
          <button className="btn btn-ghost text-sm"><a href="/login">Login</a></button>
          <button className="btn btn-ghost text-sm" onClick={toggleModal}>Sign Up</button>
        </div>

        {/* Use the DropdownMenu component */}
        <More toggleModal={toggleModal} />
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
    </div>
  );
};

export default Navbar;
