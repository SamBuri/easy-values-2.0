import { defineStore } from "pinia";
import itemNav from "./ItemNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineItemStore = defineStore("item", {
 
state: () => ({
path: itemNav.menu.path,
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

