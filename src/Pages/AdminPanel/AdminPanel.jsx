import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTachometerAlt,
  faChartBar,
  faConciergeBell,
  faUsers,
  faTruck,
  faCog,
} from "@fortawesome/free-solid-svg-icons";

// Import the individual components
import Dashboard from '../Component/Dashboard/Dashboard';
import Earnings from '../Component/Earnings/Earnings';
import Restaurant from '../Component/Restaurant/Restaurant';
import Customers from '../Component/Customers/Customers';
import DeliveryMan from '../Component/DeliveryMan/DeliveryMan';
import Settings from '../Component/Settings/Settings';

const AdminPanel = () => {
  const [selectedOption, setSelectedOption] = useState("Dashboard");

  const menuItems = [
    { name: "Dashboard", icon: faTachometerAlt },
    { name: "Earnings", icon: faChartBar },
    { name: "Restaurant", icon: faConciergeBell },
    { name: "Customers", icon: faUsers },
    { name: "Delivery Man", icon: faTruck },
    { name: "Settings", icon: faCog },
  ];

  const renderContent = () => {
    switch (selectedOption) {
      case "Dashboard":
        return <Dashboard />;
      case "Earnings":
        return <Earnings />;
      case "Restaurant":
        return <Restaurant />;
      case "Customers":
        return <Customers />;
      case "Delivery Man":
        return <DeliveryMan />;
      case "Settings":
        return <Settings />;
      default:
        return <div className="content-card">Welcome to the Admin Panel</div>;
    }
  };

  return (
    <div className="min-h-screen bg-white flex flex-col">
      <div className="flex flex-1">
        {/* Sidebar */}
        <div className="w-full lg:w-72 h-auto bg-white shadow-xl p-8 sm:p-10 rounded-lg transition-all duration-500 ease-in-out transform hover:scale-105 hidden 2xl:block">
          <h1 className="text-3xl font-semibold text-gray-900 mb-10 transition-all duration-300 transform hover:scale-110 hover:text-blue-600">
            Admin Panel
          </h1>
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
        <div className="flex-1 p-8 sm:p-12 bg-white shadow-xl rounded-lg mt-4">
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default AdminPanel;
