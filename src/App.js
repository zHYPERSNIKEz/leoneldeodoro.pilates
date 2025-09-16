import React from 'react';
import './App.scss';
import Header from './components/Header';
import Link from './components/Link';
import Footer from './components/Footer';

function App() {
  const links = [
    { title: 'Agende sua aula experimental', url: '#' },
    { title: 'Conheça nosso espaço', url: '#' },
    { title: 'Planos e preços', url: '#' },
    { title: 'Blog com dicas de saúde', url: '#' },
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