import ExpenseItem from './Component/ExpenseItem';
import Expenses from './Component/Expenses';
import './App.css';
import NewExpense from './Component/NewExpense/NewExpense';
import React,{useState} from 'react';

const Dummy_expenses = [{
	id: 'e1',
	title: 'Speaker',
	amount: 994.12,
	date: new Date(2020, 7, 14),
},
{ id: 'e2', title: 'New TV', amount: 799.49, date: new Date(2021, 2, 12) },
{
	id: 'e3',
	title: 'Car Insurance',
	amount: 294.67,
	date: new Date(2021, 2, 28),
},
{
	id: 'e4',
	title: 'New Desk (Wooden)',
	amount: 450.45,
	date: new Date(2021, 5, 12),
},];
function App() {

	const [expenses,setExpenses] = useState(Dummy_expenses)
	
	const addExpenseHandler = expense => {
		setExpenses((prevexpenses) => {
			return [expense, ...prevexpenses];
		});

	};
	
	return (
		<div className="App">
			<NewExpense onAddExpense={addExpenseHandler}/>
			<Expenses items={expenses}/>
		</div>
	);
}

export default App;
