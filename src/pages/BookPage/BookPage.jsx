import React, {useContext} from 'react';
import { useParams } from 'react-router-dom';
import { AppContext } from "../../utilities/AppContext";
import { books } from '../../mocks/books'; // Asegúrate de que la ruta sea correcta
import './BookPage.scss'; // Importa los estilos

const BookPage = () => {
  const { id } = useParams();
  const book = books.find(book => book.id === parseInt(id));
  const {favorites, toggleFavorite, addCart } = useContext(AppContext);  
  
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
            <button className="add-to-cart" onClick={() => addCart(book)} >AGREGAR AL CARRITO</button>
            <button className='add-favorites' onClick={() => toggleFavorite(book)}>AGREGAR A MI LISTA</button>
        </div>
      
    </div>
  );
};

export default BookPage;