import React from "react";

const studentStats = {
  totalRegistered: 120,
  activeUsers: 98,
  totalBookings: 85,
};

const Students = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Student Stats</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Total Registered</p>
          <p className="text-xl font-bold">{studentStats.totalRegistered}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Active Users</p>
          <p className="text-xl font-bold">{studentStats.activeUsers}</p>
        </div>
        <div className="bg-white shadow rounded p-4">
          <p className="text-gray-500">Bookings Made</p>
          <p className="text-xl font-bold">{studentStats.totalBookings}</p>
        </div>
      </div>

      <p className="text-gray-600">Detailed booking info will go here.</p>
    </div>
  );
};

export default Students;
