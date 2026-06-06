import CreditorGroup from "./CreditorGroup.vue";
import CreditorGroups from "./CreditorGroups.vue";
import { navUtils } from 'saburi-vue-utils';
const creditorGroupNav = {
  // routes: [
  //   {
  //     path: "/creditorgroup/:mode",
  //     name: "creditorgroup",
  //     component: CreditorGroup,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/creditorgroups",
  //     name: "creditorgroups",
  //     component: CreditorGroups,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes(
    "creditorgroup",
    CreditorGroup,
    "creditorgroups",
    CreditorGroups,
    true
  ),
  menu: {
    id: "creditor.creditorgroup",
    title: "Creditor Groups",
    component: CreditorGroup,
    path: "creditorgroups",
    icon: "mdi-account-group",
    requires: navUtils.allRoles("creditorgroup"),
    width: "700px",
    editHeaders: [
      { title: "Name", key: "name" },
      { title: "Credit Account", key: "creditAccount" },
      { title: "Discount Account", key: "discountAccount" },
      { title: "Debt Relief Account", key: "debtReliefAccount" },
      { title: "Withholding Tax Account", key: "withholdingTaxAccount" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Credit Account", key: "creditAccount" },
      { title: "Discount Account", key: "discountAccount" },
      { title: "Debt Relief Account", key: "debtReliefAccount" },
      { title: "Withholding Tax Account", key: "withholdingTaxAccount" },
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
    //     id: "creditor.creditorGroup.view",
    //     title: "View",
    //     to: { name: "creditorgroups" },
    //   },
    //   {
    //     id: "creditor.creditorGroup.new",
    //     title: "New",
    //     to: { name: "creditorgroup", params: { mode: 0 } },
    //   },
    //   {
    //     id: "creditor.creditorGroup.edit",
    //     title: "Edit",
    //     to: { name: "creditorgroup", params: { mode: 1 } },
    //   },
    //   {
    //     id: "creditor.creditorGroup.history",
    //     title: "History",
    //     to: { name: "creditorgroup", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.allChildren(
      "creditor",
      "creditorgroup",
      "creditorgroups",
      false
    ),
  },
};
export default creditorGroupNav;
