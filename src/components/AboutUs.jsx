import AboutUsImg from "../assets/AboutUs.jpg";

import { FaCrown } from "react-icons/fa6";
import { GiWorld } from "react-icons/gi";
import { FaHandHoldingDollar } from "react-icons/fa6";

const AboutUs = () => {
  return (
    <div>
      <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-screen-xl px-4 py-8 ">
        <div className="md:w-1/2">
          <h2 className="text-4xl  mb-6 font-cursive font-cursive text-[#F94C10] font-bold text-center ">
            Why Choose Us?
          </h2>
          <h1 className="text-4xl font-bold mb-24 text-center ">
            Discover unparalleled experiences.
          </h1>
          <div className="flex justify-between">
            <div className="flex flex-col items-center ">
              <FaCrown className="text-red-500 mb-4" size={40} />
              <h2 className="text-lg mb-4 font-extrabold">
                Tailored Experience
              </h2>
              <p className="w-48 text-center">
                Enjoy personalized and customized travel experiences designed to
                match your preferences, interests, and budget, guaranteeing a
                unique and unforgettable journey.
              </p>
            </div>
            <div className="flex flex-col items-center ">
              <GiWorld className="text-red-500 mb-4" size={40} />
              <h2 className="text-lg mb-4 font-extrabold">
                Wide Range of Options
              </h2>
              <p className="w-48 text-center">
                Our website provides a diverse selection of travel options,
                including flights, hotels, car rentals, vacation packages, and
                activities.
              </p>
            </div>
            <div className="flex flex-col items-center">
              <FaHandHoldingDollar className="text-red-500 mb-4" size={40} />
              <h2 className="text-lg mb-4 font-extrabold">
                Competitive Pricing
              </h2>
              <p className="w-48 text-center">
                We pride ourselves on offering competitive prices and exclusive
                promotions that cater to savvy travelers like you. With
                affordable options and special deals, finding your dream getaway
                has never been easier.
              </p>
            </div>
          </div>
          <div className="flex items-center justify-center">
            <button className="text-lg bg-[#45FFCA] hover:bg-[#FF004D] text-black hover:text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline">
              Know More About Us
            </button>
          </div>
        </div>
        <div className="md:w-1/2">
          {" "}
          <a href="http://www.freepik.com" className="font-xs ">
            <img
              src={AboutUsImg}
              alt="Couples Roaming around"
              className="w-full md:h-auto md:max-h-full object-cover"
            />
            Designed by stories / Freepik
          </a>
        </div>
      </div>
    </div>
  );
};
export default AboutUs;
