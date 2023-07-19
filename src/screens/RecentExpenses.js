import { useContext, useEffect, useState } from "react";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";
import { getDateMinusDays, getDayMinusDays } from "../util/date";
import { ExpensesContext } from "../store/expenses-context";
import { fetchExpenses } from "../util/http";

function RecentExpenses() {
   const expensesCtx = useContext(ExpensesContext);

  useEffect(() => {
     async function getExpenses(){
    const expenses =  await fetchExpenses(); 
    expensesCtx.setExpenses(expenses)
    }
      getExpenses();
  },[])

  const recentExpenses = expensesCtx.expenses.filter((expense) => {
    const today = new Date()
    const date7DaysAgo = getDateMinusDays(today, 7)

    return(expense.date > date7DaysAgo) && (expense.date <= today);
  } )

  return (
    <ExpensesOutput
      expenses={recentExpenses}
      expensesPeriod="Last 7 Days"
      fallbackText="No expenses registered for the last 7 days."
    />
  );
}

export default RecentExpenses;
