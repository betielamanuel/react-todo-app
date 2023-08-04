// src/components/Weather.js
import React, { useState } from 'react';
import axios from 'axios';

const Weather = () => {
const [weatherData, setWeatherData] = useState(null);
const [city, setCity] = useState('');

const apiKey = 'e4fc14bf3168e99d8db3b40b4857938e'; // Replace with your OpenWeatherMap API key

const fetchWeather = async () => {
    try {
    const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    setWeatherData(response.data);
    setCity('');
    } catch (error) {
    console.error('Error fetching weather data:', error);
    }
};

return (
    <div>
    <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Enter city name"
    />
    <button onClick={fetchWeather}>Get Weather</button>
    {weatherData && (
        <div>
        <h3>Weather in {weatherData.name}</h3>
        <p>Temperature: {weatherData.main.temp}°C</p>
        <p>Weather: {weatherData.weather[0].description}</p>
        </div>
    )}
    </div>
);
};

export default Weather;
