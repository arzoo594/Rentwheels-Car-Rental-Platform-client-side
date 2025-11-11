import React from "react";
import { useNavigate } from "react-router";

const JoinAsPartner = () => {
  const navigate = useNavigate();

  return (
    <section className="relative mb-10 bg-gradient-to-r from-purple-600 to-indigo-600 text-white py-20 px-6 md:px-20 rounded-3xl overflow-hidden">
      <div className="absolute inset-0 bg-black/20 backdrop-blur-sm"></div>

      <div className="relative z-10 max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
        <div className="md:w-1/2 text-center md:text-left">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Have a Car? Earn with RentWheels!
          </h2>
          <p className="text-gray-200 mb-6">
            Partner with us and turn your car into a source of income. We handle
            everything — insurance, bookings, and payments.
          </p>
          <button
            onClick={() => navigate("/partner")}
            className="bg-white text-purple-600 font-semibold px-8 py-3 rounded-xl shadow-lg hover:bg-gray-100 transition-all duration-300"
          >
            Join as Partner
          </button>
        </div>

        <div className="md:w-1/2">
          <img
            src="https://carsguide-res.cloudinary.com/image/upload/c_fit,h_841,w_1490,f_auto,t_cg_base/v1/editorial/ferrari-488-spider-2016-%282%29.jpg"
            alt="Car Partner"
            className="w-full rounded-4xl object-contain"
          />
        </div>
      </div>
    </section>
  );
};

export default JoinAsPartner;
