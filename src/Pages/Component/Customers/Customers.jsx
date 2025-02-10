import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const Customers = () => {
  const handleViewProfile = (name) => {
    alert(`Viewing profile of ${name}`);
  };

  return (
    <div className="content-card">
      <h2 className="text-xl font-semibold mb-4">Customers</h2>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-lg hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="font-semibold">John Doe</h3>
            <p>Email: john@example.com</p>
          </div>
          <button
            onClick={() => handleViewProfile("John Doe")}
            className="bg-transparent text-blue-600 p-2 rounded-full hover:text-blue-800 transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:border-blue-800"
          >
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </button>
        </li>
        <li className="bg-gray-100 p-4 rounded-lg flex justify-between items-center shadow-lg hover:shadow-xl transition-all duration-300">
          <div>
            <h3 className="font-semibold">Jane Smith</h3>
            <p>Email: jane@example.com</p>
          </div>
          <button
            onClick={() => handleViewProfile("Jane Smith")}
            className="bg-transparent text-blue-600 p-2 rounded-full hover:text-blue-800 transition-all duration-300 transform hover:scale-105 border-2 border-blue-600 hover:border-blue-800"
          >
            <FontAwesomeIcon icon={faUser} className="text-2xl" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Customers;
