import React from 'react';
import Logo from '../../logoHenry.png'
import SearchBar from '../SearchBar';
// import './Nav.css';

function Nav({onSearch}) {
  return (
    <nav>
      <img src={Logo} alt="Logo" />
      <SearchBar onSearch={onSearch} />
    </nav>
  );
};

export default Nav;
