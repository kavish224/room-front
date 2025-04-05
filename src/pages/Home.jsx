import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";

const Home = () => {
  return (
    <div className="bg-white min-h-screen text-[#2D3A45]">
      <Navbar />
      <section className="bg-[#2D3A45] text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-6 leading-tight">
          Find Your Perfect Room <br /> Without the Hassle
        </h1>
        <p className="text-lg text-white/80 mb-10">
          Verified listings. No middlemen. 100% transparent process.
        </p>

        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link
            to="/properties"
            className="bg-white text-[#2D3A45] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
          >
            🔍 Explore Rooms
          </Link>
          <Link
            to="/owner"
            className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-[#2D3A45] transition"
          >
            🏠 List Your Property
          </Link>
        </div>
      </section>

      <section className="py-20 bg-white text-[#2D3A45]">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
          {[
            {
              title: "✅ Verified Listings",
              desc: "Each property goes through a thorough verification process.",
            },
            {
              title: "📱 Instant Communication",
              desc: "Connect through WhatsApp or call instantly from the app.",
            },
          ].map((feature, index) => (
            <div
              key={index}
              className="p-6 rounded-lg shadow hover:shadow-md transition bg-[#f8f9fa]"
            >
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.desc}</p>
            </div>
          ))}
        </div>
      </section>
      
      <section className="bg-[#2D3A45] text-white py-16 px-6 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Your Journey Today</h2>
        <p className="mb-6 text-white/90">
          Browse verified rooms or list your own in just a few steps.
        </p>
        <Link
          to="/properties"
          className="bg-white text-[#2D3A45] font-semibold px-6 py-3 rounded-lg hover:bg-gray-100 transition"
        >
          🚀 Get Started
        </Link>
      </section>
    </div>
  );
};

export default Home;
