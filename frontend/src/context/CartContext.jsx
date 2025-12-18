import React, { createContext, useReducer, useContext } from "react";

const CartContext = createContext();

const initialState = {
  items: [] // { id, name, price, qty, image }
};

function cartReducer(state, action) {
  switch (action.type) {
    case "ADD":
      {
        const product = action.payload;
        const exists = state.items.find(i => i.id === product.id);
        if (exists) {
          return {
            ...state,
            items: state.items.map(i =>
              i.id === product.id ? { ...i, qty: i.qty + 1 } : i
            )
          };
        }
        return {
          ...state,
          items: [...state.items, { ...product, qty: 1 }]
        };
      }
    case "REMOVE":
      return { ...state, items: state.items.filter(i => i.id !== action.payload) };
    case "UPDATE_QTY":
      return {
        ...state,
        items: state.items.map(i =>
          i.id === action.payload.id ? { ...i, qty: action.payload.qty } : i
        )
      };
    case "CLEAR":
      return initialState;
    default:
      return state;
  }
}

export function CartProvider({ children }) {
  const [state, dispatch] = useReducer(cartReducer, initialState);

  const addToCart = product => dispatch({ type: "ADD", payload: product });
  const removeFromCart = id => dispatch({ type: "REMOVE", payload: id });
  const updateQty = (id, qty) => dispatch({ type: "UPDATE_QTY", payload: { id, qty } });
  const clearCart = () => dispatch({ type: "CLEAR" });

  const value = { items: state.items, addToCart, removeFromCart, updateQty, clearCart };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
}

export function useCart() {
  return useContext(CartContext);
}
