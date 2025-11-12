import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import axios from "axios";
import Swal from "sweetalert2";

const AddCar = () => {
  const { user } = useContext(AuthContext);

  const handleAddCar = (e) => {
    e.preventDefault();

    const newCar = {
      carName: e.target.carName.value,
      category: e.target.category.value,
      rentPrice: e.target.rentPrice.value,
      location: e.target.location.value,
      imageUrl: e.target.imageUrl.value,
      description: e.target.description.value,
      providerName: user.displayName,
      providerEmail: user.email,
      status: "Available",
      createdAt: new Date(),
    };

    axios
      .post("https://rentwheels-car-rental.vercel.app/cars", newCar)
      .then((res) => {
        Swal.fire({
          icon: "success",
          title: "Car Added!",
          text: "Your car has been added successfully.",
          timer: 2000,
          showConfirmButton: false,
        });
        e.target.reset();
      })
      .catch((err) => {
        console.error("Error adding car:", err);
        Swal.fire({
          icon: "error",
          title: "Oops!",
          text: "Failed to add car.",
        });
      });
  };
  return (
    <div className="min-h-screen bg-base-200 flex justify-center items-center py-10 px-4">
      <div className="w-full max-w-4xl bg-base-100 rounded-2xl shadow-xl p-8">
        <h1 className="text-4xl font-bold text-pink-500 text-center text- mb-6">
          Add a New Car
        </h1>
        <p className="text-center text-gray-500 mb-10">
          Fill in the details below to list your car for rent. Make sure all
          information is accurate.
        </p>
        <form
          onSubmit={handleAddCar}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div className="form-control w-full">
            <label className="label font-semibold">Car Name</label>
            <input
              type="text"
              required
              placeholder="e.g. Toyota Corolla"
              className="input input-bordered w-full"
              name="carName"
            />
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold">Category</label>
            <select
              className="select select-bordered w-full"
              name="category"
              required
            >
              <option disabled selected>
                Select category
              </option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Hatchback</option>
              <option>Luxury</option>
              <option>Electric</option>
            </select>
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold">Rent Price (per day)</label>
            <input
              type="number"
              required
              placeholder="e.g. 2500"
              className="input input-bordered w-full"
              name="rentPrice"
            />
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold">Location</label>
            <input
              type="text"
              required
              placeholder="e.g. Dhaka, Bangladesh"
              className="input input-bordered w-full"
              name="location"
            />
          </div>

          <div className="form-control w-full md:col-span-2">
            <label className="label font-semibold">Car Image URL</label>
            <input
              type="text"
              required
              placeholder="Paste image URL here"
              className="input input-bordered w-full"
              name="imageUrl"
            />
          </div>

          <div className="form-control w-full md:col-span-2">
            <label className="label font-semibold">Description</label>
            <textarea
              className="textarea textarea-bordered w-full"
              required
              placeholder="Write a short description..."
              name="description"
              maxLength={60}
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold">Provider Name</label>
            <input
              type="text"
              required
              className="input input-bordered w-full bg-gray-100"
              value={user.displayName}
              readOnly
            />
          </div>

          <div className="form-control w-full">
            <label className="label font-semibold">Provider Email</label>
            <input
              type="email"
              required
              value={user.email}
              className="input input-bordered w-full bg-gray-100"
              readOnly
            />
          </div>

          <div className="form-control mt-6 md:col-span-2">
            <button className="btn bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-lg hover:brightness-110 transition duration-300 w-full text-lg font-semibold">
              Add Car
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddCar;
