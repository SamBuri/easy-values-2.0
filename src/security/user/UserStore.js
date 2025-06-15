import { defineStore } from "pinia";
import userNav from "./UserNav";
import { defineRootStore } from "@/root/RootStore";
import keycloakService from "@/keycloak/keycloakService";
export const defineUserStore = defineStore("user", {

  state: () => ({
    path: userNav.menu.path,
    mini: [],
    miniLoading: false,

    userGroups: [],
    userGroupsLoading: false,
  }),
  actions: {
    async getMini() {

      // if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(this.path,
        () => {
          this.miniLoading = true
          this.mini = [];

        },

        res => this.mini = res.data,

        () => this.miniLoading = false, await keycloakService.getHttpStrategy());
      return data;

    },

    getPath(userId, groupId) {
      return `${this.path}/${userId}/groups/${groupId}`;
    },


    async getUserGroups(id) {

      const rootStore = defineRootStore();
      let data = rootStore.fetch(`${this.path}/${id}/groups`,
        () => {
          this.userGroupsLoading = true
          this.userGroups = [];

        },

        res => this.userGroups = res.data,

        () => this.userGroupsLoading = false, await keycloakService.getHttpStrategy());
      console.log("User Groups", data);
      return data;

    },


    async assignGroups(userId, groupId) {

      console.log("To assign Group Id", groupId);

      const rootStore = defineRootStore();

      return rootStore.put({
        path: this.getPath(userId, groupId),
        httpStrategy: await keycloakService.getHttpStrategy()
      }
      );
    },

    async unAssignGroups(userId, groupId, show) {
      console.log("To Un assign", groupId);
      const rootStore = defineRootStore();
      return rootStore.delete({ path: this.getPath(userId,groupId), httpStrategy: await keycloakService.getHttpStrategy(), show });

    }

  }
});

