import AccountsGroup from "./AccountsGroup.vue";
import AccountsGroups from "./AccountsGroups.vue";
const accountsGroupNav = {
  routes: [
    {
      path: "/accountsgroup/:mode",
      name: "accountsgroup",
      component: AccountsGroup,
      meta: { auth: true },
    },
    {
      path: "/accountsgroups",
      name: "accountsgroups",
      component: AccountsGroups,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "customer.accountsgroup",
    title: "Accounts Groups",
    component: AccountsGroup,
    path: "accountsgroups",
    width: "700px",
    editHeaders: [
      { title: "Business Section", key: "businessSectionId" },
      { title: "Receivable Account", key: "receivableAccountId" },
      { title: "Discount Account", key: "discountAccountId" },
      { title: "Write Off Account", key: "writeOffAccountId" },
      { title: "Withholding Tax Account", key: "withholdingTaxAccountId" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Business Section", key: "businessSectionId" },
      { title: "Receivable Account", key: "receivableAccountId" },
      { title: "Discount Account", key: "discountAccountId" },
      { title: "Write Off Account", key: "writeOffAccountId" },
      { title: "Withholding Tax Account", key: "withholdingTaxAccountId" },
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
        id: "customer.accountsGroup.view",
        title: "View",
        to: { name: "accountsgroups" },
      },
      {
        id: "customer.accountsGroup.new",
        title: "New",
        to: { name: "accountsgroup", params: { mode: 0 } },
      },
      {
        id: "customer.accountsGroup.edit",
        title: "Edit",
        to: { name: "accountsgroup", params: { mode: 1 } },
      },
      {
        id: "customer.accountsGroup.history",
        title: "History",
        to: { name: "accountsgroup", params: { mode: 2 } },
      },
    ],
  },
};
export default accountsGroupNav;
