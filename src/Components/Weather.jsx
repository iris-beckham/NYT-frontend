import React, { useEffect, useState } from "react";
import { convertTempToF } from "../Helpers/helpers";

const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY_MAIN;


const Weather = ({ searchInputs, loading }) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const date = `${searchInputs.year}-${String(searchInputs.month).padStart(
    2,
    "0"
  )}-${String(searchInputs.day).padStart(2, "0")}`;

  const backUpData = {
    days: [
      {
        conditions: "🌧️",
        temp: 13.33,
        tempmax: 15.56,
        tempmin: 10,
        feelslike: 12
      },
    ],
  };

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      // setLoading(true);
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
        // setLoading(false);
      }
    };

    fetchData();
  }, [date]);

  const getWeatherIcon = (condition) => {
    switch (condition.includes(',') ? condition.split(',')[0].toLowerCase() : condition.toLowerCase()) {
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

  // if (loading) return null;
  const { year, month, day } = searchInputs;
  return (
    <div className="weather-container hover:scale-105 hover:shadow-lg hover:shadow-grey-200">
      <h1 className="dm-serif-text-regular">Weather</h1>
      {data && data.days && (
        <div>
          <h2>{data.days[0].conditions ? getWeatherIcon(data.days[0].conditions) : "🌡️"}</h2>
          <p className="dm-serif-text-regular">Temperature: {convertTempToF(data.days[0].temp)}°F</p>
          <p className="dm-serif-text-regular">Max Temperature: {convertTempToF(data.days[0].tempmax)}°F</p>
          <p className="dm-serif-text-regular">Min Temperature: {convertTempToF(data.days[0].tempmin)}°F</p>
          <p className="dm-serif-text-regular">Feels Like: {convertTempToF(data.days[0].feelslike)}°F</p>
        </div>
      )}
    </div>
  );
};

export default Weather;