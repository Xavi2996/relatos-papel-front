import React, {useContext, useState} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from "../../utilities/AppContext";
import { books } from '../../mocks/books'; // Asegúrate de que la ruta sea correcta
import './BookPage.scss'; // Importa los estilos
import Modal from '../../components/Modal/Modal'; // Importa el componente Modal


const BookPage = () => {
    const { id } = useParams();
    const book = books.find(book => book.id === parseInt(id));
    const [isModalOpen, setModalOpen] = useState(false);
    const [modalContent, setModalContent] = useState('');
    const {favorites, toggleFavorite, addCart } = useContext(AppContext);  
    const isFavorite = favorites.some(fav => fav.id === book.id);

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
  
  if (!book) {
    return <p>Libro no encontrado</p>;
  }

  return (
    <div className="book-page">
        <div>
            <img src={book.image} alt={book.title} className='img-book' />
        </div>
        <div className="book-details">
            <h1>{book.title}</h1>
            <p><strong>Autor:</strong> {book.author}</p>
            <p><strong>Categoría:</strong> {book.category}</p>
            <p><strong>Idioma:</strong> {book.language}</p>
            <p><strong>Editorial:</strong> {book.publisher}</p>
            <p className="book-price"><strong>Precio:</strong> ${book.price}</p>
            <p>{book.review}</p>
            <button className="add-to-cart" onClick={() => handleAddCart(book)} >AGREGAR AL CARRITO</button>
            <button className='add-favorites' onClick={() => handleToggleFavorite(book)}>AGREGAR A MI LISTA</button>
        </div>
        <Modal
            isOpen={isModalOpen}
            onClose={() => setModalOpen(false)}
            title="Notificación" >
            {modalContent}
        </Modal>
    </div>
    
  );
};

export default BookPage;