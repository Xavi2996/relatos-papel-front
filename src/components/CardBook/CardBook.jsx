import React, { useContext } from "react";
import "./CardBook.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart} from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../utilities/AppContext";

const CardBook = ({ book }) => {
  const {favorites, toggleFavorite, addCart } = useContext(AppContext);
  const isFavorite = favorites.some(fav => fav.id === book.id);


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
      <button className="btn-icon" onClick={() => toggleFavorite(book)}>
        <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite ? "#ff0000" : "#f08065"} />
      </button>
      <button className="btn-icon" onClick={() => addCart(book)}>
        <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#f08065" />
      </button>
    </div>
    </div>
  );
}

export default CardBook;