import React, { useState, useEffect } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mainElementTop, setMainElementTop] = useState(0);

  // Function to handle scroll events
  const handleScroll = () => {
    // Check if the page has scrolled past the <main> tag
    if (window.scrollY >= mainElementTop) {
      setIsNavbarVisible(true); // Navbar should be visible when past <main>
    } else if (window.scrollY > lastScrollY && window.scrollY > 100) {
      // Scroll down - Hide navbar
      setIsNavbarVisible(false);
    } else if (window.scrollY < lastScrollY) {
      // Scroll up - Show navbar
      setIsNavbarVisible(true);
    }

    // Update last scroll position
    setLastScrollY(window.scrollY);
  };

  // Hook to attach scroll event listener when component mounts
  useEffect(() => {
    // Find the position of the <main> tag
    const mainElement = document.querySelector('main');
    if (mainElement) {
      setMainElementTop(mainElement.offsetTop);
    }

    window.addEventListener('scroll', handleScroll);

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollY]);

  // Toggle the visibility of the search input
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div
      className={`navbar sticky top-0 z-10 bg-white bg-opacity-75 backdrop-blur-sm transition-transform duration-300 ${isNavbarVisible ? 'translate-y-0' : '-translate-y-full'
        }`}
    >
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl" href='/'>ZOOMEATS</a>
      </div>

      {/* Center menu - removed dropdown */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a href='/'>Home</a></li>
          <li><a href='/about'>About us</a></li>
          <li><a>Contacts</a></li>
        </ul>
      </div>

      {/* Navbar End with Search Icon, Login, and Sign Up buttons */}
      <div className="navbar-end flex items-center space-x-2">
        {/* Search input and button */}
        {showSearch && (
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered input-sm w-32 mr-2" // This adds the search input
          />
        )}
        <button
          onClick={toggleSearch}
          className="btn btn-ghost"
        >
          <FaSearch className="text-xl" />
        </button>

        {/* Login and Sign Up buttons */}
        <button className="btn btn-ghost text-sm"><a href="/login">Login</a></button>
        <button className="btn btn-ghost text-sm"><a href="/singup">Sign Up</a></button>
      </div>
    </div>
  );
};

export default Navbar;
