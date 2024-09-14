import { defineStore } from "pinia";
import countryNav from "./CountryNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineCountryStore = defineStore("country", {
 
state: () => ({
path: countryNav.menu.path,
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

