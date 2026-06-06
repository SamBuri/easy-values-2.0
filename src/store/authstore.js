import { defineStore } from 'pinia';
import { defineBranchStore } from '@/organisation/branch/BranchStore';

function decodeJwt(token) {
  try {
    if (!token) return null;
    const payloadBase64 = token.split('.')[1];
    if (!payloadBase64) return null;
    let base64 = payloadBase64.replace(/-/g, '+').replace(/_/g, '/');
    while (base64.length % 4) {
      base64 += '=';
    }
    return JSON.parse(atob(base64));
  } catch (e) {
    console.error('Failed to decode JWT token', e);
    return null;
  }
}

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
    user: null,
  }),
  persist: true,
  actions: {
    setAuthData(data) {
      this.keycloak = data;
      if(!data){
        this.token = null;
        this.refreshToken = null;
        this.idToken = null;
        this.authenticated = false;
        this.fullName = null;
        this.user = null;
        return;
      }
      this.token = data.token || null;
      this.refreshToken = data.refreshToken || null;
      this.idToken = data.idToken || null;
      this.authenticated = data.authenticated || false;
      this.fullName =  data.idTokenParsed.given_name && data.idTokenParsed.family_name
      ? `${data.idTokenParsed.given_name} ${data.idTokenParsed.family_name}`
      : data.preferred_username;
      this.user = {
        fullName: this.fullName,
        username: data.idTokenParsed.preferred_username || data.preferred_username || '',
        email: data.idTokenParsed.email || '',
        roles: data.realmAccess?.roles || data.tokenParsed?.realm_access?.roles || []
      };
      let defaultBranch= data.idTokenParsed.default_branch || data.idTokenParsed.defaultBranch;
      if(Array.isArray(defaultBranch)){
        this.defaultBranch = defaultBranch.length>0?defaultBranch[0]: null;
      }else{
        this.defaultBranch = defaultBranch || null;
      }
      this.otherBranches = data.idTokenParsed.other_branches || data.idTokenParsed.otherBranches || [];
      const allBranches =  Array.from(new Set([this.defaultBranch, ...this.otherBranches].filter(b => b !== null)));
      const branchStore = defineBranchStore();
      branchStore.setCurrentUserBranches(allBranches);

      //  branchStore.setCurrentBranch(this.defaultBranch);
    },
    logout() {
      if (this.keycloak && typeof this.keycloak.logout === 'function') {
        this.keycloak.logout();
      } else {
        this.authenticated = false;
        this.user = null;
        this.token = null;
        this.fullName = null;
      }
    },
    hasRole(role) {
      if (this.keycloak && typeof this.keycloak.hasRealmRole === 'function') {
        return this.keycloak.hasRealmRole(role);
      }
      if (this.keycloak && this.keycloak.realmAccess && Array.isArray(this.keycloak.realmAccess.roles)) {
        if (this.keycloak.realmAccess.roles.includes(role)) {
          return true;
        }
      }
      if (this.keycloak && this.keycloak.tokenParsed && this.keycloak.tokenParsed.realm_access && Array.isArray(this.keycloak.tokenParsed.realm_access.roles)) {
        if (this.keycloak.tokenParsed.realm_access.roles.includes(role)) {
          return true;
        }
      }
      const decoded = decodeJwt(this.token);
      if (decoded && decoded.realm_access && Array.isArray(decoded.realm_access.roles)) {
        return decoded.realm_access.roles.includes(role);
      }
      return false;
    },
    hasRealmRole(role) {
      return this.hasRole(role);
    }
  },
});


