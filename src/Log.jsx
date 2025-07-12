import React from "react";
import backImg from "../public/bg.jpg"

const Login = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${backImg})`,
        }} // ✅ from public folder
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-red bg-opacity-60 z-0"/>

      {/* Login Form */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md items-center mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-6">Login</h2>

        <form className="space-y-5">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium text-gray-700">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              className="w-full mt-1 px-4 py-2 border rounded-md focus:ring-2 focus:ring-blue-500"
            />
            <div className="text-right mt-1">
              <a href="#" className="text-sm text-blue-600 hover:underline">
                Forgot your password?
              </a>
            </div>
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Sign In
          </button>
        </form>

        {/* Footer */}
        <p className="mt-6 text-sm text-center text-gray-700">
          Don’t have an account?{" "}
          <a href="#" className="text-blue-600 hover:underline">Sign Up</a>
        </p>
      </div>
    </div>
  );
};

export default Login;


