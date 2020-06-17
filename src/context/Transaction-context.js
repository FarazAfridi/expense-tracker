import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: []
};

export const TransactionContext = createContext(initialState);



export const TransactionProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }
  function addTransaction(transaction){
      dispatch({
          type: "ADD_TRANSACTION",
          payload: transaction
      });
  }
  return (
    <TransactionContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
