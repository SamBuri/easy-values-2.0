import axios from "axios";
import constants from "./constants";
import { useAuthStore } from "@/store/authstore";
import { defineTenantStore } from "@/organisation/tenant/TenantStore";
import { defineBranchStore } from "@/organisation/branch/BranchStore";
import keycloakService from "@/keycloak/keycloakService";

const config = window.__APP_CONFIG__ || {};

console.log("Environment Variables:", import.meta.env);
var baseURL = import.meta.env.VITE_API_URL;
// baseURL= window.appConfig?.API_URL||baseURL
// baseURL="https://api.capidattex.net/"
console.log("API URL", baseURL)
var apiUrl = baseURL ||"http://localhost:8089/";
console.log("The API Gateway 1", apiUrl);

const api = {
    createDefaultHeaders(){
      const authStore = useAuthStore();
      const tenantStore = defineTenantStore();
      const branchStore = defineBranchStore();
      let token = authStore.token;
      let tenant = tenantStore.firstTenant;
     
      
      let currentBranch = branchStore.currentBranch;
  
      
  
      let keycloak =  authStore.keycloak;
      console.log("Keycloak", keycloak)
      // if(!keycloak) window.location.reload;
  
      // console.log("Keycloak at the point of calling the api", keycloak);
      // if(keycloak && keycloak.updateToken)keycloak.updateToken(30)
  
      // if(!keycloak) window.location.reload;
      // if(keycloak.isTokenExpired(30)) keycloak.updateToken(-1);
    return {
        Username: localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
        Authorization: `Bearer ${token}`,
        "Tenant-Id": tenant.id,
        "Branch-Id": currentBranch.id,
        Branch: currentBranch.branchName,
      };
    },

    createAPI(httpStrategy=null) {
      console.log("HTTP Strategy", httpStrategy)
      if(!httpStrategy){
        let headers = this.createDefaultHeaders();
      
        let ax= axios.create({
          baseURL: apiUrl,
         headers: headers
        });
        
        return ax;
      }
     
      let newUrl= apiUrl;
      let preBaseUrl = httpStrategy.preBaseUrl;
     
      let strategyUrl = httpStrategy.strategyUrl;
      if(strategyUrl) newUrl = strategyUrl;
      else if(preBaseUrl) newUrl = apiUrl+preBaseUrl
      

      console.log("API URL ", newUrl)

      return axios.create({
        baseURL: newUrl,
        
        headers: httpStrategy.headers||undefined
      });
   
    //  if(!headers) headers=this.createDefaultHeaders();
    // let api = axios.create({
    //   baseURL: apiUrl,
    //  headers: headers
    // });

    // tenant.company.devName,

    // api.interceptors.request.use(config => ({
    //   ...config,

    //   headers: {
    //     ...config.headers,
    //     "Username": localStorage.getItem(constants.LOCAL_STORAGE_KEYS.USERNAME),
    //     //  "Authorization": `Bearer ${localStorage.getItem(constants.LOCAL_STORAGE_KEYS.VUE_TOKEN)}`
    //     "Authorization": `Bearer ${store.state.security.user.keycloak.token}`

    //   }

    // }), null, { synchronous: true })
    // return api;
  },

  createAPINoHeaders() {
    let api = axios.create({
      baseURL: baseURL,
    });
    console.log("API URL NO headers URL ", baseURL);
    return api;
  },
};

// api.defaults.timeout = 120000;

export default api;
