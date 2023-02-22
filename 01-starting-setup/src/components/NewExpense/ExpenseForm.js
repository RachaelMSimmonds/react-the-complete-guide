import React, { useState } from "react";

import './ExpenseForm.css'

const ExpenseForm = (props) => {
    // Way one - multiple states
    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setEnteredAmount] = useState('');
    const [enteredDate, setEnteredDate] = useState('')

    // Way two - one state
    // const [userInput, setUserInput] = useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    // document.getElementById('').addEventListener('click', (event) => {})
    const titleChangeHandler = (event) => {
        // console.log('Title changed!')
        // console.log(event.target.value)

        setEnteredTitle(event.target.value)

        // setUserInput({
        //     // enteredTitle: event.target.value,
        //     ...userInput,
        //     enteredTitle: event.target.value
        // })

        // Scheduled updates properly - if your state updates depend on previous update use this
        // it will always be the latest state snapshot
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredTitle: event.target.value}
        // });
    }

    const amountChangeHandler = (event) => {
        // console.log('Amount changed!')
        // console.log(event.target.value)

        setEnteredAmount(event.target.value)

        // enteredAmount: event.target.value,
        // setUserInput({
        //     ...userInput,
        //     enteredAmount: event.target.value
        // })

        // Scheduled updates properly - if your state updates depend on previous update use this
        // it will always be the latest state snapshot
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredAmount: event.target.value}
        // });
    }

    const dateChangeHandler = (event) => {
        // console.log('Date changed!')
        // console.log(event.target.value)

        setEnteredDate(event.target.value)

        // enteredDate: event.target.value,
        // setUserInput({
        //     ...userInput,
        //     enteredDate: event.target.value
        // })

        // Scheduled updates properly - if your state updates depend on previous update use this
        // it will always be the latest state snapshot
        // setUserInput((prevState) =>{
        //     return {...prevState, enteredDate: event.target.value}
        // });
    }

    const submitHandler = (event) => {
        event.preventDefault()

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }

        // console.log(expenseData)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('')
        setEnteredAmount('')
        setEnteredDate('')
    }

    return (
        <form onSubmit={submitHandler}>
            <div className="new-expense__controls">
                <div className="new-expense__control">
                    <label>Title</label>
                    <input type='text' value={enteredTitle} onChange={titleChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Amount</label>
                    <input type='number' value={enteredAmount} min="0.01" step="0.01" onChange={amountChangeHandler}/>
                </div>
                <div className="new-expense__control">
                    <label>Date</label>
                    <input type='date' value={enteredDate} min="2023-01-01" max="2026-12-31" onChange={dateChangeHandler}/>
                </div>
            </div>
            <div className="new-expense__actions">
                <button type="submit">Add Expense</button>
            </div>
        </form>
    );
}

export default ExpenseForm;