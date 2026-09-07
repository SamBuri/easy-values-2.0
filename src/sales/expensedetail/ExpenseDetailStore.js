import { defineStore } from "pinia";
import expenseDetailNav from "./ExpenseDetailNav";
import { defineRootStore } from "saburi-vue-utils";
   export const defineExpenseDetailStore = defineStore("expenseDetail", {
 
state: () => ({
path: expenseDetailNav.menu.path,
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

