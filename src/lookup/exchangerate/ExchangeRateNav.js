import ExchangeRate from "./ExchangeRate.vue";
import ExchangeRates from "./ExchangeRates.vue";
import { navUtils } from 'saburi-vue-utils';

const exchangeRateNav = {
  routes: navUtils.allRoutes("exchange-rate", ExchangeRate, "exchange-rates", ExchangeRates, true, "exchangerate"),
  menu: {
    id: "lookup.exchangerate",
    title: "Exchange Rates",
    component: ExchangeRate,
    path: "exchange-rates",
    icon: "mdi-cash-sync",
    requires: navUtils.allRoles("exchange-rates"),
    width: "700px",
    editHeaders: [
      { title: "Currency", key: "currencyCode" },
      { title: "Buying", key: "buying", isNumeric: true },
      { title: "Selling", key: "selling", isNumeric: true },
      { title: "Rate Date", key: "rateDate", isDate: true },
      { title: "Base", key: "baseCurrency" },
      { title: "Actions", key: "actions" },
    ],
    headers: [
      { title: "Id", align: "start", key: "id" },
      { title: "Currency", key: "currencyCode" },
      { title: "Buying", key: "buying", isNumeric: true },
      { title: "Selling", key: "selling", isNumeric: true },
      { title: "Rate Date", key: "rateDate", isDate: true },
      { title: "Base", key: "baseCurrency" },
      { title: "Branch", key: "branch" },
      {
        title: "Creation Date",
        key: "creationDate",
        isDateTime: true
},
      {
        title: "Last Modified Date",
        key: "lastModifiedDate",
        isDateTime: true
},
      { title: "Created By", key: "createdBy" },
      { title: "Modified By", key: "modifiedBy" },
    ],
    children: navUtils.allChildren("lookup", "exchange-rates", "exchange-rates", false, "exchangerate")
}
};

export default exchangeRateNav;
