import React from "react";

import ParisFoodAndWineTesting from "../assets/ParisFoodAndWIneTesting.jpg";
import CapeTownHike from "../assets/CapeTownHike.jpg";
import KyotoTeaExp from "../assets/KyotoTeaExperience.jpg";
import BarcelonaGaudiTours from "../assets/BarcelonaGaudiTours.jpg";
import IceLandNorthernLights from "../assets/IcelandNorthernLights.jpg";
import PragueCastleTour from "../assets/PragueCastleTour.jpg";

const Tours = [
  {
    id: 1,
    name: "Paris Food and Wine Tasting Tour",
    description:
      "Indulge in the culinary delights of Paris with a guided food and wine tasting tour through charming neighborhoods like Montmartre or Le Marais. Sample gourmet cheeses, pastries, chocolates, and fine wines while learning about French cuisine and culture.",
    location: "Paris, France",
    src: ParisFoodAndWineTesting,
    price: "$120",
    duration: "4 hours",
    rating: 4.8,
  },
  {
    id: 2,
    name: "Cape Town Table Mountain Hike",
    description:
      "Trek to the summit of Table Mountain for panoramic views of Cape Town and its surrounding landscapes. Choose from a variety of hiking trails, ranging from easy walks to challenging climbs, and marvel at the beauty of South Africa's iconic landmark.",
    location: "Cape Town, South Africa",
    src: CapeTownHike,
    price: "$150",
    duration: "3 hours",
    rating: 4.9,
  },
  {
    id: 3,
    name: "Kyoto Tea Ceremony Experience",
    description:
      " Immerse yourself in the tranquil ambiance of Kyoto with a traditional Japanese tea ceremony. Learn about the art of tea preparation, participate in a tea tasting session, and gain insights into the rich cultural heritage of Japan's ancient capital.",
    location: "Kyoto, Japan",
    src: KyotoTeaExp,
    price: "$150",
    duration: "3 hours",
    rating: 4.9,
  },
  {
    id: 4,
    name: "Barcelona Gaudi Architecture Tour",
    description:
      "Discover the architectural masterpieces of Antoni Gaudi on a guided tour of Barcelona's most iconic landmarks, including the Sagrada Familia, Park Guell, and Casa Batllo. Learn about Gaudi's visionary designs and his lasting impact on the city's skyline.",
    location: "Barcelona, Spain",
    src: BarcelonaGaudiTours,
    price: "$150",
    duration: "3 hours",
    rating: 4.9,
  },
  {
    id: 5,
    name: "Iceland Northern Lights Excursion",
    description:
      "Chase the elusive Northern Lights in Iceland on a guided excursion into the Icelandic wilderness. Hunt for the spectacular aurora borealis phenomenon against the backdrop of Iceland's dramatic landscapes and starry skies.",
    location: "Iceland",
    src: IceLandNorthernLights,
    price: "$150",
    duration: "3 hours",
    rating: 4.9,
  },
  {
    id: 6,
    name: "Prague Castle Tour",
    description:
      "Discover the architectural wonders of Prague Castle, one of the largest castle complexes in the world. Explore medieval fortifications, Gothic cathedrals, and Renaissance palaces while enjoying panoramic views of the city below.",
    location: "Prague",
    src: PragueCastleTour,
    price: "$150",
    duration: "3 hours",
    rating: 4.9,
  },
];

function PopularTours() {
  return (
    <div className=" mx-auto px-4 py-8 ">
      <h2 className="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold text-center">
        Discover our popular Tours
      </h2>
      <h1 className="text-4xl font-bold mb-6 text-center">
        Most Popular Tours
      </h1>
      <div className="container grid grid-cols-1 md:grid-cols-2 gap-10 cursor-pointer ">
        {Tours.map((tour) => (
          <div key={tour.id} className="box border rounded-lg  bg-[#FFF8E3] ">
            <img src={tour.src} alt={tour.name} className="box-img" />
            <div className="p-2 box-span">
              <h3 className="text-xl font-semibold pb-4">{tour.name}</h3>
              <p className="text-gray-600 xl:mb-2 ">{tour.location}</p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-10 mb-20">
        <button className="text-lg bg-[#45FFCA] hover:bg-[#FF004D] text-black hover:text-white font-bold py-4 px-12 rounded focus:outline-none focus:shadow-outline  ">
          Start More
        </button>
      </div>
    </div>
  );
}

export default PopularTours;
