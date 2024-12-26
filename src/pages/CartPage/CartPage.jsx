import React, { useContext } from 'react';
import './CartPage.scss';
import { AppContext } from "../../utilities/AppContext";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

const CartPage = () => {
  const { cart, updateCartQuantity, removeFromCart } = useContext(AppContext);

  const calculateSubtotal = (price, quantity) => price * quantity;

  const groupedCart = cart.reduce((acc, book) => {
    const existingBook = acc.find(item => item.id === book.id);
    if (existingBook) {
      existingBook.quantity += book.quantity || 1;
    } else {
      acc.push({ ...book, quantity: book.quantity || 1 });
    }
    return acc;
  }, []);

  const total = groupedCart.reduce((acc, book) => acc + calculateSubtotal(book.price, book.quantity), 0);

  const handleQuantityChange = (bookId, quantity) => {
    updateCartQuantity(bookId, quantity);
  };

  const handleRemove = (bookId) => {
    removeFromCart(bookId);
  };

  return (
    <div className="cart-page">
      <div>
        <div className="cart-header">
          <p>ARTÍCULO</p>
          <p>CANTIDAD</p>
          <p>PRECIO</p>
          <p>SUBTOTAL</p>
        </div>
        {groupedCart.length === 0 ? (
          <div className="empty-cart-message">
            <p>Aún no se han agregado productos al carrito.</p>
          </div>
        ) : (
          groupedCart.map((book, index) => (
            <div className="cart-item" key={index}>
              <div className='d-flex align-items-center'>
                <img src={book.image} alt={book.title} className='img-cart m-0'/>
                <div>
                  <h5 className='text-center mt-1'>{book.title}</h5>
                  <h6 className='text-center'>{book.author}</h6>
                </div>
              </div>
              <input
                type="number"
                value={book.quantity}
                min="1"
                onChange={(e) => handleQuantityChange(book.id, parseInt(e.target.value))}
              />
              <p>${book.price}</p>
              <p>${calculateSubtotal(book.price, book.quantity)}</p>
              <button className="btn-trash" onClick={() => handleRemove(book.id)}>
                <FontAwesomeIcon icon={faTrash} />
              </button>
            </div>
          ))
        )}
        {groupedCart.length > 0 && (
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
          </div>
        )}
      </div>
    </div>
  );
}

export default CartPage;