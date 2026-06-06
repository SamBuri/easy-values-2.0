import CreditorLedger from "./CreditorLedger.vue";
import CreditorLedgers from "./CreditorLedgers.vue";
import { navUtils } from 'saburi-vue-utils';
const creditorLedgerNav = {
  routes: [

    {
      path: "/creditorledgers",
      name: "creditorledgers",
      component: CreditorLedgers,
      meta: { auth: true },
    },
    // navUtils.viewRoute(
    //   "creditorledger",
    //   CreditorLedgers,
    //   "creditorledgers",
    //   true
    // ),
  ],
  menu: {
    id: "creditor.creditorledger",
    title: "Creditor Ledgers",
    component: CreditorLedger,
    path: "creditorledgers",
    icon: "mdi-book-open-page-variant",
    requires: navUtils.viewRoles("creditorledger"),
    to: { name: "creditorledgers" },
    width: "1000px",
    editHeaders: [
      { title: "Account Id", key: "accountId" },
      { title: "Account Name", key: "accountName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Document Type", key: "documentType" },
      { title: "Document No", key: "documentNo" },
      { title: "Description", key: "description" },
      { title: "Amount", key: "amount", isNumeric: true },
      { title: "Debit", key: "debit", isNumeric: true },
      { title: "Credit", key: "credit", isNumeric: true },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      // {
      //   title: "Id",
      //   align: "start",
      //   // sortable: false,
      //   key: "id",
      // },
      { title: "Account Id", key: "accountId" },
      { title: "Account Name", key: "accountName" },
      { title: "Tran Date", key: "tranDate", isDate: true },
      { title: "Document Type", key: "documentType" },
      { title: "Document No", key: "documentNo" },
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
export default creditorLedgerNav;
