import creditorNav from "./creditor/CreditorNav.js";
import billNav from "./bill/BillNav.js";
import billItemNav from "./billitem/BillItemNav.js";
import creditorLedgerNav from "./creditorledger/CreditorLedgerNav.js";
import paymentNav from "./payment/PaymentNav.js";
import paymentBillNav from "./paymentbill/PaymentBillNav.js";
import creditorGroupNav from "./creditorgroup/CreditorGroupNav.js";
import creditorItemCategoryNav from "./creditoritemcategory/CreditorItemCategoryNav.js";
import ledgerNav from "./ledger/LedgerNav.js";
const creditorNavData = {
  routes: [
    ...creditorGroupNav.routes,
    ...creditorItemCategoryNav.routes,
    ...creditorNav.routes,
    ...billNav.routes,
    ...billItemNav.routes,
    ...creditorLedgerNav.routes,
    ...paymentNav.routes,
    ...paymentBillNav.routes,
      ledgerNav.route,
  ],
  nav: {
    id: "creditor",
    title: "Creditor",
    icon: "mdi-view-dashbord",
    children: [
      creditorGroupNav.menu,
      creditorItemCategoryNav.menu,
      creditorNav.menu,
      billNav.menu,
      billItemNav.menu,
      paymentNav.menu,
      paymentBillNav.menu,
      creditorLedgerNav.menu,
      ledgerNav.menu,
    ],
  },
};

export default creditorNavData;
