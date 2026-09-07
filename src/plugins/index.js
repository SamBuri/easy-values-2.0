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
import SaburiVueUtils, { useClientGroupStore, useConfigStore } from 'saburi-vue-utils';
import 'saburi-vue-utils/dist/style.css';

import { useAuthStore } from "@/store/authstore";
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
    apiBaseUrl: import.meta.env.VITE_API_URL || "http://localhost:8181/",
    apiPrefix: import.meta.env.VITE_API_PREFIX || "api",
    apiVersion: import.meta.env.VITE_API_VERSION || "v1",
    authStore: useAuthStore,
    clientGroupStore: useClientGroupStore,
    branchStore: defineBranchStore,
    configStore: useConfigStore,
    countryStore: defineCountryStore,
    bankAccountNav: bankAccountNav,
    currencyStore: defineCurrencyStore,
    themeOptions: {
      customThemes: [
        { name: 'Royal Purple', value: 'purple' },
        { name: 'Crimson Red', value: 'crimson' },
        { name: 'Warm Amber', value: 'amber' },
        { name: 'Midnight Ocean (Dark)', value: 'ocean-dark' }
      ]
    },
    getHeaders: async () => {
      const authStore = useAuthStore();
      const branchStore = defineBranchStore();
      if (authStore.authenticated) {
        try {
          await authStore.ensureValidToken();
        } catch (e) {
          console.warn("[auth] Token refresh failed, triggering re-login:", e);
          authStore.clear();
          import("@/security/auth/AuthService").then(({ authService }) => {
            authService.login();
          });
          // Return empty headers — do NOT send an expired token
          return {};
        }
      }
      let currentBranch = branchStore.currentBranch;
      let token = authStore.token;

      // Safety guard: never attach an expired token to any request
      if (token && !authStore.isTokenValid()) {
        console.warn("[auth] Token is expired after refresh attempt, omitting Authorization header");
        return {
          Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
          ...(authStore.clientGroupId ? { "Client-Group-Id": authStore.clientGroupId } : {}),
          ...(currentBranch?.id ? { "Branch-Id": currentBranch.id, Branch: currentBranch.branchName } : {}),
        };
      }

      return {
        Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(authStore.clientGroupId ? { "Client-Group-Id": authStore.clientGroupId } : {}),
        ...(currentBranch?.id ? { "Branch-Id": currentBranch.id, Branch: currentBranch.branchName } : {}),
      };
    },
    refreshToken: async () => {
      const authStore = useAuthStore();
      return await authStore.ensureValidToken();
    },
    onUnauthorized: () => {
      const authStore = useAuthStore();
      if (authStore.authenticated) {
        authStore.clear();
        import("@/security/auth/AuthService").then(({ authService }) => {
          authService.login();
        });
      }
    }
  });
}
