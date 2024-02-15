const TripCategory = () => {
  return (
    <div className="">
      <h1 className="text-white  mb-3 mt-48 text-g font-extrabold font-text">
        Type of Trip
      </h1>
      <div>
        <ul className="text-md font-text font-bold">
          <li className="mb-2 flex gap-2">
            <input type="radio" id="anything" name="travel-category" />
            <label htmlFor="anything" className="text-white">
              Anything
            </label>
          </li>
          <li className="mb-2  flex gap-2">
            <input type="radio" id="city" name="travel-category" />
            <label htmlFor="city" className="text-white">
              City
            </label>
          </li>
          <li className="mb-2 flex gap-2">
            <input type="radio" id="beach" name="travel-category" />
            <label htmlFor="beach" className="text-white">
              Beach
            </label>
          </li>
          <li className="mb-2 flex gap-2">
            <input type="radio" id="family" name="travel-category" />
            <label htmlFor="family" className="text-white">
              Family
            </label>
          </li>
          <li className="mb-2 flex gap-2">
            <input type="radio" id="romantic" name="travel-category" />
            <label htmlFor="romantic" className="text-white">
              Romantic
            </label>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default TripCategory;
