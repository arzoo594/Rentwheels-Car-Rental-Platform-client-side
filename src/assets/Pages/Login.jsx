import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import { Link, useLocation, useNavigate } from "react-router";
import Swal from "sweetalert2";

const Login = () => {
  const { signInWithEmailAndPasswordFunc, signInWithPopUpFunc, setUser, user } =
    useContext(AuthContext);
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";
  const navigate = useNavigate();

  if (user) {
    navigate(from, { replace: true });
    return null;
  }

  const handleSignin = (e) => {
    e.preventDefault();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    if (!email || !password) {
      Swal.fire({
        icon: "error",
        title: "Missing Information",
        text: "Please enter both email and password!",
      });
      return;
    }

    signInWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        const loggedInUser = res.user;
        setUser(loggedInUser);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome back, ${loggedInUser.email}`,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Login Failed",
          text: error.message,
        });
      });
  };

  const handleGoogleSignin = () => {
    signInWithPopUpFunc()
      .then((res) => {
        const loggedInUser = res.user;
        setUser(loggedInUser);
        Swal.fire({
          icon: "success",
          title: "Login Successful!",
          text: `Welcome, ${loggedInUser.displayName || loggedInUser.email}`,
        });
        navigate(from, { replace: true });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Google Sign-in Failed",
          text: error.message,
        });
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to continue to RentWheels
        </p>

        <form onSubmit={handleSignin} className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Enter your email"
              className="input input-bordered w-full"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Enter your password"
              className="input input-bordered w-full"
              required
            />
          </div>
          <button
            type="submit"
            className="btn btn-primary w-full text-white font-bold mt-2 hover:btn-secondary transition-all"
          >
            Login
          </button>
        </form>

        <button
          onClick={handleGoogleSignin}
          className="flex items-center justify-center gap-3 mt-4 w-full sm:w-auto px-5 py-2.5 
                     border border-gray-300 rounded-xl bg-white text-gray-800 font-medium 
                     hover:bg-gray-100 hover:shadow-md transition-all duration-300"
        >
          <svg
            aria-label="Google logo"
            width="20"
            height="20"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 512 512"
          >
            <g>
              <path d="m0 0H512V512H0" fill="#fff"></path>
              <path
                fill="#34a853"
                d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
              ></path>
              <path
                fill="#4285f4"
                d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
              ></path>
              <path
                fill="#fbbc02"
                d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
              ></path>
              <path
                fill="#ea4335"
                d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
              ></path>
            </g>
          </svg>
          <span>Continue with Google</span>
        </button>

        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <Link
            to="/register"
            className="text-purple-600 font-semibold link link-hover"
          >
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
