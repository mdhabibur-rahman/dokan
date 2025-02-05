import React, { useState } from 'react';
import Carousel from '../Carousel/Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';

const Home = () => {
    const [rating, setRating] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000); // Set an initial max price range
    const [searchLocation, setSearchLocation] = useState(''); // Store search location
    const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products

    // Example food data (this would come from a backend in a real app)
    const foodItems = [
        { id: 1, name: 'Mutton Biriyani', description: 'Delicious mutton biriyani made with aromatic spices.', price: 20, image: '/src/assets/img/food/mutton-biriyani-full-chinigura-mutton-1-1.jpg' },
        { id: 2, name: 'Veg Cheeseburger', description: 'A delicious and cheesy veg burger for a delightful meal.', price: 15, image: '/src/assets/img/food/Secret-Veg-Cheeseburgers-c981dd6.jpg' },
        { id: 3, name: 'Vegetable Pizza', description: 'Freshly baked pizza loaded with healthy veggies.', price: 12, image: '/src/assets/img/food/vegatable_pizza.jpg' },
    ];

    // Function to handle rating click
    const handleRatingClick = (rate) => {
        if (rate === rating) {
            setRating(0);
        } else {
            setRating(rate);
        }
    };

    // Handle changes in price range
    const handlePriceChange = (e, type) => {
        const value = parseInt(e.target.value);
        if (type === 'min') {
            setMinPrice(value);
        } else if (type === 'max') {
            setMaxPrice(value);
        }
    };

    // Handle search location input change
    const handleLocationChange = (e) => {
        setSearchLocation(e.target.value);
    };

    // Handle search submit (this would trigger actual filtering logic)
    const handleSearchSubmit = () => {
        const filtered = foodItems.filter(item =>
            item.name.toLowerCase().includes(searchLocation.toLowerCase()) // Example filter based on food name
        );
        setFilteredProducts(filtered);
    };

    return (
        <>
            <Carousel></Carousel>

            {/* Beautiful Search Bar Below Carousel */}
            <div className="w-full p-5 flex justify-center items-center mt-6 rounded-lg shadow-lg">
                <div className="relative w-2/3">
                    {/* Search Bar */}
                    <input
                        type="text"
                        placeholder="Search for food in your area..."
                        value={searchLocation}
                        onChange={handleLocationChange}
                        className="w-full p-2 pl-10 pr-4 rounded-full text-base sm:text-lg border-2 border-gray-400 focus:border-blue-300 focus:outline-none focus:ring-2 focus:ring-blue-300 transition-all ease-in-out duration-300 placeholder:text-sm sm:placeholder:text-base"
                    />
                    {/* Location Icon on Right */}
                    <span className="absolute right-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-sm sm:text-xl">
                        <i className="fas fa-map-marker-alt"></i>
                    </span>
                </div>
                <button
                    onClick={handleSearchSubmit}
                    className="lg:ml-4 ml-2 px-4 py-2 sm:px-8 sm:py-2 bg-indigo-600 text-white rounded-full focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700 text-sm sm:text-base"
                >
                    Search
                </button>
            </div>




            <main className="flex p-8">
                {/* Sidebar for Filters - Hidden on Small Devices */}
                <div className="w-64 bg-gray-100 p-5 rounded-lg shadow-md mr-8 hidden md:block">
                    <h2 className="text-2xl font-semibold mb-5">Filters</h2>

                    {/* Sort By Section */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Sort By</h3>
                        <select className="w-full p-2 border rounded">
                            <option>Relevance</option>
                            <option>Fastest Delivery</option>
                            <option>Distance</option>
                        </select>
                    </div>

                    {/* Quick Filters */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Quick Filters</h3>
                        <div className="space-y-2">
                            <div>
                                <h4 className="text-sm font-medium">Cuisines</h4>
                                <input type="text" className="w-full p-2 border rounded mt-2" placeholder="Search for cuisines" />
                            </div>
                            <div>
                                <h4 className="text-sm font-medium">Price Range</h4>
                                <div className="flex justify-between">
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
                            <div>
                                <h4 className="text-sm font-medium">Rating</h4>
                                {/* Rating Stars */}
                                <div className="flex">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <svg
                                            key={star}
                                            onClick={() => handleRatingClick(star)} // Update rating when clicked
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 20 20"
                                            fill={star <= rating ? "gold" : "gray"} // Fill gold if selected, else gray
                                            className="w-6 h-6 cursor-pointer"
                                        >
                                            <path d="M10 15.27l4.18 2.73-1.64-5.1 4.18-3.64-5.2-.43L10 .6l-2.52 7.23-5.2.43 4.18 3.64-1.64 5.1L10 15.27z" />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Search for Cuisines */}
                    <div className="mb-6">
                        <h3 className="font-medium mb-2">Search</h3>
                        <input
                            type="text"
                            placeholder="Search for cuisines"
                            className="w-full p-2 border rounded"
                        />
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-center font-extrabold text-3xl mt-5">All Products</h1>

                    {/* Display All or Filtered Products */}
                    <div className="flex items-center justify-center mt-10">
                        <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 2xl:grid-cols-3 gap-4 sm:gap-5 lg:gap-20">
                            {(filteredProducts.length > 0 ? filteredProducts : foodItems).map((food) => (
                                <div key={food.id} className="card bg-base-100 lg:w-96 shadow-xl md:w-50">
                                    <figure className="px-10 pt-10">
                                        <img
                                            src={food.image}
                                            alt={food.name}
                                            className="rounded-xl"
                                        />
                                    </figure>
                                    <div className="card-body items-center text-center">
                                        <h2 className="card-title">{food.name}</h2>
                                        <p>{food.description}</p>
                                        <div className="card-actions">
                                            <button className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700">
                                                Buy Now
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                </div>
            </main>
        </>
    );
};

export default Home;
