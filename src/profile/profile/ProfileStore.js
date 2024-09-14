import { defineStore } from "pinia";
import profileNav from "./ProfileNav";
import {defineRootStore} from "@/root/RootStore";
   export const defineProfileStore = defineStore("profile", {

state: () => ({
path: profileNav.menu.path,
    mini: [],
    miniLoading: false,
    profile: null,
    profileLoading: false,
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

    getProfile(id) {

      if(!id) return null;
           const rootStore = defineRootStore();
            let data = rootStore.fetch(`${this.path}/mini/${id}`,
            ()=>{
             this.profileLoading =true
             this.profile = null;

           },

            res=>this.profile = res.data,

            ()=>this.profileLoading = false);
            return data;

          },

}});

