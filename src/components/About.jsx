import React from "react";
import AboutUsBgImg from "../assets/AboutUsBgImg.jpg";

const AboutRoamingRoutes = () => {
  return (
    <div
      className=" mx-auto px-4 py-8 bg-cover bg-center "
      style={{ backgroundImage: `url(${AboutUsBgImg})` }}
    >
      <div className="max-w-4xl mx-auto">
        <div className="bg-white  p-8 rounded-lg shadow-lg">
          <h1 className="text-4xl font-bold text-gray-800 mb-8 text-center">
            Welcome to Roaming Routes
          </h1>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Welcome to Roaming Routes, where every journey is an adventure
            waiting to unfold. Roaming Routes is your premier destination for
            discovering new horizons, creating unforgettable memories, and
            embracing the wanderlust within you. Established with a passion for
            exploration and a dedication to excellence, Roaming Routes is more
            than just a travel website; it's a gateway to a world of endless
            possibilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Whether you're dreaming of scaling majestic mountains, lounging on
            pristine beaches, or immersing yourself in vibrant cultures, we're
            here to turn your travel dreams into reality.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            At Roaming Routes, we understand that travel is not just about
            reaching your destination; it's about the journey itself—the moments
            of anticipation, the sights and sounds that stir your soul, and the
            connections forged along the way. That's why we're committed to
            curating unique and immersive experiences that go beyond the
            ordinary and leave a lasting impression.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Join us as we embark on a journey of exploration, camaraderie, and
            discovery, and connect with fellow travelers who share your
            enthusiasm for adventure.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Thank you for choosing Roaming Routes as your passport to adventure.
            Here's to the journey ahead—a journey filled with excitement,
            discovery, and endless possibilities.
          </p>
          <p className="text-lg text-gray-700 leading-relaxed mb-8">
            Happy travels! <br /> The Roaming Routes Team
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutRoamingRoutes;
