import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";export const defineSalesStore = defineStore("sales", {
  state: () => ({
    path: "sales-enums",
    engagementModes: [],
    engagementModesLoading: false,
    engagementReasons: [],
    engagementReasonsLoading: false,
    refundTypes: [],
    refundTypesLoading: false,

    writeOffTypes: [],
    writeOffTypesLoading: false,
  }),
  actions: {

    async getEngagementModes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/engagement-modes`,
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
        `${this.path}/engagement-reasons`,
        () => {
          this.engagementReasonsLoading = true;
          this.engagementReasons = [];
        },

        (res) => (this.engagementReasons = res.data),

        () => (this.engagementReasonsLoading = false)
      );
      return data;
    },

    async getRefundTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(
        `${this.path}/refund-types`,
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
        `${this.path}/write-off-types`,
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
