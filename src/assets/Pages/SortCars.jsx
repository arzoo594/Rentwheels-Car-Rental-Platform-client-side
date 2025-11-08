import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const SortCars = () => {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/cars")
      .then((res) => setCars(res.data))
      .catch((err) => console.error("Error loading cars:", err));
  }, []);

  const news = [
    "🚗 Rent your dream car today at affordable rates!",
    "🔥 Limited-time offer: 20% off on first booking!",
    "🕒 24/7 customer support to help you anytime!",
    "🌍 Explore more with RentWheels — drive your way!",
    "💳 Easy payment options available for all users.",
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-3 rounded-lg overflow-hidden mb-10">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...news, ...news].map((item, idx) => (
              <span key={idx} className="text-lg font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        <h2 className="text-3xl font-bold mb-10 text-center text-gray-800">
          🚗 Available Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {cars.map((car) => (
            <div
              key={car._id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              <img
                src={car.imageUrl}
                alt={car.carName}
                className="w-full h-56 object-cover"
              />

              <div className="p-5 flex-grow">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">
                  {car.carName}
                </h3>

                <div className="flex items-center justify-between text-sm">
                  <p className="text-gray-600">
                    Category:{" "}
                    <span className="font-medium text-gray-800">
                      {car.category}
                    </span>
                  </p>

                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${
                      car.status === "Available"
                        ? "bg-green-100 text-green-700"
                        : "bg-red-100 text-red-700"
                    }`}
                  >
                    {car.status}
                  </span>
                </div>
              </div>

              <div className="mt-auto">
                <Link
                  to={`/cars/${car._id}`}
                  className="block w-full text-center py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold hover:brightness-110 transition duration-300 rounded-b-2xl"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>

      <style>
        {`
          @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .animate-marquee {
            display: inline-flex;
            animation: marquee 25s linear infinite;
          }
        `}
      </style>
    </section>
  );
};

export default SortCars;
