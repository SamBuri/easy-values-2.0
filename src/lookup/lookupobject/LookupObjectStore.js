import { defineStore } from "pinia";
import { fetchAndPopulate } from "saburi-vue-utils";
import lookupObjectNav from "./LookupObjectNav";

export const defineLookupObjectStore = defineStore("lookupobject", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),

  actions: {
    async getMini() {
      return await fetchAndPopulate(this, "mini", `${lookupObjectNav.menu.path}/mini`, { cache: true });
    },
  },
});

