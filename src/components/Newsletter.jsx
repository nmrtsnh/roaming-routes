import { useEffect, useState } from "react";

const Newsletter = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    function handleScroll() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const newsletterOffset = document.querySelector(
        ".newsletter-animation"
      ).offsetTop;

      if (scrollY + windowHeight >= newsletterOffset) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    }

    window.addEventListener("scroll", handleScroll);
    // Clean up the event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`bg-[#FFF8E3] p-10 ${isVisible ? "visible" : "hidden"}`}>
      <div className="w-fit mx-auto bg-white p-10 rounded-lg shadow-md newsletter-animation ">
        <h1 className="text-2xl font-bold mb-4">
          The Monthly Digest Newsletter
        </h1>
        <form action="#" method="post" className="flex">
          <input
            type="email"
            name="email"
            id="email"
            className="w-96 border rounded py-2 px-3 mr-2 focus:outline-none focus:border-blue-500"
            placeholder="Enter your email address"
          />
          <button
            type="submit"
            className="bg-[#45FFCA] text-black py-2 px-4 rounded focus:outline-none hover:bg-blue-600"
          >
            Subscribe
          </button>
        </form>
        <p className="mt-4 text-gray-600 text-sm">
          Stay connected our best offers
        </p>
      </div>
    </div>
  );
};

export default Newsletter;
