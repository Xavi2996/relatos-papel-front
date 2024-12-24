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
  const addCart = (book) => setCart([...cart, book]);

  return (
    <AppContext.Provider value={{ favorites, cart, addCart,toggleFavorite }}>
      {children}
    </AppContext.Provider>
  );
};