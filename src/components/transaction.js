import React, { useContext, useState } from "react";
import "./transaction.styles.css";
import { TransactionContext } from "../context/Transaction-context";


const Transaction = () => {
  const { addTransaction } = useContext(TransactionContext);
  const [text, setText] = useState("");
  const [amount, setAmount] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
  const newTransaction = {
    id: Math.floor(Math.random() * 100000000),
    text,
    amount: +amount
  }
    addTransaction(newTransaction);
  }


  return (
    <div className="transaction">
      <h3 className="heading">Add new transaction</h3>
      <h3 className="heading2">Text</h3>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={text}
          onChange={(e) => setText(e.target.value)}
        ></input>
        <h3 className="heading2">Amout</h3>
        <input
          type="number"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        ></input>
        <br />
        <button disabled={text === "" || amount === "" ? "disabled" : null}>Add transaction</button>
      </form>
    </div>
  );
};

export default Transaction;
