import "./Expenses.css";
import ExpensesFilter from "./ExpenseFilter";
import Card from "../UI/Card";
import React from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  
  const [filteredYear, setFilteredYear] = React.useState('2022')

  const fiterChangeHandler = selectedYear =>{
    setFilteredYear(selectedYear)
    
  }
  const filteredCheckYear = props.items.filter(expense=>{
    return expense.date.toString().substr(11,4) === filteredYear
  })

 
  
  return (
    <Card className="expenses">
      < ExpensesFilter selected={ filteredYear } onChangeFilter={ fiterChangeHandler } />
      <ExpensesChart expenses={filteredCheckYear}/>
      <ExpensesList items={filteredCheckYear}/>
    </Card>
  );
};
export default Expenses;
