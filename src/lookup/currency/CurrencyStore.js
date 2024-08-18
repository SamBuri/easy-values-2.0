import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import currencyNav from "./CurrencyNav";
import { defineRootStore } from "@/root/RootStore";
export const defineCurrencyStore = defineStore("currency", {
  state: () => ({
    path: currencyNav.menu.path,
    mini: [],
    miniLoading: false,
    defaultCurrency: null,
    currency: null,
    currencyLoading: false,
  }),
  actions: {
    // getMini() {
    //   if (this.mini.length > 0) {
    //     return;
    //   }
    //   this.miniLoading = true;
    //   this.defaultCurrency = null;
    //   httpMethods
    //     .get(`${currencyNav.menu.path}/mini`)
    //     .then((response) => {
    //       this.mini = response.data;
    //       let filteredCurrencies = this.mini.filter(
    //         (c) => c.isDefault === true
    //       );
    //       this.defaultCurrency =
    //         filteredCurrencies.length > 0 ? filteredCurrencies[0] : null;

    //       this.miniLoading = false;
    //     })
    //     .catch((e) => {
    //       this.mini = [];
    //       console.log(e);
    //       this.miniLoading = false;
    //     });
    // },

    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
          this.defaultCurrency = null;
        },

        (res) => {
          this.mini = res.data;
          let filteredCurrencies = this.mini.filter(
            (c) => c.isDefault === true
          );
          this.defaultCurrency =
            filteredCurrencies.length > 0 ? filteredCurrencies[0] : null;
        },

        () => (this.miniLoading = false)
      );
      return data;
    },


    getCurrency(id) {

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
