import { defineStore } from "pinia";
import loanBillDetailNav from "./LoanBillDetailNav";
import { defineRootStore } from "saburi-vue-utils";
import storeFuncs from "@/utils/storeFuncs";
export const defineLoanBillDetailStore = defineStore("loanBillDetail", {

  state: () => ({
    path: loanBillDetailNav.menu.path,
    mini: [],
    miniLoading: false,
    newLoanBillDetails: [],
    newLoanBillDetailsLoading: false,
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

    getNewLoanBillDetails() {

      const rootStore = defineRootStore();
      let data = rootStore.doPost(`${this.path}/list`, storeFuncs.getCreatedTodayCriteria(),
        () => {
          this.newLoanBillDetailsLoading = true
          this.newLoanBillDetails = [];

        },

        res => this.newLoanBillDetails = res.data,

        () => this.newLoanBillDetailsLoading = false);
      return data;

    },

  }
});

