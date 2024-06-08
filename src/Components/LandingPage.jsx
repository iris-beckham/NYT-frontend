import { useState } from "react";
import Archive from "./Archive";
import Forms from "./Forms";

const LandingPage = () => {
  const date = new Date();
  const [searchInputs, setSearchInputs] = useState({
    year: 2023,
    month: date.getMonth(),
  });
  return (
    <div>
      <div className="bg-red-400">
        <h1>LandingPage</h1>
        <Forms searchInputs={searchInputs} />
        <div>
          <Archive searchInputs={searchInputs} />
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default LandingPage;
