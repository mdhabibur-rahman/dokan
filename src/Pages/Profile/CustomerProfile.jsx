import React, { useState, useEffect } from 'react';
import { FaHistory, FaTruck } from 'react-icons/fa';

const CustomerProfile = () => {
  const [customerData, setCustomerData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  });

  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(customerData);
  const [selectedSection, setSelectedSection] = useState('orderHistory');

  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        date: '2025-02-01',
        status: 'Delivered',
        items: [
          { name: 'Pizza', quantity: 2, price: 12.99 },
          { name: 'Pasta', quantity: 1, price: 8.99 },
        ],
        totalPrice: 34.97,
      },
      {
        id: 2,
        date: '2025-02-03',
        status: 'Processing',
        items: [
          { name: 'Burger', quantity: 1, price: 6.99 },
          { name: 'Fries', quantity: 1, price: 2.99 },
        ],
        totalPrice: 9.98,
      },
      {
        id: 3,
        date: '2025-02-05',
        status: 'On the way',
        items: [
          { name: 'Burger', quantity: 1, price: 6.99 },
          { name: 'Fries', quantity: 1, price: 2.99 },
        ],
        totalPrice: 9.98,
      },
      {
        id: 4,
        date: '2025-02-06',
        status: 'Pending',
        items: [
          { name: 'Salad', quantity: 2, price: 5.99 },
        ],
        totalPrice: 11.98,
      },
    ];

    setOrders(mockOrders);
  }, []);

  const handleCancelOrder = (orderId) => {
    setOrders((prevOrders) =>
      prevOrders.map((order) =>
        order.id === orderId ? { ...order, status: 'Cancelled' } : order
      )
    );
    alert('Order has been cancelled.');
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setCustomerData(formData);
    setIsEditing(false);
    alert('Profile Updated');
  };

  const handleCancel = () => {
    setFormData(customerData);
    setIsEditing(false);
  };

  const filterOrdersByStatus = (status) => {
    return orders.filter(order => order.status === status);
  };

  return (
    <div className="relative min-h-screen flex justify-center items-center p-6">
      {/* Video Background */}
      <video 
        autoPlay 
        loop 
        muted 
        className="absolute top-0 left-0 w-full h-full object-cover opacity-30 z-[-1]"
      >
        <source src="https://www.w3schools.com/w3images/forest.mp4" type="video/mp4" />
      </video>

      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg overflow-hidden p-8 transform transition-all duration-300 ease-in-out hover:scale-105 bg-opacity-80 backdrop-blur-lg">
        
        {/* Profile Section */}
        <div className="text-center mb-8">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Profile"
            className="rounded-full w-32 h-32 mx-auto mb-4 shadow-xl"
          />
          {/* Profile Info */}
          <div className="space-y-4">
            <div className="text-xl font-semibold text-gray-800">
              {isEditing ? (
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{formData.fullName}</p>
              )}
            </div>
            <div className="text-gray-600">
              {isEditing ? (
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{formData.email}</p>
              )}
            </div>
            <div className="text-gray-600">
              {isEditing ? (
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border-b border-gray-300 p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              ) : (
                <p>{formData.phone}</p>
              )}
            </div>
          </div>

          {/* Edit/Save Buttons */}
          <div className="mt-6">
            {isEditing ? (
              <div className="flex justify-center space-x-4">
                <button
                  onClick={handleSave}
                  className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="px-6 py-3 bg-gray-500 text-white rounded-full shadow-xl hover:bg-gray-600 transition-all"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="px-6 py-3 bg-blue-600 text-white rounded-full shadow-xl hover:bg-blue-700 transition-all"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>

        {/* Order Section with Icons */}
        <div className="flex justify-center space-x-10 mb-8">
          <button
            onClick={() => setSelectedSection('orderHistory')}
            className={`p-4 rounded-full transition-all duration-300 ${
              selectedSection === 'orderHistory'
                ? 'bg-blue-600 text-white shadow-2xl scale-110'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
            }`}
          >
            <FaHistory size={30} />
          </button>
          <button
            onClick={() => setSelectedSection('currentOrder')}
            className={`p-4 rounded-full transition-all duration-300 ${
              selectedSection === 'currentOrder'
                ? 'bg-blue-600 text-white shadow-2xl scale-110'
                : 'bg-gray-300 text-gray-600 hover:bg-gray-400'
            }`}
          >
            <FaTruck size={30} />
          </button>
        </div>

        {/* Orders List */}
        <div className="mt-8">
          <h3 className="text-3xl font-semibold text-gray-800 mb-6">
            {selectedSection === 'orderHistory' ? 'Order History' : 'Current Orders'}
          </h3>

          {selectedSection === 'orderHistory' &&
            orders.filter(order => order.status === 'Delivered').map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-xl shadow-md mb-6 transform hover:scale-105">
                <p className="text-lg font-semibold text-gray-800">Order ID: {order.id}</p>
                <p className="text-gray-600">Date: {order.date}</p>
                <p className="text-gray-600">Total: ${order.totalPrice}</p>
                <ul className="list-disc pl-6 mt-2">
                  {order.items.map((item, index) => (
                    <li key={index} className="text-gray-700">
                      {item.name} (x{item.quantity}) - ${item.price}
                    </li>
                  ))}
                </ul>
              </div>
            ))}

          {selectedSection === 'currentOrder' &&
            orders.filter(order => ['Processing', 'On the way', 'Pending'].includes(order.status)).map((order) => (
              <div key={order.id} className="bg-white p-6 rounded-xl shadow-md mb-6 transform hover:scale-105">
                <p className="text-lg font-semibold text-gray-800">Order ID: {order.id}</p>
                <p className="text-gray-600">Date: {order.date}</p>
                <p className="text-gray-600">Status:
                  <span
                    className={`${order.status === 'Delivered' ? 'text-green-600' :
                      order.status === 'Processing' ? 'text-yellow-600' :
                        order.status === 'On the way' ? 'text-blue-600' :
                          order.status === 'Pending' ? 'text-gray-600' :
                            'text-red-600'} font-semibold`}
                  >
                    {order.status}
                  </span>
                </p>
                <p className="text-gray-600">Total: ${order.totalPrice}</p>

                {/* Show cancel option if the order is Processing, On the way, or Pending */}
                {(order.status === 'Processing' || order.status === 'On the way' || order.status === 'Pending') && (
                  <button
                    onClick={() => handleCancelOrder(order.id)}
                    className="mt-4 py-2 px-4 bg-red-600 text-white rounded-full hover:bg-red-700 transition-all"
                  >
                    Cancel Order
                  </button>
                )}
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default CustomerProfile;
