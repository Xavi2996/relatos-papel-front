import React from 'react';
import './CardListaBooks.scss';

const CardListaBooks = ({ book }) => {
  return (
    <div className='card-lista-book'>
        <div className="info-book-container">
            <div className="info-book-container__img">
                <img src={book.image} alt={book.title} className="img-info" />
            </div>
            <div className="card-lista-book__info">
                <h4>{book.title}</h4>
                <p>{book.author}</p>
                <p>Categoría: {book.category}</p>
                <p>Idioma: {book.language}</p>
                <p>Editorial: {book.publisher}</p>
                <p>${book.price}</p>
            </div>
        </div>
    </div>
  );
};

export default CardListaBooks;