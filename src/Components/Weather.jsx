import React, { useEffect, useState } from "react";
import { convertTempToF } from "../Helpers/helpers";

const API_KEY = import.meta.env.VITE_REACT_APP_WEATHER_API_KEY_MAIN

const Weather = ({searchInputs}) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  // const [date, setDate] = useState("");
  const date = `${searchInputs.year}-${String(searchInputs.month).padStart(2, '0')}-${String(searchInputs.day).padStart(2, '0')}`;
  // Get today's date in YYYY-MM-DD format
  

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      setLoading(true);
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york/${date}/${date}?unitGroup=metric&key=${API_KEY}&contentType=json`;

      try {
        const response = await fetch(url);
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

    fetchData();
  }, [date]);

  // const handleDateChange = (e) => {
  //   // setDate(e.target.value);
  // };

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
  if(loading) return null;

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
