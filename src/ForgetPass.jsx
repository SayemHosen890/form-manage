import React from "react";
import BgImage from "../public/bg.jpg"

const ForgotPassword = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
              style={{
                backgroundImage: `url(${BgImage})`,
              }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Form card */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md items-center mx-auto">
        <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Forgot Password</h2>
        <p className="text-sm text-gray-600 text-center mb-6">
          No worries, we'll send you reset instructions.
        </p>

        <form className="space-y-5">
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="Enter your email address"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <button
            type="submit"
            className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
          >
            Reset Password
          </button>
        </form>

        <p className="mt-6 text-sm text-center text-gray-700">
          <a href="#" className="text-blue-600 hover:underline">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default ForgotPassword;


