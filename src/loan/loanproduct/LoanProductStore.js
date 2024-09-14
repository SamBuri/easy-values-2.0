import { defineStore } from "pinia";
import loanProductNav from "./LoanProductNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineLoanProductStore = defineStore("loanProduct", {
 
state: () => ({
path: loanProductNav.menu.path,
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

