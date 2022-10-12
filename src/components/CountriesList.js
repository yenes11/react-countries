import React, { useEffect, useState } from 'react';
import '../styles/CountriesList.css';
import { Country } from './Country';

export const CountriesList = ({keyword, setCount}) => {
  const [countries, setCountries] = useState([]);
  const [filteredCountries, setFilteredCountries] = useState([]);

  useEffect(() => {
    fetch('https://restcountries.com/v3.1/all').then(res => res.json()).then(res => {
      setCountries(res);
      setFilteredCountries(res);
    });
  }, [])

  useEffect(() => {
    setFilteredCountries(() => {
      const search = countries.filter(c => c.name.common.toLowerCase().includes(keyword.toLowerCase()) ||
                                      c.capital?.filter(cap => cap.toLowerCase().includes(keyword.toLowerCase())).length ||
                                      (c.languages && Object.values(c.languages).filter(lang => lang.toLowerCase().includes(keyword.toLowerCase())).length));
      setCount(search.length);
      return search;
    })
    // eslint-disable-next-line
  }, [keyword])

  return (
    <div className="countries-container">
      { filteredCountries.map((country) => (
        <Country key={country.cca2} props={country} />
      ))}
    </div>
  )
}