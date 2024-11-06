// src/pages/PricingPage.jsx
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const destinations = [
  { 
    name: 'Lofoten Islands, Norway', 
    price: '₹1,30,000', 
    image: 'src/assets/images/dest1.png', 
    description: 'Explore the dramatic fjords, scenic fishing villages, and northern lights.', 
    duration: '5 Days, 4 Nights',
    flights: 'Round-trip flights included',
    hotel: '4-star hotel accommodation',
    activities: ['Northern Lights tour', 'Fjord cruise', 'Fishing village visit'],
    inclusions: ['Airport transfers', 'Daily breakfast', 'Local guide']
  },
  { 
    name: 'Matera, Italy', 
    price: '₹1,20,000', 
    image: 'src/assets/images/dest2.png', 
    description: 'Experience ancient cave dwellings, stunning architecture, and rich history.', 
    duration: '6 Days, 5 Nights',
    flights: 'One-way flight included',
    hotel: '3-star boutique hotel',
    activities: ['Cave tour', 'Architecture walk', 'Wine tasting'],
    inclusions: ['Hotel pickup', 'Daily breakfast', 'Sightseeing passes']
  },
  { 
    name: 'Socotra Island, Yemen', 
    price: '₹85,000', 
    image: 'src/assets/images/dest3.png', 
    description: 'Discover alien-like landscapes, dragon blood trees, and unique flora.', 
    duration: '7 Days, 6 Nights',
    flights: 'Round-trip flights included',
    hotel: 'Eco-lodge accommodation',
    activities: ['Island tour', 'Botanical garden visit', 'Beach camping'],
    inclusions: ['Daily meals', 'Camping equipment', 'Local guide']
  },
  { 
    name: 'Faroe Islands, Denmark', 
    price: '₹1,50,000', 
    image: 'src/assets/images/pp4.png', 
    description: 'Experience lush cliffs, coastal views, and charming villages.', 
    duration: '8 Days, 7 Nights',
    flights: 'Round-trip flights included',
    hotel: '5-star coastal resort',
    activities: ['Village tours', 'Hiking cliffs', 'Bird watching'],
    inclusions: ['All meals', 'Guided hikes', 'Boat excursions']
  },
  { 
    name: 'Sapa, Vietnam', 
    price: '₹70,000', 
    image: 'src/assets/images/pp5.png', 
    description: 'Trek through terraced rice fields and enjoy mountain views and ethnic culture.', 
    duration: '4 Days, 3 Nights',
    flights: 'Local flights included',
    hotel: 'Mountain-view lodge',
    activities: ['Rice terrace trek', 'Cultural dance show', 'Local market visit'],
    inclusions: ['Airport transfers', 'Local guide', 'Daily breakfast']
  },
  { 
    name: 'Salento, Colombia', 
    price: '₹1,00,000',
    image: 'src/assets/images/pp6.png', 
    description: 'Visit colorful buildings, coffee plantations, and towering wax palms.', 
    duration: '5 Days, 4 Nights',
    flights: 'Round-trip flights included',
    hotel: 'Charming local inn',
    activities: ['Coffee plantation tour', 'Wax palm valley hike', 'Horseback riding'],
    inclusions: ['Guided tours', 'Breakfast and lunch', 'Local transportation']
  },
  { 
    name: 'Albarracín, Spain', 
    price: '₹90,000', 
    image: 'src/assets/images/pp7.png', 
    description: 'Explore a medieval village with pink-hued buildings and cobblestone streets.', 
    duration: '4 Days, 3 Nights',
    flights: 'Round-trip flights included',
    hotel: 'Historic town inn',
    activities: ['Medieval architecture tour', 'Castle visit', 'Local artisan workshop'],
    inclusions: ['Guided tours', 'Daily breakfast', 'Museum passes']
  },
  { 
    name: 'Isle of Skye, Scotland', 
    price: '₹75,000', 
    image: 'src/assets/images/pp8.png', 
    description: 'See rugged landscapes, fairy pools, cliffs, and hiking trails.', 
    duration: '3 Days, 2 Nights',
    flights: 'Local flights included',
    hotel: 'Traditional Scottish inn',
    activities: ['Fairy pools hike', 'Cliffside views', 'Local pub experience'],
    inclusions: ['Breakfast and dinner', 'Guided tours', 'Transport passes']
  },
  { 
    name: 'Palawan, Philippines', 
    price: '₹1,10,000', 
    image: 'src/assets/images/pp9.png', 
    description: 'Enjoy crystal-clear waters, limestone cliffs, and vibrant marine life.', 
    duration: '7 Days, 6 Nights',
    flights: 'Round-trip flights included',
    hotel: 'Beachfront resort',
    activities: ['Island hopping', 'Snorkeling', 'Beachside bonfire'],
    inclusions: ['Daily meals', 'Snorkeling gear', 'Guided excursions']
  }
];


