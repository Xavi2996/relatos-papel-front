import React from 'react';
import './Biblioteca.scss';
import {books} from '../../mocks/books';
import CardListaBooks from '../../components/CardListaBooks/CardListaBooks';

const Biblioteca = () => {

    return (
        <div>
            <div className="container">
                <h3 className='novedades-title'> Biblioteca</h3>
                <div className=""></div>
            </div>
            <div className="container books-container mt-4">
                <div className="container-libros">
                    {books.map((book, index) => {
                        return <CardListaBooks book={book} key={index}/>
                    })}
                </div>
            </div>
        </div>
    );
}

export default Biblioteca;