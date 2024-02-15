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

import Budget from "../components/Budget";

import { FaHeart } from "react-icons/fa";
import TripCategory from "./TripCategory";
import Favorites from "./Favorites";

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

const DestinationCard = () => {
  const [selectCategory, setSelectCategory] = useState("All");
  const [selectedBudget, setSelectedBudget] = useState(2000);

  const handleCategoryChange = (category) => {
    setSelectCategory(category);
  };

  const handleBudgetChange = (budget) => {
    setSelectedBudget(budget);
  };
  return (
    <div>
      <div className="flex">
        <div className="p-10 bg-[#2B2A4C] shadow-lg w-fill">
          <Budget handleBudgetChange={handleBudgetChange} />
          <TripCategory />
          <Favorites />
        </div>

        <div>
          <div className="flex min-[320px]:flex-wrap sm:items-center min-[320px]:items-center min-[320px]:justify-center sm:justify-center  sm:gap-10  gap-10 mt-10  font-extrabold  ">
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "All" ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleCategoryChange("All")}
              >
                All
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "Europe" ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleCategoryChange("Europe")}
              >
                Europe
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "Asia" ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleCategoryChange("Asia")}
              >
                Asia
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "North America"
                    ? "text-red-500"
                    : "text-black"
                }`}
                onClick={() => handleCategoryChange("North America")}
              >
                North America
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "Africa" ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleCategoryChange("Africa")}
              >
                Africa
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "Australia" ? "text-red-500" : "text-black"
                }`}
                onClick={() => handleCategoryChange("Australia")}
              >
                Australia and Oceania
              </button>
            </div>
            <div>
              <button
                className={`cursor-pointer ${
                  selectCategory === "Midle East"
                    ? "text-red-500"
                    : "text-black"
                }`}
                onClick={() => handleCategoryChange("Middle East")}
              >
                Middle East
              </button>
            </div>
          </div>

          <div className="grid grid-cols-3 gap-10 ml-10 mr-10 mt-10 w-fit">
            {DestinationData.filter((destination) => {
              if (
                selectCategory !== "All" &&
                destination.category !== selectCategory
              ) {
                return false;
              } else {
                return (
                  parseInt(destination.price.substring(1)) <= selectedBudget
                );
              }
            }).map((item) => (
              <div key={item.id} className="bg-[#FFF8E3] rounded-lg">
                <div className=" relative">
                  <img
                    src={image[item.id]}
                    alt={item.city}
                    className="w-96 h-60 rounded-lg"
                  />
                  <FaHeart
                    className=" absolute top-5 right-5 cursor-pointer "
                    color="#B80000"
                    size={20}
                  />
                </div>

                <div className="flex justify-between mx-2 mt-3 mb-3 text-md font-black text-black font-text">
                  <h1 className="">{item.city}</h1>
                  <p className="">
                    <span className="text-sm">from</span> {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DestinationCard;
