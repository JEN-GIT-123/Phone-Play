import React, { createContext, useContext, useReducer } from "react";

const FavoritesContext = createContext();

const initialState = { items: [] };

function favoritesReducer(state, action) {
  switch (action.type) {
    case "ADD_FAV":
      if (state.items.find(i => i.id === action.payload.id)) return state;
      return { ...state, items: [...state.items, action.payload] };
    case "REMOVE_FAV":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "CLEAR_FAVS":
      return initialState;
    default:
      return state;
  }
}

export function FavoritesProvider({ children }) {
  const [state, dispatch] = React.useReducer(favoritesReducer, initialState);

  const addFavorite = product => dispatch({ type: "ADD_FAV", payload: product });
  const removeFavorite = id => dispatch({ type: "REMOVE_FAV", payload: id });

  return (
    <FavoritesContext.Provider value={{ favorites: state.items, addFavorite, removeFavorite }}>
      {children}
    </FavoritesContext.Provider>
  );
}

export function useFavorites() {
  return useContext(FavoritesContext);
}
