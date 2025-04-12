import { defineStore } from "pinia";
import bankTransferNav from "./BankTransferNav";
import { defineRootStore } from "@/root/RootStore";
import storeFuncs from "@/utils/storeFuncs";
export const defineBankTransferStore = defineStore("bankTransfer", {

  state: () => ({
    path: bankTransferNav.menu.path,
    mini: [],
    miniLoading: false,
    newBankTransfers: [],
    newBankTransfersLoading: false,
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

    getNewBankTransfers() {

      
      const rootStore = defineRootStore();
      let data = rootStore.doPost(`${this.path}/list`, storeFuncs.getCreatedTodayCriteria(),
        () => {
          this.newBankTransfersLoading = true
          this.newBankTransfers = [];

        },

        res => this.newBankTransfers = res.data,

        () => this.newBankTransfersLoading = false);
      return data;

    },

  }
});

