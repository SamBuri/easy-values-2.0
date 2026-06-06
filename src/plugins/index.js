/**
 * plugins/index.js
 *
 * Automatically included in `./src/main.js`
 */

// Plugins
import vuetify from './vuetify'
import router from '@/router'
import piniaPluginPersistedstate from 'pinia-plugin-persistedstate';
import { createPinia } from "pinia";
import SaburiVueUtils from 'saburi-vue-utils';
import 'saburi-vue-utils/dist/style.css';

import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import { defineCountryStore } from "@/lookup/country/CountryStore";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore";
import bankAccountNav from "@/banking/bankaccount/BankAccountNav";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import constants from "@/utils/constants";

const pinia = createPinia();

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(router)
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia)

  app.use(SaburiVueUtils, {
    apiBaseUrl: import.meta.env.VITE_API_URL || "http://localhost:8089/",
    authStore: useAuthStore,
    tenantStore: defineTenantStore,
    branchStore: defineBranchStore,
    countryStore: defineCountryStore,
    bankAccountStore: defineBankAccountStore,
    bankAccountNav: bankAccountNav,
    currencyStore: defineCurrencyStore,
    getHeaders: () => {
      const authStore = useAuthStore();
      const tenantStore = defineTenantStore();
      const branchStore = defineBranchStore();
      let token = authStore.token;
      let tenant = tenantStore.firstTenant;
      let currentBranch = branchStore.currentBranch;

      return {
        Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
        Authorization: `Bearer ${token}`,
        "Tenant-Id": tenant?.id,
        "Branch-Id": currentBranch?.id,
        Branch: currentBranch?.branchName,
      };
    }
  });
}
