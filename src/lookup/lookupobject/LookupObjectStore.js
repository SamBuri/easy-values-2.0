import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import lookupObjectNav from "./LookupObjectNav";
export const defineLookupObjectStore = defineStore("lookupobject", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),

  actions: {
    getMini() {
      console.log("LookupObjectStore.getMini() called. Current mini length:", this.mini.length);
      if (this.mini.length > 0) {
        return;
      }
      this.miniLoading = true;
      console.log("LookupObjectStore.getMini() dispatching GET request to:", `${lookupObjectNav.menu.path}/mini`);
      httpMethods
        .get(`${lookupObjectNav.menu.path}/mini`)
        .then((response) => {
          console.log("LookupObjectStore.getMini() request succeeded. Response data:", response.data);
          this.mini = response.data;
          this.miniLoading = false;
        })
        .catch((e) => {
          console.error("LookupObjectStore.getMini() request failed:", e);
          this.mini = [];
          this.miniLoading = false;
        });
    },
  },
});
