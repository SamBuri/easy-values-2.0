import CreditorItemCategory from "./CreditorItemCategory.vue";
import CreditorItemCategories from "./CreditorItemCategories.vue";
import { navUtils } from 'saburi-vue-utils';
const creditorItemCategoryNav = {
  // routes: [
  //   {
  //     path: "/creditoritemcategory/:mode",
  //     name: "creditoritemcategory",
  //     component: CreditorItemCategory,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/creditoritemcategories",
  //     name: "creditoritemcategories",
  //     component: CreditorItemCategories,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes(
    "creditoritemcategory",
    CreditorItemCategory,
    "creditoritemcategories",
    CreditorItemCategories,
    true
  ),
  menu: {
    id: "creditor.creditoritemcategory",
    title: "Creditor Item Categories",
    component: CreditorItemCategory,
    path: "creditoritemcategories",
    icon: "mdi-account-cash",
    requires: navUtils.allRoles("creditoritemcategory"),
    width: "700px",
    editHeaders: [
      { title: "Creditor Group", key: "creditorGroup.id", isNumeric: true },
      { title: "Item Category", key: "itemCategoryId", isNumeric: true },
      { title: "Expense Account", key: "expenseAccountId" },
      { title: "Enforce Budget", key: "enforceBudget" },
      { title: "Monthly Amount", key: "monthlyAmount", isNumeric: true },
      { title: "Alert Percentage", key: "alertPercentage", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Creditor Group", key: "creditorGroup.name" },
      { title: "Item Category", key: "itemCategory" },
      { title: "Expense Account", key: "expenseAccount" },
      { title: "Enforce Budget", key: "enforceBudget" },
      { title: "Monthly Amount", key: "monthlyAmount", isNumeric: true },
      { title: "Alert Percentage", key: "alertPercentage", isNumeric: true },
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
    //     id: "creditor.creditorItemCategory.view",
    //     title: "View",
    //     to: { name: "creditoritemcategories" },
    //   },
    //   {
    //     id: "creditor.creditorItemCategory.new",
    //     title: "New",
    //     to: { name: "creditoritemcategory", params: { mode: 0 } },
    //   },
    //   {
    //     id: "creditor.creditorItemCategory.edit",
    //     title: "Edit",
    //     to: { name: "creditoritemcategory", params: { mode: 1 } },
    //   },
    //   {
    //     id: "creditor.creditorItemCategory.history",
    //     title: "History",
    //     to: { name: "creditoritemcategory", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.createViewChildren(
      "creditor",
      "creditoritemcategory",
      "creditoritemcategories",
      false
    ),
  },
};
export default creditorItemCategoryNav;
