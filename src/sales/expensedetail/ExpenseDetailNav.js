import ExpenseDetail from './ExpenseDetail.vue'
 import ExpenseDetails from './ExpenseDetails.vue'
 const expenseDetailNav={ routes:[
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
menu:{id: "sales.expensedetail",
        title: "Expense Details",
        component: ExpenseDetail,
        path: "expensedetails",
        width: "700px",
editHeaders: [{ title: "Item", key: "itemId.id"    },
{ title: "Item Name", key: "itemName"    },
{ title: "Quantity", key: "quantity" ,isNumeric: true   },
{ title: "Base Unit Cost", key: "baseUnitCost" ,isNumeric: true   },
{ title: "Unit Cost", key: "unitCost" ,isNumeric: true   },
{ title: "Base Amount", key: "baseAmount" ,isNumeric: true   },
{ title: "Amount", key: "amount" ,isNumeric: true   },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Item", key: "itemId.id"    },
{ title: "Item Name", key: "itemName"    },
{ title: "Quantity", key: "quantity" ,isNumeric: true   },
{ title: "Base Unit Cost", key: "baseUnitCost" ,isNumeric: true   },
{ title: "Unit Cost", key: "unitCost" ,isNumeric: true   },
{ title: "Base Amount", key: "baseAmount" ,isNumeric: true   },
{ title: "Amount", key: "amount" ,isNumeric: true   },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "sales.expenseDetail.view", title: "View",  to:{ name: "expensedetails", }},
{ id: "sales.expenseDetail.new", title: "New",  to:{ name: "expensedetail", params: {mode:0}}},
{ id: "sales.expenseDetail.edit", title: "Edit",  to:{ name: "expensedetail", params: {mode:1}}},
{ id: "sales.expenseDetail.history", title: "History",  to:{ name: "expensedetail", params: {mode:2}}},
]}
}
export default expenseDetailNav;
