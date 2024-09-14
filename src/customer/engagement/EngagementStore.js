import { defineStore } from "pinia";
import engagementNav from "./EngagementNav";
import {defineRootStore} from "@/root/RootStore";
import storeFuncs from "@/utils/storeFuncs";
import engagementCriteria from "./EngagementCriteria";
   export const defineEngagementStore = defineStore("engagement", {

state: () => ({
path: engagementNav.menu.path,
    mini: [],
    miniLoading: false,newEngagements:[],
    newEngagementsLoading: false,
    customerEngagements: [],
    customerEngagementsLoading: false,
    dueEngagements: [],
    dueEngagementsLoading: false,
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

     getNewEngagements() {


           const rootStore = defineRootStore();
            let data = rootStore.doPost(`${this.path}/list`, storeFuncs.getCreatedTodayCriteria(),
            ()=>{
             this.newEngagementsLoading =true
             this.newEngagements = [];

           },

            res=>this.newEngagements = res.data,

            ()=>this.newEngagementsLoading = false);
            return data;

          },

          getCustomerEngagements(ledgerRequest) {


                 const rootStore = defineRootStore();
                  let data = rootStore.doPost(`${this.path}/list`,
                    engagementCriteria.getPeriodicCustomerEngagementCriteria(ledgerRequest),
                  ()=>{
                   this.customerEngagementsLoading =true
                   this.customerEngagements = [];

                 },

                  res=>this.customerEngagements = res.data,

                  ()=>this.customerEngagementsLoading = false);
                  return data;

                },

                getDueEngagements() {

                    const rootStore = defineRootStore();
                        let data = rootStore.doPost(`${this.path}/list`,engagementCriteria.getDueCriteria(),
                        ()=>{
                         this.dueEngagementsLoading =true
                         this.dueEngagements = [];

                       },

                        res=>this.dueEngagements = res.data,

                        ()=>this.dueEngagementsLoading = false);
                        return data;

                      },

}});

