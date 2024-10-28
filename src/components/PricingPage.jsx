// src/pages/PricingPage.jsx
import React from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  { name: 'Paris, France', price: '$1,200' },
  { name: 'Tokyo, Japan', price: '$1,500' },
  { name: 'New York, USA', price: '$900' },
  { name: 'Sydney, Australia', price: '$1,800' },
  { name: 'Rome, Italy', price: '$1,000' },
  { name: 'Cape Town, South Africa', price: '$1,400' },
  { name: 'London, UK', price: '$1,200' },
  { name: 'Bangkok, Thailand', price: '$800' },
  { name: 'Rio de Janeiro, Brazil', price: '$1,300' },
];

const PricingPage = () => {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-4xl font-semibold text-center mb-6">Explore Our Packages</h1>
      <p className="text-center mb-12">
        Choose from a variety of exciting destinations and affordable packages.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-xl"
          >
            <h2 className="text-xl font-semibold text-gray-800">{destination.name}</h2>
            <p className="text-lg font-bold text-blue-900 mt-2">{destination.price}</p>
            <Link
              to={`/book/${destination.name.toLowerCase().replace(/, /g, '-').replace(/ /g, '-')}`}
              className="block text-center mt-4 bg-pink-300 text-white rounded-lg py-2 transition duration-300 hover:bg-pink-400"
            >
              Book Now
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PricingPage;
