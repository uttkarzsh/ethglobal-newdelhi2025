// src/SubscribeButton.jsx
import React from "react";

const SubscribeButton = () => {
  const handleSubscribe = () => {
    window.location.href = `http://localhost:5174/payment`;
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-tr from-purple-700 via-blue-600 to-blue-400 text-white font-sans">
      <h1 className="text-5xl font-bold mb-4">Welcome to Our Service</h1>
      <p className="text-xl font-light mb-10">Subscribe to get exclusive benefits!</p>
      <button
      onClick={handleSubscribe}
      className="bg-gradient-to-r from-pink-500 via-red-500 to-yellow-500 
                 text-white font-semibold py-3 px-10 rounded-full shadow-lg 
                 hover:scale-105 transform transition duration-300 ease-in-out
                 focus:outline-none focus:ring-4 focus:ring-pink-300"
    >
      Subscribe
    </button>
    </div>
    
  );
};

export default SubscribeButton;
