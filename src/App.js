// import './index.css';
// import ExpenseItems from "./components/ExpenseItems";
import React, { useState} from 'react';
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpenses/NewExpense";

const DUMMY_EXPENSES = [
  {
    title: "iPad Pro 12.9 Inch",
    amount: 1400,
    date: new Date(2021, 11, 27)
  },
  {
    title: "MacBook Pro 16 Inch",
    amount: 2200,
    date: new Date(2020, 11, 27)
  },
  {
    title: "iPhone 13 Pro Max",
    amount: 1100,
    date: new Date(2021, 8, 14)
  }
]

function App() {

  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);
  
  const addExpenseHandler = expense => {
    setExpenses(prevExpenses => {
      return [expense, ...prevExpenses];
    })
  }

  return (
    <div className="App">
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
