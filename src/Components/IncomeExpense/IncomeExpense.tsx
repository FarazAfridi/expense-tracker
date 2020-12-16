import React, { useContext } from "react";
import "./IncomeExpense.css";
import { TransactionContext } from "../../Context/TransactionContext";;

const IncomeExpense = () => {
  const { transactions } = useContext(TransactionContext);
  const amounts = transactions?.map((transaction) => transaction.amount);

  const income = amounts
    ?.filter((item) => item > 0)
    .reduce((acc, item) => (acc += item), 0)
    .toFixed(2);

  const expense = amounts && (
    amounts.filter(item => item < 0).reduce((acc, item) => (acc += item), 0) *
    -1
  ).toFixed(2);

  return (
    <div className="income-expense">
      <div className="income">
        <h3>INCOME</h3>
        <h2>${income}</h2>
      </div>
      <div className="expense">
        <h3>EXPENSE</h3>
        <h2>${expense}</h2>
      </div>
    </div>
  );
};

export default IncomeExpense;
