const DeliveryManProfile = () => {
  return (
    <div className="flex">
      {/* Sidebar */}
      <div className="w-64 h-auto bg-white p-10 shadow-md">
        <ul>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Dashboard</li>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Current Deliveries</li>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Past Deliveries</li>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Earnings</li>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Reviews</li>
          <li className="text-lg mb-6 hover:text-blue-500 cursor-pointer">Settings</li>
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-8">
        
        {/* Profile Header */}
        <div className="flex items-center mb-8">
          {/* Delivery Man Profile Picture */}
          <div className="w-16 h-16 rounded-full bg-gray-300 mr-6">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png" // Demo image URL
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-3xl font-semibold">Md.Mamun</h1>
            <p className="text-gray-600">Delivery Man</p>
            <p className="text-gray-600">Location: Lalbagh,Dhaka-1211</p>
          </div>
        </div>

        {/* Dashboard Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Earnings</h2>
            <p className="text-3xl font-bold text-green-500">$1200</p>
            <p className="text-sm text-gray-500">This week</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Current Deliveries</h2>
            <p className="text-3xl font-bold text-blue-500">3</p>
            <p className="text-sm text-gray-500">Deliveries in progress</p>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-700">Reviews</h2>
            <p className="text-3xl font-bold text-yellow-500">4.7</p>
            <p className="text-sm text-gray-500">Customer rating</p>
          </div>
        </div>

        {/* Delivery Man Details */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Delivery Man Details</h2>
          <div className="mt-4">
            <p className="text-lg">Name: Md.Mamun</p>
            <p className="text-lg">Location: Lalbagh,Dhaka-1211</p>
            <p className="text-lg">Phone: (987) 654-3210</p>
            <p className="text-lg">Status: Active</p>
          </div>
        </div>

        {/* Current Deliveries */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-xl font-semibold text-gray-700">Current Deliveries</h2>
          <table className="w-full mt-4 table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left">Order ID</th>
                <th className="px-4 py-2 text-left">Customer</th>
                <th className="px-4 py-2 text-left">Status</th>
                <th className="px-4 py-2 text-left">Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2">#23456</td>
                <td className="px-4 py-2">Michael Johnson</td>
                <td className="px-4 py-2 text-yellow-500">In Transit</td>
                <td className="px-4 py-2">25 mins</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">#23457</td>
                <td className="px-4 py-2">Alice Williams</td>
                <td className="px-4 py-2 text-green-500">Delivered</td>
                <td className="px-4 py-2">15 mins</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2">#23458</td>
                <td className="px-4 py-2">David Brown</td>
                <td className="px-4 py-2 text-yellow-500">In Transit</td>
                <td className="px-4 py-2">20 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManProfile;
