import React, { useState, useEffect } from "react";
import HeroSection from "./HeroSection";
import SortCars from "./SortCars";
import WhyRentWithUs from "./WhyRentWithUs";
import TopRatedCars from "./TopRatedCars";
import Testimonials from "./Testimonials";
import OurPartners from "./OurPartners";
import JoinAsPartner from "./JoinAsPartner";

const Home = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <div className="animate-spin rounded-full h-16 w-16 border-b-4 border-blue-500"></div>
      </div>
    );
  }

  return (
    <div>
      <HeroSection />
      <SortCars />
      <WhyRentWithUs />
      <TopRatedCars />
      <Testimonials />
      <OurPartners />
      <JoinAsPartner />
    </div>
  );
};

export default Home;
