import React, { useContext } from "react";
import "./Balance.css";
import { TransactionContext } from "../../Context/TransactionContext";

const Balance = () => {
  const { transactions } = useContext(TransactionContext);

  const amounts = transactions?.map((transaction) => transaction.amount);

  const total = amounts?.reduce((acc, item) => (acc += item), 0).toFixed(2);

  return (
    <div className="balance">
      <h3>Your Balance</h3>
      <h2>${total}</h2>
    </div>
  );
};

export default Balance;