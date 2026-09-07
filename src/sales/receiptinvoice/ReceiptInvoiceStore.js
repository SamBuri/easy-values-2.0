import { defineStore } from "pinia";
import { fetchAndPopulate } from "saburi-vue-utils";
import receiptInvoiceNav from "./ReceiptInvoiceNav";

export const defineReceiptInvoiceStore = defineStore("receiptInvoice", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {
      return await fetchAndPopulate(this, "mini", `${receiptInvoiceNav.menu.path}/mini`, { cache: true });
    },
  },
});

