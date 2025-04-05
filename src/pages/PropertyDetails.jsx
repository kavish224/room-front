import React from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const dummyData = {
  1: {
    address: "CG Road, Ahmedabad",
    gender: "Boys",
    rent: "₹6,000",
    furnishing: "Semi-furnished",
    restriction: "Without restriction",
    brokerPhone: "9123456789",
  },
  2: {
    address: "Navrangpura, Ahmedabad",
    gender: "Girls",
    rent: "₹5,500",
    furnishing: "Fully-furnished",
    restriction: "With restriction",
    brokerPhone: "9876543210",
  },
};

const PropertyDetails = () => {
  const { id } = useParams();
  const property = dummyData[id];

  if (!property) {
    return (
      <div className="bg-gray-100 min-h-screen">
        <Navbar />
        <div className="p-6 text-center text-xl text-red-600 font-semibold">
          Property not found
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gray-100 min-h-screen text-[#2D3A45]">
      <Navbar />
      <div className="max-w-2xl mx-auto p-6">
        <div className="bg-white p-6 rounded-xl shadow-md space-y-4">
          <h2 className="text-2xl font-bold">{property.address}</h2>

          <div className="space-y-2 text-base">
            <p>👥 <span className="font-medium">{property.gender} only</span></p>
            <p>💸 Rent: <span className="font-semibold text-green-700">{property.rent}</span></p>
            <p>🛏️ Furnishing: <span>{property.furnishing}</span></p>
            <p>🚫 Restriction: <span>{property.restriction}</span></p>
          </div>

          <div className="mt-6 flex flex-col sm:flex-row gap-4">
            <a
              href={`https://wa.me/91${property.brokerPhone}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full text-center bg-green-600 text-white px-4 py-2 rounded-md hover:bg-green-700 transition"
            >
              📱 WhatsApp Broker
            </a>
            <a
              href={`tel:${property.brokerPhone}`}
              className="w-full text-center bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
            >
              📞 Call Broker
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetails;
