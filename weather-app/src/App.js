import React, { useState, useEffect} from 'react';
import axios from 'axios';

function App() {
  const [weather, setWeather] = useState(null);
  const [city, setCity] = useState('Delhi');
  const [loading, setLoading] = useState(true);
useEffect(() => {
  const fetchWeather = async () => {
    setLoading(true);
    const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=12dc1d93cf39adff22e58c471bcfcedf`);
    setWeather(response.data);
    setLoading(false);
  };
  fetchWeather();
}, [city]);

  return (
    <div className="App">
      <h1>Weather App</h1>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>{weather.name}</h2>
          <p>Temperature: {weather.main.temp} K</p>
          <p>Weather: {weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default App;
