import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="https://via.placeholder.com/150" alt="Profile" className="profile-pic" />
      <h1>Leonel Deodoro</h1>
      <p>Pilates e bem-estar</p>
    </header>
  );
}

export default Header;
