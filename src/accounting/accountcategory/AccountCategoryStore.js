import { defineStore } from "pinia";
import accountCategoryNav from "./AccountCategoryNav";
import { defineRootStore } from "@/root/RootStore";
export const defineAccountCategoryStore = defineStore("accountCategory", {
  state: () => ({
    path: accountCategoryNav.menu.path,
    mini: [],
    miniLoading: false,
    accountCategoriesByAccountType: [],
    accountCategoriesByAccountTypeLoading: false,
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

    getAccountCategoriesByAccountType(accountType) {
      const rootStore = defineRootStore();
      if(!accountType){
        this.accountCategoriesByAccountType = [];
        return;
      }
      let data = rootStore.fetch(
        `${this.path}/mini/accounttype/${accountType}`,
        () => {
          this.accountCategoriesByAccountTypeLoading = true;
          this.accountCategoriesByAccountType = [];
        },

        (res) => (this.accountCategoriesByAccountType = res.data),

        () => (this.accountCategoriesByAccountTypeLoading = false)
      );
      return data;
    },
  },
});
