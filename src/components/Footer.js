import React from 'react';
import './Footer.scss';
import { FaInstagram, FaWhatsapp, FaFacebook } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.instagram.com/leoneldeodoro.pilates/" target="_blank" rel="noopener noreferrer">
        <FaInstagram />
      </a>
      <a href="https://api.whatsapp.com/message/PT6ZWBFS3R6DJ1" target="_blank" rel="noopener noreferrer">
        <FaWhatsapp />
      </a>
      <a href="https://www.facebook.com/leoneldeodoro.pilates" target="_blank" rel="noopener noreferrer">
        <FaFacebook />
      </a>
    </footer>
  );
}

export default Footer;
