import { defineStore } from "pinia";
// import { httpMethods } from "saburi-vue-utils";
import { defineRootStore } from "saburi-vue-utils";

export const defineProfileEnumStore = defineStore("profileEnum", {
  state: () => ({
    path: "profile-enums",
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
     * @param {string} endpoint - The sub-path (e.g., 'id-types')
     * @param {string} stateKey - The state property to update (e.g., 'idTypes')
     */
    async fetchEnum(endpoint, stateKey) {
      const rootStore = defineRootStore();
      const loadingKey = `${stateKey}Loading`;

      return await rootStore.fetch(
        `${this.path}/${endpoint}`,
        () => {
          this[loadingKey] = true;
          this[stateKey] = [];
        },
        (res) => (this[stateKey] = res.data),
        () => (this[loadingKey] = false)
      );
    },
    async getProfileTypes() {
      return this.fetchEnum("profile-types", "profileTypes");
    },

    async getImageTypes() {
      return this.fetchEnum("image-types", "imageTypes");
    },

    async getIdTypes() {
      return this.fetchEnum("id-types", "idTypes");
    },

    async getMaritalStatuses() {
      return this.fetchEnum("marital-statuses", "maritalStatuses");
    },


  },
});
