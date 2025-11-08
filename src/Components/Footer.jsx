import React from "react";
import { NavLink } from "react-router";
import logoo from "../Images/rent-car-logo-with-hand-and-keys-template-design-inspiration-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white py-12">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        <div>
          <div className="flex items-center space-x-2">
            <img className="w-[45px] rounded-full" src={logoo} alt="" />
            <h2 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-200">
              RentWheels
            </h2>
          </div>
          <p className="mt-4 text-sm font-light">
            RentWheels makes car rental simple, fast, and reliable. Browse cars,
            book easily, and hit the road.
          </p>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <NavLink className="hover:underline" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/browse-car">
                Browse Cars
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/add-car">
                Add Car
              </NavLink>
            </li>
            <li>
              <NavLink className="hover:underline" to="/my-listings">
                My Listings
              </NavLink>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
          <ul className="space-y-2 text-sm font-light">
            <li>Email: arzooahmed0170609@gmail.com</li>
            <li>Phone: +880 1706 097788</li>
            <li>Address: Dhaka, Bangladesh</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 mt-2 text-white">
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaFacebookF />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaInstagram />
            </a>
            <a href="#" className="hover:text-yellow-300 transition-colors">
              <FaLinkedinIn />
            </a>
          </div>
        </div>
      </div>

      <div className="text-center mt-10 text-sm font-light border-t border-white/20 pt-4">
        &copy; {new Date().getFullYear()}RentWheels. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
