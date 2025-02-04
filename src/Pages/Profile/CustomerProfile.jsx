import React, { useState, useEffect } from 'react';

const CustomerProfile = () => {
  // Sample customer data
  const [customerData, setCustomerData] = useState({
    fullName: 'John Doe',
    email: 'johndoe@example.com',
    phone: '+1234567890',
  });

  const [orders, setOrders] = useState([]);
  const [isEditing, setIsEditing] = useState(false);
  const [formData, setFormData] = useState(customerData);

  // Fetch customer orders (can be from an API)
  useEffect(() => {
    // Mock data for orders
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
        status: 'Pending',
        items: [
          { name: 'Salad', quantity: 2, price: 5.99 },
        ],
        totalPrice: 11.98,
      },
    ];

    setOrders(mockOrders); // Set mock order data
  }, []);

  const handleCancelOrder = (orderId) => {
    // Handle the canceling of the order (make an API call or update the order status)
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

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-3xl font-semibold text-center text-gray-800 mb-6">Your Profile</h2>

        {/* Profile Picture */}
        <div className="flex justify-center mb-6">
          <img
            src="https://www.w3schools.com/w3images/avatar2.png"
            alt="Profile"
            className="rounded-full w-32 h-32 object-cover border-4 border-indigo-600"
          />
        </div>

        {/* Profile Information */}
        <div className="space-y-6">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            {isEditing ? (
              <input
                type="text"
                name="fullName"
                id="fullName"
                value={formData.fullName}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your full name"
              />
            ) : (
              <p className="text-gray-700">{formData.fullName}</p>
            )}
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            {isEditing ? (
              <input
                type="email"
                name="email"
                id="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your email"
              />
            ) : (
              <p className="text-gray-700">{formData.email}</p>
            )}
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            {isEditing ? (
              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                placeholder="Enter your phone number"
              />
            ) : (
              <p className="text-gray-700">{formData.phone}</p>
            )}
          </div>

          {/* Edit/Save Buttons */}
          <div className="mt-6 flex justify-center space-x-4">
            {isEditing ? (
              <>
                <button
                  onClick={handleSave}
                  className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
                >
                  Save Changes
                </button>
                <button
                  onClick={handleCancel}
                  className="py-2 px-6 bg-gray-400 text-white rounded-md hover:bg-gray-500"
                >
                  Cancel
                </button>
              </>
            ) : (
              <button
                onClick={() => setIsEditing(true)}
                className="py-2 px-6 bg-indigo-600 text-white rounded-md hover:bg-indigo-700"
              >
                Edit Profile
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Orders Section */}
      <div className="max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg mt-8">
        <h3 className="text-2xl font-semibold text-gray-800 mb-4">Your Orders</h3>

        {/* Orders List */}
        {orders.map((order) => (
          <div key={order.id} className="border-b py-6">
            <p className="text-gray-700">Order ID: {order.id}</p>
            <p className="text-gray-700">Date: {order.date}</p>
            <p className="text-gray-700">Status: 
              <span
                className={`${
                  order.status === 'Delivered' ? 'text-green-600' : 
                  order.status === 'Processing' ? 'text-yellow-600' :
                  order.status === 'On the way' ? 'text-blue-600' :
                  order.status === 'Cancelled' ? 'text-red-600' :
                  order.status === 'Pending' ? 'text-gray-600' : ''
                } font-semibold`}
              >
                {order.status}
              </span>
            </p>
            <p className="text-gray-700">Total Price: ${order.totalPrice}</p>

            <ul className="list-disc pl-6 mt-2">
              {order.items.map((item, index) => (
                <li key={index} className="text-gray-700">
                  {item.name} (x{item.quantity}) - ${item.price}
                </li>
              ))}
            </ul>

            {/* Show cancel option if the order is Processing, On the way, or Pending */}
            {(order.status === 'Processing' || order.status === 'On the way' || order.status === 'Pending') && (
              <div className="mt-4">
                <button
                  onClick={() => handleCancelOrder(order.id)}
                  className="py-2 px-4 bg-red-600 text-white rounded-md hover:bg-red-700"
                >
                  Cancel Order
                </button>
              </div>
            )}

            {order.status === 'Pending' && (
              <p className="mt-2 text-gray-500">Your order is still pending. You can cancel it at any time.</p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerProfile;
