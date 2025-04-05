import React, { useState } from "react";
import Navbar from "../components/Navbar";

const AddProperty = () => {
  const [formData, setFormData] = useState({
    address: "",
    rent: "",
    gender: "Boys",
    furnishing: "Non-furnished",
    restriction: "Without restriction",
    image: null,
    video: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: files ? files[0] : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form Submitted", formData);
    // TODO: send to backend
  };

  return (
    <div className="bg-white min-h-screen text-[#2D3A45]">
      <Navbar />
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h2 className="text-3xl font-bold mb-8 text-center">
          🏡 Add New Property
        </h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block mb-2 font-medium">Address</label>
            <input
              type="text"
              name="address"
              placeholder="Partial Address"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Rent (₹)</label>
            <input
              type="number"
              name="rent"
              placeholder="Enter Rent"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
              required
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Preferred Gender</label>
            <select
              name="gender"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            >
              <option value="Boys">Boys</option>
              <option value="Girls">Girls</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Furnishing</label>
            <select
              name="furnishing"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            >
              <option value="Non-furnished">Non-furnished</option>
              <option value="Semi-furnished">Semi-furnished</option>
              <option value="Fully-furnished">Fully-furnished</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Restrictions</label>
            <select
              name="restriction"
              onChange={handleChange}
              className="w-full p-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#FF6B6B]"
            >
              <option value="With restriction">With restriction</option>
              <option value="Without restriction">Without restriction</option>
            </select>
          </div>

          <div>
            <label className="block mb-2 font-medium">Upload Image</label>
            <input
              type="file"
              name="image"
              onChange={handleChange}
              accept="image/*"
              className="w-full"
            />
          </div>

          <div>
            <label className="block mb-2 font-medium">Upload Video</label>
            <input
              type="file"
              name="video"
              onChange={handleChange}
              accept="video/*"
              className="w-full"
            />
          </div>

          <button
            type="submit"
            className="bg-[#FF6B6B] text-white px-6 py-3 rounded-lg font-semibold hover:bg-[#fa5252] transition"
          >
            ➕ Submit Property
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddProperty;
