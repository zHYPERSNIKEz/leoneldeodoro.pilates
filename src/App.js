import React from 'react';
import './App.scss';
import Header from './components/Header';
import Link from './components/Link';
import Footer from './components/Footer';

function App() {
  const links = [
    { title: 'Agende sua aula experimental', url: 'https://wa.me/message/PT6ZWBFS3R6DJ1' },
    { title: 'Conheça nosso espaço', url: 'https://www.instagram.com/p/DCyvZfCRaMD/' },
    { title: 'Nosso endereço', url: 'https://share.google/SXPTWjDAOQDBjdBD9' },
    { title: 'Faça uma avaliação', url: 'https://g.page/r/CbJDvfed8jSHEAE/review' },
  ];

  return (
    <div className="App">
      <Header />
      <main className="links-container">
        {links.map((link, index) => (
          <Link key={index} title={link.title} url={link.url} />
        ))}
      </main>
      <Footer />
    </div>
  );
}

export default App;
