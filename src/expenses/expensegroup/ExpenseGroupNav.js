import ExpenseGroup from './ExpenseGroup.vue'
import ExpenseGroups from './ExpenseGroups.vue'
const expenseGroupNav = {
        routes: [
                {
                        path: '/expensegroup/:mode',
                        name: 'expensegroup',
                        component: ExpenseGroup,
                        meta: { auth: true },
                },
                {
                        path: '/expensegroups',
                        name: 'expensegroups',
                        component: ExpenseGroups,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "expenses.expensegroup",
                title: "Expense Groups",
                component: ExpenseGroup,
                path: "expensegroups",
                width: "700px",
                editHeaders: [{ title: "Item Category", key: "itemCategoryId", isNumeric: true },
                { title: "Gl Account", key: "glAccountId" },
                { title: "Equity Account", key: "equityAccountId" },
                { title: "Enforce Budget", key: "enforceBudget" },
                { title: "Monthly Budget", key: "monthlyBudget", isNumeric: true },
                { title: "Alert Percent", key: "alertPercent", isNumeric: true },
                { title: "Actions", key: "actions" }], headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Item Category", key: "itemCategory" },
                { title: "Gl Account", key: "glAccountId" },
                { title: "Equity Account", key: "equityAccountId" },
                { title: "Enforce Budget", key: "enforceBudget" },
                { title: "Monthly Budget", key: "monthlyBudget", isNumeric: true },
                { title: "Alert Percent", key: "alertPercent", isNumeric: true },
                { title: "Branch", key: "branch", },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
                children: [{ id: "expenses.expenseGroup.view", title: "View", to: { name: "expensegroups", } },
                { id: "expenses.expenseGroup.new", title: "New", to: { name: "expensegroup", params: { mode: 0 } } },
                { id: "expenses.expenseGroup.edit", title: "Edit", to: { name: "expensegroup", params: { mode: 1 } } },
                { id: "expenses.expenseGroup.history", title: "History", to: { name: "expensegroup", params: { mode: 2 } } },
                ]
        }
}
export default expenseGroupNav;
