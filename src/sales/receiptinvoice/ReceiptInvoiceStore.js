import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import receiptInvoiceNav from "./ReceiptInvoiceNav";
   export const defineReceiptInvoiceStore = defineStore("receiptInvoice", {
 
state: () => ({
    mini: [],
    miniLoading: false,
  }),
actions: {
getMini() {
      if (this.mini.length > 0) {
        return;
      }
      this.miniLoading = true;
      httpMethods
        .get(`${receiptInvoiceNav.menu.path}/mini`)
        .then((response) => {
          this.mini = response.data;
          this.miniLoading = false;
        })
        .catch((e) => {
          this.mini = [];
          console.log(e);
          this.miniLoading = false;
        });
    },

}});

