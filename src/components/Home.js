import Hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-center md:justify-between mx-auto max-w-screen-xl px-4 py-8 ">
      <div className="md:w-1/2">
        <h2 className="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold">
          Embark on Unforgettable Journeys
        </h2>
        <h1 className="text-4xl font-bold mb-6">
          Discover your Next Adventure
        </h1>
        <p className="text-md text-black leading-relaxed pb-10 font-text">
          Welcome to Roaming Routes, where every journey begins with
          possibility. Explore breathtaking destinations, immerse yourself in
          diverse cultures, and create memories that last a lifetime. From
          tranquil beaches to bustling cities, our curated selection of
          destinations offers something for every traveler. Start planning your
          dream getaway today and let the adventure unfold!
        </p>
        <button className="text-lg bg-[#45FFCA] hover:bg-[#FF004D] text-black hover:text-white font-bold py-4 px-6 rounded focus:outline-none focus:shadow-outline">
          Start Exploring
        </button>
      </div>
      <div className="md:w-1/2">
        {" "}
        <a href="http://www.freepik.com" className="font-xs ">
          <img
            src={Hero}
            alt="Couples Roaming around"
            className="w-full md:h-auto md:max-h-full object-cover"
          />
          Designed by stories / Freepik
        </a>
      </div>
    </div>
  );
};

export default Home;
