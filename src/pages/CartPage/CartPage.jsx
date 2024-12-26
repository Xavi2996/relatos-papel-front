import React, { useContext, useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
import { AppContext } from "../../utilities/AppContext";
import Modal from '../../components/Modal/Modal';
import './CartPage.scss';

const CartPage = () => {
  const { cart, removeFromCart, updateQuantity } = useContext(AppContext);
  const [isModalOpen, setModalOpen] = useState(false);
  const [isConfirmModalOpen, setConfirmModalOpen] = useState(false);

  const handleRemove = (id) => {
    removeFromCart(id);
  };

  const handleQuantityChange = (id, quantity) => {
    updateQuantity(id, quantity);
  };

  const calculateSubtotal = (price, quantity) => {
    return (price * quantity).toFixed(2);
  };

  const handleConfirmPurchase = () => {
    setConfirmModalOpen(true);
  };

  const handlePurchase = () => {
    cart.length = 0;
    setConfirmModalOpen(false);
    setModalOpen(true);
  };

  const total = cart.reduce((acc, book) => acc + book.price * book.quantity, 0);

  return (
    <div className="cart-page">
      <h1>Carrito de Compras</h1>
      <div className="cart-items">
        {cart.length === 0 ? (
          <p>No hay libros en el carrito.</p>
        ) : (
          cart.map((book) => (
            <div key={book.id} className="cart-item">
              <p>{book.title}</p>
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
        {cart.length > 0 && (
          <div className="cart-total">
            <p>Total: ${total.toFixed(2)}</p>
            <button className="btn-confirm" onClick={handleConfirmPurchase}>Confirmar compra</button>
          </div>
        )}
      </div>
      <Modal
        isOpen={isModalOpen}
        onClose={() => setModalOpen(false)}
        title="Compra Confirmada"
      >
        <p>¡Gracias por tu compra!</p>
      </Modal>
      <Modal
        isOpen={isConfirmModalOpen}
        onClose={() => setConfirmModalOpen(false)}
        title="Confirmar Compra"
      >
        <p>¿Estás seguro de que deseas confirmar la compra?</p>
        <button className="btn-confirm" onClick={handlePurchase}>Sí, confirmar</button>
        <button className="btn-cancel" onClick={() => setConfirmModalOpen(false)}>Cancelar</button>
      </Modal>
    </div>
  );
};

export default CartPage;