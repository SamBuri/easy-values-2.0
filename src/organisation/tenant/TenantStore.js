import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import tenantNav from "./TenantNav";

export const defineTenantStore =defineStore ("tenant", {
    state: () => ({
      mini:[],
      miniLoading: false,
      tenant: null,
      firstTenant: null,
      currentTenantBranches: [],
    }),
    persist: true,
    getters: {

      getCurrentCompany(){
         if(this.firstTenant) return this.firstTenant.company;
         return {};
      },
        getCurrentTenantBranches(){
          if(!this.firstTenant) return [];
          return this.getCurrentCompany.branches;
        },

        hasBraches() {
         return this.getCurrentTenantBranches.length>0;
        },


    },

    actions: {

        getMini() {
          if (this.mini.length>0) { return }
           this.miniLoading= true;
          httpMethods.get(`${tenantNav.menu.path}/mini`)
              .then(response => {
                  this.mini= response.data;
                this.miniLoading= false;
              }).catch(e => {
                  this.mini= [];
                  console.log(e);
                  this.miniLoading= false;
              })

      },

      getTenant() {

          if (this.tenant) { return }
          let host = window.host;
          httpMethods.get(`${tenantNav.menu.path}/mini/host/${host}`)
              .then(response => {
                  this.tenant = response.data

              }).catch(e => {
                 this.tenant=null;
                  console.log(e);

              })

      },

      setFirstTenant(firstTenant){
        this.firstTenant=firstTenant;
      },

      async getFirstTenant() {
          if (this.firstTenant) { return }
          let host =window.location.host;

          httpMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`)
              .then(response => {
                  let res = response.data;
                  this.firstTenant = res
                 if(!res) console.log("No tenant found for the host: ",host);

              }).catch(e => {
                 this.firstTenant=null;
                  console.log(e);

              })

      },

      async getFirstTenantWithCallBack(callback) {
        if (this.firstTenant) { return }
        let host =window.location.host;

        httpMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`)
            .then(response => {
                let res = response.data;
                this.firstTenant = res
                callback(res);
               if(!res) console.log("No tenant found for the host: ",host);

            }).catch(e => {
               this.firstTenant=null;
                console.log(e);

            })

    },


 }



})
