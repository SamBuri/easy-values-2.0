import funcs from "../../utils/funcs";
import Ledger from "./Ledger.vue";
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
    path: `bankledgers/ledger`,
    branches: [],
    setData(data) {
      this.accountId = data.id;
      this.accountName = data.bankAccountName;
    },
  },
};
export default ledgerNav;
