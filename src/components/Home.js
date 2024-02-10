import Hero from "../assets/hero.jpg";

const Home = () => {
  return (
    <div>
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
            destinations offers something for every traveler. Start planning
            your dream getaway today and let the adventure unfold!
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
      <div class="bg-[#FFF8E3] p-4 flex justify-center gap-10 items-end mb-20 mx-32 rounded-lg">
        <div class="flex flex-col mr-4">
          <label for="destination" class="font-semibold mb-2">
            Where
          </label>
          <input
            type="text"
            id="destination"
            placeholder="Your destination"
            class="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div class="flex flex-col mr-4">
          <label for="date" class="font-semibold mb-2">
            Date
          </label>
          <input
            type="date"
            id="date"
            class="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <div class="flex flex-col mr-4">
          <label for="guests" class="font-semibold mb-2">
            Guests
          </label>
          <input
            type="number"
            id="guests"
            placeholder="Select Person"
            class="border border-gray-300 p-2 rounded-lg"
          />
        </div>
        <button
          type="submit"
          class="bg-[#45FFCA] text-black py-4 px-8 rounded-lg hover:bg-[#FF004D] hover:text-white"
        >
          Check Availability
        </button>
      </div>
    </div>
  );
};

export default Home;
