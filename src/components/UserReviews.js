import UserReviewImg from "../assets/UserReviews.jpg";
import Avatar1 from "../assets/Avatar1.jpg";
import Avatar2 from "../assets/Avatar2.jpg";
import Avatar3 from "../assets/Avatar3.jpg";

const UserReviews = () => {
  return (
    <div className="relative">
      <img
        src={UserReviewImg}
        alt="User Review Background"
        className="opacity-50 object-contain"
      />
      <div class="w-fit mx-auto bg-[#637A9F]  p-10 rounded-lg shadow-md absolute top-36 left-10 right-10 ">
        <h1 class="text-4xl  mb-4 font-cursive font-cursive text-[#F94C10] font-bold text-center">
          User Reviews
        </h1>
        <p className="text-md text-white leading-relaxed pb-10 font-text text-center">
          Discover what our customers are saying about their experiences!
        </p>
        <div className="flex gap-10">
          <div class="bg-gray-50 rounded-lg p-4 mb-4 ">
            <h2 className="text-lg font-extrabold mb-2 text-[#22092C]">
              Luxury Beachfront Getaway in Maldives:
            </h2>
            <p class="text-gray-800 text-md mb-2">
              "Our stay at the luxury beachfront villa in the Maldives was
              absolutely breathtaking! From the moment we arrived, we were
              greeted with warm smiles and exceptional service. The villa itself
              was a paradise - spacious, elegantly furnished, and with direct
              access to the pristine white sand beach and crystal-clear waters.
              The resort's amenities were top-notch, from the infinity pool
              overlooking the ocean to the gourmet dining options that
              tantalized our taste buds. It was truly a dream holiday, and we
              can't wait to return!"
            </p>
            <div className="flex items-center gap-5">
              <img
                src={Avatar1}
                alt="John Doe"
                className=" rounded-full w-20 h-20 "
              />
              <p class="text-gray-600 text-md">- John Doe</p>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 mb-4 ">
            <h2 className="text-lg font-extrabold mb-2 text-[#22092C]">
              Cultural Exploration in Kyoto, Japan:
            </h2>
            <p class="text-gray-800 text-md mb-2">
              "Our cultural exploration trip to Kyoto, Japan, exceeded all
              expectations! Staying in a traditional ryokan immersed us in the
              rich history and traditions of Japan. The serene gardens,
              tatami-matted rooms, and soothing onsen baths offered a tranquil
              retreat after days spent exploring Kyoto's ancient temples,
              bustling markets, and serene bamboo groves. We sampled delicious
              local cuisine, participated in traditional tea ceremonies, and
              even had the opportunity to witness a mesmerizing geisha
              performance."
            </p>
            <div className="flex items-center gap-5">
              <img
                src={Avatar2}
                alt="John Doe"
                className=" rounded-full w-20 h-20 "
              />
              <p class="text-gray-600 text-md">- Jane Smith</p>
            </div>
          </div>

          <div class="bg-gray-50 rounded-lg p-4 mb-4 ">
            <h2 className="text-lg font-extrabold mb-2 text-[#22092C]">
              Adventure in the Amazon Rainforest, Brazil:
            </h2>
            <p class="text-gray-800 text-md mb-2">
              "Our adventure in the Amazon Rainforest was an unforgettable
              journey into the heart of nature's wonders! From navigating the
              winding rivers to trekking through dense jungle trails, every
              moment was filled with exhilarating experiences and breathtaking
              encounters with wildlife. Our eco-lodge provided a comfortable and
              sustainable base for exploration, with knowledgeable guides
              leading us on unforgettable wildlife spotting excursions and
              enlightening us about the importance of conservation efforts in
              the region!"
            </p>
            <div className="flex items-center gap-5">
              <img
                src={Avatar3}
                alt="John Doe"
                className=" rounded-full w-20 h-20 "
              />
              <p class="text-gray-600 text-md">- Michael Johnson</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserReviews;
