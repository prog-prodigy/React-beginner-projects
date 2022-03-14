import React,{ useState} from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
const App = () => {
  const [expenses, setExpenses] =  React.useState([])

const getForm=(getFormData)=>{
      const formData = {
        ...getFormData
      }
      setExpenses(prevData=>{
        return[
          formData,
          ...prevData
        ]
        
      })
    
}
  return (
    <div>
      <NewExpense getForm={getForm}/>
      <Expenses items={expenses}/>

      
    </div>
  );
}

export default App;
