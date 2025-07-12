import React from "react";
import BacIg from "../public/bg.jpg"

const CheckEmail = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center relative"
        style={{
          backgroundImage: `url(${BacIg})`,
        }} // ✅ background from public
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content card */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md p-8 rounded-xl shadow-lg w-full max-w-md text-center items-center mx-auto">
        {/* Title */}
        <h2 className="text-2xl font-bold text-gray-800 mb-2">Check your email</h2>

        {/* Subtext */}
        <p className="text-sm text-gray-700 mb-6">
          We sent a password reset link to <br />
          <span className="font-medium text-gray-900">loremipsum@gmail.com</span>
        </p>

        {/* Open Email App Button */}
        <button
          className="w-full py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
        >
          Open email app
        </button>

        {/* Resend Link */}
        <p className="mt-4 text-sm text-gray-700">
          Didn’t receive the email?{" "}
          <a href="#" className="text-blue-600 hover:underline">Click to resend</a>
        </p>

        {/* Back to Login */}
        <p className="mt-4 text-sm text-gray-700">
          <a href="#" className="text-blue-600 hover:underline">Back to Login</a>
        </p>
      </div>
    </div>
  );
};

export default CheckEmail;

