import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';
import './Footer.scss'; // Asegúrate de ajustar la ruta según tu estructura de carpetas

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__content">
        <div className="footer__section">
          <h4>Sobre Nosotros</h4>
          <p>Somos una librería dedicada a ofrecer los mejores libros a nuestros clientes.</p>
        </div>
        <div className="footer__section">
          <h4>Contacto</h4>
          <p>Email: contacto@relatosdepapel.com</p>
          <p>Teléfono: +123 456 7890</p>
        </div>
        <div className="footer__section">
          <h4>Síguenos</h4>
          <p>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
          </p>
          <p>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
          </p>
          <p>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </p>
        </div>
      </div>
      <div className="footer__bottom">
        <p>&copy; 2024 Relatos de papel. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

export default Footer;