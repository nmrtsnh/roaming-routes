import React from "react";
import { FaFacebookSquare } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";

import FooterImg1 from "../assets/FooterImg1.jpg";
import FooterImg2 from "../assets/FooterImg2.jpg";
import FooterImg3 from "../assets/FooterImg3.jpg";
import FooterImg4 from "../assets/FooterImg4.jpg";

const about = {
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  socials: [
    {
      name: "Facebook",
      icon: FaFacebookSquare,
      link: "https://facebook.com",
    },
    {
      name: "Twitter",
      icon: FaSquareXTwitter,
      link: "https://twitter.com",
    },
    {
      name: "Instagram",
      icon: FaSquareInstagram,
      link: "https://instagram.com",
    },
    {
      name: "Linkedin",
      icon: FaLinkedin,
      link: "https://linkedin.com",
    },
  ],
};

const links = [
  { title: "Home", href: "/" },
  { title: "About", href: "/about" },
  // ... add other links
];

const services = [
  { title: "Travel Agency", href: "/services/travel-agency" },
  { title: "Tour", href: "/services/tour" },
  // ... add other services
];

const photos = [
  { src: FooterImg1, alt: "Description" },
  { src: FooterImg2, alt: "Description" },
  { src: FooterImg3, alt: "Description" },
  { src: FooterImg4, alt: "Description" },
];

const FooterSection = ({ title, children }) => (
  <div className="text-white">
    <h5 className="text-xl font-bold mb-4">{title}</h5>
    {children}
  </div>
);

const Footer = () => {
  return (
    <footer className="bg-[#637A9F] text-gray-400 py-8 px-4">
      <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
        {/* About Section */}
        <FooterSection title="About us">
          <p>{about.description}</p>
          <div className="flex space-x-4 mt-4">
            {about.socials.map((social) => (
              <a
                key={social.name}
                href={social.link}
                target="_blank"
                rel="noopener noreferrer"
              >
                {social.name === "Facebook" && <FaFacebookSquare size={30} />}
                {social.name === "Instagram" && <FaSquareInstagram size={30} />}
                {social.name === "Twitter" && <FaSquareXTwitter size={30} />}
                {social.name === "Linkedin" && <FaLinkedin size={30} />}
              </a>
            ))}
          </div>
        </FooterSection>

        {/* Links Section */}
        <FooterSection title="Links">
          <ul>
            {links.map((link) => (
              <li key={link.title}>
                <a href={link.href} className="hover:underline">
                  {link.title}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Services Section */}
        <FooterSection title="Services">
          <ul>
            {services.map((service) => (
              <li key={service.title}>
                <a href={service.href} className="hover:underline">
                  {service.title}
                </a>
              </li>
            ))}
          </ul>
        </FooterSection>

        {/* Photo Showcase Section */}
        <FooterSection title="Photo Showcase">
          <div className="grid grid-cols-4 gap-2">
            {photos.map((photo) => (
              <img
                key={photo.src}
                src={photo.src}
                alt={photo.alt}
                className="w-18 h-24"
              />
            ))}
          </div>
        </FooterSection>
      </div>

      <div className="text-center text-gray-500 text-sm mt-8">
        Copyright By@Example - 2020
      </div>
    </footer>
  );
};

export default Footer;
