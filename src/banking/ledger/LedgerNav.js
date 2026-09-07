import funcs from "../../utils/funcs";
import Ledger from "./Ledger.vue";
import { navUtils } from 'saburi-vue-utils';
const ledgerNav = {
  route: {
    path: "/bankaccountledger",
    name: "bankaccountledger",
    component: Ledger,
    meta: { auth: true },
  },

  menu: {
    id: "bankledger.ledger",
    title: "Ledger",
    icon: "mdi-book-open-variant",
    to: { name: "bankaccountledger" },
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
    startDate: funcs.formatDate(funcs.addDays(funcs.today(), -7)),
    endDate: funcs.today(),
    path: `bank-ledgers/ledger`,
    requires: navUtils.allRoles('bank-ledgers'),
    branches: [],
    setData(data) {
      this.accountId = data.id;
      this.accountName = data.bankAccountName;
    },
  },
};
export default ledgerNav;
