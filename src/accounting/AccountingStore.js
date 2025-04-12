import { defineStore } from "pinia";
import {defineRootStore} from "@/root/RootStore"
export const defineAccountingStore = defineStore("accounting", {
  state: () => ({
    path: "accountingenums",
    accountTypes: [],
    accountTypesLoading: false,
  }),
  actions: {

    async getAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/accounttypes`,
        () => {
          this.accountTypesLoading = true;
          this.accountTypes = [];
        },

        (res) => (this.accountTypes = res.data),

        () => (this.accountTypesLoading = false)
      );
      return data;
    },

  },
});
