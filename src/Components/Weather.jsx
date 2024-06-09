import React, { useEffect, useState } from "react";
import { convertTempToF, writeOutMonth } from "../Helpers/helpers";

const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY_MAIN;

const Weather = ({ searchInputs }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const date = `${searchInputs.year}-${String(searchInputs.month).padStart(
    2,
    "0"
  )}-${String(searchInputs.day).padStart(2, "0")}`;

  const backUpData = {
    days: [
      {
        conditions: "Rain",
        temp: 13.33,
        tempmax: 15.56,
        tempmin: 10,
      },
    ],
  };

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      setLoading(true);
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york/${date}/${date}?unitGroup=metric&key=${API_KEY}&contentType=json`;

      try {
        const response = await fetch(url);
        if (!response.ok) {
          throw new Error("");
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
        setData(backUpData);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  // if (loading) return null;
  const { year, month, day } = searchInputs;
  return (
    <div>
      <h2>
        On {writeOutMonth(month)} {day}, {year} the weather was
      </h2>
      {loading && <div>Loading...</div>}
      {error && <div>{error}</div>}
      {data && data.days && (
        <div>
          <p>Temperature: {convertTempToF(data.days[0].temp)}°F</p>
          <p>Max Temperature: {convertTempToF(data.days[0].tempmax)}°F</p>
          <p>Min Temperature: {convertTempToF(data.days[0].tempmin)}°F</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
