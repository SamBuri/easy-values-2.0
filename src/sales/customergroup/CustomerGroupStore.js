import { defineStore } from "pinia";
import customerGroupNav from "./CustomerGroupNav";
import { defineRootStore } from "saburi-vue-utils";
   export const defineCustomerGroupStore = defineStore("customerGroup", {
 
state: () => ({
path: customerGroupNav.menu.path,
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

