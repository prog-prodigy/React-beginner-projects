import './NewExpense.css'
import ExpenseForm from './ExpenseForm'
const NewExpense =(props)=>{
    const onSubmitData = (enteredData) =>{
        
     const  enteredFormData= {
            ...enteredData,
            id: Math.random().toString()
        }
    props.getForm(enteredFormData)
    }
    return(
        <div className='new-expense'>
            <ExpenseForm  onSubmitData={onSubmitData}/>   
        </div>
    )
}

export default NewExpense