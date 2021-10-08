import React from 'react';
import { UseCities } from './CityContext';


function dropdown({ setCurrentCity }) {
    const cities = UseCities();

    const changeCity = (e) => {
        cities.map((city) => {
            if (city.name === e.target.value) {
                setCurrentCity(city);
            }
            return false;
        });
    };
    return (
        <div className="dropdown">
            <select defaultValue={"Sivas"} onChange={(e) => changeCity(e)}>
                {cities.map((city) => {
                    return <option key={city.id} value={city.name}>{city.name}</option>
                })}
            </select>
        </div>
    )
}

export default dropdown;