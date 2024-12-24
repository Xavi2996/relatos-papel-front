import React, {useContext} from 'react';
import './Navbar.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart, faUser } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';
import { AppContext } from '../../utilities/AppContext';

const Navbar = () => {
  const navigate = useNavigate();
  const { favorites, cart } = useContext(AppContext);
  console.log(favorites, cart);

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
              <div className="icon-container">
                <FontAwesomeIcon icon={faHeart} size="2x" color="black" />
                  <div className="icon-badge">{favorites.length}</div>
              </div>
            </li>
            <li className="list-style" onClick={() => navigate('/cart')}>
              <div className="icon-container">
                <FontAwesomeIcon icon={faShoppingCart} size="2x" color="black" />
                  <div className="icon-badge">{cart.length}</div>
              </div>
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