import React, { useState } from "react";
// import "../index.css";
// import Logo from "../assets/logo.png";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  // Define navigation items as an array of objects
  const navItems = [
    { text: "Home", link: "/home" },
    { text: "About", link: "/about" },
    { text: "Skill", link: "/skill" },
    { text: "Service", link: "/service" },
    { text: "Contact", link: "/contact" },
  ];

  return (
    <div>
      <header className=" bg-[#637A9F] ">
        <nav className="h-24 flex justify-between items-center px-10 py-10">
          <a
            href="/logo"
            className="text-white text-2xl font-signature header-text "
          >
            Roaming Routes
          </a>

          <ul
            className={`lg:flex lg:justify-between items-center lg:gap-10  ${
              isActive ? "flex" : "hidden"
            } nav-menu`}
          >
            {/* Map over the navItems array */}
            {navItems.map((item, index) => (
              <li key={index} className="list-none  ">
                <a
                  href={item.link}
                  className="text-white decoration-0 hover:text-[#1F1717] text-xl header-text"
                >
                  {item.text}
                </a>
              </li>
            ))}
          </ul>
          <div
            className={`lg:flex gap-4 min-[320px]:hidden ${
              isActive ? "flex" : "hidden"
            } text-xl`}
          >
            <button className="px-4 py-2  text-white font-bold rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-blue-300">
              Login
            </button>
            <button className="px-4 py-2 bg-[#45FFCA] text-black font-bold text-lg rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-green-300">
              Register
            </button>
          </div>

          <div
            className={`hamburger ${
              isActive ? "active" : ""
            } cursor-pointer lg:hidden`}
            onClick={() => setIsActive(!isActive)}
          >
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-amber-800 "></span>
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-amber-800 "></span>
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-amber-800 "></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;

// <a href="http://www.freepik.com">Designed by stories / Freepik</a>
