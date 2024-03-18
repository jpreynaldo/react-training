import './ExpenseDate.css';

const ExpenseDate = (props) => {
  const expenseDate = {
    month: props.date.toLocaleString("en-US", { month: "long" }),
    day: props.date.toLocaleString("en-US", { day: "2-digit" }),
    year: props.date.getFullYear(),
  };
  return (
    <div className="expense-date">
      <div className="expense-date__month">{expenseDate.month}</div>
      <div className="expense-date__day">{expenseDate.day}</div>
      <div className="expense-date__year">{expenseDate.year}</div>
    </div>
  );
}

export default ExpenseDate;
