import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { FaHome, FaShoppingCart } from 'react-icons/fa'; // Import icons

const foodItems = [
    { id: 1, name: 'Mutton Biriyani', description: 'Delicious mutton biriyani made with aromatic spices.', price: 20, image: '/src/assets/img/food/mutton-biriyani-full-chinigura-mutton-1-1.jpg', restaurant: 'Royal Kitchen' },
    { id: 2, name: 'Vegetable Pizza', description: 'Freshly baked pizza loaded with healthy veggies.', price: 12, image: '/src/assets/img/food/vegatable_pizza.jpg', restaurant: 'Pizza House' },
    { id: 3, name: 'Chicken Tikka', description: 'Juicy and flavorful chicken tikka marinated with yogurt.', price: 18, image: '/src/assets/img/food/chicken-tikka.jpg', restaurant: 'Spice Grill' },
    { id: 4, name: 'Pasta Alfredo', description: 'Creamy Alfredo pasta made with fresh cream and parmesan.', price: 16, image: '/src/assets/img/food/pasta-alfredo.jpg', restaurant: 'Pasta Corner' },
];

const FoodDetails = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const food = foodItems.find(item => item.id === parseInt(id));

    if (!food) {
        return <h2 className="text-center mt-10 text-xl font-bold">Food item not found!</h2>;
    }

    return (
        <div className="max-w-4xl mx-auto p-6 shadow-2xl rounded-xl mt-10 bg-white mb-10 min-h-[650px] flex flex-col justify-between">

            {/* Enhanced Image with Parallax and Hover Animation */}
            <img src={food.image} alt={food.name} className="w-full h-96 object-cover rounded-lg shadow-xl transition-transform transform hover:scale-105 hover:rotate-1 hover:translate-x-1 hover:translate-y-1 duration-500 ease-in-out" />

            {/* Food Details */}
            <h1 className="text-4xl font-bold mt-4 text-gray-800">{food.name}</h1>
            <p className="text-gray-600 mt-2 text-lg">{food.description}</p>
            <p className="mt-4 text-lg"><strong>Price:</strong> ${food.price}</p>
            <p className="mt-2 text-lg"><strong>Restaurant:</strong> {food.restaurant}</p>

            {/* Buttons with Icon Rotation Animation */}
            <div className="flex justify-between mt-8 space-x-6">

                {/* Go Back Home Button with Icon Rotation */}
                <div className="relative group">
                    <button
                        onClick={() => navigate('/')}
                        className="px-6 py-3 bg-gradient-to-r from-blue-500 to-blue-600 text-white rounded-lg shadow-lg group-hover:translate-x-1 transform transition-all duration-300 ease-in-out flex items-center justify-center"
                    >
                        <FaHome className="text-2xl transition-transform group-hover:rotate-12 duration-300" /> {/* Home Icon with rotation */}
                    </button>
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-gradient-to-r from-blue-400 to-blue-600 text-sm py-2 px-4 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-2 animate__animated animate__bounceIn animate__faster">
                        Go Back Home
                    </div>
                </div>

                {/* Order Now Button with Icon Rotation */}
                <div className="relative group">
                    <button
                        onClick={() => console.log("Order placed for", food.name)}
                        className="px-6 py-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-lg shadow-lg group-hover:translate-x-1 transform transition-all duration-300 ease-in-out flex items-center justify-center"
                    >
                        <FaShoppingCart className="text-2xl transition-transform group-hover:rotate-12 duration-300" /> {/* Cart Icon with rotation */}
                    </button>
                    <div className="absolute bottom-16 left-1/2 transform -translate-x-1/2 text-white bg-gradient-to-r from-green-400 to-green-600 text-sm py-2 px-4 rounded-md shadow-xl opacity-0 group-hover:opacity-100 transition-all duration-300 ease-in-out translate-y-2 animate__animated animate__bounceIn animate__faster">
                        Order Now
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FoodDetails;
