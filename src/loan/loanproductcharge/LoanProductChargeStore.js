import { defineStore } from "pinia";
import loanProductChargeNav from "./LoanProductChargeNav";
import { defineRootStore } from "@/root/RootStore";
export const defineLoanProductChargeStore = defineStore("loanProductCharge", {
  state: () => ({
    path: loanProductChargeNav.menu.path,
    mini: [],
    miniLoading: false,
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
  },
});
