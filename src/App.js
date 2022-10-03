import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CountriesList } from './components/CountriesList';

function App() {
  const [keyWord, setKeyWord] = useState('');

  return (
    <div className="App">
      <Header />
      <SearchBar setkeyword={setKeyWord} />
      <CountriesList keyword={keyWord} />
    </div>
  );
}

export default App;
