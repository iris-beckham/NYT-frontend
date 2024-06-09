import { useState } from "react";
import Archive from "./Archive";
import Presidents from "./Presidents";
import Forms from "./Forms";
import BabyNames from "./BabyNames";
import Weather from "./Weather";
import MilkPricesChart from "./MilkPricesChart";
import MTAPrices from "./MTAPrices";

const LandingPage = () => {
  const date = new Date();
  const [searchInputs, setSearchInputs] = useState({
    year: 2023,
    month: date.getMonth(),
    day: 1,
  });
  const [loading, setLoading] = useState(true);
  return (
    <div className="mt-14">
      <div className="bg-red-400">
        <Forms searchInputs={searchInputs} setSearchInputs={setSearchInputs} />
        <div>
          <Archive
            searchInputs={searchInputs}
            loading={loading}
            setLoading={setLoading}
          />
          <Presidents
            searchInputs={searchInputs}
            loading={loading}
            setLoading={setLoading}
          />
          <BabyNames
            searchInputs={searchInputs}
            loading={loading}
            setLoading={setLoading}
          />
          <Weather searchInputs={searchInputs} />
          <div className="bg-slate-100">
            <MilkPricesChart />
            <MTAPrices />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
