import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";

export const defineExchangeRateStore = defineStore("exchangeRate", {
  state: () => ({
    path: "exchange-rates",
    mini: [],
    miniLoading: false,
    rate: null,
    rateLoading: false,
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

    getRate(currencyId) {
      if (!currencyId) return null;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/rate/${currencyId}`,
        () => {
          this.rateLoading = true;
          this.rate = null;
        },
        (res) => {
          this.rate = res.data;
        },
        () => (this.rateLoading = false)
      );
      return data;
    },
  },
});
