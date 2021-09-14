import React, { createContext, useContext, useReducer } from "react";

export const StateContext = createContext();

// creates state provider which is wrapped around app in index.js
// data layer functionality
export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.Provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.Provider>
);

// when want to use data layer can use this useStatValue hook
export const useStateValue = () => useContext(StateContext);