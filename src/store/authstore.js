import { defineStore } from 'pinia';
import { defineBranchStore } from '@/organisation/branch/BranchStore';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    keycloak: null,
    token: null,
    refreshToken: null,
    idToken: null,
    authenticated: false,
    fullName: null,
    defaultBranch: null,
    otherBranches: [],
  }),
  persist: true,
  actions: {
    setAuthData(data) {
      this.keycloak = data;
      if(!data){
        this.token = data.token || null;
        this.refreshToken = data.refreshToken || null;
        this.idToken = data.idToken || null;
        this.authenticated = data.authenticated || false;
        this.fullName = null;
        return;

      }
      this.token = data.token || null;
      this.refreshToken = data.refreshToken || null;
      this.idToken = data.idToken || null;
      this.authenticated = data.authenticated || false;
      this.fullName =  data.idTokenParsed.given_name && data.idTokenParsed.family_name
      ? `${data.idTokenParsed.given_name} ${data.idTokenParsed.family_name}`
      : data.preferred_username;
      let defaultBranch= data.idTokenParsed.defaultBranch
      if(Array.isArray(defaultBranch)){
        this.defaultBranch = defaultBranch.length>0?defaultBranch[0]: null;
      }else{
        this.defaultBranch = defaultBranch || null;
      }
      this.otherBranches = data.idTokenParsed.otherBranches || [];
      const allBranches =  Array.from(new Set([this.defaultBranch, ...this.otherBranches].filter(b => b !== null)));
      const branchStore = defineBranchStore();
      branchStore.setCurrentUserBranches(allBranches);

      //  branchStore.setCurrentBranch(this.defaultBranch);
    },
  },
});

