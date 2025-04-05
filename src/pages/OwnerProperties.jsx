import React from "react";
import Navbar from "../components/Navbar";

// Dummy data — replace with your backend data
const ownerProps = [
  { id: 1, address: "Maninagar, Ahmedabad", rent: "₹7000" },
  { id: 2, address: "Paldi, Ahmedabad", rent: "₹6500" },
];

const OwnerProperties = () => {
  return (
    <div className="bg-[#f8f9fa] min-h-screen text-[#2D3A45]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-6">🏠 Your Listed Properties</h2>
        <ul className="space-y-4">
          {ownerProps.map((property) => (
            <li
              key={property.id}
              className="bg-white border border-gray-200 p-6 rounded-xl shadow hover:shadow-md transition"
            >
              <div className="flex justify-between items-center">
                <div>
                  <p className="text-lg font-semibold">{property.address}</p>
                  <p className="text-[#28a745] font-medium">{property.rent}</p>
                </div>
                <button className="text-sm px-4 py-2 rounded bg-[#FF6B6B] text-white hover:bg-[#fa5252] transition">
                  Edit
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default OwnerProperties;
