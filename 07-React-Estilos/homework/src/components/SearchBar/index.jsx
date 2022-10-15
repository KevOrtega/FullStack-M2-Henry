import React from 'react';
import SearchStyles from "./index.module.css"

export default function SearchBar(props) {
  // acá va tu código
  return <div className={SearchStyles.searchBar}>
    <input placeholder="ciudad..." />
    <div>
      <button onClick={() => props.onSearch('New York')}>guardar</button>
      <button onClick={() => props.onSearch('New York')}>guardar</button>
    </div>
  </div>
};