const PricingPage = () => {
  const [selectedPackage, setSelectedPackage] = useState(null);
  const [showConfirmation, setShowConfirmation] = useState(false);

  const openModal = (destination) => {
    setSelectedPackage(destination);
    setShowConfirmation(false); // Reset confirmation state
  };

  const closeModal = () => {
    setSelectedPackage(null);
  };

  const confirmBooking = () => {
    setShowConfirmation(true); // Show confirmation pop-up
    setTimeout(() => {
      setShowConfirmation(false); // Hide it after a short delay
      closeModal(); // Close modal after confirmation
    }, 2000);
  };

  return (
    <div className="container mx-auto p-8 bg-[#eaf3fa]">
      <h1 className="text-4xl font-semibold text-center mb-6">Your Next Escape Starts Here !</h1>
      <p className="text-center mb-12">
      Find the perfect trip to match your wanderlust.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {destinations.map((destination, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6 transition duration-300 hover:shadow-xl"
          >
            <img 
              src={destination.image} 
              alt={destination.name} 
              className="w-full h-48 object-cover rounded-t-lg"
            />
            <h2 className="text-xl font-semibold text-gray-800 mt-4">{destination.name}</h2>
            <p className="text-lg font-bold text-blue-900 mt-2">{destination.price}</p>
            <button
              onClick={() => openModal(destination)}
              className="block text-center mt-4 bg-pink-300 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-pink-400"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>

      {/* Modal */}
      {selectedPackage && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 w-11/12 md:w-1/2 lg:w-1/3 shadow-lg relative">
            <button 
              onClick={closeModal} 
              className="absolute top-2 right-2 text-gray-600 hover:text-gray-900"
            >
              &times;
            </button>
            <img 
              src={selectedPackage.image} 
              alt={selectedPackage.name} 
              className="w-full h-48 object-cover rounded-lg mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{selectedPackage.name}</h2>
            <p className="text-lg font-bold text-blue-900 mt-2">{selectedPackage.price}</p>
            <p className="text-gray-700 mt-4">{selectedPackage.description}</p>
            <p className="text-gray-700 mt-2"><strong>Duration:</strong> {selectedPackage.duration}</p>
            <p className="text-gray-700 mt-2"><strong>Flights:</strong> {selectedPackage.flights}</p>
            <p className="text-gray-700 mt-2"><strong>Hotel:</strong> {selectedPackage.hotel}</p>
            <p className="text-gray-700 mt-2"><strong>Activities:</strong></p>
            <ul className="list-disc list-inside text-gray-700">
              {selectedPackage.activities.map((activity, index) => (
                <li key={index}>{activity}</li>
              ))}
            </ul>
            <p className="text-gray-700 mt-2"><strong>Inclusions:</strong></p>
            <ul className="list-disc list-inside text-gray-700">
              {selectedPackage.inclusions.map((inclusion, index) => (
                <li key={index}>{inclusion}</li>
              ))}
            </ul>
            <button 
              onClick={confirmBooking}
              className="block text-center mt-6 bg-pink-300 text-white rounded-lg py-2 px-6 transition duration-300 hover:bg-pink-400"
            >
              Confirm?
            </button>
          </div>
        </div>
      )}

      {/* Confirmation Pop-up */}
      {showConfirmation && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-4 text-center shadow-lg">
            <h3 className="text-2xl font-semibold text-black-600">Confirmed!</h3>
            <p>Your booking has been confirmed.</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PricingPage;
