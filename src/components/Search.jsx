import React, { useState } from "react";

import { Link, useNavigate } from "react-router-dom";

import DestinationData from "../assets/data/destinations.json";

const Search = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleCheckAvailability = () => {
    const filteredDestinations = DestinationData.filter((destination) =>
      destination.city.toLowerCase().includes(searchTerm.toLowerCase())
    );

    navigate("/AvailableDestinations", { state: { filteredDestinations } });
  };

  return (
    <div className="bg-[#FFF8E3] md:p-10 p-10   flex flex-col lg:flex-row md:justify-center  gap-10 md:items-end mb-20 md:mx-32 mx-10 rounded-lg ">
      <div className="flex flex-col mr-4">
        <label htmlFor="destination" className="font-semibold mb-2 text-3xl">
          Search your next holiday
        </label>
        <input
          type="text"
          id="destination"
          list="destinations"
          placeholder="Enter a destination"
          className="border border-gray-300 sm:w-96 p-2 rounded-lg"
          value={searchTerm}
          onChange={handleSearchChange}
        />
        <datalist id="destinations">
          {DestinationData.map((destination, index) => (
            <option value={destination.city} key={index} />
          ))}
        </datalist>
      </div>

      <Link to="/AvailableDestinations">
        <button
          type="submit"
          onClick={handleCheckAvailability}
          className="bg-[#45FFCA] py-3 px-8 rounded-lg hover:bg-[#FF004D] hover:text-white font-bold"
        >
          Check Availability
        </button>
      </Link>
    </div>
  );
};

export default Search;
