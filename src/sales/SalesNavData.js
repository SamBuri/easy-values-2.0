import invoiceNav from "./invoice/InvoiceNav"
import invoiceDetailNav from "./invoicedetail/InvoiceDetailNav"
import receiptNav from "./receipt/ReceiptNav"
import refundNav from "./refund/RefundNav"
// import salesAccountingSetupNav from "./salesaccountingsetup/SalesAccountingSetupNav"
// import writeOffNav from "./writeoff/WriteOffNav"

const salesNavData = {
    routes: [
        ...invoiceNav.routes,
        ...receiptNav.routes,
        ...refundNav.routes,
        ...invoiceDetailNav.routes,
        // salesAccountingSetupNav.route,

        // writeOffNav.route,
    ],
    nav: {
        id: "sales",
        title: "Sales",
        icon: "mdi-view-dashbord",
        children: [
            invoiceNav.menu,
            invoiceDetailNav.menu,
            receiptNav.menu,
            refundNav.menu,

            // salesAccountingSetupNav.menu
            // writeOffNav.menu

        ],
    },

}

export default salesNavData
