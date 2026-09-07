import { defineStore } from "pinia";
import receiptNav from "./ReceiptNav";
import storeFuncs from "@/utils/storeFuncs";
import { defineRootStore } from "saburi-vue-utils";

export const defineReceiptStore = defineStore("receipt", {

  state: () => ({
    path: receiptNav.menu.path,
    mini: [],
    miniLoading: false,
    newReceipts: [],
    newReceiptLoading: false,
  
    todayReceipts: [],
   todayReceiptsLoading: false,
    obj: null,
    objLoading: false,
  }),
  actions: {
    getMini() {

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
    getNewReceipts() {
      let criteria = storeFuncs.getCreatedTodayCriteria();
      let cancelled = {

        key: 'cancelled',
        operation: 'EQUAL',
        value: "false",
        value2: "",
      };
      criteria.push(cancelled);

      const rootStore = defineRootStore();
      let data = rootStore.doPost(`${this.path}/list`, criteria,
        () => {
          this.newReceiptsLoading = true
          this.newReceipts = [];

        },

        res => this.newReceipts = res.data,

        () => this.newReceiptsLoading = false);
      return data;

    },




    getTodayReceipts() {

      var currentDate = new Date();
      var todayDate = currentDate.toISOString().slice(0, 10)




      var equalToToday= {
          key: 'receiptDate',
          operation: 'EQUAL',
          value: todayDate,
          value2: "",

      }
          
      let data = defineRootStore().doPost(`${this.path}/list`, [equalToToday],
        () => {
          this.todayReceiptsLoading = true
          this.todayReceipts = [];

        },

        res => this.todayReceipts = res.data,

        () => this.todayReceiptsLoading = false);
      return data;

    },

    



  }
});



