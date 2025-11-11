import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router";
import axios from "axios";
import Swal from "sweetalert2";
import { AuthContext } from "../../Context/AuthContext";

const CarsDetails = () => {
  const { id } = useParams();
  const { user } = useContext(AuthContext);
  const [car, setCar] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`http://localhost:5000/cars/${id}`)
      .then((res) => {
        setCar(res.data);
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, [id]);

  const handleBookCar = () => {
    if (!user) {
      Swal.fire(
        "Login Required",
        "You must be logged in to book this car",
        "warning"
      );
      return;
    }

    const bookingData = {
      carId: car._id,
      carName: car.carName,
      userEmail: user.email,
      userName: user.displayName,
      rentPrice: car.rentPrice,
      location: car.location,
      carImage: car.imageUrl,
      status: car.status,
    };

    axios
      .post("http://localhost:5000/bookings", bookingData)
      .then(() => {
        setCar({ ...car, status: "Booked" });
        Swal.fire({
          icon: "success",
          title: "Car Booked!",
          text: "Your booking is confirmed.",
          timer: 2000,
          showConfirmButton: false,
        });
      })
      .catch(() => {
        Swal.fire({
          icon: "error",
          title: "Booking Failed",
          text: "Something went wrong. Try again later.",
        });
      });
  };

  if (loading)
    return <p className="text-center mt-10 text-gray-600">Loading...</p>;
  if (!car)
    return <p className="text-center mt-10 text-red-500">Car not found!</p>;

  return (
    <div className="container mx-auto px-6 lg:px-20 py-12">
      <div className="flex flex-col md:flex-row gap-6 shadow-lg rounded-xl p-4">
        <img
          src={car.imageUrl}
          alt={car.carName}
          className="w-full md:w-1/2 rounded-xl"
        />

        <div className="md:w-1/2 flex flex-col gap-3">
          <h1 className="text-3xl font-bold">{car.carName}</h1>
          <p>{car.description}</p>
          <p>
            <strong>Category:</strong> {car.category}
          </p>
          <p>
            <strong>Rent Price:</strong> ${car.rentPrice}/day
          </p>
          <p>
            <strong>Location:</strong> {car.location}
          </p>
          <p>
            <strong>Status:</strong>{" "}
            <span
              className={
                car.status === "Available"
                  ? "text-green-600 font-semibold"
                  : "text-red-600 font-semibold"
              }
            >
              {car.status}
            </span>
          </p>
          <p>
            <strong>Provider:</strong> {car.providerName} | {car.providerEmail}
          </p>
          <p className="text-gray-400 text-sm">
            Added on: {new Date(car.createdAt).toLocaleDateString()}
          </p>

          <button
            onClick={handleBookCar}
            disabled={car.status === "Booked"}
            className="mt-4 py-2 px-4 bg-blue-500 text-white rounded-lg font-semibold hover:bg-blue-600 transition disabled:bg-gray-400"
          >
            {car.status === "Booked" ? "Already Booked" : "Book Car"}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarsDetails;
