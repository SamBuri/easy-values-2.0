import customerGroupNav from "./customergroup/CustomerGroupNav"
import customerGroupItemCategoryNav from "./customergroupitemcategory/CustomerGroupItemCategoryNav"
import customerNav from "./customer/CustomerNav"
import customerLedgerNav from "./customerledger/CustomerLedgerNav"
import customerLedgerPreviewNav from "./customerledgerpreview/CustomerLedgerPreviewNav"
import engagementNav from "./engagement/EngagementNav"
import engagementPreviewNav from "./engagementpreview/EngagementPreviewNav"
import ledgerNav from "./ledger/LedgerNav"
import invoiceNav from "./invoice/InvoiceNav"
import invoiceDetailNav from "./invoicedetail/InvoiceDetailNav"
import receiptNav from "./receipt/ReceiptNav"
import refundNav from "./refund/RefundNav"


// import salesAccountingSetupNav from "./salesaccountingsetup/SalesAccountingSetupNav"
// import writeOffNav from "./writeoff/WriteOffNav"

const salesNavData = {
    routes: [
        ...customerGroupNav.routes,
        ...customerGroupItemCategoryNav.routes,
        ...customerNav.routes,
        ...customerLedgerNav.routes,
        ...engagementNav.routes,
        engagementPreviewNav.route,
        ledgerNav.route,
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
        icon: "mdi-cash-100",
        children: [
            customerGroupNav.menu,
            customerGroupItemCategoryNav.menu,
            customerNav.menu,
            customerLedgerNav.menu,
            engagementNav.menu,
            engagementPreviewNav.menu,
            ledgerNav.menu,
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
