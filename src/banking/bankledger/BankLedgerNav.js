import BankLedger from "./BankLedger.vue";
import BankLedgers from "./BankLedgers.vue";
const bankLedgerNav = {
  routes: [
    {
      path: "/bankledger/:mode",
      name: "bankledger",
      component: BankLedger,
      meta: { auth: true },
    },
    {
      path: "/bankledgers",
      name: "bankledgers",
      component: BankLedgers,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "banking.bankledger",
    title: "Bank Ledgers",
    component: BankLedger,
    path: "bankledgers",
    width: "1000px",
    to: { name: "bankledgers" },
    editHeaders: [
      { title: "Bank Account Id", key: "bankAccountId" },
      { title: "Bank Account Name", key: "bankAccountName" },
      { title: "Document Type", key: "documentType" },
      { title: "Document No", key: "documentNo" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Description", key: "description" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Debit", key: "debit", isNumeric: true },
      { title: "Credit", key: "credit", isNumeric: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Bank Account Id", key: "bankAccountId" },
      { title: "Bank Account Name", key: "bankAccountName" },
      { title: "Document Type", key: "documentType" },
      { title: "Document No", key: "documentNo" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Description", key: "description" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Debit", key: "debit", isNumeric: true },
      { title: "Credit", key: "credit", isNumeric: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Branch", key: "branch" },
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

  },
};
export default bankLedgerNav;
