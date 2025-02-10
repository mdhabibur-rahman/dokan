import React from "react";

const Settings = () => {
  return (
    <div className="content-card">
      <h2 className="text-xl font-semibold mb-4">Settings</h2>
      <ul className="space-y-4">
        <li className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold">General Settings</h3>
          <p>Manage basic settings like language and time zone.</p>
        </li>
        <li className="bg-gray-100 p-4 rounded-lg">
          <h3 className="font-semibold">Account Settings</h3>
          <p>Manage admin account and permissions.</p>
        </li>
      </ul>
    </div>
  );
};

export default Settings;
