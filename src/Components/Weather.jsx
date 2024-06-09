import React, { useEffect, useState } from "react";
import { convertTempToF } from "../Helpers/helpers";
const keysArray = import.meta.env.VITE_WEATHER.split(" ");
let keyIndex = 0;

const Weather = ({ searchInputs }) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [date, setDate] = useState("");
  const date = `${searchInputs.year}-${String(searchInputs.month).padStart(2, '0')}-${String(searchInputs.day).padStart(2, '0')}`;
  // Get today's date in YYYY-MM-DD format


  useEffect(() => {
    if (!date) return;

    const fetchData = async (key) => {
      setLoading(true);
      let url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york/${date}/${date}?unitGroup=metric&key=${key}&contentType=json`;

      try {
        const response = await fetch(url);
        if (response.status === 429) {
          keyIndex = keyIndex === keysArray.length - 1 ? 0 : keyIndex + 1;
          fetchData(keysArray[1]);
        }
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData(keysArray[0]);
  }, [date]);


  const getWeatherIcon = (condition) => {
    switch (condition.toLowerCase()) {
      case "partially cloudy":
        return "⛅️";
      case "raining":
        return "🌧️";
      case "snowing":
        return "❄️";
      case "sunny":
        return "☀️";
      case "cloudy":
        return "☁️";
      case "thunderstorm":
        return "⛈️";
      default:
        return "🌡️"; // Default weather icon
    }
  };

  // const maxDate = getCurrentDate();

  return (
    <div>
      <h2>Weather</h2>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && data.days && (
        <div>
          <p>
            Conditions: {data.days[0].conditions}{" "}
            {getWeatherIcon(data.days[0].conditions)}
          </p>
          <p>Temperature: {convertTempToF(data.days[0].temp)}°F</p>
          <p>Max Temperature: {convertTempToF(data.days[0].tempmax)}°F</p>
          <p>Min Temperature: {convertTempToF(data.days[0].tempmin)}°F</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
