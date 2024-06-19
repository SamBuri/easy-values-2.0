import { defineStore } from "pinia";
// import keycloakService from "@/keycloak/Keycloak";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import Keycloak from 'keycloak-js';
export const useAuthStore = defineStore("auth", {
  // id: "auth",
  state: () => {
    return {
      keycloak: null,
      authenticated: false,
      user: {},
    };
  },
  persist: true,
  getters: {

    hasRoles(role){
      return this.keycloak.hasRealmRole(role);


    }
  //   user(){
  //     if(!this.keycloak) return {};
  //     if(!this.keycloak.idTokenParsed) return {};
  //     return {authenticated:  this.keycloak.authenticated,
  //    username: this.keycloak.idTokenParsed.preferred_username,
  //     token:  this.keycloak.token,
  //     refToken:  this.keycloak.refreshToken,
  //     fullName:  `${this.keycloak.idTokenParsed.given_name} ${this.keycloak.idTokenParsed.family_name}`,
  //     authTime:  this.keycloak.idTokenParsed.auth_time,
  //     expiry:  this.keycloak.idTokenParsed.exp,
  //   }
  // },

  //  authenticated(){
  //   if(!this.keycloak) return false;
  //   return this.keycloak.authenticated;
  //  }
  },

  actions: {
    setAuthData(data) {
      this.keycloak = data;
      this.authenticated = data.authenticated;
      this.user.username = data.idTokenParsed.preferred_username;
      this.user.token = data.token;
      this.user.refToken = data.refreshToken;
      this.user.fullName = `${data.idTokenParsed.given_name} ${data.idTokenParsed.family_name}`;
      this.user.authTime = data.idTokenParsed.auth_time;
      this.user.expiry = data.idTokenParsed.exp;
    },

    // async createKeyCloak(tenant) {
    //   const initOptions = {
    //     url: tenant.authUrl,
    //     realm: tenant.realm,
    //     clientId: tenant.clientId,
    //     onLoad: "login-required",
    //   };

    //   this.keycloak = new Keycloak(initOptions);

    //   this.keycloak
    //     .init({ onLoad: "login-required" })
    //     .then((auth) => {
    //       if (!auth) {
    //         window.location.reload();
    //       } else {
    //         console.log("Authenticated Property", auth);
    //         console.log("Authenticated");
    //         this.setAuthData(this.keycloak);
    //         // authstore.authenticated = auth;
    //       }
    //     })
    //     .catch((error) => {
    //       console.log("Error", error);
    //     });
    // },

    // async initKeyCloak() {
    //   const tenantStore = defineTenantStore();
    //   var tenant = tenantStore.firstTenant;
    //   console.log("Tenant", tenant);
    //   if (!tenant) {
    //     let host = window.location.host;
    //     console.log("Host: ", host);
    //     tenant = await this.getFirstTenant(host)
    //       .then((response) => {
    //         let res = response.data;
    //         tenantStore.setFirstTenant(res);

    //         if (res) console.log("No tenant found for the host: ", host);
    //         return res;
    //       })
    //       .catch((e) => {
    //         console.log("Error fetching tenant", e);
    //         return null;
    //       });
    //     console.log("Loading Client: ", tenant);
    //   }

    //   this.createKeyCloak(tenant);
    // },

    // async getFirstTenant(host) {
    //   return httmMethods.getNoHeaders(
    //     `${tenantNav.menu.path}/mini/host/${host}`
    //   );
    // },

    // Initialize Keycloak OAuth
    async initOauth(keycloak, clearData = true) {
      if (clearData) {
        await this.clearUserData();
      }

      this.setAuthData(keycloak);
    },
    // Logout user
    async logout() {
      try {

        if (this.keycloak.logout) {
          this.keycloak.logout();
          await this.clearUserData();
        }

      } catch (error) {
        console.error(error);
      }
    },
    // Refresh user's token
    // async refreshUserToken() {
    //   try {
    //     // if(!this.keycloak)(await this.initKeyCloak());
    //     // if(!this.keycloak.updateToken)(await this.initKeyCloak());
    //     this.keycloak = await this.keycloak.updateToken(480);
    //     this.setAuthData(this.keycloak);
    //   } catch (error) {
    //     console.error(error);
    //   }


    // },
    // Clear user's store data
    async clearUserData() {
      this.authenticated = false;
      this.user = {};
      this.keycloak = null;
    },
  },
});
