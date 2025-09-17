<<<<<<< HEAD
import './App.css';
=======
import React from 'react';
import './App.scss';
import Header from './components/Header';
import Link from './components/Link';
import Footer from './components/Footer';
>>>>>>> dev

function App() {
  const links = [
    { title: 'Agende sua aula experimental', url: '#' },
    { title: 'Conheça nosso espaço', url: '#' },
    { title: 'Planos e preços', url: '#' },
    { title: 'Blog com dicas de saúde', url: '#' },
  ];

  return (
<<<<<<< HEAD
    <div className="container">
      <div className="profile">
        <img
          className="profile-picture"
          src="/minha-foto.jpg"
          alt="Profile"
        />
        <h1 className="profile-name">Leonel Deodoro Pilates</h1>
        <p className="profile-bio">Fisioterapeuta e Instrutor de Pilates</p>
      </div>
      <div className="links">
        <a
          href="#"
          className="link-button"
        >
          Agende sua Aula Experimental
        </a>
        <a
          href="#"
          className="link-button"
        >
          Planos e Preços
        </a>
        <a
          href="#"
          className="link-button"
        >
          Localização
        </a>
        <a
          href="#"
          className="link-button"
        >
          WhatsApp
        </a>
      </div>
=======
    <div className="App">
      <Header />
      <main className="links-container">
        {links.map((link, index) => (
          <Link key={index} title={link.title} url={link.url} />
        ))}
      </main>
      <Footer />
>>>>>>> dev
    </div>
  );
}

export default App;