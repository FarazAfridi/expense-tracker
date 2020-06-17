import React, { createContext, useReducer } from "react";
import AppReducer from './AppReducer';

// Initial State
const initialState = {
  transactions: [
    { id: 1, text: "salary", amount: 400 },
    { id: 2, text: "bill", amount: -300 },
  ],
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
