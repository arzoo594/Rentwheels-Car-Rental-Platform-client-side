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
import MyBookings from "./assets/Pages/MyBookings.jsx";
import PrivateRoute from "./Components/PrivateRoute.jsx";
import ErrorPage from "./Components/ErrorPage.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,

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
        element: (
          <PrivateRoute>
            <AddCar></AddCar>
          </PrivateRoute>
        ),
      },
      {
        path: "/my-listings",
        element: (
          <PrivateRoute>
            <MyListings></MyListings>
          </PrivateRoute>
        ),
      },
      {
        path: "/car-details/:id",
        element: (
          <PrivateRoute>
            <CarsDetails></CarsDetails>
          </PrivateRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/my-booking",
        element: (
          <PrivateRoute>
            <MyBookings></MyBookings>
          </PrivateRoute>
        ),
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
