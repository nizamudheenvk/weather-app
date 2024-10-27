import React, { useState } from 'react';

const Weather = () => {
    const [city, setCity] = useState('kakkanad');
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchWeather = async () => {
        try {
            const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=8ac5c4d57ba6a4b3dfcf622700447b1e&units=metric`);
            if (!response.ok) {
                throw new Error('City not found');
            }
            const weatherData = await response.json();
            setData(weatherData);
            setError(null);
        } catch (err) {
            setError(err.message);
            setData(null);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        fetchWeather();
    };

    return (
        <div style={{ 
            display: "flex", 
            justifyContent: "center", 
            alignItems: "center", 
            height: "100vh", 
            padding: "20px",
            backgroundColor: "rgba(255, 255, 255, 0.8)", 
            borderRadius: "20px" 
        }}>
            <div style={{ width: "100%", maxWidth: "600px", padding: "20px", borderRadius: "20px", boxShadow: "0 4px 20px rgba(0, 0, 0, 0.1)" }}>
                <form onSubmit={handleSubmit} style={{ display: "flex", marginBottom: "20px" }}>
                    <input
                        style={{ flex: 1, marginRight: "10px", padding: "10px", fontSize: "16px", borderRadius: "5px", border: "1px solid #ccc" }}
                        type="text"
                        placeholder='Enter city'
                        value={city}
                        onChange={(e) => setCity(e.target.value)}
                    />
                    <button type="submit" style={{ padding: "10px 20px", borderRadius: "5px", backgroundColor: "#007BFF", color: "white", border: "none" }}>Submit</button>
                </form>

                {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
                
                {data && (
                    <div style={{ textAlign: "center" }}>
                        <h2>{data.name}</h2>
                        <div style={{ display: "flex", justifyContent: "space-around", margin: "20px 0" }}>
                            <div>
                                <h3>Temperature:</h3>
                                <span style={{ color: "red", fontSize: "24px" }}>{data.main.temp} °C</span>
                            </div>
                            <div>
                                <h3>Weather:</h3>
                                <p style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px" }}>{data.weather[0].description}</p>
                            </div>
                        </div>
                        <div style={{ display: "flex", justifyContent: "space-around" }}>
                            <p style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px" }}>Humidity: {data.main.humidity}%</p>
                            <p style={{ backgroundColor: "blue", color: "white", padding: "10px", borderRadius: "5px" }}>Wind Speed: {data.wind.speed} m/s</p>
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Weather;