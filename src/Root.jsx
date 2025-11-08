import React from "react";
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router";
import Footer from "./Components/Footer";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <main className="flex-grow min-h-[245px]">
        <Outlet></Outlet>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Root;
