import { defineStore } from "pinia";
import httpMethods from "@/utils/HttpMethods";
import branchNav from './BranchNav';
// import { defineTenantStore } from "../tenant/TenantStore";
// import { useAuthStore } from "@/store/authstore";
import { defineRootStore } from "@/root/RootStore";
export const defineBranchStore = defineStore("branch", {
  state: () => ({
    path: branchNav.menu.path,
    mini: [],
    miniLoading: false,
    branchByCompanyId: [],
    branchByCompanyIdLoading: false,
    currentBranch: null,
    branchName: 'No Branch',
    currentUserBranches: [],
    currentUserBranchesLoading: false,
    currentUserCompany: null,
  }),
  persist: true,
  getters: {
    getBranchName() {
      if (!this.currentBranch) return 'No Branch';
      return this.currentBranch.branchName;
    },


    loadCurrentBranchVue() {
      // let tenantStore = defineTenantStore();
      // let authStore = useAuthStore();
      // let currentBranches = tenantStore.getCurrentTenantBranches.filter(branch => branch.id === authStore.defaultBranch)
      // this.currentBranch = currentBranches.length > 0 ? currentBranches[0] : null
      // if (this.currentBranch) return false;
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

    setCurrentUserBranches(branches) {

        console.log("Setting Current User Branches: ", branches);

         httpMethods.postNoHeaders(`${this.path}/mini/ids`, branches)
          .then(res => {
            console.log("Branch Ids Response: ", res);

            this.currentUserBranches = res.data;

          if (this.currentUserBranches.length > 0) {
            this.setCurrentBranch(this.currentUserBranches[0])
          }
          else this.currentUserCompany = null;

          }).catch(error => {
            console.log("Error fetching branches by ids: ", error);
          }).finally(() => {
            this.currentUserBranchesLoading = false;
          });

    },

    getUserBranchName(branchId) {
      if(!branchId) return '';
      let branches = this.currentUserBranches;
      let branch = branches?.find(b => b.id === branchId.trim());
      console.log("Branch ID:", branchId, "Found Branch:", branch);
      return branch ? branch.branchName : 'UnKnown Branch';
    },

    setCurrentBranch(currentBranch) {
      this.currentBranch = currentBranch;
      this.currentUserCompany = this.currentBranch?.company;
    },



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

      this.branchByCompanyIdLoading = true
      httpMethods.get(`${branchNav.menu.path}/companyid/${companyId}`)
        .then(response => {
          this.branchByCompanyId = response.data;
          this.branchByCompanyIdLoading = false;
          console.log("Branch By Company Id: ", this.branchByCompanyId);
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
