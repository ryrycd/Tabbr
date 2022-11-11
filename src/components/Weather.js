import React from "react";
import "../styles/Weather.css";
import { useState, useEffect } from "react";

const Weather = () => {
  const [errorMsg, setErrorMsg] = useState("");
  const [weatherData, setWeatherData] = useState([]);
  const [weatherIcon, setWeatherIcon] = useState("");

  //gets the current location from geolocation and uses the lat and lon values as parameters for obtaining weather data
  const getWeather = async () => {


    (function() {
        // Load the script
        var script = document.createElement("SCRIPT");
        script.src = 'https://ajax.googleapis.com/ajax/libs/jquery/3.6.0/jquery.min.js';
        script.type = 'text/javascript';
        script.onload = function() {
            var $ = window.jQuery;
          $(function() {
            let apiKey = '665888c05b154f19982134897ae167ba';
            $.getJSON('https://api.ipgeolocation.io/ipgeo?apiKey=' + apiKey, function(data) {
              let IPLatitude = (JSON.stringify(data.latitude, null, 2));
              let IPLongitude = (JSON.stringify(data.longitude, null, 2));
              console.log(IPLatitude);
              console.log(IPLongitude);
            });
            });
        };
        document.getElementsByTagName("head")[0].appendChild(script);
    })();
    
      

        const response = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?lat=${IPLatitude}&lon=${IPLongitude}&appid=${process.env.REACT_APP_OPENWEATHER_KEY}`
        );
        const data = await response.json();
        setWeatherData(data);

        data && data.weather && setWeatherIcon(require(`../assets/${data.weather[0].icon}.png`).default);
  

    function showError(error) {
      switch (error.code) {
        case error.PERMISSION_DENIED:
          setErrorMsg("Enable location for Weather App");
          break;
        case error.POSITION_UNAVAILABLE:
          setErrorMsg("Location is unavailable.");
          break;
        case error.TIMEOUT:
          setErrorMsg("Location timed out");
          break;
        case error.UNKNOWN_ERROR:
          setErrorMsg("An unknown error occurred.");
          break;
        default:
          setErrorMsg("An unknown error occurred.");
      }
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
