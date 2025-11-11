import React, { useState, useContext } from "react";
import { NavLink } from "react-router";
import Swal from "sweetalert2";
import logoo from "../Images/rent-car-logo-with-hand-and-keys-template-design-inspiration-design-element-for-logo-poster-card-banner-emblem-t-shirt-illustration-vector.jpg";
import { AuthContext } from "../Context/AuthContext";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [userMenuOpen, setUserMenuOpen] = useState(false);

  const { user, signOutFunc, setUser } = useContext(AuthContext);

  const handleSignOut = () => {
    signOutFunc()
      .then(() => {
        setUser(null);
        Swal.fire({
          icon: "success",
          title: "Signed Out",
          text: "You have successfully signed out.",
          timer: 2000,
          showConfirmButton: false,
        });
        setUserMenuOpen(false);
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: error.message || "Failed to sign out. Please try again.",
        });
      });
  };

  const links = [
    { path: "/", label: "Home" },
    { path: "/browse-car", label: "Browse Cars" },
    ...(user
      ? [
          { path: "/add-car", label: "Add Car" },
          { path: "/my-listings", label: "My Listings" },
          { path: "/my-booking", label: "My Booking" },
        ]
      : []),
  ];

  return (
    <nav className="bg-gradient-to-r from-purple-600 via-pink-500 to-orange-400 shadow-md text-white font-sans">
      <div className="container mx-auto px-6 lg:px-20 flex justify-between items-center h-16 relative">
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

        <div className="flex items-center space-x-2 lg:space-x-4">
          {user ? (
            <div className="relative">
              <img
                src={user.photoURL || "https://via.placeholder.com/40"}
                alt={user.displayName || "User"}
                className="w-10 h-10 rounded-full cursor-pointer"
                onClick={() => setUserMenuOpen(!userMenuOpen)}
              />
              {userMenuOpen && (
                <div className="absolute right-0 mt-2 w-52 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 rounded shadow-lg p-4 flex flex-col space-y-2 z-50">
                  <p className="text-white font-semibold">{user.displayName}</p>
                  <p className="text-white text-sm">{user.email}</p>
                  <button
                    onClick={handleSignOut}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-2 rounded transition"
                  >
                    Sign Out
                  </button>
                </div>
              )}
            </div>
          ) : (
            <NavLink
              to="/login"
              className="btn bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 text-white hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all rounded text-sm px-4 py-2 lg:hidden"
            >
              Login
            </NavLink>
          )}

          <div className="lg:hidden">
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

            <div
              className={`absolute top-full left-0 w-64 bg-gradient-to-b from-purple-500 via-pink-500 to-orange-400 rounded-b shadow-lg transform transition-transform duration-300 z-50 ${
                menuOpen ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex justify-end p-3">
                <button
                  onClick={() => setMenuOpen(false)}
                  className="text-white text-2xl font-bold leading-none"
                >
                  &times;
                </button>
              </div>

              <ul className="flex flex-col space-y-3 px-4 pb-4">
                {links.map((link, i) => (
                  <li key={i}>
                    <NavLink
                      to={link.path}
                      onClick={() => setMenuOpen(false)}
                      className="block text-white text-base hover:bg-white/20 px-3 py-2 rounded transition"
                    >
                      {link.label}
                    </NavLink>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {!user && (
          <div className="hidden lg:block">
            <NavLink
              to="/login"
              className="btn bg-gradient-to-r from-pink-400 via-purple-400 to-yellow-300 text-white hover:from-yellow-300 hover:via-pink-400 hover:to-purple-400 transition-all rounded"
            >
              Login
            </NavLink>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
