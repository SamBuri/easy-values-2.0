import Currency from "./Currency.vue";
import Currencies from "./Currencies.vue";
const currencyNav = {
  routes: [
    {
      path: "/currency/:mode",
      name: "currency",
      component: Currency,
      meta: { auth: true },
    },
    {
      path: "/currencies",
      name: "currencies",
      component: Currencies,
      meta: { auth: true },
    },
  ],
  menu: {
    id: "lookup.currency",
    title: "Currencies",
    component: Currency,
    path: "currencies",
    width: "700px",
    editHeaders: [
      { title: "Currency", key: "currency" },
      { title: "Buying", key: "buying", isNumeric: true },
      { title: "Selling", key: "selling", isNumeric: true },
      { title: "Is Default", key: "isDefault" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      {
        title: "Id",
        align: "start",
        // sortable: false,
        key: "id",
      },
      { title: "Currency", key: "currency" },
      { title: "Buying", key: "buying", isNumeric: true },
      { title: "Selling", key: "selling", isNumeric: true },
      { title: "Is Default", key: "isDefault" },
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
      { id: "lookup.currency.view", title: "View",  to: {name: 'views'} },
      { id: "lookup.currency.new", title: "New", to: {name: 'view', params: {mode:0}} },
      { id: "lookup.currency.edit", title: "Edit", to: {name: 'view', params: {mode:1}} },
      {
        id: "lookup.currency.history",
        title: "History",
        to: {name: 'view', params: {mode:2}}
      },
    ],
  },
};
export default currencyNav;
