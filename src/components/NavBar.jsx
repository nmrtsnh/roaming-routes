import React, { useState } from "react";

import { Link, NavLink } from "react-router-dom";

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
    {
      id: 5,
      link: "Contact",
      path: "/Contact",
    },
  ];

  const handleLinkClick = (path) => {
    setActiveLink(path);
    setIsActive(false);
  };

  return (
    <div>
      <header className="bg-[#637A9F]">
        <nav className="h-24 flex justify-between items-center px-10 py-10">
          <a
            href="/Home"
            className="text-white text-2xl font-signature header-text"
          >
            Roaming Routes
          </a>

          <ul
            className={`lg:flex lg:justify-between text-xl items-center lg:gap-10  ${
              isActive ? "flex" : "hidden"
            } nav-menu`}
          >
            {navItems.map((item) => (
              <li
                key={item.id}
                className=""
                onClick={() => handleLinkClick(item.path)}
              >
                <NavLink
                  to={item.path}
                  className={`text-white hover:text-gray-300 transition duration-300 ease-in-out ${
                    activeLink === item.path ? "font-bold" : ""
                  }`}
                >
                  {item.link}
                </NavLink>
              </li>
            ))}
            <div className="lg:hidden ">
              <Link to="/LoginForm">
                <button className="px-4 py-2 text-white font-bold rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-blue-300">
                  Login
                </button>
              </Link>
              <Link to="/RegisterForm">
                <button className="px-4 py-2 bg-[#45FFCA] hover:text-white  font-bold text-lg rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-green-300">
                  Register
                </button>
              </Link>
            </div>
          </ul>

          <div
            className={`lg:flex gap-4 min-[320px]:hidden ${
              isActive ? "flex" : "hidden"
            } text-xl`}
          >
            <Link to="/LoginForm">
              <button className="px-4 py-2 text-white font-bold rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-blue-300">
                Login
              </button>
            </Link>
            <Link to="/RegisterForm">
              <button className="px-4 py-2 bg-[#45FFCA] hover:text-white  font-bold text-lg rounded-md hover:bg-[#FF004D] focus:outline-none focus:ring focus:ring-green-300">
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
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-white "></span>
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-white "></span>
            <span className="bar block w-10 h-1 rounded-md mx-auto my-2 transition-all duration-300 ease-in-out bg-white "></span>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default NavBar;
