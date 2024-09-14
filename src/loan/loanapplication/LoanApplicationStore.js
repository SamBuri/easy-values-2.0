import { defineStore } from "pinia";
import loanApplicationNav from "./LoanApplicationNav";
import { defineRootStore } from "@/root/RootStore";
export const defineLoanApplicationStore = defineStore("loanApplication", {
  state: () => ({
    path: loanApplicationNav.menu.path,
    mini: [],
    miniLoading: false,
    pending: [],
    pendingLoading: false,
    approved: [],
    approvedLoading: false,
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

    getPending() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/pending`,
        () => {
          this.pendingLoading = true;
          this.pending = [];
        },

        (res) => (this.pending = res.data),

        () => (this.pendingLoading = false)
      );
      return data;
    },

    getApproved() {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/approved`,
        () => {
          this.approvedLoading = true;
          this.approved = [];
        },

        (res) => (this.approved = res.data),

        () => (this.approvedLoading = false)
      );
      return data;
    },

  },
});
