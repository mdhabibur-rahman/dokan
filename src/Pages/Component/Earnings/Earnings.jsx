import React from "react";

const Earnings = () => {
  return (
    <div className="content-card">
      <h2 className="text-xl font-semibold mb-4">Earnings Overview</h2>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th className="px-4 py-2 border-b text-left">Date</th>
            <th className="px-4 py-2 border-b text-left">Earnings</th>
            <th className="px-4 py-2 border-b text-left">Status</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="px-4 py-2 border-b">Feb 10, 2025</td>
            <td className="px-4 py-2 border-b">$1,250</td>
            <td className="px-4 py-2 border-b text-green-500">Completed</td>
          </tr>
          <tr>
            <td className="px-4 py-2 border-b">Feb 9, 2025</td>
            <td className="px-4 py-2 border-b">$900</td>
            <td className="px-4 py-2 border-b text-yellow-500">Pending</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default Earnings;
