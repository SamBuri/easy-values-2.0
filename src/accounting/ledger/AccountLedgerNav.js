import funcs from "../../utils/funcs";
import AccountLedger from "./AccountLedger.vue";
const accountLedgerNav = {
  route: {
    path: "/accountledger",
    name: "accountledger",
    component: AccountLedger,
    meta: { auth: true },
  },

  menu: {
    id: "generalledger.ledger",
    title: "Ledger",
    to: { name: "accountledger" },
  },

  headers: [
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
    startDate: funcs.addDays(new Date(), -7),
    endDate: new Date(),
    path: `generalledgers/ledger`,
    branches: [],

    clear(){
      this.accountId ='';
      this.accountName = '';
    },
    setData(data) {
      this.accountId = data.id;
      this.accountName = data.accountName;
    },
  },
};
export default accountLedgerNav;
