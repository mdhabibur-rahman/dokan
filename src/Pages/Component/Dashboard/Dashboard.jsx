import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBox, faDollarSign, faClock } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
  return (
    <div className="content-card p-6">
      <h2 className="text-3xl font-semibold mb-6 text-center text-gray-700">
        Dashboard Overview
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Total Orders Card */}
        <div className="relative bg-gradient-to-r from-blue-600 via-blue-700 to-blue-800 text-white p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faBox} className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-lg font-semibold">Total Orders</h3>
            <p className="text-4xl font-bold">1,236</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-900 bg-opacity-60 rounded-b-xl transform group-hover:scale-100 scale-0 transition-all duration-500 ease-in-out">
            <p className="text-sm text-center">Click to view details</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>

        {/* Total Revenue Card */}
        <div className="relative bg-gradient-to-r from-green-600 via-green-700 to-green-800 text-white p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faDollarSign} className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-lg font-semibold">Total Revenue</h3>
            <p className="text-4xl font-bold">$24,580</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-900 bg-opacity-60 rounded-b-xl transform group-hover:scale-100 scale-0 transition-all duration-500 ease-in-out">
            <p className="text-sm text-center">Click to view details</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-green-500 via-green-600 to-green-700 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>

        {/* Pending Orders Card */}
        <div className="relative bg-gradient-to-r from-yellow-500 via-yellow-600 to-yellow-700 text-white p-6 rounded-xl shadow-2xl transform hover:scale-105 hover:shadow-2xl transition-all duration-500 ease-in-out flex items-center justify-between group cursor-pointer">
          <div className="flex flex-col items-start">
            <FontAwesomeIcon icon={faClock} className="text-5xl mb-4 group-hover:rotate-6 transition-all duration-300" />
            <h3 className="text-lg font-semibold">Pending Orders</h3>
            <p className="text-4xl font-bold">84</p>
          </div>
          <div className="absolute bottom-0 left-0 w-full p-2 bg-gray-900 bg-opacity-60 rounded-b-xl transform group-hover:scale-100 scale-0 transition-all duration-500 ease-in-out">
            <p className="text-sm text-center">Click to view details</p>
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 rounded-xl opacity-0 group-hover:opacity-30 transition-opacity duration-500"></div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
