import Period from "./Period.vue";
import Periods from "./Periods.vue";
const periodNav = {
  routes: [
    {
      path: "/period/:mode",
      name: "period",
      component: Period,
      meta: { auth: true },
    },
    {
      path: "/periods",
      name: "periods",
      component: Periods,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "loan.period",
    title: "Periods",
    component: Period,
    path: "periods",
    width: "700px",
    editHeaders: [
      { title: "Period Name", key: "periodName" },
      { title: "Days", key: "days", isNumeric: true },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Period Name", key: "periodName" },
      { title: "Days", key: "days", isNumeric: true },
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
      { id: "loan.period.view", title: "View", to: {name: "periods"} },
      { id: "loan.period.new", title: "New", to: {name: "period", params: {mode:0}} },
      { id: "loan.period.edit", title: "Edit", to: {name: "period", params: {mode:1}} },
      { id: "loan.period.history", title: "History", to: {name: "period", params: {mode:2}} },
    ],
  },
};
export default periodNav;
