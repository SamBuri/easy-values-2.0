import { defineStore } from "pinia";
import loanBillNav from "./LoanBillNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineLoanBillStore = defineStore("loanBill", {
 
state: () => ({
path: loanBillNav.menu.path,
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

