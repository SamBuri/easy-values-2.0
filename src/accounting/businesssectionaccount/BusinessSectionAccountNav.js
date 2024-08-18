import BusinessSectionAccount from "./BusinessSectionAccount.vue";
import BusinessSectionAccounts from "./BusinessSectionAccounts.vue";
const businessSectionAccountNav = {
  routes: [
    {
      path: "/businesssectionaccount/:mode",
      name: "businesssectionaccount",
      component: BusinessSectionAccount,
      meta: { auth: true },
    },
    {
      path: "/businesssectionaccounts",
      name: "businesssectionaccounts",
      component: BusinessSectionAccounts,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "accounting.businesssectionaccount",
    title: "Business Section Accounts",
    component: BusinessSectionAccount,
    path: "businesssectionaccounts",
    width: "700px",
    editHeaders: [
      { title: "Name", key: "name" },
      { title: "Business Section", key: "businessSectionId" },
      { title: "Item Category", key: "itemCategory" },
      { title: "Sales Account", key: "salesAccount.accountName" },
      { title: "Expense Account", key: "expenseAccount.accountName" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Name", key: "name" },
      { title: "Business Section", key: "businessSectionId" },
      { title: "Item Category", key: "itemCategory" },
      { title: "Sales Account", key: "salesAccount.accountName" },
      { title: "Expense Account", key: "expenseAccount.accountName" },
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
        id: "accounting.businessSectionAccount.view",
        title: "View",
        to: { name: "businesssectionaccounts" },
      },
      {
        id: "accounting.businessSectionAccount.new",
        title: "New",
        to: { name: "businesssectionaccount", params: { mode: 0 } },
      },
      {
        id: "accounting.businessSectionAccount.edit",
        title: "Edit",
        to: { name: "businesssectionaccount", params: { mode: 1 } },
      },
      {
        id: "accounting.businessSectionAccount.history",
        title: "History",
        to: { name: "businesssectionaccount", params: { mode: 2 } },
      },
    ],
  },
};
export default businessSectionAccountNav;
