import React, { createContext, useState } from 'react';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [favorites, setFavorites] = useState([]);
  const [cart, setCart] = useState([]);

  const toggleFavorite = (book) => {
    if (favorites.some(fav => fav.id === book.id)) {
      setFavorites(favorites.filter(fav => fav.id !== book.id));
    } else {
      setFavorites([...favorites, book]);
    }
  };
  
  const addCart = (book) => {
    setCart(prevCart => {
      const existingBook = prevCart.find(item => item.id === book.id);
      if (existingBook) {
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: (item.quantity || 1) + 1 } : item
        );
      } else {
        return [...prevCart, { ...book, quantity: 1 }];
      }
    });
  };

  const updateCartQuantity = (bookId, quantity) => {
    setCart(prevCart => 
      prevCart.map(item => 
        item.id === bookId ? { ...item, quantity: quantity } : item
      )
    );
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  return (
    <AppContext.Provider value={{ favorites, cart, addCart,toggleFavorite, updateCartQuantity, removeFromCart }}>
      {children}
    </AppContext.Provider>
  );
};