import React, {useContext} from 'react';
import './CardListaBooks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../utilities/AppContext";
const CardListaBooks = ({ book }) => {
  const {favorites, toggleFavorite, addCart } = useContext(AppContext);
  const isFavorite = favorites.some(fav => fav.id === book.id);
  return (
    <div className='card-lista-book'>
        <div className="info-book-container">
            <div className="info-book-container__img">
                <img src={book.image} alt={book.title} className="img-info" />
            </div>
            <div className="card-lista-book__info">
                <h4 className='m-0'>{book.title}</h4>
                <h5 className='text-author'>{book.author}</h5>
                <p className='mb-1'><strong>Categoría: </strong> {book.category}</p>
                <p className='mb-1'><strong>Idioma: </strong> {book.language}</p>
                <p className='mb-1'><strong>Editorial: </strong> {book.publisher}</p>
                <h2>${book.price}</h2>
            </div>
        </div>
        <div className="linea-horizontal"></div>
        <div className='text-center'>
          <button className="btn-icon" onClick={() => toggleFavorite(book)}>
            <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite ? "#ff0000" : "#f08065"} />
          </button>
          <button className="btn-icon" onClick={() => addCart(book)}>
            <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#f08065" />
          </button>
        </div>
    </div>
  );
};

export default CardListaBooks;