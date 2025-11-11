import axios from "axios";
import React, { useEffect, useState } from "react";
import { Link } from "react-router";

const SortCars = () => {
  const [cars, setCars] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [filteredCars, setFilteredCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("http://localhost:5000/cars")
      .then((res) => {
        setCars(res.data);
        setFilteredCars(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading cars:", err);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    const lowerQuery = searchQuery.toLowerCase();
    const results = cars.filter(
      (car) =>
        car.carName.toLowerCase().includes(lowerQuery) ||
        car.category.toLowerCase().includes(lowerQuery) ||
        car.providerName.toLowerCase().includes(lowerQuery)
    );
    setFilteredCars(results);
  }, [searchQuery, cars]);

  const news = [
    "🚗 Rent your dream car today at affordable rates!",
    "🔥 Limited-time offer: 20% off on first booking!",
    "🕒 24/7 customer support to help you anytime!",
    "🌍 Explore more with RentWheels — drive your way!",
    "💳 Easy payment options available for all users.",
  ];

  if (loading) {
    return (
      <div className="flex justify-center items-center h-80">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <div className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 text-white py-3 rounded-lg overflow-hidden mb-12">
          <div className="flex gap-8 whitespace-nowrap animate-marquee">
            {[...news, ...news].map((item, idx) => (
              <span key={idx} className="text-lg font-medium">
                {item}
              </span>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center mb-8 gap-4">
          <h2 className="text-3xl font-bold text-gray-800">
            🚗 Available Cars
          </h2>

          <div className="w-full md:w-1/3">
            <input
              type="text"
              placeholder="Search by name, type, or provider..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent shadow-sm transition"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredCars.length > 0 ? (
            filteredCars.map((car) => (
              <div
                key={car._id}
                className="bg-white rounded-2xl shadow-lg hover:shadow-2xl transition duration-300 flex flex-col"
              >
                <div className="h-56 w-full overflow-hidden rounded-t-2xl">
                  <img
                    src={car.imageUrl}
                    alt={car.carName}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>

                <div className="p-5 flex-grow flex flex-col justify-between">
                  <div className="space-y-2">
                    <h3 className="text-xl font-semibold text-gray-800">
                      {car.carName}
                    </h3>

                    <p className="text-gray-600">
                      <span className="font-semibold">Rent Price:</span> $
                      {car.rentPrice} / day
                    </p>

                    <p className="text-gray-600">
                      <span className="font-semibold">Car Type / Model:</span>{" "}
                      {car.category}
                    </p>

                    <p className="text-gray-600">
                      <span className="font-semibold">Provider:</span>{" "}
                      {car.providerName}
                    </p>

                    <span
                      className={`px-3 py-1 rounded-full text-xs font-semibold inline-block ${
                        car.status === "Available"
                          ? "bg-green-100 text-green-700"
                          : "bg-red-100 text-red-700"
                      }`}
                    >
                      {car.status}
                    </span>
                  </div>

                  <Link
                    to={`/car-details/${car._id}`}
                    className="mt-4 block w-full text-center py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-lg hover:brightness-110 transition duration-300"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))
          ) : (
            <p className="col-span-full text-center text-gray-500 font-semibold">
              No cars found.
            </p>
          )}
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
