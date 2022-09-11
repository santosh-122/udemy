import React,{useState} from 'react';
import ExpenseForm from './ExpenseForm';
import './NewExpense.css'

const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDAtaHandler = (enteredExp) => {
    const expenseData = {
      ...enteredExp,
      id:Math.random().toString(),
    };
    // props.onAddExpense=(expenseData);
     props.onAddExpense(expenseData)
  };
  const startEditingHandler =() => {
    setIsEditing(true);
  }
  const stopEditingHandler = () => {
    setIsEditing(false);
    }
  return (
    <div className="new-expense">
      {!isEditing && <button onClick={startEditingHandler}>Add Expense</button>}
       {isEditing && <ExpenseForm 
       onAnyname={saveExpenseDAtaHandler} 
       onCancel = {stopEditingHandler} />}
    </div>
  );
}

export default NewExpense;
