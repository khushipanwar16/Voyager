// src/components/RegisterModal.jsx
import React from "react";

export default function RegisterModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white p-8 rounded-lg max-w-md w-full relative shadow-lg">
        <button
          onClick={onClose}
          className="absolute top-2 right-3 text-gray-500 hover:text-gray-700 text-2xl font-bold focus:outline-none"
        >
          &times;
        </button>
        <h2 className="text-2xl font-semibold mb-6 text-black">Register</h2>
        <form>
          <label className="block mb-4">
            Name:
            <input
              type="text"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-300"
              required
            />
          </label>
          <label className="block mb-4">
            Email:
            <input
              type="email"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-300"
              required
            />
          </label>
          <label className="block mb-6">
            Password:
            <input
              type="password"
              className="w-full mt-2 p-2 border border-gray-300 rounded focus:outline-none focus:border-pink-300"
              required
            />
          </label>
          <button
            type="submit"
            className="w-full py-2 px-4 bg-black text-white font-bold rounded transition duration-300 hover:bg-white hover:text-black border-2 border-black"
          >
            Sign Up
          </button>
        </form>
      </div>
    </div>
  );
}
