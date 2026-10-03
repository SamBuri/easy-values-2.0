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
import SaburiVueUtils, { useConfigStore } from 'saburi-vue-utils';
import 'saburi-vue-utils/dist/style.css';

import { useAuthStore } from "@/store/authstore";
import { defineBranchStore } from "saburi-vue-utils";
import { defineCountryStore } from "@/lookup/country/CountryStore";
import { defineBankAccountStore } from "@/banking/bankaccount/BankAccountStore";
import bankAccountNav from "@/banking/bankaccount/BankAccountNav";
import { defineCurrencyStore } from "@/lookup/currency/CurrencyStore";
import constants from "@/utils/constants";

const pinia = createPinia();

let isRedirecting = false;

export function registerPlugins (app) {
  app.use(vuetify)
  app.use(router)
  pinia.use(piniaPluginPersistedstate);
  app.use(pinia)

  const rawApiUrl = import.meta.env.VITE_API_URL;
  const apiBaseUrl = (rawApiUrl && rawApiUrl !== "EV_APP_API_URL"
    ? rawApiUrl
    : (typeof window !== "undefined" ? window.location.origin : "http://localhost:8181/"));

  app.use(SaburiVueUtils, {
    apiBaseUrl: apiBaseUrl,
    apiPrefix: import.meta.env.VITE_API_PREFIX || "api",
    apiVersion: import.meta.env.VITE_API_VERSION || "v1",
    authStore: useAuthStore,
    branchStore: defineBranchStore,
    configStore: useConfigStore,
    countryStore: defineCountryStore,
    bankAccountNav: bankAccountNav,
    currencyStore: defineCurrencyStore,
    bankAccountStore: defineBankAccountStore,
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
      if (authStore.authenticated) {
        try {
          await authStore.ensureValidToken();
        } catch (e) {
          console.warn("[auth] Token refresh failed, triggering re-login:", e);
          if (!isRedirecting) {
            isRedirecting = true;
            authStore.clear();
            import("@/security/auth/AuthService").then(({ authService }) => {
              authService.login();
            }).finally(() => {
              setTimeout(() => { isRedirecting = false; }, 3000);
            });
          }
          // Return empty headers — do NOT send an expired token
          return {};
        }
      }
      let currentBranch = authStore.currentBranch;
      let token = authStore.token;

      // Safety guard: never attach an expired token to any request
      if (token && !authStore.isTokenValid()) {
        console.warn("[auth] Token is expired after refresh attempt, omitting Authorization header");
        return {
          Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
          ...(currentBranch?.id ? { "Branch-Id": currentBranch.id, Branch: currentBranch.branchName } : {}),
        };
      }

      return {
        Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
        ...(token ? { Authorization: `Bearer ${token}` } : {}),
        ...(currentBranch?.id ? { "Branch-Id": currentBranch.id, Branch: currentBranch.branchName } : {}),
      };
    },
    refreshToken: async (force = false) => {
      const authStore = useAuthStore();
      return await authStore.ensureValidToken(null, force);
    },
    onUnauthorized: () => {
      if (isRedirecting) return;
      const authStore = useAuthStore();
      if (authStore.authenticated) {
        isRedirecting = true;
        authStore.clear();
        import("@/security/auth/AuthService").then(({ authService }) => {
          authService.login();
        }).finally(() => {
          setTimeout(() => { isRedirecting = false; }, 3000);
        });
      }
    }
  });
}
