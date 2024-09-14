import { defineStore } from "pinia";
import accountsGroupNav from "./AccountsGroupNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineAccountsGroupStore = defineStore("accountsGroup", {
 
state: () => ({
path: accountsGroupNav.menu.path,
    mini: [],
    miniLoading: false,
  }),
actions: {
 getMini() {

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

