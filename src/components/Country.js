import React from 'react';
import '../styles/Country.css';

export const Country = ({props: {name, flags, capital, languages, population}}) => {
  
  
  return (
    <div className="country-container">
      <div className="flag-container">
        <img src={flags.svg} alt={`${name.common} flag`} /> 
      </div>
      <h3>{name.common}</h3> 
      <span><b>Capital: </b>{capital}</span> 
      <span><b>Languages: </b>{languages && Object.values(languages).join(', ')}</span> 
      <span><b>Population: </b>{population.toLocaleString()}</span>
    </div>
    )
  }