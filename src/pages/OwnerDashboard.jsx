import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const OwnerDashboard = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2D3A45]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h1 className="text-3xl font-bold mb-8">Owner Dashboard</h1>

        <div className="grid gap-6 md:grid-cols-2">
          <Link
            to="/owner/properties"
            className="bg-white rounded-xl p-6 shadow hover:shadow-md border border-gray-200 transition"
          >
            <h2 className="text-xl font-semibold mb-2 text-[#FF6B6B]">My Listed Properties</h2>
            <p className="text-gray-600">View and manage all your currently listed rooms or flats.</p>
          </Link>

          <Link
            to="/owner/add-property"
            className="bg-[#FF6B6B] text-white rounded-xl p-6 shadow hover:bg-[#fa5252] transition"
          >
            <h2 className="text-xl font-semibold mb-2">Add New Property</h2>
            <p className="text-white/90">Quickly list a new property with all the necessary details and media.</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OwnerDashboard;
