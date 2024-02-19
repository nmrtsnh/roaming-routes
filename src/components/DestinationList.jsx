import React, { useEffect, useState } from "react";

import Santorini from "../assets/Santorini.jpg";
import Paris from "../assets/Paris.jpg";
import Maui from "../assets/Maui.jpg";
import CapeTown from "../assets/CapeTown.jpg";
import Dubai from "../assets/Dubai.jpg";
import Kyoto from "../assets/Kyoto.jpg";
import NewYork from "../assets/NewYork.jpg";
import QueensTown from "../assets/Queenstown.jpg";
import RioDeJaneiro from "../assets/RiodeJaneiro.jpg";
import Barcelona from "../assets/Barcelona.jpg";

const destinations = [
  {
    id: 1,
    name: "Santorini",
    location: "Greece",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Santorini,
  },
  {
    id: 2,
    name: "Paris",
    location: "France",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Paris,
  },
  {
    id: 3,
    name: "Maui",
    location: "Hawaii",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Maui,
  },
  {
    id: 4,
    name: "Cape Town",
    location: "South Africa",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: CapeTown,
  },
  {
    id: 5,
    name: "Dubai",
    location: "UAE",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Dubai,
  },
  {
    id: 6,
    name: "Kyoto",
    location: "Japan",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Kyoto,
  },
  {
    id: 7,
    name: "New York",
    location: "USA",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: NewYork,
  },
  {
    id: 8,
    name: "Queenstown",
    location: "New Zealand",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: QueensTown,
  },
  {
    id: 9,
    name: "Rio de Janeiro",
    location: "Brazil",
    price: "$45.21",
    rating: getRandomRating(),
    src: RioDeJaneiro,
  },
  {
    id: 10,
    name: "Barcelona",
    location: "Spain",
    price: getRandomPrice(),
    rating: getRandomRating(),
    src: Barcelona,
  },
];

function getRandomPrice() {
  return `$${(Math.random() * (100 - 20) + 20).toFixed(2)}`;
}

function getRandomRating() {
  return +(Math.random() * (5 - 3) + 3).toFixed(1);
}

const DestinationCard = ({ destination, index }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsVisible(true);
    }, (index + 1) * 600);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <div
      id={`destination-${destination.id}`}
      className={`w-fit rounded overflow-hidden shadow-lg mb-8 animation ${
        isVisible ? "animate-slide-in" : ""
      }`}
    >
      <img
        className=" w-96 h-96 object-cover cursor-pointer "
        src={destination.src}
        alt={destination.name}
      />
      <div className="flex justify-between">
        <div className="px-6 py-4">
          <p className="font-bold text-xl mb-2 cursor-pointer ">
            {destination.name}, {destination.location}
          </p>

          <p className="text-gray-900 text-xl font-bold">{destination.price}</p>
        </div>
        <div className="px-6 pt-8 pb-2">
          <span className="inline-block bg-yellow-400 rounded-full px-3 py-1 text-sm font-semibold text-gray-900 mr-2 mb-2">
            ⭐ {destination.rating}
          </span>
        </div>
      </div>
    </div>
  );
};

const DestinationList = () => {
  return (
    <div className=" flex  flex-col items-center  mb-20">
      <div className="text-center mb-10">
        <h2 className="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold">
          Unforgettable Expeditions
        </h2>
        <h1 className="text-4xl font-bold mb-6">
          Choose your dream destination
        </h1>
      </div>
      <div className="grid grid-cols-3 gap-10">
        {destinations.map((destination, index) => (
          <DestinationCard
            key={destination.name}
            destination={destination}
            index={index}
          />
        ))}
      </div>
      <button className="text-lg bg-[#45FFCA] hover:bg-[#FF004D] text-black hover:text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline ">
        Show More
      </button>
    </div>
  );
};

export default DestinationList;
