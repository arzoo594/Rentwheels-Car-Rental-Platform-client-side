import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import Root from "./Root.jsx";
import Home from "./assets/Pages/Home.jsx";
import BrowseCars from "./assets/Pages/BrowseCars.jsx";
import AddCar from "./assets/Pages/AddCar.jsx";
import MyListings from "./assets/Pages/MyListings.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        index: true,
        element: <Home></Home>,
      },
      {
        path: "/browse-car",
        element: <BrowseCars></BrowseCars>,
      },
      {
        path: "/add-car",
        element: <AddCar></AddCar>,
      },
      {
        path: "/my-listings",
        element: <MyListings></MyListings>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
