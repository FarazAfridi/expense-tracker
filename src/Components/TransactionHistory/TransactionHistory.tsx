import React, { useContext } from "react";
import "./TransactionHistory.css";
import { TransactionContext } from "../../Context/TransactionContext";

const TransactionHistory = () => {
  const { transactions, deleteTransaction } = useContext(TransactionContext);

  return (
    <div className="transaction-history">
      <h3>History</h3>
      {transactions?.map((transaction) => (
        <div
          key={transaction.id}
          className={`trans-history-content ${
            transaction.amount < 0 ? 'red' : 'green'
          }`}
        >
          <button className="btn" onClick={() => deleteTransaction(transaction.id)}>X</button>
          <p className="trans-histor-item">{transaction.text}</p>
          <p className="trans-histor-price">${transaction.amount}</p>
        </div>
      ))}
    </div>
  );
};

export default TransactionHistory;