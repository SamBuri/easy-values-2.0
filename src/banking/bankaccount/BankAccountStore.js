import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import bankAccountNav from "./BankAccountNav";
import {defineRootStore} from "@/root/RootStore"
   export const defineBankAccountStore = defineStore("bankAccount", {

state: () => ({
  path: bankAccountNav.menu.path,
    mini: [],
    miniLoading: false,
    bankAccountsByType: [],
    bankAccountsByTypeLoading:false,
    fromBankAccountsByType: [],
    fromBankAccountsByTypeLoading:false,
    miniBanAccount: null,
    miniBanAccountLoading:false,

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

     (res)=>this.mini = res.data,

     ()=>this.miniLoading = false, false)
     return data;

   },

   getMiniBankAccount(id) {
    if(!id) return null;

    const rootStore = defineRootStore();
     let data = rootStore.fetch(`${this.path}/mini/${id}`,
     ()=>{

      this.miniBankAccountLoading =true
      this.miniBankAccount = null;

    },

     (res)=>this.miniBankAccount = res.data,

     ()=>this.miniBankAccountLoading = false)
     return data;

   },

   getBankAccountsByType(bankAccountType) {

    const rootStore = defineRootStore();
     let data = rootStore.fetch(`${this.path}/bankaccounttype/${bankAccountType}`,
     ()=>{

      this.bankAccountsByTypeLoading =true
      this.bankAccountsByType = [];

    },

     (res)=>this.bankAccountsByType = res.data,

     ()=>this.bankAccountsByTypeLoading = false, false)
     return data;

   },

   getFromBankAccountsByType() {

    const rootStore = defineRootStore();
     let data = rootStore.fetch(`${this.path}/bankaccounttype/${bankAccountType}`,
     ()=>{

      this.fromBankAccountsByTypeLoading =true
      this.fromBankAccountsByType = [];

    },

     (res)=>this.fromBankAccountsByType = res.data,

     ()=>this.fromBankAccountsByTypeLoading = false, false)
     return data;

   },

}});

