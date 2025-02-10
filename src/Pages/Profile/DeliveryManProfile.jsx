import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { 
  faTachometerAlt, 
  faBoxOpen, 
  faMoneyBillWave, 
  faStar, 
  faCog,
  faHistory // Icon for Past Deliveries
} from "@fortawesome/free-solid-svg-icons";

const DeliveryManProfile = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: faTachometerAlt },
    { name: "Current Deliveries", icon: faBoxOpen },
    { name: "Past Deliveries", icon: faHistory }, // Updated icon for Past Deliveries
    { name: "Earnings", icon: faMoneyBillWave },
    { name: "Reviews", icon: faStar },
    { name: "Settings", icon: faCog },
  ];

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <div className="w-full lg:w-auto h-auto bg-white p-6 sm:p-8 shadow-md hidden 2xl:block">
        <h1 className="text-3xl font-semibold text-gray-900 mb-10">Delivery Man Panel</h1>
        <ul className="space-y-6">
          {menuItems.map((item) => (
            <li
              key={item.name}
              className={`text-lg text-gray-700 mb-4 cursor-pointer flex items-center space-x-5 p-4 rounded-lg transition-all duration-300 ease-in-out transform hover:bg-gray-100 hover:shadow-2xl hover:scale-110 hover:rotate-1 ${
                selectedOption === item.name
                  ? "bg-gray-200 text-gray-900 font-semibold scale-110 shadow-xl"
                  : "hover:scale-105"
              }`}
              onClick={() => setSelectedOption(item.name)}
            >
              <FontAwesomeIcon
                icon={item.icon}
                className="text-3xl transition-all duration-300 transform hover:rotate-45"
              />
              <span>{item.name}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Main content */}
      <div className="flex-1 p-4 sm:p-8">
        {/* Profile Header */}
        <div className="flex items-center mb-6 sm:mb-8">
          <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-gray-300 mr-4 sm:mr-6">
            <img
              src="https://www.w3schools.com/w3images/avatar6.png" // Demo image URL
              alt="Profile"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div>
            <h1 className="text-[18px] sm:text-3xl font-semibold">Md.Mamun</h1>
            <p className="text-[15px] sm:text-sm text-gray-600">Delivery Man</p>
            <p className="text-[15px] sm:text-sm text-gray-600">Location: Lalbagh,Dhaka-1211</p>
          </div>
        </div>

        {/* Dashboard Info */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8">
          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Earnings</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-green-500">$1200</p>
            <p className="text-[15px] sm:text-sm text-gray-500">This week</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Current Deliveries</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-blue-500">3</p>
            <p className="text-[15px] sm:text-sm text-gray-500">Deliveries in progress</p>
          </div>

          <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md">
            <h2 className="text-[17px] sm:text-xl font-semibold text-gray-700">Reviews</h2>
            <p className="text-[18px] sm:text-3xl font-bold text-yellow-500">4.7</p>
            <p className="text-[15px] sm:text-sm text-gray-500">Customer rating</p>
          </div>
        </div>

        {/* Delivery Man Details */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-[15px] sm:text-xl font-semibold text-gray-700">Delivery Man Details</h2>
          <div className="mt-2 sm:mt-4">
            <p className="text-[12px] sm:text-lg">Name: Md.Mamun</p>
            <p className="text-[12px] sm:text-lg">Location: Lalbagh,Dhaka-1211</p>
            <p className="text-[12px] sm:text-lg">Phone: (987) 654-3210</p>
            <p className="text-[12px] sm:text-lg">Status: Active</p>
          </div>
        </div>

        {/* Current Deliveries */}
        <div className="bg-white p-4 sm:p-6 rounded-lg shadow-md mb-8">
          <h2 className="text-[15px] sm:text-xl font-semibold text-gray-700">Current Deliveries</h2>
          <table className="w-full mt-4 table-auto text-[8px] sm:text-sm">
            <thead>
              <tr>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Order ID</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Customer</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Status</th>
                <th className="px-4 py-2 text-left text-[11px] sm:text-sm">Delivery Time</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b">
                <td className="px-4 py-2 text-[10px] sm:text-sm">#23456</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">Michael Johnson</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm text-yellow-500">In Transit</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">25 mins</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-[10px] sm:text-sm">#23457</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">Alice Williams</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm text-green-500">Delivered</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">15 mins</td>
              </tr>
              <tr className="border-b">
                <td className="px-4 py-2 text-[10px] sm:text-sm">#23458</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">David Brown</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm text-yellow-500">In Transit</td>
                <td className="px-4 py-2 text-[10px] sm:text-sm">20 mins</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DeliveryManProfile;
