import React, { useState, useEffect } from 'react';

const Weather = () => {
  const [weather, setWeather] = useState(null);
  const API_KEY = 'YOUR_API_KEY'; // Replace with your actual API key
  const CITY = 'New York'; // Replace with your desired city

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${CITY}&appid=${API_KEY}`)
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setWeather(data);
      })
      .catch(error => {
        console.error('There was a problem fetching the weather data:', error);
      });
  }, [API_KEY, CITY]);

  if (!weather) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2>Current Weather</h2>
      <p>Temperature: {weather.main.temp}°C</p>
      <p>Condition: {weather.weather[0].main}</p>
    </div>
  );
};

export default Weather;
