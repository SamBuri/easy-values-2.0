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
    contraAssetAccounts: [],
    contraAssetAccountTypesLoading: false,

    equityAccountType: "Equity",
    equityAccounts: [],
    equityAccountsLoading: false,
    contraEquityAccounts: [],
    contraEquityAccountsLoading: false,

    liabilityAccountType: "Liability",
    liabilityAccounts: [],
    liabilityAccountsLoading: false,
    contraLiabilityAccounts: [],
    contraLiabilityAccountsLoading: false,

    incomeAccountType: "Income",
    incomeAccounts: [],
    incomeAccountsLoading: false,
    contraIncomeAccounts: [],
    contraIncomeAccountsLoading: false,

    expenseAccountType: "Expense",
    expenseAccounts: [],
    expenseAccountsLoading: false,
    contraExpenseAccounts: [],
    contraExpenseAccountsLoading: false,
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
      if (this.assetAccounts.length > 0) return this.assetAccounts;
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

    getContraAssetAccounts() {
      if (this.contraAssetAccounts.length > 0) return this.contraAssetAccounts;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/contra/${this.assetAccountType}`,
        () => {
          this.contraAssetAccountsLoading = true;
          this.contraAssetAccounts = [];
        },

        (res) => (this.contraAssetAccounts = res.data),

        () => (this.contraAssetAccountsLoading = false)
      );
      return data;
    },

    getEquityAccounts() {
      if (this.equityAccounts.length > 0) return this.equityAccounts;
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


    getContraEquityAccounts() {
      if (this.contraEquityAccounts.length > 0) return this.contraEquityAccounts;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/contra/${this.equityAccountType}`,
        () => {
          this.contraEquityAccountsLoading = true;
          this.contraEquityAccounts = [];
        },

        (res) => (this.contraEquityAccounts = res.data),

        () => (this.contraEquityAccountsLoading = false)
      );
      return data;
    },

    getLiabilityAccounts() {
      if (this.liabilityAccounts.length > 0) return this.liabilityAccounts;
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

    getContraLiabilityAccounts() {
      if (this.contraLiabilityAccounts.length > 0) return this.contraLiabilityAccounts;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/contra/${this.liabilityAccountType}`,
        () => {
          this.contraLiabilityAccountsLoading = true;
          this.contraLiabilityAccounts = [];
        },

        (res) => (this.contraLiabilityAccounts = res.data),

        () => (this.contraLiabilityAccountsLoading = false)
      );
      return data;
    },

    getIncomeAccounts() {
      if (this.incomeAccounts.length > 0) return this.incomeAccounts;
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

    getContraIncomeAccounts() {
      if (this.contraIncomeAccounts.length > 0) return this.contraIncomeAccounts;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/contra/${this.incomeAccountType}`,
        () => {
          this.contraIncomeAccountsLoading = true;
          this.contraIncomeAccounts = [];
        },

        (res) => (this.contraIncomeAccounts = res.data),

        () => (this.contraIncomeAccountsLoading = false)
      );
      return data;
    },

    getExpenseAccounts() {
      if (this.expenseAccounts.length > 0) return this.expenseAccounts;
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

    getContraExpenseAccounts() {
      if (this.contraExpenseAccounts.length > 0) return this.contraExpenseAccounts;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/accounttype/contra/${this.expenseAccountType}`,
        () => {
          this.contraExpenseAccountsLoading = true;
          this.contraExpenseAccounts = [];
        },

        (res) => (this.contraExpenseAccounts = res.data),

        () => (this.contraExpenseAccountsLoading = false)
      );
      return data;
    },


  },
});
