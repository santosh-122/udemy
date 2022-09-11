import './ExpenseItem.css'
import Card from './ui/Card';
import ExpenseDate from './ExpenseDate';
import React,{useState} from 'react'

function ExpenseItem(props){
    // const [title,setTitle] = useState(props.title)
    // function clickHandler(){
    //      setTitle("some thing")
    // }
    return(

        <Card className="expense-item ">           
            <ExpenseDate date={props.date}/>
            <div className="expense-item__description">
            <h2>{props.title}</h2>
            <div className="expense-item__price ">${props.amount}</div>
            </div>
        </Card>
        
    );
}
export default ExpenseItem;