"use client";
import { createContext, useContext, useState } from "react";

const FavoritesContext = createContext();

export function FavoritesProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  const addFavorite = (mushroom) => {
    setFavorites((prev) => {
      if (prev.find((fav) => fav.name === mushroom.name)) return prev;
      return [...prev, mushroom];
    });
  };

  const removeFavorite = (name) => {
    setFavorites((prev) => prev.filter((fav) => fav.name !== name));
  };

  return (
    <FavoritesContext.Provider value={{ favorites, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}

