import Expense from './Expense.vue'
import Expenses from './Expenses.vue'
const expenseNav = {
        routes: [
                {
                        path: '/expense/:mode',
                        name: 'expense',
                        component: Expense,
                        meta: { auth: true },
                },
                {
                        path: '/expenses',
                        name: 'expenses',
                        component: Expenses,
                        meta: { auth: true },
                },

        ], menu: {
                id: "expenses.expense",
                title: "Expenses",
                component: Expense,
                path: "expenses",
                width: "1000px",
                editHeaders: [{ title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType", label: "Bank AccountType", field: "bankAccountType" },
                { title: "BankAccount", key: "bankAccount", label: "BankAccount", field: "bankAccount" },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Currency", key: "currencyId", label: "Currency", field: "currencyId" },
                { title: "Currency", key: "currency", label: "Currency", field: "currency" },
                { title: "Exchange Rate", key: "exchangeRate", label: "Exchange Rate", field: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Expense Details", key: "expenseDetails", label: "Expense Details", field: "expenseDetails" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Tran Date", key: "tranDate", label: "Tran Date", field: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType", label: "Bank AccountType", field: "bankAccountType" },
                { title: "BankAccount", key: "bankAccount", label: "BankAccount", field: "bankAccount" },
                { title: "Amount Tendered", key: "amountTendered", label: "Amount Tendered", field: "amountTendered", isNumeric: true },
                { title: "Currency", key: "currency", label: "Currency", field: "currency" },
                { title: "Exchange Rate", key: "exchangeRate", label: "Exchange Rate", field: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", label: "Amount", field: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords", label: "Amount Words", field: "amountWords" },
                { title: "Description", key: "description", label: "Description", field: "description" },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Bl Posted", key: "blPosted", label: "Bl Posted", field: "blPosted" },
                { title: "Gl Posted", key: "glPosted", label: "Gl Posted", field: "glPosted" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],
                children: [
                  { id: "expenses.expense.view", title: "View", to: {name: "expenses",}},
                  { id: "expenses.expense.new", title: "New", to: {name: "expense", params:{mode: 0}}},
                { id: "expenses.expense.edit", title: "Edit", to: {name: "expense", params:{mode: 1}} },
                { id: "expenses.expense.history", title: "History", to: {name: "expense", params:{mode: 2}} },
                ]
        }
}
export default expenseNav;
