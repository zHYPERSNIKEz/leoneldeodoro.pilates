import React from 'react';
import './Header.scss';

const Header = () => {
  return (
    <header className="header">
      <img src="/profile.jpg" alt="Profile" className="profile-pic" />
      <h1>Leonel Deodoro</h1>
      <p>✨ Saúde e bem-estar com Pilates e Fisioterapia</p>
      <p>📍 Estamos em Nova Iguaçu – Bairro da Luz</p>
    </header>
  );
}

export default Header;
