// import React from "react";

// const Login = () => {
//   return (
//     <div className="hero bg-base-200 min-h-screen">
//       <div className="hero-content flex-col lg:flex-row-reverse">
//         <div className="text-center lg:text-left"></div>
//         <div className="card bg-base-100 p-4 w-full max-w-sm shrink-0 shadow-2xl">
//           <h1 className="text-5xl font-bold">Login now!</h1>
//           <div className="card-body">
//             <fieldset className="fieldset">
//               <label className="label">Email</label>
//               <input type="email" className="input" placeholder="Email" />
//               <label className="label">Password</label>
//               <input type="password" className="input" placeholder="Password" />
//               <div>
//                 <a className="link link-hover">Forgot password?</a>
//               </div>
//               <button className="btn btn-neutral mt-4">Login</button>
//             </fieldset>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Login;
import React from "react";

const Login = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-500 to-indigo-500">
      <div className="card w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-4xl font-bold text-center text-gray-800 mb-6">
          Welcome Back!
        </h1>
        <p className="text-center text-gray-500 mb-6">
          Sign in to continue to RentWheels
        </p>
        <form className="space-y-5">
          <div className="form-control">
            <label className="label">
              <span className="label-text font-semibold">Email</span>
            </label>
            <input
              type="email"
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
              placeholder="Enter your password"
              className="input input-bordered w-full"
            />
          </div>
          <button className="btn btn-primary w-full text-white font-bold mt-2 hover:btn-secondary transition-all">
            Login
          </button>
        </form>
        <p className="text-center text-gray-500 mt-4">
          Don’t have an account?{" "}
          <a
            href="/signup"
            className="text-purple-600 font-semibold link link-hover"
          >
            Sign Up
          </a>
        </p>
      </div>
    </div>
  );
};

export default Login;
