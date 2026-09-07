import BankTransfer from "./BankTransfer.vue";
import BankTransfers from "./BankTransfers.vue";
import { navUtils } from 'saburi-vue-utils';
const bankTransferNav = {
  // routes: [
  //   {
  //     path: "/banktransfer/:mode",
  //     name: "banktransfer",
  //     component: BankTransfer,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/banktransfers",
  //     name: "banktransfers",
  //     icon: "mdi-transfer",
  //     component: BankTransfers,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes("bank-transfer", BankTransfer, "bank-transfers", BankTransfers, true, "banktransfer"),
  menu: {
    id: "banking.banktransfer",
    title: "Bank Transfers",
    component: BankTransfer,
    path: "bank-transfers",
    requires: navUtils.allRoles("bank-transfers"),
    width: "1000px",
    editHeaders: [
      { title: "From Account Type", key: "fromAccountType" },
      { title: "From Account", key: "fromAccount.bankAccountName", },
      { title: "To Account Type", key: "toAccountType" },
      { title: "To Account", key: "toAccount.bankAccountName" },
      { title: "Reference No", key: "referenceNo" },
      { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
      { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
      { title: "Transfer Charge", key: "transferCharge", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Transfer Date", key: "transferDate", isDate: true },
      { title: "Notes", key: "notes" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      { title: "From Account Type", key: "fromAccountType" },
      { title: "From Account", key: "fromAccount.bankAccountName", },
      { title: "To Account Type", key: "toAccountType" },
      { title: "To Account", key: "toAccount.bankAccountName" },
      { title: "Reference No", key: "referenceNo" },
      { title: "Exchange Rate", key: "exchangeRate", isNumeric: true },
      { title: "Amount Tendered", key: "amountTendered", isNumeric: true },
      { title: "Transfer Charge", key: "transferCharge", isNumeric: true },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Transfer Date", key: "transferDate", isDate: true },
      { title: "Notes", key: "notes" },
      { title: "BL Posted", key: "blPosted", },
      { title: "GL Posted", key: "glPosted", },
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
    // children: [
    //   {
    //     id: "banking.bankTransfer.view",
    //     title: "View",
    //     icon: "mdi-table",
    //     to: { name: "banktransfers" },
    //   },
    //   {
    //     id: "banking.bankTransfer.new",
    //     title: "New",
    //     icon: "mdi-plus-circle",
    //     to: { name: "banktransfer", params: { mode: 0 } },
    //   },
      
    //   {
    //     id: "banking.bankTransfer.history",
    //     title: "History",
    //     icon: "mdi-history",
    //     to: { name: "banktransfer", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.createViewChildren('banking', 'bank-transfers', 'bank-transfers', false, 'banktransfer')
  },
};
export default bankTransferNav;
