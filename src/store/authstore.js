import { defineStore } from 'pinia';

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
        token = data.token || null;
        refreshToken = data.refreshToken || null;
        idToken = data.idToken || null;
        authenticated = data.authenticated || false;
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
    },
  },
});

