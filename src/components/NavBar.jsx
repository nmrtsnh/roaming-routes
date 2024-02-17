import React, { useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import RegisterForm from "./Register";

import { Link } from "react-router-dom";

const NavBar = () => {
  const [isActive, setIsActive] = useState(false);
  const [activeLink, setActiveLink] = useState("");

  const navItems = [
    {
      id: 1,
      link: "Home",
      path: "/Home",
    },
    {
      id: 2,
      link: "About Us",
      path: "/AboutUs",
    },
    {
      id: 3,
      link: "Destinations",
      path: "/DestinationList",
    },
    {
      id: 4,
      link: "Packages",
      path: "/PlacesGallery",
    },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsActive(false); // Close the mobile menu when a link is clicked
  };

  const handleRegisterClick = (event) => {
    event.stopPropagation(); // Prevent event propagation to parent elements
  };

  return (
    <div>
      <header className="bg-[#637A9F]">
        <nav className="h-24 flex justify-between items-center px-10 py-10">
          <a
            href="/logo"
            className="text-white text-2xl font-signature header-text"
          >
            Roaming Routes
          </a>

          <ul
            className={`lg:flex lg:justify-between items-center lg:gap-10 ${
              isActive ? "flex" : "hidden"
            } nav-menu`}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className="nav-menu"
                onClick={() => handleLinkClick(item.path)}
              >
                <NavLink
                  to={item.path}
                  activeClassName="font-bold" // Apply active styles
                  className={`text-white hover:text-gray-300 transition duration-300 ease-in-out ${
                    activeLink === item.path ? "font-bold" : ""
                  }`}
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
          </ul>

          <div
            className={`lg:flex gap-4 min-[320px]:hidden ${
              isActive ? "flex" : "hidden"
            } text-xl`}
          >
            <button className="px-4 py-2 text-white font-bold rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-blue-300">
              Login
            </button>
            <Link to="/RegisterForm">
              <button
                className="px-4 py-2 bg-[#45FFCA] text-black font-bold text-lg rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-green-300"
                onClick={handleRegisterClick}
              >
                Register
              </button>
            </Link>
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
