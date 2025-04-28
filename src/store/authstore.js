import { defineStore } from 'pinia';

export const useAuthStore = defineStore('auth', {
  state: () => ({
    keycloak: null,
    token: null,
    refreshToken: null,
    idToken: null,
    authenticated: false,
    fullName: null,
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
    },
  },
});


// import { defineStore } from "pinia";
// import { useRouter } from "vue-router";
// import { defineTenantStore } from "@/organisation/tenant/TenantStore";
// import { defineBranchStore } from "@/organisation/branch/BranchStore";


// export const useAuthStore = defineStore("auth", {
//   // id: "auth",
//   state: () => {
//     return {
//       keycloak: null,
//       authenticated: false,
//       user: {
//         username: null,
//         token: null,
//         refToken: null,
//         fullName: null,
//         authTime: null,
//         expiry: null,
//       },
//     };
//   },
//   persist: true,
//   getters: {

//     hasRoles(role) {
//       if(!this.keycloak) return false;
//       return this.keycloak.hasRealmRole(role);


//     }

//   },

//   actions: {
//     setAuthData(data) {
//       try {
//         this.keycloak = _.cloneDeep(data);
//         this.authenticated = data.authenticated;

//         // Reset user data if not authenticated (e.g., after logout)
//         if (!data.authenticated || !data.idTokenParsed) {
//           this.user = {
//             username: null,
//             token: null,
//             refToken: null,
//             fullName: null,
//             authTime: null,
//             expiry: null,
//           };
//           return;
//         }

//         // Populate user data if authenticated
//         this.user.username = data.idTokenParsed.preferred_username || null;
//         this.user.token = data.token || null;
//         this.user.refToken = data.refreshToken || null;
        // this.user.fullName = data.idTokenParsed.given_name && data.idTokenParsed.family_name
        //   ? `${data.idTokenParsed.given_name} ${data.idTokenParsed.family_name}`
        //   : null;
//         this.user.authTime = data.idTokenParsed.auth_time || null;
//         this.user.expiry = data.idTokenParsed.exp || null;
//       } catch (e) {
//         console.error("Failed to set auth data", e);
//       }
//     },



//     // Initialize Keycloak OAuth  
//     async initOauth(keycloak, clearData = true) {
//       if (clearData) {
//         await this.clearUserData();
//       }

//       this.setAuthData(keycloak);
//     },
//     // Logout user
//     async logout() {
//       // const router = useRouter();
//       try {

//         // useRouter().push({ name: "load" });
//         if(!this.keycloak) return;
//         if(this)
//          await this.keycloak?.logout();
//           // this.clearUserData();
//           // 
        

//       } catch (error) {
        
//         console.error(error);
//         // useRouter().push({ name: "load" });
//       }
//     },

//     async  refreshTokenIfNeeded() {
//       try {
       
//         // updateToken(30) will refresh the token if it expires within 30 seconds
//         const refreshed = await this.keycloak?.updateToken(30);
//         console.log(refreshed ? 'Token was refreshed' : 'Token is still valid');
//       } catch (error) {
//         console.error('Failed to refresh token:', error);
//         // Handle token refresh failure (e.g., redirect to login)
//         // useRouter().push({ name: "load" }); // Log out and redirect to Keycloak login
//         // Alternatively, redirect to a custom login route:
//         // window.location.href = '/login';
//         // this.logout()
//       }
//     },
    
//     // Clear user's store data
//     async clearUserData() {
//       this.authenticated = false;
//       this.user = {};
//       this.keycloak = null;
//       // defineTenantStore().clear();
//       // defineBranchStore().clear();
//     },

//     register() {
//       if (this.keycloak) {
//         // const registrationUrl = `${this.keycloak.createRegisterUrl({
//         //   redirectUri: "http://localhost:8080",
//         // })}`;

//         const registrationUrl = `${this.keycloak.createRegisterUrl()}`;
//         console.log("Registration URL:", registrationUrl);
//         window.location.href = "http://ev.test:8100/admin/master/console/#/saburi-realm/users/add-user";
//       } else {
//         console.error("Keycloak is not initialized");
//       }
//     },
//   },
// });
