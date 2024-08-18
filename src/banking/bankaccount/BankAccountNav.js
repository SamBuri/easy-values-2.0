import BankAccount from "./BankAccount.vue";
import BankAccounts from "./BankAccounts.vue";
const bankAccountNav = {
  routes: [
    {
      path: "/bankaccount/:mode",
      name: "bankaccount",
      component: BankAccount,
      meta: { auth: true },
    },
    {
      path: "/bankaccounts",
      name: "bankaccounts",
      component: BankAccounts,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "banking.bankaccount",
    title: "Bank Accounts",
    component: BankAccount,
    path: "bankaccounts",
    width: "1000px",
    editHeaders: [
      { title: "Bank Account Name", key: "bankAccountName" },
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Account No", key: "accountNo" },
      { title: "Bank Name", key: "bankName" },
      { title: "Branch Name", key: "branchName" },
      { title: "Currency", key: "currencyId" },
      { title: "Gl Account", key: "glAccount" },
      { title: "Charges Gl Account", key: "chargesGlAccount" },
      { title: "Phone No", key: "phoneNo" },
      { title: "Email", key: "email" },
      { title: "Address", key: "address" },
      { title: "Is Default", key: "isDefault" },
      { title: "Hidden", key: "hidden" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],

    miniHeaders: [
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Bank Account Name", key: "bankAccountName" },
      { title: "Account No", key: "accountNo" },
      { title: "Currency", key: "currencyId" },
      { title: "Balance", key: "balance", isNumeric: true },
    ],

    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Bank Account Name", key: "bankAccountName" },
      { title: "Bank Account Type", key: "bankAccountType" },
      { title: "Account No", key: "accountNo" },
      { title: "Bank Name", key: "bankName" },
      { title: "Branch Name", key: "branchName" },
      { title: "Currency", key: "currency" },
      { title: "Gl Account", key: "glAccount" },
      { title: "Charges Gl Account", key: "chargesGlAccount" },
      { title: "Phone No", key: "phoneNo" },
      { title: "Email", key: "email" },
      { title: "Address", key: "address" },
      { title: "Is Default", key: "isDefault" },
      { title: "Hidden", key: "hidden" },
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
    children: [
      {
        id: "banking.bankAccount.view",
        title: "View",
        to: { name: "bankaccounts" },
      },
      {
        id: "banking.bankAccount.new",
        title: "New",
        to: { name: "bankaccount", params: { mode: 0 } },
      },
      {
        id: "banking.bankAccount.edit",
        title: "Edit",
        to: { name: "bankaccount", params: { mode: 1 } },
      },
      {
        id: "banking.bankAccount.history",
        title: "History",
        to: { name: "bankaccount", params: { mode: 2 } },
      },
    ],
  },
};
export default bankAccountNav;
