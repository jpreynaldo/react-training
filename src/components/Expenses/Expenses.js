import ExpenseItem from "./ExpenseItem";
import Card from '../UI/Card';
import './Expenses.css'
import React from "react";
import ExpensesFilter from "./ExpenseFilter";

const Expenses = (props) => {
    const [year, setYearFilter] = React.useState('2020');
    
    const onSetYearFilter = (yearData) => {
        setYearFilter(yearData);
    }
    return (
        <div>
            
            <Card className="expenses">
                <ExpensesFilter onSetFilter={onSetYearFilter} selectedFilter={year} /> 
                {props.items.map((expense) => (
                    <ExpenseItem
                        title={expense.title}
                        amount={expense.amount}
                        date={expense.date}
                    />
                ))}
            </Card>
        </div>
        
    ) 
}

export default Expenses;