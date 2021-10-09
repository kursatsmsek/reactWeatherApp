import React from 'react';


function CityInformation({ currentCity }) {
    return (
        <div className="cityInfo">
            <h4>{currentCity.region} Bölgesi</h4>
            <h4>Nüfus: {currentCity.population}</h4>
            <h4>Plaka Kodu: {currentCity.id}</h4>
        </div>
    )
}

export default CityInformation;
