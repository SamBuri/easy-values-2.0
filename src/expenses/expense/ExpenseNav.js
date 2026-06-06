import Expense from './Expense.vue'
import Expenses from './Expenses.vue'
import { navUtils } from 'saburi-vue-utils';
const expenseNav = {
        // routes: [
        //         {
        //                 path: '/expense/:mode',
        //                 name: 'expense',
        //                 component: Expense,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/expenses',
        //                 name: 'expenses',
        //                 component: Expenses,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: navUtils.allRoutes("expense", Expense, "expenses", Expenses, true),
        menu: {
                id: "expenses.expense",
                title: "Expenses",
                component: Expense,
                path: "expenses",
                icon: "mdi-cash-remove",
                requires: navUtils.allRoles("expense"),
                width: "1000px",
                editHeaders: [{ title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType" },
                { title: "Bank Account", key: "bankAccountId", isNumeric: true },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Currency", key: "currencyId", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Description", key: "description" },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Tran Date", key: "tranDate", isDate: true },
                { title: "Bank AccountType", key: "bankAccountType" },
                { title: "Bank Account", key: "bankAccount", },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Currency", key: "currencyId", isNumeric: true },
                { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Amount Words", key: "amountWords" },
                { title: "Description", key: "description" },
                { title: "BL Posted", key: "blPosted", },
                { title: "GL Posted", key: "glPosted", },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],

                children: navUtils.allChildren('expenses', 'expense', 'expenses', false),
        }
}
export default expenseNav;
