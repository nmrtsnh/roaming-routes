import Australia from "../assets/Australia.jpg";
import Croatia from "../assets/Croatia.jpg";
import Greece from "../assets/Greece.jpg";
import Iceland from "../assets/Iceland.jpg";
import India from "../assets/India.jpg";
import Vietnam from "../assets/Vietnam.jpg";

function PlacesGallery() {
  // Define an array of place details
  const places = [
    { src: Australia, name: "Australia" },
    { src: Croatia, name: "Croatia" },
    { src: Greece, name: "Greece" },
    { src: Iceland, name: "Iceland" },
    { src: India, name: "India" },
    { src: Vietnam, name: "Vietnam" },
  ];

  return (
    <div className="mb-20">
      <h2 className="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold text-center mt-10">
        Our Special Destination
      </h2>
      <h1 className="text-4xl font-bold  text-center">
        "Discover the world's treasures with us!"
      </h1>
      <div className="grid grid-cols-3 gap-10 mt-10 mx-20">
        {/* Map over the places array to generate place cards */}
        {places.map((place, index) => (
          <div key={index} className="place-card">
            <img
              src={place.src}
              alt={place.name}
              className=" object-cover rounded-md cursor-pointer w-full h-full "
            />
            <div>
              <p className=" px-12 py-5   text-white font-extrabold text-6xl place-info">
                {place.name}
              </p>
              <button className="bg-[#E6A4B4] text-white px-32 py-4 rounded mt-2 place-btn text-2xl   ">
                Discover
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PlacesGallery;