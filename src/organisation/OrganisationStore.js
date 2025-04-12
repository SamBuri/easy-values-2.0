import { defineStore } from "pinia";
import { defineRootStore } from "@/root/RootStore";

export const defineOrganisationStore = defineStore("organisation", {
  state: () => ({
    path: "organisationenums/",
    businessTypes: [],
    dbTypes: [],
    dbTypesLoading: false,
    tenantTypes: [],
    tenantTypesLoading: false,
  }),

  actions: {
    async getBusinessTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}businesstypes`,
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
      let data = await rootStore.fetch(`${this.path}dbtypes`,
        () => {
          this.dbTypesLoading = true;
          this.dbTypes = [];
        },

        (res) => (this.dbTypes = res.data),

        () => (this.dbTypesLoading = false)
      );
      console.log("DB Types", data);
      return data;
    },

    async getTenantTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}tenanttypes`,
        () => {
          this.tenantTypesLoading = true;
          this.tenantTypes = [];
        },
        (res) => (this.tenantTypes = res.data),

        () => (this.tenantTypesLoading = false)
      );
      return data;
    },




  },
});
