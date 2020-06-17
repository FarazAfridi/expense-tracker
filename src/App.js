import React from 'react';
import './App.css';
import Balance from './components/balance';
import IncomeExpense from './components/income-expense';
import TransactionHistory from './components/transaction-history';
import Transaction from './components/transaction';
import { TransactionProvider } from './context/Transaction-context';

function App() {
  return (
    <TransactionProvider>
    <div className="App">
     <h1>Expense Tracker</h1>
     <Balance />
     <IncomeExpense />
     <TransactionHistory />
     <Transaction />
    </div>
    </TransactionProvider>
  );
}

export default App;
