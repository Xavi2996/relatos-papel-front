import React from 'react';
import './Biblioteca.scss';
import { books } from '../../mocks/books';
import CardListaBooks from '../../components/CardListaBooks/CardListaBooks';
import useSearch from '../../hooks/search';

const Biblioteca = () => {
  const { searchTerm, setSearchTerm, filteredItems } = useSearch(books, 'title');

  return (
    <div>
      <div className="container">
        <h3 className='novedades-title'>Biblioteca</h3>
        <input
          type="text"
          placeholder="Buscar libros..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          className="search-input"
        />
      </div>
      <div className="container books-container mt-4">
        <div className="container-libros">
          {filteredItems.map((book, index) => (
            <CardListaBooks book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Biblioteca;