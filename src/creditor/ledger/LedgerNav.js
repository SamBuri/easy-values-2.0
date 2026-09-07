import funcs from "../../utils/funcs";
import Ledger from "./Ledger.vue";
import { navUtils } from 'saburi-vue-utils';
const ledgerNav = {
  // route: {
  //   path: "/creditorledger",
  //   name: "creditorledger",

  //   component: Ledger,
  //   meta: { auth: true },
  // },
  route: navUtils.viewRoute(
    "creditorledger",
    Ledger,
    true
  ),

  menu: {
    id: "creditor.ledger",
    title: "Ledger",
    to: { name: "creditorledger" },
    icon: "mdi-book-open-page-variant",
    requires: navUtils.allRoles("creditor-ledgers"),
  },

  headers: [
    { title: "Document Type", key: "documentType" },
    { title: "Document No", key: "documentNo" },
    { title: "Tran Date", key: "tranDate", isDate: true },
    { title: "Description", key: "description" },
    { title: "Amount", key: "amount", isNumeric: true },
    { title: "Debit", key: "debit", isNumeric: true },
    { title: "Credit", key: "credit", isNumeric: true },
    { title: "Balance", key: "balance", isNumeric: true },
  ],

  model: {
    accountId: "",
    accountName: "",
    startDate: funcs.formatDate(funcs.addDays(funcs.today(), -30)),
    endDate: funcs.today(),
    path: `creditor-ledgers/ledger`,
    branches: [],
    setData(data) {
      this.accountId = data.id;
      this.accountName = data.name;
    },
  },
};
export default ledgerNav;
