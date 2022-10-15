import React from 'react';
import './App.css';
import Card from './components/Card';
import Cards from './components/Cards';
import SearchBar from './components/SearchBar';
import data, { Cairns } from './data.js';

function App() {
  return (
    <div className="App">
      <div className='cardContainer'>
        <Card
          max={Cairns.main.temp_max}
          min={Cairns.main.temp_min}
          name={Cairns.name}
          img={Cairns.weather[0].icon}
          onClose={() => alert(Cairns.name)}
        />
      </div>
      <hr />
      <div>
        <Cards
          cities={data}
        />
      </div>
      <hr />
      <div>
        <SearchBar
          onSearch={(ciudad) => alert(ciudad)}
        />
      </div>
    </div>
  );
}

export default App;
