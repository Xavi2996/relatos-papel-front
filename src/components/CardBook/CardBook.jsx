import React from "react";
import "./CardBook.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';

const CardBook = ({ book }) => {
    const addFavorites = () => {
        console.log('Añadir a favoritos', book);
    }
    const addCart = () => {
        console.log('Añadir al carrito', book);
    }
  return (
    <div className="card-book">
        <div className="card-book__container">
            <div className="card-book__img-container">
                <img src={book.image} alt={book.title} className="card-book__img" />
            </div>
            <div className="card-book__info">
                <h5>{book.title}</h5>
            </div>
            <div>
                <h6 className="mt-2">$ {book.price}</h6>
            </div>
        </div>
      <div className="linea-horizontal"></div>
      <div>
        <button className="btn-icon" onClick={addFavorites}>
         <FontAwesomeIcon icon={faHeart} size="2x" color="#f08065"/>
        </button>
        <button className="btn-icon" onClick={addCart}>
         <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#f08065"/>
        </button>
      </div>
    </div>
  );
}

export default CardBook;