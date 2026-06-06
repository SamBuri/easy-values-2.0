import { Router } from 'express';
import Expenses from './Expenses.vue'
import Expenseses from './Expenseses.vue'
// import { navUtils } from 'saburi-vue-utils';
const expensesNav = {
        routes: [
                {
                        path: '/expenses/:mode',
                        name: 'expenses',
                        component: Expenses,
                        meta: { auth: true },
                },
                {
                        path: '/expenseses',
                        name: 'expenseses',
                        component: Expenseses,
                        meta: { auth: true },
                },

        ],

        menu: {
                id: "expenses.expenses",
                title: "Expenseses",
                component: Expenses,
                path: "expenseses",
                width: "1000px",
                editHeaders: [{ title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType" },
                { title: "Bank Account Id", key: "bankAccountId" },
                { title: "Bank Account", key: "bankAccount" },
                { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
                { title: "Currency Id", key: "currencyId" },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Description", key: "description" },
                { title: "Actions", key: "actions" }], 
                
                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType" },
                { title: "Bank Account Id", key: "bankAccountId" },
                { title: "Bank Account", key: "bankAccount" },
                { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
                { title: "Currency Id", key: "currencyId" },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Description", key: "description" },
                { title: "Bl Posted", key: "blPosted" },
                { title: "BL Posted", key: "blPosted", },
                { title: "GL Posted", key: "glPosted", },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: [{ id: "expenses.expenses.view", title: "View", to: { name: "expenseses", } },
                { id: "expenses.expenses.new", title: "New", to: { name: "expenses", params: { mode: 0 } } },
                { id: "expenses.expenses.edit", title: "Edit", to: { name: "expenses", params: { mode: 1 } } },
                { id: "expenses.expenses.history", title: "History", to: { name: "expenses", params: { mode: 2 } } },
                ]
        }
}
export default expensesNav;
