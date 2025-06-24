import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import branchNav from './BranchNav';
import { defineTenantStore } from "../tenant/TenantStore";
import { useAuthStore } from "@/store/authstore";
export const defineBranchStore = defineStore("branch", {
  state: () => ({
    mini: [],
    miniLoading: false,
    branchByCompanyId: [],
    branchByCompanyIdLoading: false,
    currentBranch: null,
    branchName: 'No Branch',
  }),
  persist: true,
  getters: {
    getBranchName() {
      if (!this.currentBranch) return 'No Branch';
      return this.currentBranch.branchName;
    },

    getCurrentUserBranches(){
       let tenantStore = defineTenantStore();
      let tenantBranches = tenantStore.getCurrentTenantBranches;
       let authStore = useAuthStore();
      this.mini= tenantBranches.filter(branch => authStore.otherBranches.includes(branch.id)||branch.id===authStore.defaultBranch)||[]
      return this.mini;

    },
    loadCurrentBranchVue() {
      let tenantStore = defineTenantStore();
      let authStore = useAuthStore();
      let currentBranches =tenantStore.getCurrentTenantBranches.filter(branch=>branch.id===authStore.defaultBranch)
      this.currentBranch=currentBranches.length>0 ?currentBranches[0]:null
      if (this.currentBranch) return false;
      // return tenantStore.hasBraches;
      return false;
    },

    getCurrentBranchCriterion() {
      if (!this.currentBranch) return null;
      return {
        operator: "AND",
        column: { title: "Branch", key: "branch" },
        operationObj: { text: "Equal", value: "EQUAL" },
        key: 'branch',
        operation: 'EQUAL',
        value: this.currentBranch.branchName,
        value2: "",

      }
    },
  },

  actions: {

    setCurrentBranch(currentBranch) {
      this.currentBranch = currentBranch;
    },


    // isBranchSet() {
    //   if (this.currentBranch) {
    //     return true
    //   }
    //   else { return !this.hasBraches }
    // },

    getMini() {
      // if (this.mini.length > 0) { return }
      // this.miniLoading = true;
      // httpMethods.get(`${branchNav.menu.path}/mini`)
      //   .then(response => {
      //     this.mini = response.data;
      //     this.miniLoading = false;
      //   }).catch(e => {
      //     this.mini = [];
      //     console.log(e);
      //     this.miniLoading = false;
      //   })

      return this.getCurrentUserBranches;

    },

    getBranchByCompanyId(companyId) {
      if (this.mini) { return }
      this.branchByCompanyIdLoading = true
      httpMethods.get(`${branchNav.menu.path}/companyId/${companyId}`)
        .then(response => {
          this.branchByCompanyId = response.data;
          this.branchByCompanyIdLoading = false;
        }).catch(e => {
          this.branchByCompanyId = [];
          console.log(e);
          this.branchByCompanyIdLoading = false;
        })

    },

    clear() {
      this.mini = [];
      this.miniLoading = false;
      this.branchByCompanyId = [];
      this.branchByCompanyIdLoading = false;
      this.currentBranch = null;
    },




  }



})