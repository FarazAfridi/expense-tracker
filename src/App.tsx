import React from 'react';
import './App.css';
import Balance from './Components/Balance/Balance';
import { TransactionProvider } from './Context/TransactionContext';
import IncomeExpense from './Components/IncomeExpense/IncomeExpense';
import TransactionHistory from './Components/TransactionHistory/TransactionHistory';
import Transaction from './Components/Transaction/Transaction';

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
