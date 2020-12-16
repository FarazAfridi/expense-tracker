import * as React from 'react'
import {ActionType} from "./AppReducer";
import AppReducer from './AppReducer';

/// Types

export type TransactionType = {
  amount: number
  id: number
  text: string
}

export type initailStateType = {
  transactions: TransactionType[] | undefined
  deleteTransaction: (id: number) => void
  addTransaction: (transaction: TransactionType) => void 
}

// Initial State
const initialState: initailStateType = {
  transactions: [],
  deleteTransaction: (id) => id,
  addTransaction: (transaction) => transaction,
};

export const TransactionContext = React.createContext(initialState);

export const TransactionProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(AppReducer, initialState);

  function deleteTransaction(id: number) {
    dispatch({
      type: ActionType.DELETE_TRANSACTION,
      payload: id,
    });
  }
  function addTransaction(transaction: TransactionType){
      dispatch({
          type: ActionType.ADD_TRANSACTION,
          payload: transaction
      });
  }

  return (
    <TransactionContext.Provider value={{ transactions: state.transactions, deleteTransaction, addTransaction }}>
      {children}
    </TransactionContext.Provider>
  );
};
