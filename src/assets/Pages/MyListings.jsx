import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";

const MyListing = () => {
  const { user } = useContext(AuthContext);
  const [myCars, setMyCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCar, setSelectedCar] = useState(null);

  useEffect(() => {
    if (user?.email) {
      axios
        .get("https://rentwheels-car-rental.vercel.app/cars-all")
        .then((res) => {
          const userCars = res.data.filter(
            (car) => car.providerEmail === user.email
          );
          setMyCars(userCars);
          setLoading(false);
        })
        .catch((err) => {
          console.error("Error fetching cars:", err);
          setLoading(false);
        });
    }
  }, [user?.email]);

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "This car will be permanently deleted!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#ef4444",
      cancelButtonColor: "#6b7280",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete(`https://rentwheels-car-rental.vercel.app/cars/${id}`)
          .then(() => {
            setMyCars(myCars.filter((car) => car._id !== id));
            Swal.fire("Deleted!", "Car has been deleted.", "success");
          })
          .catch(() => {
            Swal.fire("Error!", "Failed to delete the car.", "error");
          });
      }
    });
  };

  const openUpdateModal = (car) => {
    setSelectedCar(car);
  };

  const handleUpdateSubmit = (e) => {
    e.preventDefault();
    const updatedData = {
      carName: e.target.carName.value,
      category: e.target.category.value,
      rentPrice: e.target.rentPrice.value,
      location: e.target.location.value,
      imageUrl: e.target.imageUrl.value,
      description: e.target.description.value,
    };

    axios
      .patch(
        `https://rentwheels-car-rental.vercel.app/cars/${selectedCar._id}`,
        updatedData
      )
      .then(() => {
        setMyCars(
          myCars.map((car) =>
            car._id === selectedCar._id ? { ...car, ...updatedData } : car
          )
        );
        Swal.fire("Updated!", "Car information updated.", "success");
        setSelectedCar(null);
      })
      .catch(() => {
        Swal.fire("Error!", "Failed to update car.", "error");
      });
  };

  if (loading) {
    return <p className="text-center py-10 text-lg">Loading your cars...</p>;
  }

  if (myCars.length === 0) {
    return (
      <div className="text-center py-10">
        <h2 className="text-2xl font-semibold text-gray-600">
          You haven’t listed any cars yet 🚗
        </h2>
        <p className="text-gray-400">Go to “Add Car” to list one.</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-base-200 py-10 px-4">
      <div className="max-w-6xl mx-auto bg-base-100 p-6 rounded-xl shadow-lg">
        <h1 className="text-3xl font-bold text-pink-500 mb-8 text-center">
          My Listed Cars
        </h1>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {myCars.map((car) => (
            <div
              key={car._id}
              className="border rounded-xl overflow-hidden shadow hover:shadow-lg transition bg-white"
            >
              <img
                src={car.imageUrl}
                alt={car.carName}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-lg font-bold">{car.carName}</h3>
                <p className="text-gray-500">{car.category}</p>
                <p className="mt-2 font-semibold text-pink-500">
                  ${car.rentPrice} / day
                </p>
                <p className="text-sm text-gray-400 mt-1">
                  Status: {car.status}
                </p>

                <div className="flex justify-between items-center mt-4">
                  <button
                    onClick={() => openUpdateModal(car)}
                    className="btn btn-sm bg-blue-500 text-white hover:bg-blue-600"
                  >
                    Update
                  </button>
                  <button
                    onClick={() => handleDelete(car._id)}
                    className="btn btn-sm bg-red-500 text-white hover:bg-red-600"
                  >
                    Delete
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {selectedCar && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg w-11/12 md:w-2/3 max-h-[90vh] overflow-y-auto relative">
            <h2 className="text-2xl font-bold mb-4">Update Car</h2>
            <form
              onSubmit={handleUpdateSubmit}
              className="grid grid-cols-1 md:grid-cols-2 gap-4"
            >
              <input
                type="text"
                name="carName"
                defaultValue={selectedCar.carName}
                required
                className="input input-bordered w-full"
                placeholder="Car Name"
              />
              <select
                name="category"
                defaultValue={selectedCar.category}
                className="select select-bordered w-full"
                required
              >
                <option>Sedan</option>
                <option>SUV</option>
                <option>Hatchback</option>
                <option>Luxury</option>
                <option>Electric</option>
              </select>
              <input
                type="number"
                name="rentPrice"
                defaultValue={selectedCar.rentPrice}
                required
                className="input input-bordered w-full"
                placeholder="Rent Price"
              />
              <input
                type="text"
                name="location"
                defaultValue={selectedCar.location}
                required
                className="input input-bordered w-full"
                placeholder="Location"
              />
              <input
                type="text"
                name="imageUrl"
                defaultValue={selectedCar.imageUrl}
                required
                className="input input-bordered w-full md:col-span-2"
                placeholder="Image URL"
              />
              <textarea
                name="description"
                defaultValue={selectedCar.description}
                required
                maxLength={100}
                className="textarea textarea-bordered w-full md:col-span-2"
                placeholder="Description"
              ></textarea>

              <button
                type="submit"
                className="btn w-full bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white md:col-span-2 mt-2"
              >
                Update Car
              </button>
            </form>
            <button
              onClick={() => setSelectedCar(null)}
              className="absolute top-3 right-3 text-gray-500 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MyListing;
