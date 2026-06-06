import { defineStore } from "pinia";
import { defineRootStore } from "@/root/RootStore";

export const defineCurrencyStore = defineStore("currency", {
  state: () => ({
    path: "currencies",
    mini: [],
    miniLoading: false,
    currency: null,
    currencyLoading: false,
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
        (res) => {
          this.mini = res.data;
        },
        () => (this.miniLoading = false)
      );
      return data;
    },

    getCurrency(id) {
      if (!id) return null;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/${id}`,
        () => {
          this.currencyLoading = true;
          this.currency = null;
        },
        (res) => {
          this.currency = res.data;
        },
        () => (this.currencyLoading = false)
      );
      return data;
    },
  },
});
