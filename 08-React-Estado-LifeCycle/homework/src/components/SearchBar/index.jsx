import React, { useState } from 'react';
import SearchStyles from "./index.module.css"

export default function SearchBar({onSearch}) {
  // acá va tu código
  const [city, setCity] = useState('')

  return <form
    className={SearchStyles.searchBar}
    onSubmit={(e) => {
      e.preventDefault();
      onSearch(city);
    }
  }>
    <input
      onChange={(e) => setCity(e.target.value)}
      placeholder="ciudad..."
      value={city}
    />
    <div>
      <button>guardar</button>
      <button type="submit">guardar</button>
    </div>
  </form>
};