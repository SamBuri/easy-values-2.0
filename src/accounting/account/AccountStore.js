import { defineStore } from "pinia";
import accountNav from "./AccountNav";
import { defineRootStore } from "@/root/RootStore";
export const defineAccountStore = defineStore("account", {
  state: () => ({
    path: accountNav.menu.path,
    mini: [],
    miniLoading: false,

    assetAccountType: "Asset",
    assetAccounts: [],
    assetAccountTypesLoading: false,

    equityAccountType: "Equity",
    equityAccounts: [],
    equityAccountsLoading: false,

    liabilityAccountType: "Liability",
    liabilityAccounts: [],
    liabilityAccountsLoading: false,

    incomeAccountType: "Income",
    incomeAccounts: [],
    incomeAccountsLoading: false,

    expenseAccountType: "Expense",
    expenseAccounts: [],
    expenseAccountsLoading: false,
  }),
  actions: {
    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
        },

        (res) => (this.mini = res.data),

        () => (this.miniLoading = false)
      );
      return data;
    },


    getAssetAccounts() {
      if (this.assetAccounts.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/${this.assetAccountType}`,
        () => {
          this.assetAccountsLoading = true;
          this.assetAccounts = [];
        },

        (res) => (this.assetAccounts = res.data),

        () => (this.assetAccountsLoading = false)
      );
      return data;
    },

    getEquityAccounts() {
      if (this.equityAccounts.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/${this.equityAccountType}`,
        () => {
          this.equityAccountsLoading = true;
          this.equityAccounts = [];
        },

        (res) => (this.equityAccounts = res.data),

        () => (this.equityAccountsLoading = false)
      );
      return data;
    },

    getLiabilityAccounts() {
      if (this.liabilityAccounts.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/${this.liabilityAccountType}`,
        () => {
          this.liabilityAccountsLoading = true;
          this.liabilityAccounts = [];
        },

        (res) => (this.liabilityAccounts = res.data),

        () => (this.liabilityAccountsLoading = false)
      );
      return data;
    },

    getIncomeAccounts() {
      if (this.incomeAccounts.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/${this.incomeAccountType}`,
        () => {
          this.incomeAccountsLoading = true;
          this.incomeAccounts = [];
        },

        (res) => (this.incomeAccounts = res.data),

        () => (this.incomeAccountsLoading = false)
      );
      return data;
    },

    getExpenseAccounts() {
      if (this.expenseAccounts.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/${this.expenseAccountType}`,
        () => {
          this.expenseAccountsLoading = true;
          this.expenseAccounts = [];
        },

        (res) => (this.expenseAccounts = res.data),

        () => (this.expenseAccountsLoading = false)
      );
      return data;
    },


  },
});
