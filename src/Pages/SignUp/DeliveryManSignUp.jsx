import React, { useState } from 'react';

const DeliveryManSignUp = () => {
  // State for form fields
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [location, setLocation] = useState('');
  const [vehicleType, setVehicleType] = useState('');
  const [password, setPassword] = useState('');
  
  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // Log the data or send to backend for further processing
    console.log('Name:', name);
    console.log('Email:', email);
    console.log('Phone:', phone);
    console.log('Location:', location);
    console.log('Vehicle Type:', vehicleType);
    console.log('Password:', password);

    // Reset form fields
    setName('');
    setEmail('');
    setPhone('');
    setLocation('');
    setVehicleType('');
    setPassword('');
  };

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md p-8 bg-white rounded-lg shadow-lg my-20">
        <h2 className="text-center text-2xl font-extrabold mb-5">Delivery Man Sign Up</h2>
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Full Name */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-gray-700">Full Name</label>
            <input
              type="text"
              id="name"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Email */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              id="email"
              name="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Phone Number */}
          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">Phone Number</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Location */}
          <div>
            <label htmlFor="location" className="block text-sm font-medium text-gray-700">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Vehicle Type */}
          <div>
            <label htmlFor="vehicleType" className="block text-sm font-medium text-gray-700">Vehicle Type</label>
            <select
              id="vehicleType"
              name="vehicleType"
              value={vehicleType}
              onChange={(e) => setVehicleType(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            >
              <option value="">Select Vehicle Type</option>
              <option value="Bike">Bike</option>
              <option value="Car">Car</option>
              <option value="Scooter">Scooter</option>
              <option value="Truck">Truck</option>
            </select>
          </div>

          {/* Password */}
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              id="password"
              name="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md"
              required
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 px-4 bg-indigo-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 hover:bg-indigo-700"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
};

export default DeliveryManSignUp;
