import ExpenseDetail from './ExpenseDetail.vue'
import ExpenseDetails from './ExpenseDetails.vue'
import { navUtils } from 'saburi-vue-utils';
const expenseDetailNav = {
        // routes: [
        //         {
        //                 path: '/expensedetail/:mode',
        //                 name: 'expensedetail',
        //                 component: ExpenseDetail,
        //                 meta: { auth: true },
        //         },
        //         {
        //                 path: '/expensedetails',
        //                 name: 'expensedetails',
        //                 component: ExpenseDetails,
        //                 meta: { auth: true },
        //         },

        // ],
        routes: [navUtils.viewRoute('expensedetails', ExpenseDetails, true)],
        menu: {
                id: "expenses.expensedetail",
                title: "Expense Details",
                component: ExpenseDetail,
                path: "expensedetails",
                to: {name: "expensedetails"},
                icon: "mdi-format-list-bulleted",
                requires: navUtils.viewRoles("expense"),
                width: "700px",
                editHeaders: [
                        { title: "Item Name", key: "itemName" },
                        { title: "Quantity", key: "quantity", isNumeric: true },
                        // { title: "Base Unit Cost", key: "baseUnitCost", isNumeric: true },
                        { title: "Unit Cost", key: "unitCost", isNumeric: true },
                        // { title: "Base Amount", key: "baseAmount", isNumeric: true },
                        { title: "Amount", key: "amount", isNumeric: true },
                        { title: "Actions", key: "actions" }], 
                        headers: [{
                                title: "Id",
                                align: "start",
                                // sortable: false,
                                key: "id",
                        },
                        { title: "Item", key: "itemId.id" },
                        { title: "Item Name", key: "itemName" },
                        { title: "Quantity", key: "quantity", isNumeric: true },
                        // { title: "Base Unit Cost", key: "baseUnitCost", isNumeric: true },
                        { title: "Unit Cost", key: "unitCost", isNumeric: true },
                        // { title: "Base Amount", key: "baseAmount", isNumeric: true },
                        { title: "Amount", key: "amount", isNumeric: true },
                        { title: "Bank Account", key: "expense.bankAccount" },
                        { title: "Notes", key: "expense.description" },
                        { title: "Branch", key: "branch", },
                        { title: "Creation Date", key: "creationDate", label: "Creation Date", field: "creationDate", isDateTime: true },
                        { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true },
                        { title: "Created By", key: "createdBy", },
                        { title: "Modified By", key: "modifiedBy", }],
               
        }
}
export default expenseDetailNav;
