import CustomerLedgerPreview from './CustomerLedgerPreview.vue'
const customerLedgerPreviewNav = {
        route: {
                path: '/customerLedgerPreview/:mode',
                name: 'customerLedgerPreview',
                component: CustomerLedgerPreview,
                meta: { auth: true },
        }, menu: {


                route: "customerLedgerPreview",
                 mode: 0,
                id: "customer.customerledgerpreview",
                title: "Customer Ledger",
                component: CustomerLedgerPreview,
                icon: "mdi-dashboard",
                // path: "customerledgerpreviews",
                width: "700px",

                // children: [{ id: "customer.customerLedgerPreview.new", name: "New", route: "customerLedgerPreview", mode: 0 },
                // { id: "customer.customerLedgerPreview.edit", name: "Edit", route: "customerLedgerPreview", mode: 1 },
                // { id: "customer.customerLedgerPreview.history", name: "History", route: "customerLedgerPreview", mode: 2 },
                // ]
        }
}
export default customerLedgerPreviewNav;
