import { defineStore } from "pinia";
import itemNav from "./ItemNav";
import { defineRootStore } from "@/root/RootStore";
export const defineItemStore = defineStore("item", {
  state: () => ({
    path: itemNav.menu.path,
    mini: [],
    miniLoading: false,
    item: null,
    itemLoading: false,
  }),
  actions: {
    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
        },

        (res) => (this.mini = res.data),

        () => (this.miniLoading = false)
      );
      return data;
    },

    getItem(id) {
      if(!id) return null;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini/${id}`,
        () => {
          this.itemLoading = true;
          this.item = null;
        },

        (res) => (this.item = res.data),

        () => (this.itemLoading = false)
      );
      return data;
    },

  },
});
