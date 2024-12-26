import React, { useContext, useState } from 'react';
import './CardListaBooks.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart, faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../utilities/AppContext";
import { useNavigate } from 'react-router-dom';
import Modal from '../Modal/Modal';

const CardListaBooks = ({ book }) => {
  const { favorites, toggleFavorite, addCart } = useContext(AppContext);
  const isFavorite = favorites.some(fav => fav.id === book.id);
  const navigate = useNavigate();

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState('');

  const handleToggleFavorite = (book) => {
    toggleFavorite(book);
    setModalContent(`${book.title} ha sido ${isFavorite ? 'eliminado de' : 'agregado a'} tus favoritos.`);
    setModalOpen(true);
  };

  const handleAddCart = (book) => {
    addCart(book);
    setModalContent(`${book.title} ha sido agregado al carrito.`);
    setModalOpen(true);
  };

  return (
    <div className='card-lista-book'>
      <div className="info-book-container" onClick={() => navigate('/book/' + book.id)} >
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
        <button className="btn-icon" onClick={() => handleToggleFavorite(book)}>
          <FontAwesomeIcon icon={faHeart} size="2x" color={isFavorite ? "#ff0000" : "#f08065"} />
        </button>
        <button className="btn-icon" onClick={() => handleAddCart(book)}>
          <FontAwesomeIcon icon={faShoppingCart} size="2x" color="#f08065" />
        </button>
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Notificación"
      >
        {modalContent}
      </Modal>
    </div>
  );
};

export default CardListaBooks;