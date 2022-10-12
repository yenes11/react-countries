import React from 'react';
import '../styles/SearchBar.css';

export const SearchBar = ({setkeyword}) => {
  return (
    <div className="search-container">
      <input type="text"
      onChange={(e) => setkeyword(e.target.value)}
      className='search-input'
      placeholder='Serach countries by name, city and languages'/>
    </div>
  )
}