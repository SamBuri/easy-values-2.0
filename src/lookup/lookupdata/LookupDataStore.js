import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import lookupDataNav from "./LookupDataNav";
export const defineLookupDataStore = defineStore("lookupdata", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),

  actions: {
    getMini() {
      if (this.mini.length > 0) {
        return;
      }
      this.miniLoading = true;
      httpMethods
        .get(`${lookupDataNav.menu.path}/mini`)
        .then((response) => {
          this.mini = response.data;
          this.miniLoading = false;
        })
        .catch((e) => {
          this.mini = [];
          console.log(e);
          this.miniLoading = false;
        });
    },
  },
});
