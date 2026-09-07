import { defineStore } from "pinia";
import itemNav from "./ItemNav";
import { defineRootStore } from "saburi-vue-utils";
export const defineItemStore = defineStore("item", {
  state: () => ({
    path: itemNav.menu.path,
    mini: [],
    miniLoading: false,
    item: null,
    itemLoading: false,
    billItems: [],
    billItemsLoading: false,
    expensableItems: [],
    expensableItemsLoading: false,
  }),
  actions: {
    getMini() {
      if (this.mini.length > 0) return this.mini;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini`,
        () => {
          this.miniLoading = true;
          this.mini = [];
        },

        (res) => (this.mini = res.data),

        () => (this.miniLoading = false)
      );
      return data;
    },

    getBillableItems() {

      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/billables`,
       ()=>{
        this.billableItemsLoading =true
        this.billableItems = [];
 
      },
 
       (res)=>this.billableItems = res.data,
 
       ()=>this.billableItemsLoading = false)
       console.log("Billables Working ", data);
       return data;
 
     },
 
     getExpensableItems() {
 
      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/mini/expensables`,
       ()=>{
        this.expensableItemsLoading =true
        this.expensableItems = [];
 
      },
 
       (res)=>this.expensableItems = res.data,
 
       ()=>this.expensableItemsLoading = false)
       console.log("ExpensableWorking Working ", data);
       return data;
 
     },

    getItem(id) {
      if(!id) return null;
      const rootStore = defineRootStore();
      let data = rootStore.fetch(
        `${this.path}/mini/${id}`,
        () => {
          this.itemLoading = true;
          this.item = null;
        },

        (res) => (this.item = res.data),

        () => (this.itemLoading = false)
      );
      return data;
    },

  },
});
