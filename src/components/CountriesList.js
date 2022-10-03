import React, { useEffect, useState } from 'react';
import '../styles/CountriesList.css';
import { Country } from './Country';

export const CountriesList = ({keyword}) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    (async() => {
      const req = await fetch('https://restcountries.com/v3.1/all');
      const res = await req.json();
      setCountries(res);
      setFilteredCountries(res);
    })()
  }, [])

  useEffect(() => {
    setFilteredCountries(() => {
      const f = countries.filter(c => c.name.common.toLowerCase().includes(keyword.toLowerCase()) ||
                                      c.capital?.filter(cap => cap.toLowerCase().includes(keyword.toLowerCase())).length ||
                                      (c.languages && Object.values(c.languages).filter(lang => lang.toLowerCase().includes(keyword.toLowerCase())).length));
      return f;
    })
  }, [keyword])

  return (
    <div className="countries-container">
      { filteredCountries.map((country) => (
        <Country props={country} />
      ))}
    </div>
  )
}