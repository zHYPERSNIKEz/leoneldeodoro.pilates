import './App.css';

function App() {
  return (
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
    </div>
  );
}

export default App;