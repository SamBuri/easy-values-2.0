import { defineStore } from "pinia";
// import httpMethods from "@/utils/HttpMethods";
import { defineRootStore } from "@/root/RootStore";

export const defineProfileStore = defineStore("profile", {
  state: () => ({
    path: "profile/enums/",
    imageTypes: [],
    imageTypesLoading: false,
    profileTypes: [],
    profileTypesLoading: false,
  }),

  actions: {
    async getProfileTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/profiletypes`,
        () => {
          this.profileTypesLoading = true;
          this.profileTypes = [];
        },

        (res) => (this.profileTypes = res.data),

        () => (this.profileTypesLoading = false)
      );
      return data;
    },

    async getImageTypes() {
      const rootStore = defineRootStore();
      let data = await rootStore.fetch(`${this.path}/imagetypes`,
        () => {
          this.imageTypesLoading = true;
          this.imageTypes = [];
        },

        (res) => (this.imageTypes = res.data),

        () => (this.imageTypesLoading = false)
      );
      return data;
    },



  },
});
