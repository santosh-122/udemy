import ExpenseItem from "./ExpenseItem";
import React,{useState} from 'react';
import './Expenses.css'
import Card from "./ui/Card";
import ExpensesFilter from "./ExpensesFilter";
import ExpensesChart from "./ExpensesChart";

function Expenses(props){
	const [filteredYear, setFilteredYear] = useState('2022');
//    console.log("prop",props)
  // const something = (selectedYear) => {
  //     setFilteredYear(selectedYear);
  // };
  const filterChangeHandler = (selectedYear) => {
              // console.log("props",selectedYear)
    setFilteredYear(selectedYear);
  };

   const filteredExp = props.items.filter((expense) => {
	return  expense.date.getFullYear().toString() === filteredYear;
   });
                  
    return(
		<div>
      <Card className="expenses"> 
	     {/* <ExpensesFilter selected={filteredYear} onChange={filterChangeHandler} /> */}
       <ExpensesFilter  selected={filteredYear}
          onChangeFilter={filterChangeHandler} />

       <ExpensesChart expenses={filteredExp}/>
       {filteredExp.length ===0 ? (
        <p style={{color:"white"}}>No data found</p>
       ): (filteredExp.map((expense) => (
       <ExpenseItem 
       key={expense.id} 
       title={expense.title} 
       amount={expense.amount}
        date={expense.date} />)))}

		 {/* {filteredExp.map((expense) => (<ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date} />))} */}
			{/* // <ExpenseItem title={expenses[0].title} amount={expenses[0].amount} date={expenses[0].date}></ExpenseItem>
			// <ExpenseItem title={expenses[1].title} amount={expenses[1].amount} date={expenses[1].date}></ExpenseItem>
			// <ExpenseItem title={expenses[2].title} amount={expenses[2].amount} date={expenses[2].date}></ExpenseItem>
			// <ExpenseItem title={expenses[3].title} amount={expenses[3].amount} date={expenses[3].date}></ExpenseItem> */}
      
      </Card>
	  </div>
    );
};
export default Expenses;