import React from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Destination from "./components/DestinationList";
import PopularTours from "./components/PopularTours";
import AboutUs from "./components/AboutUs.js";

function App() {
  return (
    <div>
      <NavBar />
      <Home />
      <Search />
      <Destination />
      <PopularTours />
      <AboutUs />
    </div>
  );
}

export default App;
