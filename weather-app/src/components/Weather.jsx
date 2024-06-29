import React, { useEffect, useRef, useState } from 'react';
import './Weather.css';
import search_icon from '../assets/search.png';
import Clear from '../assets/clear.png';
import Cloud from '../assets/cloud.png';
import Drizzle from '../assets/drizzle.png';
import Humidity from '../assets/humidity.png';
import Rain from '../assets/rain.png';
import Snow from '../assets/snow.png';
import Wind from '../assets/wind.png';

const Weather = () => {
  const inputRef = useRef();
  const [weatherData, setWeatherData] = useState({});

  const apikey = 'fc45444e178e8c949fddac3a564881c7'

  const allIcons = {
    "01d": Clear,
    "01n": Clear,
    "02d": Cloud,
    "02n": Cloud,
    "03d": Cloud,
    "03n": Cloud,
    "04d": Drizzle,
    "04n": Drizzle,
    "09d": Rain,
    "09n": Rain,
    "10d": Rain,
    "10n": Rain,
    "13d": Snow,
    "13n": Snow,
  };

  const search = async (city) => {
    if (city === "") {
      alert("Enter City Name");
      return;
    }
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apikey}`;

      const response = await fetch(url);
      const data = await response.json();

      if (!response.ok) {
        alert(data.message);
        return;
      }
      console.log(data);

      const icon = allIcons[data.weather[0].icon] || Clear;
      setWeatherData({
        humidity: data.main.humidity,
        windSpeed: data.wind.speed,
        temperature: Math.floor(data.main.temp),
        location: data.name,
        icon: icon,
      });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    search("Peshawar");
  }, []);

  return (
    <div className='weather'>
      <div className="search-bar">
        <input ref={inputRef} type="text" placeholder="Search for a city"/>
        <img src={search_icon} alt='' onClick={() => search(inputRef.current.value)}/>
      </div>

      {weatherData.icon && (
        <>
          <img src={weatherData.icon} alt='' className='weather-icon'/>
          <p className='temperature'>{weatherData.temperature}°c</p>
          <p className='location'>{weatherData.location}</p>

          <div className='weather-data'>
            <div className='col'>
              <img src={Humidity} alt=''/>
              <div>
                <p>{weatherData.humidity} %</p>
                <span>Humidity</span>
              </div>
            </div>

            <div className='col'>
              <img src={Wind} alt=''/>
              <div>
                <p>{weatherData.windSpeed} Km/h</p>
                <span>Wind Speed </span>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default Weather;