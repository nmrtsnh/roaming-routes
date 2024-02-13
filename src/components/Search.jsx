const Search = () => {
  return (
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
  );
};

export default Search;
