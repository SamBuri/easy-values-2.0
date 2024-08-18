import Account from "./Account.vue";
import Accounts from "./Accounts.vue";
const accountNav = {
  routes: [
    {
      path: "/account/:mode",
      name: "account",
      component: Account,
      meta: { auth: true },
    },
    {
      path: "/accounts",
      name: "accounts",
      component: Accounts,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "accounting.account",
    title: "Accounts",
    component: Account,
    path: "accounts",
    width: "1000px",
    editHeaders: [
      { title: "Account Type", key: "accountCategory.accountType" },
      { title: "Account Category", key: "accountCategory.categoryName" },
      { title: "Account Name", key: "accountName" },
      { title: "Account Action", key: "accountAction" },
      { title: "Account Report", key: "accountReport" },
      { title: "Contra", key: "contra" },
      { title: "Control Account", key: "controlAccount" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Read Only", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
      { title: "Actions", key: "actions" },
    ],

    miniHeaders: [
      { title: "Id", key: "id" },
      { title: "Account Type", key: "accountCategory.accountType" },
      { title: "Category Name", key: "accountCategory.categoryName" },
      { title: "Account Name", key: "accountName" },

    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Account Type", key: "accountCategory.accountType" },
      { title: "Account Category", key: "accountCategory.categoryName" },
      { title: "Account Name", key: "accountName" },
      { title: "Account Action", key: "accountAction" },
      { title: "Account Report", key: "accountReport" },
      { title: "Contra", key: "contra" },
      { title: "Control Account", key: "controlAccount" },
      { title: "Balance", key: "balance", isNumeric: true },
      { title: "Read Only", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
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
        id: "accounting.account.view",
        title: "View",
        to: { name: "accounts" },
      },
      {
        id: "accounting.account.new",
        title: "New",
        to: { name: "account", params: { mode: 0 } },
      },
      {
        id: "accounting.account.edit",
        title: "Edit",
        to: { name: "account", params: { mode: 1 } },
      },
      {
        id: "accounting.account.history",
        title: "History",
        to: { name: "account", params: { mode: 2 } },
      },
    ],
  },
};
export default accountNav;
