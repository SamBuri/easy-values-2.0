import ExpenseDetail from './ExpenseDetail.vue'
import ExpenseDetails from './ExpenseDetails.vue'
const expenseDetailNav = {
        routes: [
                {
                        path: '/expensedetail/:mode',
                        name: 'expensedetail',
                        component: ExpenseDetail,
                        meta: { auth: true },
                },
                {
                        path: '/expensedetails',
                        name: 'expensedetails',
                        component: ExpenseDetails,
                        meta: { auth: true },
                },

        ],
        menu: {
                id: "expenses.expensedetail",
                title: "Expense Details",
                component: ExpenseDetail,
                path: "expensedetails",
                width: "1000px",
                editHeaders: [
                { title: "Item Id", key: "itemId" },
                { title: "Item Name", key: "itemName" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Base Unit Cost", key: "baseUnitCost", isNumeric: true },
                { title: "Unit Cost", key: "unitCost", isNumeric: true },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Actions", key: "actions" }],
                headers: [
                { title: "Expense Id", key: "expense.id" },
                { title: "Item Category", key: "expenseGroup.itemCategory" },
                { title: "Item Id", key: "itemId" },
                { title: "Item Name", key: "itemName" },
                { title: "Quantity", key: "quantity", isNumeric: true },
                { title: "Tran Date", key: "expense.tranDate", isDate: true},
                { title: "Description", key: "expense.description" },
                { title: "Base Unit Cost", key: "baseUnitCost", isNumeric: true },
                { title: "Unit Cost", key: "unitCost", isNumeric: true },
                { title: "Base Amount", key: "baseAmount", isNumeric: true },
                { title: "Amount", key: "amount", isNumeric: true },
                { title: "Branch", key: "branch", label: "Branch", field: "branch" },
                { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                { title: "Created By", key: "createdBy", label: "Created By", field: "createdBy" },
                { title: "Modified By", key: "modifiedBy", label: "Modified By", field: "modifiedBy" }],

        }
}
export default expenseDetailNav;
