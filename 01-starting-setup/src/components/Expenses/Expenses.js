import React, { useState } from 'react';

import Card from '../UI/Card';
import './Expenses.css';
import ExpensesFilter from './ExpensesFilter';
import ExpensesList from './ExpensesList';

// function Expenses(props) {
const Expenses = (props) => {

    const [filteredYear, setFilteredYear] = useState('2023');

    const filterChangeHandler = (selectedYear) => {
      setFilteredYear(selectedYear);
    };

    const filteredExpenses = props.items.filter(expense => {
      return expense.date.getFullYear().toString() === filteredYear;
    });

    // let expensesContent = <p>No expenses found.</p>
    // if (filteredExpenses.length > 0) {
    //   expensesContent = filteredExpenses.map((expense) => (
    //   <ExpenseItem 
    //       key={expense.id}
    //       title={expense.title} 
    //       amount={expense.amount} 
    //       date={expense.date}
    //       />
    //     ));

    // }

    return <Card className='expenses'>
      <ExpensesFilter
          selected={filteredYear}
          onChangeFilter={filterChangeHandler}
        />
        <ExpensesList items={filteredExpenses} />
      {/* {expensesContent} */}
      {/* {filteredExpenses.length === 0 && <p>No expenses found.</p>}
      {filteredExpenses.length === 0 ? (<p>No expenses found.</p>) :
      {filteredExpenses.length > 0 &&
        filteredExpenses.map((expense) => (
        <ExpenseItem 
          key={expense.id}
          title={expense.title} 
          amount={expense.amount} 
          date={expense.date}
          />
        ))} */}

      {/* {[<Card/>, <Card/>]} */}
        {/* <ExpenseItem 
        title={props.items[0].title} 
        amount={props.items[0].amount} 
        date={props.items[0].date}
      />
      <ExpenseItem 
        title={props.items[1].title} 
        amount={props.items[1].amount} 
        date={props.items[1].date}
      />
      <ExpenseItem 
        title={props.items[2].title} 
        amount={props.items[2].amount} 
        date={props.items[2].date}
      />
      <ExpenseItem 
        title={props.items[3].title} 
        amount={props.items[3].amount} 
        date={props.items[3].date}
      /> */}

    </Card>
}

export default Expenses;