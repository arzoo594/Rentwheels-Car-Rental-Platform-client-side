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
import CarsDetails from "./assets/Pages/CarsDetails.jsx";
import AuthProvider from "./Context/AuthProvider.jsx";
import Login from "./assets/Pages/Login.jsx";
import Register from "./assets/Pages/Register.jsx";

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
      {
        path: "/car-details/:id",
        element: <CarsDetails></CarsDetails>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
