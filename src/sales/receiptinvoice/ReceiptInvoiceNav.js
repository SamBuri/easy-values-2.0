import ReceiptInvoice from './ReceiptInvoice.vue'
 import ReceiptInvoices from './ReceiptInvoices.vue'
 const receiptInvoiceNav={ routes:[
        {
                path: '/receiptinvoice/:mode',
                name: 'receiptinvoice',
                component: ReceiptInvoice,
                meta: { auth: true },
         },
         {
                path: '/receiptinvoices',
                name: 'receiptinvoices',
                component: ReceiptInvoices,
                meta: { auth: true },
         },
        
        ],
menu:{id: "sales.receiptinvoice",
        title: "Receipt Invoices",
        component: ReceiptInvoice,
        path: "receiptinvoices",
        width: "700px",
editHeaders: [{ title: "Receipt", key: "receipt"    },
{ title: "Invoice", key: "invoice"    },
{ title: "Amount", key: "amount" ,isNumeric: true   },
{ title: "Amount Refunded", key: "amountRefunded" ,isNumeric: true   },
{title: "Actions", key: "actions"}],headers: [{
                title: "Id",
                align: "start",
                // sortable: false,
                key: "id",
            },
{ title: "Receipt", key: "receipt"    },
{ title: "Invoice", key: "invoice"    },
{ title: "Amount", key: "amount" ,isNumeric: true   },
{ title: "Amount Refunded", key: "amountRefunded" ,isNumeric: true   },
 { title: "Branch", key: "branch",},
{ title: "Creation Date", key: "creationDate",  label: "Creation Date", field: "creationDate", isDateTime: true },
                { title: "Last Modified Date", key: "lastModifiedDate", isDateTime: true},
                { title: "Created By", key: "createdBy", },
                { title: "Modified By", key: "modifiedBy", }],
children: [{ id: "sales.receiptInvoice.view", title: "View",  to:{ name: "receiptinvoices", }},
{ id: "sales.receiptInvoice.new", title: "New",  to:{ name: "receiptinvoice", params: {mode:0}}},
{ id: "sales.receiptInvoice.edit", title: "Edit",  to:{ name: "receiptinvoice", params: {mode:1}}},
{ id: "sales.receiptInvoice.history", title: "History",  to:{ name: "receiptinvoice", params: {mode:2}}},
]}
}
export default receiptInvoiceNav;
