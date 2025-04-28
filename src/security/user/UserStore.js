import { defineStore } from "pinia";
import userNav from "./UserNav";
import { defineRootStore } from "@/root/RootStore";
import keycloakService from "@/keycloak/keycloakService";
export const defineUserStore = defineStore("user", {

  state: () => ({
    path: userNav.menu.path,
    mini: [],
    miniLoading: false,
  }),
  actions: {
    async getMini() {

      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(`${this.path}/mini`,
        () => {
          this.miniLoading = true
          this.mini = [];

        },

        res => this.mini = res.data,

        () => this.miniLoading = false, await keycloakService.getHttpStrategy());
      return data;

    },

  }
});

