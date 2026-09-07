import { defineStore } from "pinia";
import { fetchAndPopulate } from "saburi-vue-utils";
import measureRelationNav from "./MeasureRelationNav";

export const defineMeasureRelationStore = defineStore("measureRelation", {
  state: () => ({
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {
      return await fetchAndPopulate(this, "mini", `${measureRelationNav.menu.path}/mini`, { cache: true });
    },
  },
});

