import React, { useState } from "react";
import { NavLink } from "react-router";
import logoo from "../Images/rent-car-logo-with-hand-and-keys-template-design-inspiration-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const links = [
    { path: "/", label: "Home" },
    { path: "/browse-car", label: "Browse Cars" },
    { path: "/add-car", label: "Add Car" },
    { path: "/my-listings", label: "My Listings" },
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-md text-white font-sans">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center h-16">
        <div className="flex items-center space-x-2">
          <img
            className="w-10 h-10 rounded-full"
            src={logoo}
            alt="RentWheels Logo"
          />
          <NavLink
            to="/"
            className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-300 via-pink-300 to-purple-200"
          >
            RentWheels
          </NavLink>
        </div>

        <ul className="hidden lg:flex space-x-6">
          {links.map((link, i) => (
            <li key={i}>
              <NavLink
                to={link.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold bg-clip-text text-transparent bg-gradient-to-r from-yellow-200 via-pink-200 to-purple-100"
                    : "hover:bg-clip-text hover:text-transparent hover:bg-gradient-to-r hover:from-yellow-200 hover:via-pink-200 hover:to-purple-100 transition-colors"
                }
              >
                {link.label}
              </NavLink>
            </li>
          ))}
        </ul>

        <div className="lg:hidden relative flex items-center space-x-2">
          <NavLink
            to="/login"
            className="btn bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 text-white hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all rounded text-sm px-4 py-2"
          >
            Login
          </NavLink>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="p-2 rounded-md hover:bg-white/20 transition"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>

          {menuOpen && (
            <ul className="absolute top-full left-0 mt-2 w-52 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 rounded shadow-lg flex flex-col space-y-1 p-2 z-50">
              {links.map((link, i) => (
                <li key={i}>
                  <NavLink
                    to={link.path}
                    onClick={() => setMenuOpen(false)}
                    className="block px-3 py-2 rounded hover:bg-white/20 transition"
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          )}
        </div>

        <div className="hidden lg:block">
          <NavLink
            to="/login"
            className="btn bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 text-white hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all rounded"
          >
            Login
          </NavLink>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
