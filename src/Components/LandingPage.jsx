import { useState } from "react";
import Archive from "./Archive";
import Presidents from "./Presidents";
import BabyNames from "./BabyNames";
import Weather from "./Weather";
import MilkPricesChart from "./MilkPricesChart";
import MTAPrices from "./MTAPrices";

const LandingPage = ({ searchInputs }) => {

  const [loading, setLoading] = useState(true);
  return (
    <div className="mt-24">
        <div>
          <Archive
            searchInputs={searchInputs}
            loading={loading}
            setLoading={setLoading}
          />
          <div className="widget-container">
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
          <Weather searchInputs={searchInputs} loading={loading}/>
            </div>
          <div className="bg-slate-100 flex justify-around">
          <div className="flex flex-row space-x-24">
            <MilkPricesChart />

            <MTAPrices />
          </div>
        </div>
        </div>
    </div>
  );
};

export default LandingPage;
