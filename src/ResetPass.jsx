import React from "react";
import bgImg from "../public/bg.jpg";

const PasswordReset = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center px-4 relative"
      style={{ backgroundImage: `url(${bgImg})` }}
    >
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black bg-opacity-60 z-0" />

      {/* Content card */}
      <div className="relative z-10 bg-white bg-opacity-90 backdrop-blur-md rounded-xl shadow-lg w-full max-w-md p-8 text-center">
        <h2 className="text-3xl font-bold text-gray-800 mb-4">Password Reset</h2>
        <p className="text-gray-700 mb-8">
          Your password has been successfully reset.<br />
          Click below to login in magically.
        </p>

        <button className="w-full py-2 mb-4 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition">
          Continue
        </button>

        <a href="#" className="text-blue-600 hover:underline">
          Back to Login
        </a>
      </div>
    </div>
  );
};

export default PasswordReset;