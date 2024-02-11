import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Destination from "./components/DestinationList";
import PopularTours from "./components/PopularTours";
import AboutUs from "./components/AboutUs.js";
import Newsletter from "./components/Newsletter.js";
import UserReviews from "./components/UserReview.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Destination />
      <PopularTours />
      <AboutUs />
      <Newsletter />
      <UserReviews />
    </div>
  );
}

export default App;
