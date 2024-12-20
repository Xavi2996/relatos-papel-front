import React from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <>
      <div className="container-logo mt-3">
        <div>
          <a className="navbar-logo" href="/">
            <img src="/assets/images/logo.png" alt="Logo" />
          </a>
        </div>
        <div>
          <ul className="m-0">
            <li className="list-style" onClick={() => navigate('/login')}>
              <FontAwesomeIcon icon={faUser} size="2x" color="black" />
              <span className="navbar-text">Ingresar</span>
               
            </li>
            <li className="list-style" onClick={() => navigate('/favoritos')}>
              <FontAwesomeIcon icon={faHeart} size="2x" color="black" />
            </li>
            <li className="list-style" onClick={() => navigate('/cart')}>
              <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black" />
            </li>
          </ul>
        </div>
      </div>
      <div className="container-navbar">
        <nav>
        <ul className='m-0 p-0'>
            <li className="list-style-navbar" onClick={() => navigate('/home')}><span>Home</span></li>
            <li className="list-style-navbar" onClick={() => navigate('/biblioteca')}><span>Biblioteca</span></li>
            <li className="list-style-navbar" onClick={() => navigate('/recomendados')}><span>Recomendados</span></li>
            <li className="list-style-navbar" onClick={() => navigate('/noticias')}><span>Noticias</span></li>
        </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;