import { defineStore } from "pinia";
import itemCategoryNav from "./ItemCategoryNav";
import { defineRootStore } from "saburi-vue-utils";
export const defineItemCategoryStore = defineStore("itemCategory", {
  state: () => ({
    path: itemCategoryNav.menu.path,
    mini: [],
    miniLoading: false,
    expensableItemCategories: [],
    expensableItemCategoriesLoading: false,
    billableItemCategories: [],
    billableItemCategoriesLoading: false,
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

    getExpensableItemCategories() {
      if (this.expensableItemCategories.length > 0)
        return this.expensableItemCategories;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini/expensable`,
        () => {
          this.expensableItemCategoriesLoading = true;
          this.expensableItemCategories = [];
        },

        (res) => (this.expensableItemCategories = res.data),

        () => (this.expensableItemCategoriesLoading = false)
      );
      return data;
    },

    getBillableCategories() {
      if (this.billableItemCategories.length > 0)
        return this.billableItemCategories;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini/billable`,
        () => {
          this.billableItemCategoriesLoading = true;
          this.billableItemCategories = [];
        },

        (res) => (this.billableItemCategories = res.data),

        () => (this.billableItemCategoriesLoading = false)
      );
      return data;
    },
  },
});
