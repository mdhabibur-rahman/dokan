import React, { useState, useEffect } from 'react';
import Carousel from '../Component/Carousel/Carousel';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { useNavigate } from 'react-router-dom';


const Home = () => {
    const navigate = useNavigate();

    const handleCardClick = (id) => {
        navigate(`/food/${id}`); // Redirect to details page
    };
    const [rating, setRating] = useState(0);
    const [minPrice, setMinPrice] = useState(0);
    const [maxPrice, setMaxPrice] = useState(1000); // Set an initial max price range
    const [searchLocation, setSearchLocation] = useState(''); // Store search location
    const [filteredProducts, setFilteredProducts] = useState([]); // Store filtered products
    const [expandedDescription, setExpandedDescription] = useState(null);
    const [isSmallScreen, setIsSmallScreen] = useState(false); // Track screen size for mobile behavior

    const foodItems = [
        { id: 1, name: 'Mutton Biriyani', description: 'Delicious mutton biriyani made with aromatic spices, cooked to perfection for a flavorful experience.', price: 20, image: '/src/assets/img/food/mutton-biriyani-full-chinigura-mutton-1-1.jpg' },
        { id: 2, name: 'Vegetable Pizza', description: 'Freshly baked pizza loaded with healthy veggies like bell peppers, onions, olives, and mushrooms for the perfect balance of flavors.', price: 12, image: '/src/assets/img/food/vegatable_pizza.jpg' },
        { id: 3, name: 'Chicken Tikka', description: 'Juicy and flavorful chicken tikka marinated with yogurt and spices, grilled to perfection with a smoky taste.', price: 18, image: '/src/assets/img/food/chicken-tikka.jpg' },
        { id: 4, name: 'Pasta Alfredo', description: 'Creamy and rich Alfredo pasta made with fresh cream, parmesan, and a touch of garlic for an indulgent meal.', price: 16, image: '/src/assets/img/food/pasta-alfredo.jpg' },
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

    // Function to truncate description to exactly 40 characters
    const truncateDescription = (description, maxLength) => {
        if (description.length > maxLength) {
            return description.substring(0, maxLength) + '...';
        }
        return description;
    };

    // Toggle expanded description for each food item
    const toggleDescription = (id) => {
        setExpandedDescription(expandedDescription === id ? null : id);
    };

    // Check screen size on load and resize
    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth <= 640) { // Tailwind's `sm` breakpoint (640px)
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        window.addEventListener('resize', handleResize);
        handleResize(); // Check on initial load

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <>
            <Carousel />

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
                <div className="w-64 bg-gray-100 p-5 rounded-lg shadow-md mr-8 hidden 2xl:block">
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
                </div>

                {/* Main Content */}
                <div className="flex-1">
                    <h1 className="text-center font-extrabold text-3xl mt-5">All Products</h1>

                    {/* Display All or Filtered Products */}
                    <div className="flex items-center justify-center mt-10">
                    <div className="grid grid-cols-1 xs:grid-cols-2 sm:grid-cols-3 2xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-15">
            {(filteredProducts.length > 0 ? filteredProducts : foodItems).map((food) => (
                <div
                    key={food.id}
                    onClick={() => handleCardClick(food.id)} // Navigate on click
                    className="cursor-pointer card bg-base-100 shadow-xl w-full sm:w-50 md:w-60 lg:w-72 max-w-xs mx-auto h-auto sm:h-96 md:h-auto"
                >
                    <figure className="px-10 pt-10">
                        <img src={food.image} alt={food.name} className="rounded-lg w-full h-full object-cover" />
                    </figure>
                    <div className="card-body items-center text-center">
                        <h2 className="card-title text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl">{food.name}</h2>
                        <p className="text-xs sm:text-[8px] md:text-[10px] lg:text-[12px] xl:text-xs">{truncateDescription(food.description, 40)}</p>
                        <div className="card-actions">
                            <button className="w-full py-1 px-1 sm:py-2 sm:px-4 text-[12px] sm:text-[20px] bg-indigo-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700">
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
