import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";export const defineAccountingStore = defineStore("accounting", {
  state: () => ({
    path: "accounting-enums",
    accountTypes: [],
    accountTypesLoading: false,
  }),
  actions: {

    async getAccountTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/account-types`,
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
