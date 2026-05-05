import { defineStore } from "pinia";
import roleNav from "./RoleNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineRoleStore = defineStore("role", {

state: () => ({
path: roleNav.menu.path,
    mini: [],
    miniLoading: false,
  }),
actions: {
 async getMini() {

 if(this.mini.length>0) return this.mini;
      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini`,
       ()=>{
        this.miniLoading =true
        this.mini = [];

      },

       res=>this.mini = res.data,

       ()=>this.miniLoading = false);
       return data;

     },

}});
