import BankTransaction from "./BankTransaction.vue";
import BankTransactions from "./BankTransactions.vue";
import { navUtils } from 'saburi-vue-utils';
const bankTransactionNav = {
  // routes: [
  //   {
  //     path: "/banktransaction/:mode",
  //     name: "banktransaction",
  //     component: BankTransaction,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/banktransactions",
  //     name: "banktransactions",
  //     component: BankTransactions,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("bank-transaction", BankTransaction, "bank-transactions", BankTransactions, true, "banktransaction"),
  menu: {
    id: "banking.banktransaction",
    title: "Bank Transactions",
    component: BankTransaction,
    path: "bank-transactions",
    icon:"mdi-cash-multiple",
    requires: navUtils.allRoles("bank-transactions"),
    width: "700px",
    editHeaders: [
      { title: "Bank Account", key: "bankAccount.bankAccountName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Account Action", key: "accountAction" },
      { title: "Notes", key: "notes" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Bank Account", key: "bankAccount.bankAccountName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Account Action", key: "accountAction" },
      { title: "Notes", key: "notes" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Branch", key: "branch" },
      { title: "BL Posted", key: "blPosted", },
      { title: "GL Posted", key: "glPosted", },
      {
        title: "Creation Date",
        key: "creationDate",
        label: "Creation Date",
        field: "creationDate",
        isDateTime: true,
      },
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true,
      },
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    // children: [
    //   {
    //     id: "banking.bankTransaction.view",
    //     title: "View",
    //     icon: "mdi-table",
    //     to: { name: "banktransactions" },
    //   },
    //   {
    //     id: "banking.bankTransaction.new",
    //     title: "New",
    //     icon: "mdi-plus-circle",
    //     to: { name: "banktransaction", params: { mode: 0 } },
    //   },

    //   {
    //     id: "banking.bankTransaction.history",
    //     title: "History",
    //     icon: "mdi-history",
    //     to: { name: "banktransaction", params: { mode: 2 } },
    //   },
    // ],

    children: navUtils.createViewChildren('banking', 'bank-transactions', 'bank-transactions', false, 'banktransaction'),
  },
};
export default bankTransactionNav;
