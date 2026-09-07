import { defineStore } from "pinia";
import { fetchAndPopulate } from "saburi-vue-utils";
import receiptInvoicesNav from "./ReceiptInvoicesNav";

export const defineReceiptInvoicesStore = defineStore("receiptInvoices", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {
      return await fetchAndPopulate(this, "mini", `${receiptInvoicesNav.menu.path}/mini`, { cache: true });
    },
  },
});

