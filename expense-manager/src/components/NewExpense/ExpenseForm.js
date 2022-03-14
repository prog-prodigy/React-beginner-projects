import React,{ useState } from 'react'
import './ExpenseForm.css'


function ExpenseForm(props) {
    const [enteredTitle , setenteredTitle ]= React.useState('')
        const [enteredAmount , setenteredAmount ]= React.useState('')
        const [enteredDate , setenteredDate ]= React.useState('')
    
        const titleChangeHandler = (event)=>{
            setenteredTitle(event.target.value) 
        }
    
        const amountChangeHandler = (event)=>{
            setenteredAmount(event.target.value)
        }
    
        const dateChangeHandler = (event)=>{
            setenteredDate(event.target.value)
        }
    const submitHandler=(e)=>{
        e.preventDefault()
           const expenseData={
                title: enteredTitle,
                amount: enteredAmount,
                date: new Date(enteredDate)
            }
           
            props.onSubmitData(expenseData)
            setenteredAmount('')
            setenteredTitle('')
            setenteredDate('')
        }
     
  return (
    <form onSubmit={submitHandler}>
        <div className='new-expense__controls'>
            <div className='new-expense__control'>
                <label>Title</label>
                <input value={enteredTitle} onChange={titleChangeHandler} type='text'/>
            </div>
            <div className='new-expense__control'>
                <label>Amount</label>
                <input value={enteredAmount} onChange={amountChangeHandler} type='number' min='0.00' step='1'/>
            </div>
            <div className='new-expense__control'>
                <label>Date</label>
                <input value={enteredDate} onChange={dateChangeHandler} type='date' min='2019-01-01' max='2022-12-31'/>
            </div>
        </div>
        <div className='new-expense__actions'>
            <button type='submit'>Add Expense</button>
        </div>
    </form>
  )
  
  }
export default ExpenseForm