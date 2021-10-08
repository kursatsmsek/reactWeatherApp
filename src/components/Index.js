import React from 'react';
import { CityProvider } from './CityContext';
import Dropdown from './DropDown';
import { useState } from 'react'; 
import CityInformation from './CityInformation';
import WeatherInfo from './WeatherInfo';

function Index() {
    const [currentCity, setCurrentCity] = useState({
        "id": 58,
        "name": "Sivas",
        "latitude": "39.7477",
        "longitude": "37.0179",
        "population": 618617,
        "region": "İç Anadolu"
      });

    return (
        <CityProvider>
            <div className="contentBody">
                <Dropdown setCurrentCity={setCurrentCity}/>
                <CityInformation currentCity={currentCity}/>
                <WeatherInfo currentCity={currentCity}/>
            </div>
        </CityProvider>
    )
}

export default Index;