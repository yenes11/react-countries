import React from 'react';
import '../styles/Header.css';

export const Header = ({ count, keyWord }) => {
  return (
    <header>
      <h1>WORLD COUNTRIES DATA</h1>
      <span>Currently, we have 250 countries</span>
      { keyWord.length > 0 && (
        <small>{`${count} satisfied the search criteria`}</small>
      )}
    </header>
  )
}