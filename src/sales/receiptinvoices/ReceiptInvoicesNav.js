import ReceiptInvoices from './ReceiptInvoices.vue'
const receiptInvoicesNav = {
        route: {
                path: '/receiptInvoices/:mode',
                name: 'receiptInvoices',
                component: ReceiptInvoices,
                meta: {auth: true}
        }, menu: {
                id: "sales.receiptinvoices",
                name: "Receipt Invoices",
                component: ReceiptInvoices,
                path: "receiptinvoices",
                width: "700px",

                editHeaders: [
                { title: "Invoice ID", key: "id" },
                { title: "Invoice Amount", key: "invoiceAmount" ,isNumeric:true},
                { title: "Amount", key: "toPayAmount" ,isNumeric:true},
                { title: "Actions", key: "actions" }],


                previewHeaders: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Invoice", key: "invoice.id" },
                { title: "Amount", key: "amount" ,isNumeric:true},
                { title: "Amount Refunded", key: "amountRefunded" ,isNumeric:true},
                ],


                headers: [{
                        title: "Id",
                        align: "start",
                        // sortable: false,
                        key: "id",
                },
                { title: "Receipt", key: "receipt.id" },
                { title: "Invoice", key: "invoice.id" },
                { title: "Amount", key: "amount" ,isNumeric:true},
                { title: "Amount Refunded", key: "amountRefunded" ,isNumeric:true},
                ],
                children: [{ id: "sales.receiptInvoices.new", title: "New", route: "receiptInvoices", mode: 0 },
                { id: "sales.receiptInvoices.edit", title: "Edit", route: "receiptInvoices", mode: 1 },
                { id: "sales.receiptInvoices.history", title: "History", route: "receiptInvoices", mode: 2 },
                ],

        }
}
export default receiptInvoicesNav;
