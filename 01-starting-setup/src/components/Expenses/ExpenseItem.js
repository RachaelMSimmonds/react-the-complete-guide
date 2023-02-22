import React, { useState } from 'react';

import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import './ExpenseItem.css';

// function ExpenseItem(props) {
const ExpenseItem = (props) => {

    // return <h2>Expense item!</h2>;
    
    // return <div><div>Date</div>
    // <div><h2>Title</h2><div>Amount</div>
    // </div></div>;

    // const expenseDate = new Date(2022, 2, 28);
    // const expenseTitle = 'Car Insurance';
    // const expenseAmount = 294.67

    // const month = props.date.toLocaleString('en-US', { month: 'long'});
    // const day = props.date.toLocaleString('en-US', { day: '2-digit'});
    // const year = props.date.getFullYear();

    // function clickHandler() {}
    // useState(props.title);
    const [title, setTitle] = useState(props.title);
    console.log('ExpenseItem evaluated by React')
    // let title = props.title

    const clickHandler = () => {
        // console.log('Clicked!!!!')
        // title = 'Updated!'
        setTitle('Updated!');
        console.log(title)
    }

    return (
        <Card className="expense-item">
            {/* <div>
                {/* <div>Month</div>
                <div>Year</div>
                <div>Day</div> */}
                {/* <div>{props.date.toLocaleString('en-US', { month: 'long'})}</div> */}
                {/* <div>{month}</div>
                <div>{year}</div>
                <div>{day}</div> */}
            {/* </div> */}
            {/* <div>{props.date.toISOString()}</div> */}
            <ExpenseDate date={props.date} />
            <div className="expense-item__description">
                <h2>{title}</h2>
                <div className="expense-item__price">${props.amount}</div>
            </div>
            {/* <button onClick={() => {console.log('Clicked')}}>Change Title</button> */}
            <button onClick={clickHandler}>Change Title</button>
        </Card>
    );
}

export default ExpenseItem;