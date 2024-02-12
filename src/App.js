import React, { useState } from "react";
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Search from "./components/Search";
import Destination from "./components/DestinationList";
import PopularTours from "./components/PopularTours";
import AboutUs from "./components/AboutUs.js";
import Newsletter from "./components/Newsletter.js";
import UserReview from "./components/UserReviews.js";
import Footer from "./components/Footer.js";
import PlacesGallery from "./components/PlacesGallery.js";
import RegisterForm from "./components/Register.js";

function App() {
  const [showRegisterorm, setShowRegisterForm] = useState(false);
  return (
    <div>
      <NavBar onRegisterClick={() => setShowRegisterForm(!showRegisterorm)} />
      <Home />
      <Search />
      <Destination />
      <PopularTours />
      <AboutUs />
      <Newsletter />
      <UserReview />
      <PlacesGallery />
      <Footer />
      {showRegisterorm && <RegisterForm />}
    </div>
  );
}

export default App;
