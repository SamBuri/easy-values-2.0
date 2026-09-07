import { defineStore } from "pinia";
import invoiceNav from "./InvoiceNav";
import { defineRootStore } from "saburi-vue-utils";
export const defineInvoiceStore = defineStore("invoice", {
  state: () => ({
    path: invoiceNav.menu.path,
    mini: [],
    miniLoading: false,
    due: [],
    deueLoading: false,
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

        res => this.mini = res.data,

        () => this.miniLoading = false
      );
      return data;
    },

    async getDue(customerId) {
      if(!customerId) {
        this.due = [];
        return this.due;
      }
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/due/${customerId}`,
        () => {
          this.dueLoading = true;
          this.due = [];
        },

        (res) => this.due = res.data,

        () => this.dueLoading = false
      );
      return data;
    },
  },
});
