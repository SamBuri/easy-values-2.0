import { defineStore } from "pinia";
import itemPriceGroupNav from "./ItemPriceGroupNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineItemPriceGroupStore = defineStore("itemPriceGroup", {
 
state: () => ({
path: itemPriceGroupNav.menu.path,
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

