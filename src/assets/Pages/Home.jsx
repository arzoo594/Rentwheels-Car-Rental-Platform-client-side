import React from "react";
import HeroSection from "./HeroSection";
import SortCars from "./SortCars";
import WhyRentWithUs from "./WhyRentWithUs";
import TopRatedCars from "./TopRatedCars";
import Testimonials from "./Testimonials";

const Home = () => {
  return (
    <div>
      <HeroSection></HeroSection>
      <SortCars></SortCars>
      <WhyRentWithUs></WhyRentWithUs>
      <TopRatedCars></TopRatedCars>
      <Testimonials></Testimonials>
    </div>
  );
};

export default Home;
