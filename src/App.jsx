import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
// import Results from "./Pages/Results";

import AboutTheDevs from "./Components/AboutTheDevs";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
const App = () => {

  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutTheDevs />} />
        {/* <Route path="/results" element={<Results />} /> */}
      </Routes>
      <Footer />
    </div>
  );

};

export default App;
