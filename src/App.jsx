import React from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
// import Results from "./Pages/Results";

import AboutTheDevs from "./Components/AboutTheDevs";
const App = () => {
  return (
    <div>
      <h1>Welcome</h1>

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about-us" element={<AboutTheDevs />} />
        {/* <Route path="/results" element={<Results />} /> */}
      </Routes>
    </div>
  );
};

export default App;
