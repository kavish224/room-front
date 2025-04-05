import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar"; // Make sure this is the correct path

const properties = [
  { id: 1, address: "CG Road, Ahmedabad", gender: "Boys", rent: "₹6,000" },
  { id: 2, address: "Navrangpura, Ahmedabad", gender: "Girls", rent: "₹5,500" },
];

const PropertyList = () => {
  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-5xl mx-auto p-6">
        <h2 className="text-3xl font-bold mb-6 text-[#2D3A45]">Available Properties</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {properties.map((property) => (
            <Link
              key={property.id}
              to={`/properties/${property.id}`}
              className="block bg-white p-5 rounded-xl shadow hover:shadow-lg transition border border-gray-200"
            >
              <h3 className="text-xl font-semibold text-[#FF6B6B] mb-1">{property.address}</h3>
              <p className="text-sm text-gray-700 mb-1">{property.gender} only</p>
              <p className="text-green-700 font-medium">{property.rent}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
