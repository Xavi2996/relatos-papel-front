import React, { useContext, useState } from 'react';
import './Favoritos.scss';
import { books } from '../../mocks/books';
import CardListaBooks from '../../components/CardListaBooks/CardListaBooks';
import useSearch from '../../hooks/search';
import { AppContext } from "../../utilities/AppContext";


const Favoritos = () => {
  const { favorites } = useContext(AppContext);

  if (favorites.length === 0) {
    return (
      <div className="container">
        <h3 className='novedades-title'>Favoritos</h3>
        <h4 className='text-center'>No hay libros Agregados a favoritos</h4>
      </div>
    );
  }
  return (
    <div>
      <div className="container">
        <h3 className='novedades-title'>Favoritos</h3>
      </div>
      <div className="container books-container mt-4">
        <div className="container-libros">
          {favorites.map((book, index) => (
            <CardListaBooks book={book} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Favoritos;