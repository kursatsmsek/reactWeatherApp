import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';

function WeatherInfo({ currentCity }) {
    const [forecast, setForecast] = useState([]);

    useEffect(() => {
        console.log('değişti');
        axios.get('https://api.collectapi.com/weather/getWeather', {
            params: {
                'data.lang': 'tr',
                'data.city': currentCity.name,
            },
            headers: {
                'authorization': 'apikey 7HjsrHZX6VUFVHn3j8M9rJ:62LsBYAm7PqOR4YD68dJbJ',
                'content-type': 'application/json',
            }
        })
            .then((data) => setForecast(data.data['result']))
            .catch((err) => console.error(err));    
    }, [currentCity]);

    function float2int (value) {
        return value | 0;
    }
    return (
        <>
            <div className="weatherInfoBox">
                {forecast.map((day) => {
                    return <div key={day.date} className="dayInfo">
                        <span className="dayName">{day.day}</span>
                        <br />
                        <div className="weatherImg">
                            <img alt="Weather Status" src={day.icon}></img>
                        </div>
                        <br />
                        <div className="status">
                            <span className="min">{float2int(day.min)}&#176;</span>
                            <span className="max">{float2int(day.max)}&#176;</span>
                        </div>
                        <hr />
                        <div className="dayDate">{day.date}</div>
                    </div>
                })}
            </div>
        </>
    )
}

export default WeatherInfo;
