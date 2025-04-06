import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper/modules";
import { ArrowLeft } from "lucide-react";

const property = {
  id: 1,
  address: "CG Road, Ahmedabad",
  gender: "Boys",
  rent: "₹6,000/month",
  description:
    "Experience premium living with fully furnished rooms, daily housekeeping, high-speed Wi-Fi, and 24/7 security. Located just minutes from colleges, cafes, and transport hubs.",
  amenities: ["High-Speed Wi-Fi", "Housekeeping", "Laundry", "CCTV Security", "Power Backup", "Fully Furnished"],
  contact: "+91 98765 43210",
  images: [
    "https://res.cloudinary.com/dw1s3qv0u/image/upload/v1722051309/vxvjfdnayj60cek9jjqj.jpg",
    "https://res.cloudinary.com/dw1s3qv0u/image/upload/v1722051309/vxvjfdnayj60cek9jjqj.jpg",
    "https://res.cloudinary.com/dw1s3qv0u/image/upload/v1722051309/vxvjfdnayj60cek9jjqj.jpg",
    "https://res.cloudinary.com/dw1s3qv0u/image/upload/v1722051309/vxvjfdnayj60cek9jjqj.jpg",
    "https://res.cloudinary.com/dw1s3qv0u/image/upload/v1722051309/vxvjfdnayj60cek9jjqj.jpg",
  ],
};

const PropertyDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  return (
    <div className="bg-gray-100 min-h-screen">
      <Navbar />
      <div className="max-w-6xl mx-auto px-4 py-6">
        <button
          onClick={() => navigate(-1)}
          className="mb-4 flex items-center text-sm text-gray-600 hover:text-gray-800 transition"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to listings
        </button>

        {/* Banner */}
        <div className="bg-white rounded-2xl shadow-md overflow-hidden">
          {/* Image Carousel */}
          <Swiper
            spaceBetween={16}
            slidesPerView={1}
            navigation
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            className="w-full h-[250px] sm:h-[400px] object-cover"
          >
            {property.images.map((img, index) => (
              <SwiperSlide key={index}>
                <img
                  src={img}
                  alt={`Image ${index + 1}`}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                />
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Property Info */}
          <div className="p-6">
            <div className="flex flex-wrap items-center justify-between mb-2">
              <h1 className="text-2xl font-bold text-[#2D3A45]">{property.address}</h1>
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm">
                {property.rent}
              </span>
            </div>
            <span className="inline-block bg-gray-200 text-gray-800 text-xs px-2 py-1 rounded mb-4 uppercase tracking-wide">
              {property.gender} Only
            </span>

            {/* Description */}
            <p className="text-gray-700 mb-6 leading-relaxed">
              {property.description}
            </p>

            {/* Amenities */}
            <div className="mb-6">
              <h2 className="text-xl font-semibold text-[#2D3A45] mb-3">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-x-4 gap-y-2 text-gray-700 text-sm">
                {property.amenities.map((amenity, idx) => (
                  <div key={idx} className="flex items-center gap-2">
                    <span className="w-2 h-2 bg-[#2D3A45] rounded-full"></span>
                    {amenity}
                  </div>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h2 className="text-xl font-semibold text-[#2D3A45] mb-1">Contact</h2>
              <p className="text-blue-600 font-medium">{property.contact}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PropertyDetail;
