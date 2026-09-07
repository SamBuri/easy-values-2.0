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
    "creditor-group",
    CreditorGroup,
    "creditor-groups",
    CreditorGroups,
    true,
    "creditorgroup"
  ),
  menu: {
    id: "creditor.creditorgroup",
    title: "Creditor Groups",
    component: CreditorGroup,
    path: "creditor-groups",
    icon: "mdi-account-group",
    requires: navUtils.allRoles("creditor-groups"),
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
      { title: "Name", key: "name" },
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

    children: navUtils.allChildren(
      "creditor",
      "creditor-groups",
      "creditor-groups",
      false,
      "creditorgroup"
    ),
  },
};
export default creditorGroupNav;
