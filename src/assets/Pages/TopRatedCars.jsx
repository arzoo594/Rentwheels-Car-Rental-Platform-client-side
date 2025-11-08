import React from "react";

const TopRatedCars = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Top Rated Cars
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://i.ibb.co.com/6k99NrL/image.png"
              alt="Toyota Corolla"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Toyota Corolla 2022</h3>
            <p className="text-gray-600 mb-2">
              Comfortable & fuel-efficient sedan.
            </p>
            <p className="text-yellow-500 font-bold">⭐ 4.8/5</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://i.ibb.co.com/jksvftwj/image.png"
              alt="Honda Civic"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">Honda Civic 2021</h3>
            <p className="text-gray-600 mb-2">
              Sporty look with premium comfort.
            </p>
            <p className="text-yellow-500 font-bold">⭐ 4.7/5</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://i.ibb.co.com/5gZ5b5Kk/image.png"
              alt="Mercedes C-Class"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">
              Mercedes C-Class 2021
            </h3>
            <p className="text-gray-600 mb-2">Luxury & comfort combined.</p>
            <p className="text-yellow-500 font-bold">⭐ 4.9/5</p>
          </div>

          <div className="bg-gray-50 p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <img
              src="https://i.ibb.co.com/27wWw5jV/image.png"
              alt="BMW 3 Series"
              className="rounded-xl mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">BMW 3 Series 2022</h3>
            <p className="text-gray-600 mb-2">
              Elegant design with smooth drive.
            </p>
            <p className="text-yellow-500 font-bold">⭐ 4.8/5</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRatedCars;
