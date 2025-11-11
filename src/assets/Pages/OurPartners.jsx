import React from "react";

const OurPartners = () => {
  const partners = [
    {
      name: "Toyota",
      logo: "https://i.ibb.co.com/B587NbzC/image.png",
    },
    {
      name: "Honda",
      logo: "https://i.ibb.co.com/0yFQpn6C/image.png",
    },
    {
      name: "BMW",
      logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/BMW.svg",
    },
    {
      name: "Mercedes",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSL80WnL_CBkBGGU6O7pcVpw7sYdSZ8Tbsghg&s",
    },
    {
      name: "Nissan",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS_-jxavxaZkFJ7Gi5bH4MwxpLys2OKQoOw3Q&s",
    },
    {
      name: "Hyundai",
      logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRanXMaZ8Po-NxUeGPsfxk5xiICOrGhZFxjyQ&s",
    },
  ];

  return (
    <section className="bg-gray-50 py-16 px-6 md:px-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 mb-2">Our Partners</h2>
        <p className="text-gray-500">
          We proudly collaborate with top automotive brands
        </p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-8 items-center justify-center">
        {partners.map((partner, index) => (
          <div
            key={index}
            className="flex items-center justify-center bg-white shadow-sm hover:shadow-md transition-all duration-300 rounded-xl p-4"
          >
            <img
              src={partner.logo}
              alt={partner.name}
              className="w-24 h-14 object-contain grayscale hover:grayscale-0 transition-all duration-300"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurPartners;
