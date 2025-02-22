import { defineStore } from "pinia";
import creditorGroupNav from "./CreditorGroupNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineCreditorGroupStore = defineStore("creditorGroup", {
 
state: () => ({
path: creditorGroupNav.menu.path,
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

