import { defineStore } from "pinia";
import {defineRootStore} from "@/root/RootStore"
export const defineSalesStore = defineStore("sales", {
  state: () => ({
    path: "sales/enums",
    refundTypes: [],
    refundTypesLoading: false,

    writeOffTypes: [],
    writeOffTypesLoading: false,
  }),
  actions: {

    async getRefundTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/refundtypes`,
        () => {
          this.refundTypesLoading = true;
          this.refundTypes = [];
        },

        (res) => (this.refundTypes = res.data),

        () => (this.refundTypesLoading = false)
      );
      return data;
    },

    async getWriteOffTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/writeofftypes`,
        () => {
          this.writeOffTypesLoading = true;
          this.writeOffTypes = [];
        },

        (res) => (this.writeOffTypes = res.data),

        () => (this.writeOffTypesLoading = false)
      );
      return data;
    },

  },
});
