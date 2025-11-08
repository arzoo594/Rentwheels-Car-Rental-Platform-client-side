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

  return (
    <div className="p-6">
      <h2 className="text-2xl font-semibold mb-6 text-center text-gray-800">
        Available Cars
      </h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {cars.map((car) => (
          <div
            key={car._id}
            className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col justify-between"
          >
            <img
              src={car.imageUrl}
              alt={car.carName}
              className="w-full h-48 object-cover"
            />

            <div className="p-4 flex-grow">
              <h3 className="text-lg font-semibold text-gray-800">
                {car.carName}
              </h3>

              <div className="flex items-center justify-between mt-2">
                <p className="text-sm text-gray-600">
                  Category: <span className="font-medium">{car.category}</span>
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
  );
};

export default SortCars;
