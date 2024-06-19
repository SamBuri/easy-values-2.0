import customerNav from "./customer/CustomerNav"
import customerLedgerNav from "./customerledger/CustomerLedgerNav"
import customerLedgerPreviewNav from "./customerledgerpreview/CustomerLedgerPreviewNav"
import engagementNav from "./engagement/EngagementNav"
import accountsGroupNav from "./accountsgroup/AccountsGroupNav"
import engagementPreviewNav from "./engagementpreview/EngagementPreviewNav"
import ledgerNav from "./ledger/LedgerNav"

const customerNavData = {
  routes: [
    ...accountsGroupNav.routes,
    ...customerNav.routes,
    ...customerLedgerNav.routes,
    customerLedgerPreviewNav.route,
    ...engagementNav.routes,
    engagementPreviewNav.route,
    ledgerNav.route,

  ],
  nav: {
    id: "customer",
    title: "Customer",
    icon: "mdi-view-dashbord",
    children: [
      accountsGroupNav.menu,
      customerNav.menu,
      customerLedgerNav.menu,
      customerLedgerPreviewNav.menu,
      engagementNav.menu,
      engagementPreviewNav.menu,
      ledgerNav.menu,


    ],
  },
  menus: [
    accountsGroupNav.menu,
    customerNav.menu,
    customerLedgerNav.menu,
    engagementNav.menu,
    engagementPreviewNav.menu,


  ],
}

export default customerNavData
