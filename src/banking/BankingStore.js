import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";export const defineBankingStore = defineStore("banking", {
  state: () => ({
    path: "banking-enums",
    bankAccountTypes: [],
    bankAccountTypesLoading: false,
  }),
  actions: {

    async getBankAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/bank-account-types`,
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
