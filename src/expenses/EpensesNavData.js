import expenseNav from "./expense/ExpenseNav"
import expenseDetailNav from "./expensedetail/ExpenseDetailNav"
import expenseGroupNav from "./expensegroup/ExpenseGroupNav"


const expensesNavData = {
  routes: [
    ...expenseGroupNav.routes,
    ...expenseNav.routes,
    ...expenseDetailNav.routes,
  ],
  nav: {
    id: "expenses",
    title: "Expenses",
    icon: "mdi-view-dashbord",
    children: [
      expenseGroupNav.menu,
      expenseNav.menu,
      expenseDetailNav.menu
    ],
  }
}

export default expensesNavData
