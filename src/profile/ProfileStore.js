import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineProfileStore = defineStore("profile", {
  state: () => ({
    path: "profileenums/",
    imageTypes: [],
    imageTypesLoading: false,
    profileTypes: [],
    profileTypesLoading: false,
    idTypes: [],
    idTypesLoading: false,
    maritalStatuses: [],
    maritalStatusesLoading: false,
  }),

  actions: {
    /**
     * A generic helper to fetch enums
     * @param {string} endpoint - The sub-path (e.g., 'idtypes')
     * @param {string} stateKey - The state property to update (e.g., 'idTypes')
     */
    async fetchEnum(endpoint, stateKey) {
      const rootStore = defineRootStore();
      const loadingKey = `${stateKey}Loading`;

      return await rootStore.fetch(
        `${this.path}${endpoint}`,
        () => {
          this[loadingKey] = true;
          this[stateKey] = [];
        },
        (res) => (this[stateKey] = res.data),
        () => (this[loadingKey] = false)
      );
    },
    async getProfileTypes() {
      return this.fetchEnum("profiletypes", "profileTypes");
    },

    async getImageTypes() {
      return this.fetchEnum("imagetypes", "imageTypes");
    },

    async getIdTypes() {
      return this.fetchEnum("idtypes", "idTypes");
    },

    async getMaritalStatuses() {
      return this.fetchEnum("maritalstatuses", "maritalStatuses");
    },


  },
});
