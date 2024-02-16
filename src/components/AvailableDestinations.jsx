import React, { useState } from "react";
import DestinationData from "../assets/data/destinations.json";

const AvailableDestinations = () => {
  const [searchQuery, setSearchQuery] = useState(""); // State to hold the search query

  // Function to update the search query
  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  // Function to filter destinations based on the search query
  const filteredDestinations = DestinationData.filter((destination) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();
    // Check if the city or country includes the search query
    return (
      destination.city.toLowerCase().includes(normalizedSearchQuery) ||
      (destination.country &&
        destination.country.toLowerCase().includes(normalizedSearchQuery))
    );
  });

  return (
    <div className="container mx-auto px-4">
      <h1 className="text-3xl font-bold mb-8">Available Destinations</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by city or country"
          className="border border-gray-300 p-2 rounded-lg w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white shadow-lg rounded-lg p-6"
          >
            <h2 className="text-xl font-semibold mb-2">{destination.city}</h2>
            {destination.country && (
              <p className="text-gray-600 mb-2">
                Country: {destination.country}
              </p>
            )}
            <p className="text-gray-600 mb-2">Price: {destination.price}</p>
            <p className="text-gray-600">Category: {destination.category}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDestinations;
