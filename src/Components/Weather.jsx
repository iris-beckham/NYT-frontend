import React, { useEffect, useState } from "react";

const Weather = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [date, setDate] = useState("");

  // Get today's date in YYYY-MM-DD format
  const getCurrentDate = () => {
    const today = new Date();
    const year = today.getFullYear();
    const month = String(today.getMonth() + 1).padStart(2, "0");
    const day = String(today.getDate()).padStart(2, "0");
    return `${year}-${month}-${day}`;
  };

  useEffect(() => {
    if (!date) return;

    const fetchData = async () => {
      setLoading(true);
      const url = `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/new%20york/${date}/${date}?unitGroup=metric&key=GH4YX7EG5W558XW4VAGE8B6UN&contentType=json`;

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

  const handleDateChange = (e) => {
    setDate(e.target.value);
  };

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

  const minDate = "1970-01-01";
  const maxDate = getCurrentDate();

  return (
    <div>
      <h2>Weather</h2>
      <label>
        Select Date:
        <input
          type="date"
          value={date}
          onChange={handleDateChange}
          min={minDate}
          max={maxDate}
        />
      </label>
      {loading && <div>Loading...</div>}
      {error && <div>Error: {error}</div>}
      {data && data.days && (
        <div>
          <p>
            Conditions: {data.days[0].conditions}{" "}
            {getWeatherIcon(data.days[0].conditions)}
          </p>
          <p>Temperature: {data.days[0].temp}°C</p>
          <p>Max Temperature: {data.days[0].tempmax}°C</p>
          <p>Min Temperature: {data.days[0].tempmin}°C</p>
        </div>
      )}
    </div>
  );
};

export default Weather;
