import AccountCategory from "./AccountCategory.vue";
import AccountCategories from "./AccountCategories.vue";
import { navUtils } from 'saburi-vue-utils';
const accountCategoryNav = {
  // routes: [
  //   {
  //     path: "/accountcategory/:mode",
  //     name: "accountcategory",
  //     component: AccountCategory,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/accountcategories",
  //     name: "accountcategories",
  //     component: AccountCategories,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes( "accountcategory", AccountCategory, "accountcategories", AccountCategories, true),
  menu: {
    id: "accounting.accountcategory",
    title: "Account Categories",
    component: AccountCategory,
    path: "accountcategories",
    icon: "mdi-account-multiple",
    requires: navUtils.allRoles("accountcategory"),
    width: "700px",
    editHeaders: [
      { title: "Account Type", key: "accountType" },
      { title: "Parent Category Id", key: "parentCategoryId" },
      { title: "Category Name", key: "categoryName" },
      { title: "Read Only", key: "readOnly" },
      { title: "Hidden", key: "hidden" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Account Type", key: "accountType" },
      { title: "Parent Category Id", key: "parentCategoryId" },
      { title: "Category Name", key: "categoryName" },
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
    // children: [
    //   {
    //     id: "accounting.accountCategory.view",
    //     title: "View",
    //     to: { name: "accountcategories" },
    //   },
    //   {
    //     id: "accounting.accountCategory.new",
    //     title: "New",
    //     to: { name: "accountcategory", params: { mode: 0 } },
    //   },
    //   {
    //     id: "accounting.accountCategory.edit",
    //     title: "Edit",
    //     to: { name: "accountcategory", params: { mode: 1 } },
    //   },
    //   {
    //     id: "accounting.accountCategory.history",
    //     title: "History",
    //     to: { name: "accountcategory", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.allChildren( "accounting", "accountcategory", "accountcategories", false),
  },
};
export default accountCategoryNav;
