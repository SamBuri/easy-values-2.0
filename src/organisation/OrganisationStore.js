import { defineStore } from "pinia";
import { defineRootStore } from "saburi-vue-utils";

export const defineOrganisationStore = defineStore("organisation", {
  state: () => ({
    path: "organisation-enums",
    businessTypes: [],
    dbTypes: [],
    dbTypesLoading: false,
  }),

  actions: {
    async getBusinessTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/business-types`,
        () => {
          this.businessTypesLoading = true;
          this.businessTypes = [];
        },
        (res) => (this.businessTypes = res.data),
        () => (this.businessTypesLoading = false)
      );
      return data;
    },

    async getDbTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/db-types`,
        () => {
          this.dbTypesLoading = true;
          this.dbTypes = [];
        },
        (res) => (this.dbTypes = res.data),
        () => (this.dbTypesLoading = false)
      );
      return data;
    },
  },
});
