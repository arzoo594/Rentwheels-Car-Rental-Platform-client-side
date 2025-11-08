import React from "react";

const Testimonials = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          What Our Customers Say
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "RentWheels made my trip so easy! The booking was seamless and the
              car was in perfect condition."
            </p>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co.com/xKWb3q6n/image.png"
                alt="User 1"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Arman H.</p>
                <p className="text-gray-500 text-sm">Traveler</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "Great service and amazing cars. I loved the support team who
              helped me at every step."
            </p>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co.com/9kgQKbLm/image.png"
                alt="User 2"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Sadia R.</p>
                <p className="text-gray-500 text-sm">Business Traveler</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-2xl transition duration-300">
            <p className="text-gray-600 mb-4">
              "The best car rental experience ever! Highly recommended for
              anyone looking for reliable cars."
            </p>
            <div className="flex items-center">
              <img
                src="https://i.ibb.co.com/HD0T3bh4/image.png"
                alt="User 3"
                className="w-12 h-12 rounded-full mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Rafiq K.</p>
                <p className="text-gray-500 text-sm">Traveler</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
