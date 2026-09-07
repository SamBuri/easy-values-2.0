import Currency from "./Currency.vue";
import Currencies from "./Currencies.vue";
import { navUtils } from 'saburi-vue-utils';

const currencyNav = {
  routes: navUtils.allRoutes("currency", Currency, "currencies", Currencies, true),
  menu: {
    id: "lookup.currency",
    title: "Currencies",
    component: Currency,
    path: "currencies",
    icon: "mdi-currency-usd",
    requires: navUtils.allRoles("currencies"),
    width: "700px",
    editHeaders: [
      { title: "Code", key: "currencyCode" },
      { title: "Name", key: "currencyName" },
      { title: "Symbol", key: "symbol" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      { title: "Id", align: "start", key: "id" },
      { title: "Code", key: "currencyCode" },
      { title: "Name", key: "currencyName" },
      { title: "Symbol", key: "symbol" },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
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
    children: navUtils.allChildren("lookup", "currencies", "currencies", false, "currency"),
  },
};
export default currencyNav;
