import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext(null);

export const getBasketTotal = (basket) =>
  basket?.reduce((amount, item) => item.price + amount, 0);

export const StateProvider = ({ children }) => {
  const reducer = (state, action) => {
    switch (action.type) {
      case "SET_USER":
        return {
          ...state,
          user: action.user,
        };
      case "ADD_TO_BASKET":
        //Logic
        return { ...state, basket: [...state.basket, action.item] };

      case "REMOVE_FROM_BASKET":
        let newBasket = [...state.basket];
        const index = state.basket.findIndex(
          (basketItem) => basketItem.id === action.id
        );

        newBasket.splice(index, 1);
        return { ...state, basket: newBasket };

      default:
        return state;
    }
  };

  const initialState = {
    basket: [],
  };

  return (
    <StateContext.Provider value={useReducer(reducer, initialState)}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateValue = () => useContext(StateContext);
