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
    icon: "mdi-cash-remove",
    requires: [
      ...expenseGroupNav.menu.requires,
      ...expenseNav.menu.requires,
      ...expenseDetailNav.menu.requires,
    ],
    children: [
      expenseGroupNav.menu,
      expenseNav.menu,
      expenseDetailNav.menu
    ],
  }
}

export default expensesNavData
