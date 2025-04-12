import BankTransaction from "./BankTransaction.vue";
import BankTransactions from "./BankTransactions.vue";
const bankTransactionNav = {
  routes: [
    {
      path: "/banktransaction/:mode",
      name: "banktransaction",
      component: BankTransaction,
      meta: { auth: true },
    },
    {
      path: "/banktransactions",
      name: "banktransactions",
      component: BankTransactions,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "banking.banktransaction",
    title: "Bank Transactions",
    component: BankTransaction,
    path: "banktransactions",
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
    children: [
      {
        id: "banking.bankTransaction.view",
        title: "View",
        icon: "mdi-table",
        to: { name: "banktransactions" },
      },
      {
        id: "banking.bankTransaction.new",
        title: "New",
        icon: "mdi-plus-circle",
        to: { name: "banktransaction", params: { mode: 0 } },
      },

      {
        id: "banking.bankTransaction.history",
        title: "History",
        icon: "mdi-history",
        to: { name: "banktransaction", params: { mode: 2 } },
      },
    ],
  },
};
export default bankTransactionNav;
