import { defineStore } from "pinia";

import { defineRootStore } from "saburi-vue-utils";
   export const defineSharesStore = defineStore("shares", {

state: () => ({
path: "shares-enums",
shareActions: [],
shareActionsLoading: false,
  }),
actions: {
  getShareActions() {

 if(this.shareActions.length>0) return this.shareActions;
      const rootStore = defineRootStore();
       let data = rootStore.fetch(`${this.path}/share-actions`,
       ()=>{
        this.shareActionsLoading =true
        this.shareActions = [];

      },

       res=>this.shareActions = res.data,

       ()=>this.shareActionsLoading = false);
       return data;

     },

}});

