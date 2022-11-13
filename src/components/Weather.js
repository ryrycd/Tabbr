import React from "react";
import "../styles/Weather.css";
import { useState, useEffect } from "react";

const Weather = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState("");

var latitude;
var longitude;


  fetch('https://api.ipgeolocation.io/ipgeo?apiKey=665888c05b154f19982134897ae167ba')           //api for the get request
  .then(response => response.json())
  .then(data => {
    latitude = data.latitude;
   })
   .then(data => {
    longitude = data.longitude;
   })
  .then(data => console.log(data));
  


  //gets the current location from geolocation and uses the lat and lon values as parameters for obtaining weather data
  const getWeather = async () => {
    if (2/2 === 1) {

      

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);

        data && data.weather && setWeatherIcon(require(`../assets/${data.weather[0].icon}.png`).default);

    } else {
      setErrorMsg("Geolocation is not supported by this browser.");
    }

   
  };

  useEffect(() => {
    getWeather();
  }, []);

  const kelvinToFarenheit = (k) => {
    return Math.round((k - 273.15).toFixed(2));
  };

  return (
    <div className="weatherContainer">
      {weatherData && (
        <div className="weather-main">
          <div className="weather-header">
            {weatherData.weather && <img src={weatherIcon} alt="weather status icon" className="weather-icon" />}
            {weatherData.main && <h2 className="temp">{kelvinToFarenheit(weatherData.main.temp)}&deg; C</h2>}
          </div>
          <p className="weatherText">{weatherData.name}</p>
        </div>
      )}
      <p className="weather-error-msg">{errorMsg}</p>
    </div>
  );
};

export default Weather;
