import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import {defineRootStore} from "@/root/RootStore"
export const defineBankingStore = defineStore("banking", {
  state: () => ({
    path: "banking/enums",
    bankAccountTypes: [],
    bankAccountTypesLoading: false,
  }),
  actions: {

    async getBankAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/bankaccounttypes`,
        () => {
          this.bankAccountTypesLoading = true;
          this.bankAccountTypes = [];
        },

        (res) => (this.bankAccountTypes = res.data),

        () => (this.bankAccountTypesLoading = false)
      );
      return data;
    },

  },
});
