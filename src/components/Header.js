import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <h1>Leonel Deodoro</h1>
      <p>Transforme seu corpo e mente com Pilates. Agende sua aula experimental em Nova Iguaçu!</p>
    </header>
  );
}

export default Header;
