import React, { useState } from 'react';
import { FaSearch } from 'react-icons/fa'; // Import the search icon from react-icons

const Navbar = () => {
  const [showSearch, setShowSearch] = useState(false);

  // Toggle the visibility of the search input
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  return (
    <div className="navbar bg-base-100">
      <div className="navbar-start">
        <a className="btn btn-ghost text-xl">DOKAN</a>
      </div>

      {/* Center menu - removed dropdown */}
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          <li><a>Home</a></li>
          <li><a>About us</a></li>
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
        <button className="btn btn-ghost text-sm">Login</button>
        <button className="btn btn-ghost text-sm">Sign Up</button>
      </div>
    </div>
  );
};

export default Navbar;
