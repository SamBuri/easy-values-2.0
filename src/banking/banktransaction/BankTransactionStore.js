import { defineStore } from "pinia";
import bankTransactionNav from "./BankTransactionNav";
import { defineRootStore } from "saburi-vue-utils";
import storeFuncs from "@/utils/storeFuncs";
export const defineBankTransactionStore = defineStore("bankTransaction", {

  state: () => ({
    path: bankTransactionNav.menu.path,
    mini: [],
    miniLoading: false,
   newAccountTransactions: [],
   newAccountTransactionsLoading: false,
    newCredits: [],
    newCreditsLoading: false,
  }),
  actions: {
    getMini() {

      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(`${this.path}/mini`,
        () => {
          this.miniLoading = true
          this.mini = [];

        },

        res => this.mini = res.data,

        () => this.miniLoading = false);
      return data;

    },

    getNewAccountTransactions() {

      const rootStore = defineRootStore();
     
      let data = rootStore.doPost(`${this.path}/list`, storeFuncs.getCreatedTodayCriteria(),
        () => {
          this.newAccountTransactionsLoading = true
          this.newAccountTransactions = [];

        },
        res => this.newAccountTransactions = res.data,

        () => this.newAccountTransactionsLoading = false);
      return data;
    },
        
  }
});

