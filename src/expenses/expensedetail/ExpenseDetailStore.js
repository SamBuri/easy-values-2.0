import { defineStore } from "pinia";
import expenseDetailNav from "./ExpenseDetailNav";
import { defineRootStore } from "@/root/RootStore";
import storeFuncs from "@/utils/storeFuncs";
export const defineExpenseDetailStore = defineStore("expenseDetail", {

  state: () => ({
    path: expenseDetailNav.menu.path,
    mini: [],
    miniLoading: false,
    newExpenseDetails: [],
    newExpenseDetailsLoading: false,
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

    getNewExpenseDetails() {

      const rootStore = defineRootStore();
      let data = rootStore.doPost(`${this.path}/list`, storeFuncs.getCreatedTodayCriteria(),
        () => {
          this.newExpenseDetailsLoading = true
          this.newExpenseDetails = [];

        },

        res => this.newExpenseDetails = res.data,

        () => this.newExpenseDetailsLoading = false);
      return data;

    },



  }
});

