import React, { useState } from "react";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import AboutUs from "./components/AboutUs";
import Destinations from "./components/DestinationList";
import Package from "./components/PlacesGallery";
import DestinationCard from "./components/DestinationCard";
import AvailableDestinations from "./components/AvailableDestinations";
import RegisterForm from "./components/Register";
import LoginForm from "./components/Login";
import AboutRoamingRoutes from "./components/About";

function App() {
  return (
    <Router>
      <div>
        <NavBar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/About" element={<AboutRoamingRoutes />} />

          <Route path="/DestinationList" element={<Destinations />} />
          <Route path="/PlacesGallery" element={<Package />} />
          <Route path="/destination-card" element={<DestinationCard />} />
          <Route
            path="/AvailableDestinations"
            element={<AvailableDestinations />}
          />
          <Route path="/RegisterForm" element={<RegisterForm />} />
          <Route path="/LoginForm" element={<LoginForm />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
