import axios from "axios";

const BACKEND_URL =
  "https://react-native-course-e74fd-default-rtdb.firebaseio.com";

export function storeExpense(expenseData) {
  axios.post(BACKEND_URL + "/expenses.json", expenseData);
}

export async function fetchExpenses() {
 const response = await axios.get(BACKEND_URL + "/expenses.json",);

 const expenses = [];
    console.log(response.data)
 for (const key in response.data) {
    const expenseObj = {
        id: key,
        amount: response.data[key].amount,
        data: new Date(response.data[key].date),
        description: response.data[key].description
    };
    expenses.push(expenseObj);
 }
 return expenses;
}
