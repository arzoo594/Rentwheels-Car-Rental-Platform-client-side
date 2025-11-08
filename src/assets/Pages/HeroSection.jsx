// import React, { useState } from "react";

// const slides = [
//   {
//     id: 1,
//     title: "Drive Your Dream Car Today",
//     subtitle: "Affordable & Trusted Car Rentals Near You",
//     image:
//       "https://images.unsplash.com/photo-1612793887362-9b3c5f7e2b8d?auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 2,
//     title: "Book Cars Instantly",
//     subtitle: "Seamless Booking Experience for Everyone",
//     image:
//       "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80",
//   },
//   {
//     id: 3,
//     title: "Your Ride, Your Way",
//     subtitle: "Choose From a Wide Range of Vehicles",
//     image:
//       "https://images.unsplash.com/photo-1583000056093-8f9712fcb2df?auto=format&fit=crop&w=1470&q=80",
//   },
// ];

// const HeroSection = () => {
//   const [currentSlide, setCurrentSlide] = useState(0);

//   const prevSlide = () => {
//     setCurrentSlide((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
//   };

//   const nextSlide = () => {
//     setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
//   };

//   return (
//     <section className="relative w-full h-[80vh] overflow-hidden">
//       {slides.map((slide, index) => (
//         <div
//           key={slide.id}
//           className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
//             index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
//           }`}
//         >
//           <img
//             src={slide.image}
//             alt={slide.title}
//             className="w-full h-full object-cover"
//           />
//           <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
//             <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
//               {slide.title}
//             </h1>
//             <p className="text-lg lg:text-2xl text-white mb-6">
//               {slide.subtitle}
//             </p>
//             <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
//               Browse Cars
//             </button>
//           </div>
//         </div>
//       ))}

//       {/* Navigation Arrows */}
//       <button
//         onClick={prevSlide}
//         className="absolute left-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//       >
//         &#10094;
//       </button>
//       <button
//         onClick={nextSlide}
//         className="absolute right-4 top-1/2 -translate-y-1/2 text-white bg-black/40 p-2 rounded-full hover:bg-black/60 transition"
//       >
//         &#10095;
//       </button>
//     </section>
//   );
// };

// export default HeroSection;

import React, { useEffect, useState } from "react";

const slides = [
  {
    id: 1,
    title: "Drive Your Dream Car Today",
    subtitle: "Affordable & Trusted Car Rentals Near You",
    image:
      "https://images.prismic.io/bmw-eurokarscoid/Zwi5ooF3NbkBXO1M_P90548561_highRes_the-all-new-bmw-m4-c.jpg?auto=format,compress",
  },
  {
    id: 2,
    title: "Book Cars Instantly",
    subtitle: "Seamless Booking Experience for Everyone",
    image:
      "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    title: "Your Ride, Your Way",
    subtitle: "Choose From a Wide Range of Vehicles",
    image:
      "https://hips.hearstapps.com/hmg-prod/images/ferrari-e-suv-2-copy-680287cac36b2.jpg?crop=1.00xw:0.838xh;0,0.0673xh",
  },
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000); // 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full h-[80vh] overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
          }`}
        >
          <img
            src={slide.image}
            alt={slide.title}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40 flex flex-col justify-center items-center text-center px-4">
            <h1 className="text-4xl lg:text-6xl font-bold text-white mb-4">
              {slide.title}
            </h1>
            <p className="text-lg lg:text-2xl text-white mb-6">
              {slide.subtitle}
            </p>
            <button className="px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white rounded-lg font-semibold hover:scale-105 transition-transform">
              Browse Cars
            </button>
          </div>
        </div>
      ))}
    </section>
  );
};

export default HeroSection;
