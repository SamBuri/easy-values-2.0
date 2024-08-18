import { defineStore } from "pinia";
import journalDetailsNav from "./JournalDetailsNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineJournalDetailsStore = defineStore("journalDetails", {
 
state: () => ({
path: journalDetailsNav.menu.path,
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

