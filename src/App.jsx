import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
// import Results from "./Pages/Results";

import AboutTheDevs from "./Components/AboutTheDevs";
import NavBar from "./Components/NavBar";
import Footer from "./Components/Footer";
const App = () => {

  const date = new Date();

  const [searchInputs, setSearchInputs] = useState({
    year: 2023,
    month: date.getMonth(),
    day: 1,
  });

  return (
    <div>
      <NavBar searchInputs={searchInputs} setSearchInputs={setSearchInputs} />
      <Routes>
        <Route path="/" element={<LandingPage searchInputs={searchInputs} />} />
        <Route path="/about-us" element={<AboutTheDevs />} />
      </Routes>
      <Footer />
    </div>
  );
};

export default App;
