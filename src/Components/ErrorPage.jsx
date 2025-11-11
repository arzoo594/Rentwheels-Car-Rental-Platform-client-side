import React from "react";
import error from "../Images/error-404.png";
import { NavLink } from "react-router";

const ErrorPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-50 px-4 text-center">
      <img
        src={error}
        alt="404 Error"
        className="w-64 md:w-96 mb-8 animate-fadeIn"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-4">
        Oops! Page Not Found
      </h1>
      <p className="text-gray-600 mb-8">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>
      <NavLink
        to="/"
        className="inline-block px-6 py-3 bg-gradient-to-r from-purple-500 via-pink-500 to-orange-400 text-white font-semibold rounded-lg shadow-lg hover:brightness-110 transition"
      >
        Go Back Home
      </NavLink>
    </div>
  );
};

export default ErrorPage;
