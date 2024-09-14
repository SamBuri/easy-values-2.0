import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineCustomerStore = defineStore("rootcustomer", {
  state: () => ({
    path: "customer/enums/",
    engagementModes: [],
    engagementModesLoading: false,
    engagementReasons: [],
    engagementReasonsLoading: false,
  }),

  actions: {
    async getEngagementModes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/engagementmodes`,
        () => {
          this.engagementModesLoading = true;
          this.engagementModes = [];
        },

        (res) => (this.engagementModes = res.data),

        () => (this.engagementModesLoading = false)
      );
      return data;
    },

    async getEngagementReasons() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/engagementreasons`,
        () => {
          this.engagementReasonsLoading = true;
          this.engagementReasons = [];
        },

        (res) => (this.engagementReasons = res.data),

        () => (this.engagementReasonsLoading = false)
      );
      return data;
    },
  },
});
