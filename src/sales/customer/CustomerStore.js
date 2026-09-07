import { defineStore } from "pinia";
import customerNav from "./CustomerNav";
import { defineRootStore } from "saburi-vue-utils";
export const defineCustomerStore = defineStore("customer", {

  state: () => ({
    path: customerNav.menu.path,
    mini: [],
    miniLoading: false,
    sponsors: [],
    sponsersLoading: false,

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

    getCustomerMiniById(id) {
      let customer = this.mini.filter(m => m.id === id);
      if (customer.length > 0) {
        return customer[0];
      }
      return null;
    },

    getSponsors() {

      if (this.sponsors.length > 0) return this.sponsors;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(`${this.path}/sponsors`,

        () => {
          this.sponsorsLoading = true
          this.sponsors = [];

        },

        res => this.sponsors = res.data,

        () => this.sponsorsLoading = false);
      console.log("Sponsors", data)
      return data;

    },

  }
});

