import React from "react";
import "./CardBook.scss";

const CardBook = ({ book }) => {
  return (
    <div className="card-book">
      <div className="card-book__img-container">
        <img src={book.image} alt={book.title} className="card-book__img" />
      </div>
      <div className="card-book__info">
        <h3>{book.title}</h3>
        <p>{book.author}</p>
      </div>
    </div>
  );
}

export default CardBook;