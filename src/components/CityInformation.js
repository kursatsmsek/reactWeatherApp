import React from 'react';


function CityInformation({ currentCity }) {
    return (
        <div>
            <h1>City Information</h1>
            <div className="cityInfo">
                <h3>{currentCity.name}</h3>
                <h4>Bölge: {currentCity.region}</h4>
                <h4>Nüfus: {currentCity.population}</h4>
                <h4>Plaka: {currentCity.id}</h4>
            </div>
        </div>
    )
}

export default CityInformation;
