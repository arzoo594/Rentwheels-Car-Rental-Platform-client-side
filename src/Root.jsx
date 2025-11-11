import React, { useEffect } from "react";
import Navbar from "./Components/Navbar";
import { Outlet, useLocation } from "react-router";
import Footer from "./Components/Footer";

const Root = () => {
  const location = useLocation();

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        document.title = "Home | RentWheels";
        break;
      case "/browse-car":
        document.title = "Browse Cars | RentWheels";
        break;
      case "/add-car":
        document.title = "Add Car | RentWheels";
        break;
      case "/my-listings":
        document.title = "My Listings | RentWheels";
        break;
      case "/my-booking":
        document.title = "My Bookings | RentWheels";
        break;
      case "/login":
        document.title = "Login | RentWheels";
        break;
      case "/register":
        document.title = "Register | RentWheels";
        break;
      default:
        if (location.pathname.startsWith("/car-details/")) {
          document.title = "Car Details | RentWheels";
        } else {
          document.title = "RentWheels";
        }
    }
  }, [location.pathname]);

  return (
    <div>
      <Navbar />
      <main className="flex-grow min-h-[245px]">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default Root;
