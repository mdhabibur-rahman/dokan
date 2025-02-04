import React, { useState } from 'react';

const CustomerSignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  // Handle form input change
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // Form submission handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');
    setIsLoading(true);

    // Validate form
    if (!formData.fullName || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
      setErrorMessage('Please fill in all fields.');
      setIsLoading(false);
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setErrorMessage("Passwords don't match.");
      setIsLoading(false);
      return;
    }

    if (formData.password.length < 6) {
      setErrorMessage('Password should be at least 6 characters long.');
      setIsLoading(false);
      return;
    }

    // Here you would send the data to your server (API call).
    // For now, just simulate a successful sign-up:
    setTimeout(() => {
      alert('Sign Up Successful');
      setIsLoading(false);
      // Redirect to homepage or login page after successful signup
      window.location.href = '/'; // Redirect to homepage
    }, 2000);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 py-6 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md w-full bg-white p-8 rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Customer Sign Up</h2>

        {/* Error Message */}
        {errorMessage && (
          <div className="bg-red-100 text-red-700 text-sm font-medium p-2 rounded-md my-4">
            {errorMessage}
          </div>
        )}

        {/* Sign Up Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              name="fullName"
              id="fullName"
              value={formData.fullName}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your full name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your email address"
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your phone number"
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">
              Password
            </label>
            <input
              type="password"
              name="password"
              id="password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Your password"
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">
              Confirm Password
            </label>
            <input
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              placeholder="Confirm your password"
            />
          </div>

          {/* Submit Button */}
          <div>
            <button
              type="submit"
              disabled={isLoading}
              className={`w-full py-2 px-4 bg-indigo-600 text-white rounded-md focus:ring-2 focus:ring-indigo-500 focus:ring-opacity-50 ${
                isLoading ? 'bg-gray-400' : 'hover:bg-indigo-700'
              }`}
            >
              {isLoading ? 'Signing Up...' : 'Sign Up'}
            </button>
          </div>
        </form>

        <div className="mt-4 text-center text-sm text-gray-600">
          <p>
            Already have an account?{' '}
            <a href="/login" className="text-indigo-600 hover:text-indigo-800">
              Login here
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CustomerSignUp;
