import React, { useState } from 'react';
import axios from "axios";

const Api = () => {
    const [city, setCity] = useState("");
    const [weather, setWeather] = useState("");
    const [temp, setTemp] = useState("");
    const [desc, setDesc] = useState("");
    const [wind, setWind] = useState("");
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const handleCity = (e) => {
        setCity(e.target.value);
        setError("");
    };

    const getWeather = async () => {
        if (!city.trim()) {
            setError("Please enter a city name");
            return;
        }

        try {
            setLoading(true);
            setError("");
            const response = await axios.get(
                `https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city.trim())}&appid=393befdae029ff7cb90d1cac1c67ff5e`);

            if (!response.data || !response.data.weather || !response.data.weather[0]) {
                throw new Error("Invalid weather data received");
            }

            setWeather(response.data.weather[0].main || "N/A");
            setTemp(response.data.main?.temp ? (response.data.main.temp - 273.15).toFixed(1) : "N/A");
            setDesc(response.data.weather[0].description || "N/A");
            setWind(response.data.wind?.speed?.toString() || "N/A");
        } catch (error) {
            if (error.response?.status === 404) {
                setError("City not found.");
            } else {
                setError(error.message || "Failed to fetch weather data.");
            }

            setWeather("");
            setTemp("");
            setDesc("");
            setWind("");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="min-h-screen bg-gray-50 flex items-center justify-center p-4">
            <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
                <h1 className="text-2xl font-bold text-center text-gray-800 mb-2">Weather App</h1>
                <p className="text-center text-gray-500 mb-6">Check current weather conditions</p>
                
                <div className="flex mb-4">
                    <input value={city} onChange={handleCity}onKeyPress={(e) => e.key === 'Enter' && getWeather()}type="text"placeholder="Enter city name"
                        className="flex-1 border border-gray-300 rounded-l-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"/>
                    <button onClick={getWeather}disabled={loading || !city.trim()}
                        className="bg-blue-600 text-white px-4 py-2 rounded-r-lg hover:bg-blue-700 disabled:opacity-50"
                    >
                        {loading ? 'Searching...' : 'Search'}
                    </button>
                </div>

                {error && (
                    <div className="bg-red-100 text-red-700 p-3 rounded-lg mb-4 text-sm">
                        {error}
                    </div>
                )}

                {weather && (
                    <div className="space-y-4">
                        <div className="bg-gray-100  rounded-lg p-4 text-center">
                            <h2 className="text-sm text-gray-500 mb-1">Current Weather</h2>
                            <p className="text-2xl font-bold text-gray-800">{weather}</p>
                        </div>

                        <div className="grid grid-cols-2 gap-3">
                            <WeatherCard title="Temperature" value={`${temp}°C`} icon="🌡️"/>
                            <WeatherCard title="Wind Speed" value={`${wind} m/s`} icon="💨"/>
                            <WeatherCard title="Description" value={desc} icon="ℹ️"/>
                            <WeatherCard title="Conditions" value={weather} icon="☁️"/>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};

const WeatherCard = ({ title, value, icon }) => (
    <div className="bg-white border border-gray-200 rounded-lg p-3">
        <div className="flex items-center space-x-2">
            <span className="text-xl">{icon}</span>
            <div>
                <h3 className="text-xs text-gray-500">{title}</h3>
                <p className="font-medium text-gray-800">{value}</p>
            </div>
        </div>
    </div>
);

export default Api;