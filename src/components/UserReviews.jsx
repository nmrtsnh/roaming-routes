import Avatar1 from "../assets/Avatar1.jpg";
import Avatar2 from "../assets/Avatar2.jpg";
import Avatar3 from "../assets/Avatar3.jpg";
import Avatar4 from "../assets/Avatar4.jpg";
import Avatar5 from "../assets/Avatar5.jpg";
import Avatar6 from "../assets/Avatar6.jpg";

import { FaArrowAltCircleRight } from "react-icons/fa";
import { FaArrowAltCircleLeft } from "react-icons/fa";

import { useState } from "react";

const customerReviews = [
  {
    id: 1,
    title: "Luxury Beachfront Getaway in Maldives",
    review:
      "Our stay at the luxury beachfront villa in the Maldives was absolutely breathtaking! From the moment we arrived, we were greeted with warm smiles and exceptional service. The villa itself was a paradise - spacious, elegantly furnished, and with direct access to the pristine white sand beach and crystal-clear waters. The resort's amenities were top-notch, from the infinity pool overlooking the ocean to the gourmet dining options that tantalized our taste buds. It was truly a dream holiday, and we can't wait to return!",
    reviewer: {
      name: "John Doe",
      avatar: Avatar1,
    },
  },
  {
    id: 2,
    title: "Cultural Exploration in Kyoto, Japan",
    review:
      "Our cultural exploration trip to Kyoto, Japan, exceeded all expectations! Staying in a traditional ryokan immersed us in the rich history and traditions of Japan. The serene gardens, tatami-matted rooms, and soothing onsen baths offered a tranquil retreat after days spent exploring Kyoto's ancient temples, bustling markets, and serene bamboo groves. We sampled delicious local cuisine, participated in traditional tea ceremonies, and even had the opportunity to witness a mesmerizing geisha performance.",
    reviewer: {
      name: "Jane Smith",
      avatar: Avatar2,
    },
  },
  {
    id: 3,
    title: "Adventure in the Amazon Rainforest, Brazil",
    review:
      "Our adventure in the Amazon Rainforest was an unforgettable journey into the heart of nature's wonders! From navigating the winding rivers to trekking through dense jungle trails, every moment was filled with exhilarating experiences and breathtaking encounters with wildlife. Our eco-lodge provided a comfortable and sustainable base for exploration, with knowledgeable guides leading us on unforgettable wildlife spotting excursions and enlightening us about the importance of conservation efforts in the region!",
    reviewer: {
      name: "Michael Johnson",
      avatar: Avatar3,
    },
  },
  {
    id: 4,
    title: "Enchanting Experience in Santorini",
    review:
      "Our trip to Santorini was nothing short of magical. From the stunning sunsets over the caldera to the charming whitewashed buildings nestled along the cliffs, every moment felt like a dream. Exploring the island's hidden gems and indulging in delicious Greek cuisine made our stay unforgettable!",
    reviewer: {
      name: "Sophia Williams",
      avatar: Avatar4,
    },
  },
  {
    id: 5,
    title: "Adventures in the Swiss Alps",
    review:
      "Our adventure in the Swiss Alps was exhilarating! We hiked through picturesque valleys, scaled breathtaking peaks, and even tried our hand at skiing. The fresh mountain air, crystal-clear lakes, and majestic landscapes left us in awe at every turn. It was truly an experience of a lifetime!",
    reviewer: {
      name: "Benjamin Thompson",
      avatar: Avatar5,
    },
  },
  {
    id: 6,
    title: "Luxury Beachfront Getaway in Maldives",
    review:
      "Exploring the streets of Rome felt like stepping back in time. From the awe-inspiring Colosseum to the grandeur of the Vatican City, every landmark told a story of ancient glory. Sampling authentic Italian cuisine and wandering through charming piazzas added to the charm of this timeless city!",
    reviewer: {
      name: "Isabella Rossi",
      avatar: Avatar6,
    },
  },
];

const UserReviews = () => {
  const [startIndex, setStartIndex] = useState(0);
  const reviewsPerPage = 3;

  const handlePrevClick = () => {
    if (startIndex > 0) {
      setStartIndex(startIndex - reviewsPerPage);
    }
  };

  const handleNextClick = () => {
    if (startIndex + reviewsPerPage < customerReviews.length) {
      setStartIndex(startIndex + reviewsPerPage);
    }
  };

  return (
    <div>
      <div className="w-fit mx-auto bg-[#637A9F]  p-10 rounded-lg shadow-md  ">
        <h1 className="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold text-center">
          User Reviews
        </h1>
        <p className="text-md text-white leading-relaxed pb-10 font-text text-center">
          Discover what our customers are saying about their experiences!
        </p>
        <div className="grid lg:grid-cols-3   h-full gap-10 z-50 ">
          {customerReviews
            .slice(startIndex, startIndex + reviewsPerPage)
            .map((review) => (
              <div
                key={review.id}
                className="bg-gray-50 rounded-lg p-4 mb-4 review-animation h-full "
              >
                <h2 className="text-lg font-extrabold mb-2 text-[#22092C]">
                  {review.title}
                </h2>
                <p className="text-gray-800 text-md mb-2">{review.review}</p>
                <div className="flex items-center gap-5">
                  <img
                    src={review.reviewer.avatar}
                    alt={review.reviewer.name}
                    className="rounded-full w-20 h-20"
                  />
                  <p className="text-gray-600 text-md">
                    - {review.reviewer.name}
                  </p>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-between mt-4">
          <button
            className="text-lg bg-[#D7E4C0] hover:bg-[#E493B3] text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            onClick={handlePrevClick}
            disabled={startIndex === 0}
          >
            <FaArrowAltCircleLeft className="w-10 h-10" />
          </button>
          <button
            className="text-lg bg-[#D7E4C0] hover:bg-[#E493B3] text-black hover:text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
            onClick={handleNextClick}
            disabled={startIndex + reviewsPerPage >= customerReviews.length}
          >
            <FaArrowAltCircleRight className="w-10 h-10" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
