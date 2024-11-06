// src/pages/ContactPage.jsx
import React, { useState } from "react";
import { HiUser, HiMail, HiOutlineChat } from "react-icons/hi"; // Importing icons

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic (e.g., send data to server)
    alert(`Message sent from ${name}`);
    setName("");
    setEmail("");
    setMessage("");
  };

  return (
    <div className="min-h-screen bg-gradient-to-r from-[#D8B2E5] to-[#FFB6C1] flex items-center justify-center">
      <div className="container mx-auto p-8">
        <h1 className="text-4xl font-semibold text-center mb-6 text-white">Contact Us</h1>
        <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg">
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <HiUser className="text-gray-400 w-8 h-8 p-2" /> {/* Increased icon size */}
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#D8B2E5] rounded"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <HiMail className="text-gray-400 w-8 h-8 p-2" /> {/* Increased icon size */}
            <input
              type="email"
              placeholder="Your Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#D8B2E5] rounded"
              required
            />
          </div>
          <div className="mb-4 flex items-center border border-gray-300 rounded">
            <HiOutlineChat className="text-gray-400 w-8 h-8 p-2" /> {/* Increased icon size */}
            <textarea
              placeholder="Your Message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              className="w-full p-3 focus:outline-none focus:ring-2 focus:ring-[#D8B2E5] rounded"
              rows="4"
              required
            />
          </div>
          <button type="submit" className="bg-[#FFB6C1] text-white p-2 rounded hover:bg-[#DB7093] transition duration-200 w-full">
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
