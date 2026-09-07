import BusinessSectionAccount from "./BusinessSectionAccount.vue";
import BusinessSectionAccounts from "./BusinessSectionAccounts.vue";
import { navUtils } from "saburi-vue-utils";

const businessSectionAccountNav = {
  routes: navUtils.allRoutes("business-section-account", BusinessSectionAccount, "business-section-accounts", BusinessSectionAccounts, true, "businesssectionaccount"),
  menu: {
    id: "accounting.businesssectionaccount",
    title: "Business Section Accounts",
    component: BusinessSectionAccount,
    path: "business-section-accounts",
    requires: navUtils.allRoles("business-section-accounts"),
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
    children: navUtils.allChildren("accounting", "business-section-accounts", "business-section-accounts", false, "businesssectionaccount"),
  },
};
export default businessSectionAccountNav;
