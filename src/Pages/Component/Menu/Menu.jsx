import React, { useState } from 'react';
import { FaBars } from 'react-icons/fa';
import { useLocation } from 'react-router-dom'; // Import to check the current route

const Menu = ({ minPrice, setMinPrice, maxPrice, setMaxPrice, rating, setRating, searchQuery, setSearchQuery }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false); // State to toggle the menu
  const location = useLocation(); // Use location to track the current route

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

  const isSalesProfilePage = location.pathname === '/salesprofile'; // Check if we are on the salesprofile page
  const isDeliveryManProfilePage = location.pathname === '/delivery_man_Profile'; // Check if we are on the delivery man profile page
  const isCustomerProfilePage = location.pathname === '/customer_profile'; // Check if we are on the customer profile page

  return (
    <>
      {/* Only show the hamburger menu icon if we are NOT on the /customer_profile page */}
      {!isCustomerProfilePage && (
        <button
          className="2xl:hidden text-2xl sm:text-lg ml-2"
          onClick={() => setIsMenuOpen(!isMenuOpen)} // Toggle menu visibility
        >
          <FaBars />
        </button>
      )}

      {/* Show Sidebar for /salesprofile */}
      {isSalesProfilePage && isMenuOpen && (
        <div className="w-64 h-auto bg-white p-10 shadow-md fixed top-20 left-0 z-20">
          <ul>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Orders</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Menu Management</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Earnings</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Reviews</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Settings</li>
          </ul>
        </div>
      )}

      {/* Show Sidebar for /delivery_man_Profile */}
      {isDeliveryManProfilePage && isMenuOpen && (
        <div className="w-64 h-auto bg-white p-10 shadow-md fixed top-20 left-0 z-20">
          <ul>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Dashboard</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Current Deliveries</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Past Deliveries</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Earnings</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Reviews</li>
            <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Settings</li>
          </ul>
        </div>
      )}

      {/* If not on /salesprofile or /delivery_man_Profile, show the mobile filter menu when the menu icon is clicked */}
      {!isSalesProfilePage && !isDeliveryManProfilePage && isMenuOpen && (
        <div className="2xl:hidden absolute top-16 left-0 w-full bg-white shadow-lg z-10 p-4 rounded-b-lg">
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
    </>
  );
};

export default Menu;
