import React from "react";

const WhyRentWithUs = () => {
  return (
    <section className="py-5 bg-gray-50">
      <div className="container mx-auto px-6 lg:px-20">
        <h2 className="text-3xl font-bold mb-12 text-center text-gray-800">
          Why Rent With Us
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">🚗</div>
            <h3 className="text-xl font-semibold mb-2">Easy Booking</h3>
            <p className="text-gray-600 text-sm">
              Book your favorite car in just a few clicks without any hassle.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">💰</div>
            <h3 className="text-xl font-semibold mb-2">Affordable Rates</h3>
            <p className="text-gray-600 text-sm">
              Competitive pricing to make your travel budget-friendly.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">🤝</div>
            <h3 className="text-xl font-semibold mb-2">Trusted Providers</h3>
            <p className="text-gray-600 text-sm">
              All cars listed by verified and reliable providers.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col items-center text-center hover:shadow-2xl transition duration-300">
            <div className="text-5xl mb-4">🕒</div>
            <h3 className="text-xl font-semibold mb-2">24/7 Support</h3>
            <p className="text-gray-600 text-sm">
              Our support team is available round-the-clock to assist you.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyRentWithUs;
