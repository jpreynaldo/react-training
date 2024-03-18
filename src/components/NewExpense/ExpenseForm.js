import React from 'react';
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [enteredTitle, setEnteredTitle] = React.useState('');
    const [enteredAmount, setEnteredAmount] = React.useState('');
    const [enteredDate, setEnteredDate] = React.useState('');

    // This code you can use if you want to have one state for multiple data
    // const [userInput, setUserInput] = React.useState({
    //     enteredTitle: '',
    //     enteredAmount: '',
    //     enteredDate: ''
    // });

    const titleChangeHandler = (event) => {
        // Use this code if you want to update previous state
        // setUserInput((prevState) => {
        //     return { ...prevState, enteredtitle: event.target.value }
        // }); 
        setEnteredTitle(event.target.value)
    };

    const amountChangeHandler = (event) => {
        setEnteredAmount(event.target.value)
    };

    const dateChangeHandler = (event) => {
        setEnteredDate(event.target.value)
    };

    const submitHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: new Date(enteredDate)
        }
        props.onSaveExpenseData(expenseData);
        setEnteredTitle('');
        setEnteredAmount('');
        setEnteredDate ('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input 
                        type='text' 
                        value={enteredTitle} 
                        onChange={titleChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input 
                    type='number' 
                    min='0.01' 
                    step='0.01' 
                    value={enteredAmount}
                    onChange={amountChangeHandler} />
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input
                     type='date' 
                     min='2019-01-01'
                     max='2023-12-31'
                     value={enteredDate}
                     onChange={dateChangeHandler} />
                </div>
                <div className='new-expense__actions'>
                    <button type='submit'>Add Expense</button>
                </div>
            </div>
        </form>
    )
}

export default ExpenseForm;