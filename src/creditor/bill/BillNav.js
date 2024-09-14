import Bill from './Bill.vue'
 import Bills from './Bills.vue'
 const billNav={ routes:[
        {
                path: '/bill/:mode',
                name: 'bill',
                component: Bill,
                meta: { auth: true },
         },
         {
                path: '/bills',
                name: 'bills',
                component: Bills,
                meta: { auth: true },
         },
        
        ],
menu:{id: "creditor.bill",
        title: "Bills",
        component: Bill,
        path: "bills",
        width: "700px",
editHeaders: [{ title: "Tran Date", key: "tranDate"  , isDate: true },
{ title: "Creditor", key: "creditor.id"    },
{ title: "Start Date", key: "startDate"  , isDate: true },
{ title: "End Date", key: "endDate"  , isDate: true },
{ title: "Amount", key: "amount" ,isNumeric: true   },
{ title: "Amount Words", key: "amountWords"    },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Tran Date", key: "tranDate"  , isDate: true },
{ title: "Creditor", key: "creditor.id"    },
{ title: "Start Date", key: "startDate"  , isDate: true },
{ title: "End Date", key: "endDate"  , isDate: true },
{ title: "Amount", key: "amount" ,isNumeric: true   },
{ title: "Amount Words", key: "amountWords"    },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "creditor.bill.view", title: "View",  to:{ name: "bills", }},
{ id: "creditor.bill.new", title: "New",  to:{ name: "bill", params: {mode:0}}},
{ id: "creditor.bill.edit", title: "Edit",  to:{ name: "bill", params: {mode:1}}},
{ id: "creditor.bill.history", title: "History",  to:{ name: "bill", params: {mode:2}}},
]}
}
export default billNav;
