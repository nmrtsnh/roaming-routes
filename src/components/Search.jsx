import React from "react";

import { Link } from "react-router-dom";

const Search = () => {
  return (
    <div className="bg-[#FFF8E3] p-4 flex justify-center gap-10 items-end mb-20 mx-32 rounded-lg">
      <div className="flex flex-col mr-4">
        <label htmlFor="destination" className="font-semibold mb-2 text-3xl">
          Search your next holiday
        </label>
        <input
          type="text"
          id="destination"
          list="destinations"
          placeholder="Enter a destination"
          className="border border-gray-300 w-96 p-2 rounded-lg"
        />
        <datalist id="destinations">
          <option value="Paris" />
          <option value="Tokyo" />
          <option value="New York City" />
          {/* Add more options as needed */}
        </datalist>
      </div>

      <Link to="/AvailableDestinations">
        <button
          type="submit"
          className="bg-[#45FFCA] py-3 px-8 rounded-lg hover:bg-[#FF004D] hover:text-white font-bold"
        >
          Check Availability
        </button>
      </Link>
    </div>
  );
};

export default Search;
