import React, { useContext } from "react";
import { AuthContext } from "../../Context/AuthContext";
import Swal from "sweetalert2";
import { Link, useNavigate } from "react-router";
import { signOut } from "firebase/auth";
import { auth } from "../FireBase/firebase.config";

const Register = () => {
  const {
    createUserWithEmailAndPasswordFunc,
    updateProfileFunc,
    signInWithPopUpFunc,
    setUser,
  } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();

    const displayName = e.target.name.value.trim();
    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();
    const photoURL = e.target.photo.value.trim();

    const regEx = /^(?=.*[a-z])(?=.*[A-Z]).{6,}$/;
    if (!regEx.test(password)) {
      Swal.fire({
        icon: "error",
        title: "Invalid Password",
        text: "Password must be at least 6 characters long and include at least one uppercase and one lowercase letter",
      });
      return;
    }

    createUserWithEmailAndPasswordFunc(email, password)
      .then((res) => {
        updateProfileFunc(displayName, photoURL)
          .then(() => {
            signOut(auth)
              .then(() => {
                Swal.fire({
                  icon: "success",
                  title: "Account Created!",
                  text: "Signup successful. Please login to continue!",
                }).then(() => {
                  navigate("/login");
                });
                e.target.reset();
              })
              .catch((err) => {
                console.log("Sign out failed:", err);
              });
          })
          .catch((error) => {
            Swal.fire({
              icon: "error",
              title: "Profile Update Failed",
              text: error.message,
            });
          });
      })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Signup Failed",
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
          title: "Signup Successful!",
          text: `Welcome, ${loggedInUser.displayName || loggedInUser.email}`,
        });
        navigate("/", { replace: true });
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
          Create Your Account
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign up to get started with RentWheels
        </p>

        <form onSubmit={handleRegister} className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Name</span>
            </label>
            <input
              type="text"
              required
              name="name"
              placeholder="Enter your name"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="Enter your email"
              className="input input-bordered w-full"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Password</span>
            </label>
            <input
              type="password"
              name="password"
              required
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
            <p className="text-xs text-gray-400 mt-1">
              Must be 6+ characters, with at least one uppercase & lowercase
              letter.
            </p>
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              required
              placeholder="Enter your photo URL"
              className="input input-bordered w-full"
            />
          </div>

          <button
            type="submit"
            className="btn btn-primary w-full text-white font-bold mt-2 hover:btn-secondary transition-all"
          >
            Sign Up
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
          Already have an account?{" "}
          <Link
            to="/login"
            className="text-purple-600 font-semibold link link-hover"
          >
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Register;
