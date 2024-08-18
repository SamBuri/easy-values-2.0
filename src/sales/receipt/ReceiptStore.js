import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import receiptNav from "./ReceiptNav";
   export const defineReceiptStore = defineStore("receipt", {

state: () => ({
    mini: [],
    miniLoading: false,
  }),
actions: {
getMini() {

      this.miniLoading = true;
      httpMethods
        .get(`${receiptNav.menu.path}/mini`)
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

