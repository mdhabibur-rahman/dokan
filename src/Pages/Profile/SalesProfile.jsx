const SalesProfile = () => {
  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-64 h-auto bg-white p-6 sm:p-8 shadow-md hidden lg:block">
        <ul>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Orders</li>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Menu Management</li>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Earnings</li>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Reviews</li>
          <li className="text-[8px] sm:text-lg mb-4 hover:text-blue-500 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 sm:p-8">

        {/* Profile Header */}
        <div className="flex items-center mb-6 sm:mb-8">
          {/* Demo Profile Picture */}
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-300 mr-4 sm:mr-6">
            <img
              src="https://www.w3schools.com/w3images/avatar2.png" // Demo image URL
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-[18px] sm:text-3xl font-semibold">Restaurant Name</h1>
            <p className="text-[15px] sm:text-sm text-gray-600">Owner: Md.Tanim</p>
            <p className="text-[15px] sm:text-sm text-gray-600">Location: Lalbagh, Dhaka-1211</p>
          </div>
        </div>

        {/* Dashboard Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Earnings</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-green-500">$5000</p>
            <p className="text-[15px] sm:text-sm text-gray-500">This week</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Pending Orders</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-blue-500">15</p>
            <p className="text-[15px] sm:text-sm text-gray-500">Orders to be processed</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Reviews</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-yellow-500">4.5</p>
            <p className="text-[15px] sm:text-sm text-gray-500">Customer rating</p>
          </div>
        </div>

        {/* Restaurant Details */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-[15px] sm:text-xl font-semibold text-gray-700">Restaurant Details</h2>
          <div className="mt-2 sm:mt-4">
            <p className="text-[12px] sm:text-lg">Name: Restaurant Name</p>
            <p className="text-[12px] sm:text-lg">Location: Lalbagh, Dhaka-1211</p>
            <p className="text-[12px] sm:text-lg">Phone: (123) 456-7890</p>
            <p className="text-[12px] sm:text-lg">Hours: 10 AM - 10 PM</p>
          </div>
        </div>

        {/* Current Orders */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-[15px] sm:text-xl font-semibold text-gray-700">Current Orders</h2>
          <table className="w-full mt-4 table-auto text-[8px] sm:text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Order ID</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Customer</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Status</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Total</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 text-[10px] sm:text-sm">#12345</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">Jane Doe</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm text-yellow-500">Preparing</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">$20.50</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-[10px] sm:text-sm">#12346</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">John Smith</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm text-green-500">Delivered</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">$15.30</td>
              </tr>
            </tbody>
          </table>
        </div>

      </div>
    </div>
  );
};

export default SalesProfile;
