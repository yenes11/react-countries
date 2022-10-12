import { useState } from 'react';
import './App.css';
import { Header } from './components/Header';
import { SearchBar } from './components/SearchBar';
import { CountriesList } from './components/CountriesList';

function App() {
  const [keyWord, setKeyWord] = useState('');
  const [resultCount, setResultCount] = useState(0);

  return (
    <div className="App">
      <Header keyWord={keyWord} count={resultCount} />
      <SearchBar setkeyword={setKeyWord} />
      <CountriesList setCount={setResultCount} keyword={keyWord} />
    </div>
  );
}

export default App;
