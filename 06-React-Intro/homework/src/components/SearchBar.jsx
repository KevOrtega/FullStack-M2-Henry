import React from 'react';

export default function SearchBar(props) {
  // acá va tu código
  return <div>
    <input placeholder="search city" />
    <button onClick={() => props.onSearch('New York')}>search</button>
  </div>
};