import React, { useState } from "react";
import DestinationData from "../assets/data/destinations.json";

import ParisImage from "../assets/ParisInNight.jpg";
import TokyoImage from "../assets/Tokyo.jpg";
import NewYorkCityImage from "../assets/NewYorkCity.jpg";
import LondonImage from "../assets/London.jpg";
import DubaiImage from "../assets/Dubai1.jpg";
import SingaporeImage from "../assets/Singapore.jpg";
import IstanbulImage from "../assets/Istanbul.jpg";
import SeoulImage from "../assets/Seoul.jpg";
import BangkokImage from "../assets/Bangkok.jpg";
import BarcelonaImage from "../assets/Barcelona1.jpg";
import SydneyImage from "../assets/Sydney.jpg";
import Romeimage from "../assets/Rome.jpg";
import LosAngelesImage from "../assets/LosAngeles.jpg";
import BerlinImage from "../assets/Berlin.jpg";
import AmsetrdamImage from "../assets/Amsterdam.jpg";
import SeychellesImage from "../assets/Seychelles.jpg";

let image = {
  p1: ParisImage,
  p2: TokyoImage,
  p3: NewYorkCityImage,
  p4: LondonImage,
  p5: DubaiImage,
  p6: SingaporeImage,
  p7: IstanbulImage,
  p8: SeoulImage,
  p9: BangkokImage,
  p10: BarcelonaImage,
  p11: SydneyImage,
  p12: Romeimage,
  p13: LosAngelesImage,
  p14: BerlinImage,
  p15: AmsetrdamImage,
  p16: SeychellesImage,
};

const AvailableDestinations = () => {
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const filteredDestinations = DestinationData.filter((destination) => {
    const normalizedSearchQuery = searchQuery.toLowerCase();

    return (
      destination.city.toLowerCase().includes(normalizedSearchQuery) ||
      (destination.country &&
        destination.country.toLowerCase().includes(normalizedSearchQuery))
    );
  });

  return (
    <div className="w-fit mx-auto px-4 mt-5">
      <h1 className="text-3xl font-bold mb-8">Available Destinations</h1>
      <div className="mb-4">
        <input
          type="text"
          placeholder="Search by city or country"
          className="border border-gray-300 p-2  w-full"
          value={searchQuery}
          onChange={handleSearchChange}
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-20 ">
        {filteredDestinations.map((destination) => (
          <div
            key={destination.id}
            className="bg-white shadow-lg rounded-lg p-3 available-destination-animation cursor-pointer"
          >
            <img
              src={image[destination.id]}
              alt={destination.city}
              className=" w-80 h-96  "
            />
            <h2 className="text-3xl font-normal mt-4 mb-4 font-cursive text-center text-[#940B92]">
              {destination.city}
            </h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableDestinations;
