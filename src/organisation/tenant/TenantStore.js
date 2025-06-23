import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import tenantNav from "./TenantNav";

export const defineTenantStore =defineStore ("tenant", {
    state: () => ({
      mini:[],
      miniLoading: false,
      tenant: null,
      firstTenant: null,
      isFirstTenantLoading: false,
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

        getDefaultBranch(){
          let branches =this.getCurrentTenantBranches;
          return branches.length>0?branches[0]:null;
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
        if (this.firstTenant) {
          return this.firstTenant;
        }
  
        this.isFirstTenantLoading = true;
        this.tenantError = null;
  
        try {
          const host = window.location.host;
          const response = await httpMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`);
          // const response = await withTimeout(
          //   httpMethods.getNoHeaders(`${tenantNav.menu.path}/mini/host/${host}`),
          //   10000 // 10-second timeout
          // );
          
          const res = response.data;
  
          if (!res) {
            console.warn(`No tenant found for host: ${host}`);
            this.firstTenant = null;
            return null;
          }
  
          this.firstTenant = res;
          return res;
        } catch (e) {
          console.error(`Failed to fetch tenant for host ${host}:`, e);
          this.firstTenant = null;
          this.tenantError = e.message;
          throw e;
        } finally {
          this.isFirstTenantLoading = false;
        }
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

     clear() {
        this.tenant = null;
        this.firstTenant = null;
        this.currentTenantBranches = [];
        this.mini = [];
        this.miniLoading = false;
        this.isFirstTenantLoading = false;
      
     },

      getBranchName(branchId) {
        if(!branchId) return '';
          let branches = this.getCurrentTenantBranches;
          let branch = branches.find(b => b.id === branchId.trim());
          console.log("Branch ID:", branchId, "Found Branch:", branch);
          return branch ? branch.branchName : 'UnKnown Branch';
        }


 }



})
