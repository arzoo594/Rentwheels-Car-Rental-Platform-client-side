import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router";

const CarsDetails = () => {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:3000/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error(err);
        setLoading(false);
      });
  }, [id]);

  if (loading) {
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  }

  if (!car) {
    return <p className="text-center mt-10 text-red-500">Car not found!</p>;
  }

  return (
    <div className="container mx-auto px-6 lg:px-20 py-16">
      <div className="flex flex-col lg:flex-row gap-10 shadow-2xl rounded-2xl p-4">
        <div className="lg:w-1/2">
          <img
            src={car.imageUrl}
            alt={car.carName}
            className="rounded-2xl shadow-lg w-full object-cover"
          />
        </div>

        <div className="lg:w-1/2 flex flex-col gap-4">
          <h1 className="text-3xl font-bold text-gray-800">{car.carName}</h1>
          <p className="text-gray-600">{car.description}</p>

          <div className="flex flex-wrap gap-4 mt-4">
            <p className="bg-gray-100 px-4 py-2 rounded-lg">
              <strong>Category:</strong> {car.category}
            </p>
            <p className="bg-gray-100 px-4 py-2 rounded-lg">
              <strong>Rent Price:</strong> ${car.rentPrice} / day
            </p>
            <p className="bg-gray-100 px-4 py-2 rounded-lg">
              <strong>Location:</strong> {car.location}
            </p>
            <p className="bg-gray-100 px-4 py-2 rounded-lg">
              <strong>Status:</strong> {car.status}
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">
              Provider Info
            </h2>
            <p>
              <strong>Name:</strong> {car.providerName}
            </p>
            <p>
              <strong>Email:</strong> {car.providerEmail}
            </p>
          </div>

          <p className="text-gray-400 text-sm ">
            Added on: {new Date(car.createdAt).toLocaleDateString()}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
