import { defineStore } from "pinia";
import loanNav from "./LoanNav";
import { defineRootStore } from "@/root/RootStore";
export const defineLoanStore = defineStore("loan", {
  state: () => ({
    path: loanNav.menu.path,
    mini: [],
    miniLoading: false,
    loanSummary: [],
        loanSummaryLoading: false,
        toFollowUpLoans: [],
        activeLoans: [],
        dormantLoans: [],
        recoveryLoans: [],
        defaultedLoans: [],
        completedLoans: [],

        toFollowUpLoansLoading: false,
        activeLoansLoading: false,
        dormantLoansLoading: false,
        recoveryLoansLoading: false,
        defaultedLoansLoading: false,
        completedLoansLoading: false,
        newLoans: [],
        newLoansLoadings: false,
        loanStatusSummary: [],
        loanStatusSummaryLoading: false
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


    loanSummary() {
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loansumloanSummary`,
        () => {
          this.loanSummaryLoading = true;
          this.loanSummary = [];
        },

        (res) => (this.loanSummary = res.data),

        () => (this.loanSummaryLoading = false)
      );
      return data;
    },

    getToFollowUpLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/tofollowuploans`,
        () => {
          this.toFollowUpLoansLoading = true;
          this.toFollowUpLoans = [];
        },

        (res) => (this.toFollowUpLoans = res.data),

        () => (this.toFollowUpLoansLoading = false)
      );
      return data;
    },

    getActiveLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Active`,
        () => {
          this.activeLoansLoading = true;
          this.activeLoans = [];
        },

        (res) => (this.activeLoans = res.data),

        () => (this.activeLoansLoading = false)
      );
      return data;
    },

    getDormantLoans() {
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Dormant`,
        () => {
          this.dormantLoansLoading = true;
          this.dormantLoans = [];
        },

        (res) => (this.dormantLoans = res.data),

        () => (this.dormantLoansLoading = false)
      );
      return data;
    },

    getRecoveryLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Recovery`,
        () => {
          this.recoveryLoansLoading = true;
          this.recoveryLoans = [];
        },

        (res) => (this.recoveryLoans = res.data),

        () => (this.recoveryLoansLoading = false)
      );
      return data;
    },


    getDefaultedLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Defaulted`,
        () => {
          this.defaultedLoansLoading = true;
          this.defaultedLoans = [];
        },

        (res) => (this.defaultedLoans = res.data),

        () => (this.defaultedLoansLoading = false)
      );
      return data;
    },

    getCompletedLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Completed`,
        () => {
          this.completedLoansLoading = true;
          this.completedLoans = [];
        },

        (res) => (this.completedLoans = res.data),

        () => (this.completedLoansLoading = false)
      );
      return data;
    },

    getNewLoans() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatus/Defaulted`,
        () => {
          this.defaultedLoansLoading = true;
          this.defaultedLoans = [];
        },

        (res) => (this.defaultedLoans = res.data),

        () => (this.defaultedLoansLoading = false)
      );
      return data;
    },

    getLoanStatusSummary() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/loanstatussummary`,
        () => {
          this.loanStatusSummaryLoading = true;
          this.loanStatusSummary = [];
        },

        (res) => (this.loanStatusSummary = res.data),

        () => (this.loanStatusSummaryLoading = false)
      );
      return data;
    },




  },
});
