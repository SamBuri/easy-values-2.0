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

    getPath(groupId){
      return `${this.path}/${groupId}/role-mappings/realm`;
    },

    async assingnPermissions(groupId, permissions) {

       console.log("Permissions to assign", permissions);
      if(!permissions.length){
        console.log("No permissions to assign");
        return;
      }
      const rootStore = defineRootStore();
      
      return rootStore.post({
        path: this.getPath(groupId),
        body: permissions,
        httpStrategy: await keycloakService.getHttpStrategy()
      }
      );
    },

     async unAssingnPermissions(groupId, permissions, show ) {
       console.log("Permissions to un assign", permissions);
      if(!permissions.length){
        console.log("No permissions to unassign");
        return;
      }
      const rootStore = defineRootStore();
        return rootStore.delete({ path:this.getPath(groupId), body: permissions, httpStrategy:await keycloakService.getHttpStrategy(), show });
     
    }

  }
});



