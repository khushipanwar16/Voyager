import React, { useState } from "react";

export default function AllReviewsPage() {
  const [reviews, setReviews] = useState([
    { id: 1, name: "Alice", text: "Amazing experience with Voyager! Loved every moment!" },
    { id: 2, name: "Bob", text: "The best travel agency I've ever used. Everything was perfect!" },
    { id: 3, name: "Charlie", text: "Seamless bookings and great destinations. Highly recommend!" },
    { id: 4, name: "David", text: "Great customer service and very helpful staff!" },
    { id: 5, name: "Emma", text: "An unforgettable journey, everything was well organized!" },
    { id: 6, name: "Frank", text: "I highly appreciate the personal touch in the services!" },
  ]);
  
  const [name, setName] = useState("");
  const [text, setText] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Ensure both name and text fields are filled
    if (name && text) {
      const newReview = {
        id: reviews.length + 1, // Assign a new ID
        name,
        text,
      };

      setReviews((prevReviews) => [...prevReviews, newReview]); // Add the new review to the existing reviews
      setName(""); // Reset the name input
      setText(""); // Reset the text input
    }
  };

  return (
   
<div className="container mx-auto p-8 rounded-lg shadow-lg" style={{ background: 'linear-gradient(to right, #D8B2E5, #FFB6C1)'
 }}>


      <h1 className="text-4xl font-semibold text-center mb-6" style={{ color: '#4B0082' }}>
        - All Customer Reviews -
      </h1>
      
      {/* Review Submission Form */}
      <form onSubmit={handleSubmit} className="mb-8 bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-semibold mb-4 text-[#4B0082] ">Share Your Thoughts</h2>
        <div className="mb-4">
          <input
            type="text"
            placeholder="Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 transition duration-200"
            required
          />
        </div>
        <div className="mb-4">
          <textarea
            placeholder="Your Review"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded focus:outline-none focus:ring focus:ring-pink-300 transition duration-200"
            rows="4"
            required
          />
        </div>
        <button type="submit" className="bg-[#FFB6C1] text-white p-2 rounded hover:bg-[#DB7093] transition duration-200">
          Submit Review
        </button>
      </form>

      {/* Display Reviews */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {reviews.map((review) => (
          <div key={review.id} className="bg-white shadow-md rounded-lg p-6 transition duration-300 hover:shadow-xl">
            <h2 className="text-xl font-bold mb-2" style={{ color: '#FFB6C1' }}>
              {review.name}
            </h2>
            <p className="text-gray-700">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
