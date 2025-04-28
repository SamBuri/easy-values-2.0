import { defineStore } from "pinia";
import groupNav from "./GroupNav";
import keycloakService from "@/keycloak/keycloakService";
import { defineRootStore } from "@/root/RootStore";
export const defineGroupStore = defineStore("group", {

  state: () => ({
    path: groupNav.menu.path,
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {

      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(this.path,
        () => {
          this.miniLoading = true
          this.mini = [];

        },

        res => this.mini = res.data,

        () => this.miniLoading = false,
        await keycloakService.getHttpStrategy());

      console.log("Groups", data)
      return data;

    },

  }
});

