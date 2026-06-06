import Creditor from "./Creditor.vue";
import Creditors from "./Creditors.vue";
import { navUtils } from 'saburi-vue-utils';
const creditorNav = {
  // routes: [
  //   {
  //     path: "/creditor/:mode",
  //     name: "creditor",
  //     component: Creditor,
  //     meta: { auth: true },
  //   },
  //   {
  //     path: "/creditors",
  //     name: "creditors",
  //     component: Creditors,
  //     meta: { auth: true },
  //   },
  // ],
  routes: navUtils.allRoutes(
    "creditor",
    Creditor,
    "creditors",
    Creditors,
    true
  ),
  menu: {
    id: "creditor.creditor",
    title: "Creditors",
    component: Creditor,
    path: "creditors",
    icon: "mdi-account-multiple",
    requires: navUtils.allRoles("creditor"),
    width: "700px",
    editHeaders: [
      { title: "Id", key: "id" },
      { title: "Name", key: "name" },
      { title: "Phone No", key: "phoneNo" },
      { title: "Creditor Group", key: "creditorGroup.name"},
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

      { title: "Name", key: "name" },
      { title: "Phone No", key: "phoneNo" },
      { title: "Creditor Group", key: "creditorGroup.name" },
      { title: "Balance", key: "balance", isNumeric: true },
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
    miniHeaders: [
      { title: "Id", key: "id" },
      { title: "Name", key: "name" },
      { title: "Phone No", key: "phoneNo" },
      { title: "Creditor Group", key: "creditorGroup.name" },

    ],
    // children: [
    //   {
    //     id: "creditor.creditor.view",
    //     title: "View",
    //     to: { name: "creditors" },
    //   },
    //   {
    //     id: "creditor.creditor.new",
    //     title: "New",
    //     to: { name: "creditor", params: { mode: 0 } },
    //   },
    //   {
    //     id: "creditor.creditor.edit",
    //     title: "Edit",
    //     to: { name: "creditor", params: { mode: 1 } },
    //   },
    //   {
    //     id: "creditor.creditor.history",
    //     title: "History",
    //     to: { name: "creditor", params: { mode: 2 } },
    //   },
    // ],
    children: navUtils.allChildren(
      "creditor",
      "creditor",
      "creditors",
      true
    ),
  },
};
export default creditorNav;
