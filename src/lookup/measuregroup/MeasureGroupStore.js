import { defineStore } from "pinia";
import { fetchAndPopulate } from "saburi-vue-utils";
import measureGroupNav from "./MeasureGroupNav";

export const defineMeasureGroupStore = defineStore("measureGroup", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {
      return await fetchAndPopulate(this, "mini", `${measureGroupNav.menu.path}/mini`, { cache: true });
    },
  },
});

