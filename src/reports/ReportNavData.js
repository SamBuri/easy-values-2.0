import loanbillsNavData from "./loanbills/LoanBillsNavData"
import loanNavData from "./loans/LoanNavData"
import receiptNavData from "./receipts/ReceiptNavData"
import expensesNavData from "./expenses/ExpensesNavData"
import expensedetailsNavData from './expensedetails/ExpensedetailsNavData'

const reportsNavData = {
    routes: [
        ...loanNavData.routes,
        ...loanbillsNavData.routes,
        ...receiptNavData.routes,
        ...expensesNavData.routes,
        ...expensedetailsNavData.routes,
    ],
    nav: {
        id: "reports",
        title: "Reports",
        icon: "mdi-view-dashbord",
        children: [
            loanNavData.nav,
            loanbillsNavData.nav,
            receiptNavData.nav,
            expensesNavData.nav,
            expensedetailsNavData.nav,

        ],
    }
}

export default reportsNavData
