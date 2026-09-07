import { defineStore } from "pinia";
import { defineRootStore, fetchAndPopulate } from "saburi-vue-utils";
import branchNav from './BranchNav';

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
    async setCurrentUserBranches(branches, defaultBranchId = null) {
      console.log("Setting Current User Branches: ", branches, "defaultBranchId:", defaultBranchId);
      if (!branches || branches.length === 0) {
        this.currentUserBranches = [];
        this.currentBranch = null;
        this.currentUserCompany = null;
        this.branchName = 'No Branch';
        return [];
      }

      this.currentUserBranchesLoading = true;
      try {
        const rootStore = defineRootStore();
        const res = await rootStore.postNoHeaders(`${this.path}/mini/ids`, branches);
        console.log("Branch Ids Response: ", res);
        const branchList = Array.isArray(res) ? res : (res?.entity || res?.data || []);
        this.currentUserBranches = Array.isArray(branchList) ? branchList : [];

        if (this.currentUserBranches.length > 0) {
          let matched = null;
          if (defaultBranchId) {
            matched = this.currentUserBranches.find(b => String(b.id) === String(defaultBranchId));
          }
          if (!matched && this.currentBranch) {
            matched = this.currentUserBranches.find(b => String(b.id) === String(this.currentBranch.id));
          }
          this.setCurrentBranch(matched || this.currentUserBranches[0]);
        } else {
          this.currentBranch = null;
          this.currentUserCompany = null;
          this.branchName = 'No Branch';
        }
        return this.currentUserBranches;
      } catch (error) {
        console.error("Error fetching branches by ids: ", error);
        return [];
      } finally {
        this.currentUserBranchesLoading = false;
      }
    },

    getUserBranchName(branchId) {
      if (!branchId) return '';
      let branches = this.currentUserBranches;
      let branch = branches?.find(b => String(b.id) === String(branchId).trim());
      console.log("Branch ID:", branchId, "Found Branch:", branch);
      return branch ? branch.branchName : 'Unknown Branch';
    },

    setCurrentBranch(currentBranch) {
      if (!currentBranch) {
        this.currentBranch = null;
        this.currentUserCompany = null;
        this.branchName = 'No Branch';
        return;
      }
      const orgType = currentBranch.organisationType || currentBranch.company?.organisationType || null;
      this.currentBranch = {
        ...currentBranch,
        organisationType: orgType,
        organisationId: currentBranch.company?.id || currentBranch.organisationId || null,
        organisationName: currentBranch.company?.companyName || currentBranch.organisationName || null,
      };
      this.currentUserCompany = currentBranch.company || null;
      this.branchName = currentBranch.branchName || 'No Branch';
    },

    async getMini() {
      return await fetchAndPopulate(this, 'mini', `${this.path}/mini`);
    },

    async getBranchByCompanyId(companyId) {
      return await fetchAndPopulate(this, 'branchByCompanyId', `${this.path}/companyid/${companyId}`);
    },

    clear() {
      this.mini = [];
      this.miniLoading = false;
      this.branchByCompanyId = [];
      this.branchByCompanyIdLoading = false;
      this.currentBranch = null;
      this.currentUserBranches = [];
      this.currentUserCompany = null;
      this.branchName = 'No Branch';
    },
  }
})
