import WriteOffInvoice from './WriteOffInvoice.vue'
const writeOffInvoiceNav = {
        route: {
                path: '/writeOffInvoice/:mode',
                name: 'writeOffInvoice',
                component: WriteOffInvoice,
                meta: { auth: true },
        }, menu: {
                id: "sales.writeoffinvoice",
                name: "WriteOffInvoices",
                component: WriteOffInvoice,
                path: "writeoffinvoices",
                width: "700px",
                editHeaders: [
                { text: "Invoice Id", value: "id" },
                { text: "Amount", value: "amount" },
                { text: "Actions", value: "actions" }], headers: [{
                        text: "Id",
                        align: "start",
                        // sortable: false,
                        value: "id",
                },
                { text: "Write Off", value: "writeOff.displayKey" },
                { text: "Invoice", value: "invoice.displayKey" },
                { text: "Amount", value: "amount" },
                { text: "Amount Recovered", value: "amountRecovered" },
                ],
                children: [{ id: "sales.writeOffInvoice.new", name: "New", route: "writeOffInvoice", mode: 0 },
                { id: "sales.writeOffInvoice.edit", name: "Edit", route: "writeOffInvoice", mode: 1 },
                { id: "sales.writeOffInvoice.history", name: "History", route: "writeOffInvoice", mode: 2 },
                ]
        }
}
export default writeOffInvoiceNav;
