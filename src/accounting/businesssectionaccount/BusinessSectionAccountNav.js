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
    title: "Bus Section Accounts",
    component: BusinessSectionAccount,
    path: "businesssectionaccounts",
    width: "700px",
    editHeaders: [
      { title: "Name", key: "name", label: "Name", field: "name" },
      {
        title: "Business Section",
        key: "businessSection",
        label: "Business Section",
        field: "businessSection",
      },
      {
        title: "Item Category",
        key: "itemCategory",
        label: "Item Category",
        field: "itemCategory",
      },
      {
        title: "Sales Account",
        key: "salesAccount.accountName",
        label: "Sales Account",
        field: "salesAccount",
      },
      {
        title: "Expense Account",
        key: "expenseAccount.accountName",
        label: "Expense Account",
        field: "expenseAccount",
      },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Name", key: "name", label: "Name", field: "name" },
      {
        title: "Business Section",
        key: "businessSectionId",
        label: "Business Section",
        field: "businessSectionId",
      },
      {
        title: "Business Section",
        key: "businessSection",
        label: "Business Section",
        field: "businessSection",
      },
      {
        title: "Item Category",
        key: "itemCategory",
        label: "Item Category",
        field: "itemCategory",
      },
      {
        title: "Sales Account",
        key: "salesAccount.accountName",
        label: "Sales Account",
        field: "salesAccount",
      },
      {
        title: "Expense Account",
        key: "expenseAccount.accountName",
        label: "Expense Account",
        field: "expenseAccount",
      },
      { title: "Branch", key: "branch", label: "Branch", field: "branch" },
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
      {
        title: "Created By",
        key: "createdBy",
        label: "Created By",
        field: "createdBy",
      },
      {
        title: "Modified By",
        key: "modifiedBy",
        label: "Modified By",
        field: "modifiedBy",
      },
    ],
    children: [
      {
        id: "accounting.businessSectionAccount.view",
        title: "View",
        to: {name: "businesssectionaccounts"},

      },
      {
        id: "accounting.businessSectionAccount.new",
        title: "New",
        to: {name: "businesssectionaccount", params: {mode:0}},
      },
      {
        id: "accounting.businessSectionAccount.edit",
        title: "Edit",
        to: {name: "businesssectionaccount", params: {mode:1}},
      },
      {
        id: "accounting.businessSectionAccount.history",
        title: "History",
        to: {name: "businesssectionaccount", params: {mode:2}},
      },
    ],
  },
};
export default businessSectionAccountNav;
