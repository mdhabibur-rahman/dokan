import React, { useState, useEffect } from 'react';
import { FaUserCircle } from 'react-icons/fa'; // Import the user profile icon
import { FaRegUser, FaMotorcycle, FaStoreAlt } from 'react-icons/fa'; // Icons for roles

const Navbar = () => {
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainElementTop, setMainElementTop] = useState(0);
  const [showModal, setShowModal] = useState(false); // State to control modal visibility
  const [selectedRole, setSelectedRole] = useState(''); // State to store the selected role

  // Function to handle scroll events
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

  // Hook to attach scroll event listener when component mounts
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

  // Open and close modal
  const toggleModal = () => setShowModal(!showModal);

  // Handle role selection
  const handleRoleSelect = (role) => {
    setSelectedRole(role);
    // Here you can redirect to the specific page based on the role
    if (role === 'customer') {
      window.location.href = '/customer_signup'; // Redirect to customer sign-up page
    } else if (role === 'delivery') {
      window.location.href = '/delivery_man_signup'; // Redirect to delivery man sign-up page
    } else if (role === 'restaurant') {
      window.location.href = '/sales_singup'; // Redirect to restaurant owner sign-up page
    }
  };

  return (
    <div
      className={`navbar sticky top-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href='/'>ZOOMEATS</a>
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
        {/* Login and Sign Up buttons */}
        <button className="btn btn-ghost text-sm"><a href="/login">Login</a></button>
        <button className="btn btn-ghost text-sm" onClick={toggleModal}>Sign Up</button>

        {/* Profile Icon (with Demo Image) */}
        <div className="relative">
          <a href="">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png" // Demo image for the profile (replace with your own image URL)
              alt="Profile"
              className="rounded-full w-10 h-10 object-cover ml-2" // Make the image circular
            />
          </a>
        </div>
      </div>

      {/* Modal for Role Selection */}
      {showModal && (
        <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50 mt-60">
          <div className="bg-white p-8 rounded-xl shadow-lg w-96 animate__animated animate__fadeIn animate__faster">
            <h3 className="text-2xl font-semibold text-center mb-6 text-gray-700">Select your Profile Role</h3>
            <div className="flex justify-between mb-6">
              {/* Customer Option */}
              <button
                className="flex flex-col items-center w-28 p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition ease-in-out duration-300"
                onClick={() => handleRoleSelect('customer')}
              >
                <FaRegUser className="text-3xl mb-2 text-blue-500" />
                <span className="text-sm font-medium">Customer</span>
              </button>

              {/* Delivery Man Option */}
              <button
                className="flex flex-col items-center w-28 p-4 border-2 border-gray-300 rounded-xl hover:bg-gray-100 transition ease-in-out duration-300"
                onClick={() => handleRoleSelect('delivery')}
              >
                <FaMotorcycle className="text-3xl mb-2 text-yellow-500" />
                <span className="text-sm font-medium">Delivery</span>
              </button>

              {/* Restaurant Owner Option */}
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
              onClick={toggleModal} // Close the modal when clicked
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
